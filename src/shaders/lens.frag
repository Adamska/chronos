uniform sampler2D uTravel;
uniform sampler2D uKnown;
uniform float uMode;
uniform float uOpacity;
uniform float uTime;

varying vec3 vObjectNormal;
varying vec3 vWorldNormal;
varying vec3 vWorldPosition;

#define PI 3.141592653589793
#define LOG_MAX 6.594413

vec3 travelRamp(float days) {
  vec3 near = vec3(0.98, 0.78, 0.38);
  vec3 month = vec3(0.86, 0.48, 0.26);
  vec3 season = vec3(0.37, 0.70, 0.66);
  vec3 year = vec3(0.24, 0.36, 0.56);
  if (days < 30.0) return mix(near, month, smoothstep(0.0, 30.0, days));
  if (days < 120.0) return mix(month, season, smoothstep(30.0, 120.0, days));
  return mix(season, year, smoothstep(120.0, 400.0, days));
}

float isoline(float logDays, float thresholdDays) {
  float target = log(1.0 + thresholdDays);
  float width = max(fwidth(logDays), 1e-4) * 1.4;
  return 1.0 - smoothstep(0.0, width, abs(logDays - target));
}

void main() {
  vec3 n = normalize(vObjectNormal);
  vec2 uv = vec2(atan(n.x, n.z) / (2.0 * PI) + 0.5, asin(clamp(n.y, -1.0, 1.0)) / PI + 0.5);
  vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
  float facing = smoothstep(0.0, 0.25, dot(normalize(vWorldNormal), viewDirection));

  if (uMode < 1.5) {
    float encoded = texture2D(uTravel, uv).r;
    if (encoded > 0.995) {
      gl_FragColor = vec4(0.02, 0.03, 0.05, 0.38 * uOpacity * facing);
      return;
    }
    float logDays = encoded * (255.0 / 254.0) * LOG_MAX;
    float days = exp(logDays) - 1.0;
    float lines = max(max(isoline(logDays, 7.0), isoline(logDays, 30.0)), max(isoline(logDays, 90.0), isoline(logDays, 365.0)));
    float minor = max(isoline(logDays, 14.0), isoline(logDays, 180.0)) * 0.5;
    vec3 color = travelRamp(days);
    float alpha = (0.14 + 0.62 * max(lines, minor)) * uOpacity * facing;
    gl_FragColor = vec4(color * (0.8 + 0.6 * max(lines, minor)), alpha);
  } else {
    float known = texture2D(uKnown, uv).r;
    float edge = 1.0 - smoothstep(0.0, 0.18, abs(known - 0.5));
    float hatch = step(0.5, fract((vObjectNormal.x + vObjectNormal.y * 0.6) * 140.0));
    vec3 veil = mix(vec3(0.03, 0.03, 0.035), vec3(0.07, 0.06, 0.05), hatch);
    float fog = (1.0 - smoothstep(0.2, 0.75, known)) * 0.82;
    vec3 color = mix(veil, vec3(0.91, 0.77, 0.48), edge * 0.85);
    gl_FragColor = vec4(color, max(fog, edge * 0.55) * uOpacity * facing);
  }
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
