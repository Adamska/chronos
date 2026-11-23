uniform sampler2D uFrom;
uniform sampler2D uTo;
uniform float uWeight;
uniform float uOpacity;
uniform vec3 uSunDirection;

varying vec3 vObjectNormal;
varying vec3 vWorldNormal;
varying vec3 vWorldPosition;

#define PI 3.141592653589793

vec3 ramp(float t) {
  vec3 low = vec3(0.12, 0.3, 0.38);
  vec3 mid = vec3(0.78, 0.42, 0.18);
  vec3 high = vec3(1.0, 0.9, 0.62);
  float s = smoothstep(0.2, 0.85, t);
  return s < 0.5 ? mix(low, mid, s / 0.5) : mix(mid, high, (s - 0.5) / 0.5);
}

void main() {
  vec3 n = normalize(vObjectNormal);
  vec2 uv = vec2(atan(n.x, n.z) / (2.0 * PI) + 0.5, 0.5 - asin(clamp(n.y, -1.0, 1.0)) / PI);
  float from = texture2D(uFrom, uv).r;
  float to = texture2D(uTo, uv).r;
  float code = mix(from, to, uWeight) * 255.0;
  if (code < 0.5) discard;
  float t = clamp((code - 1.0) / 254.0, 0.0, 1.0);
  float visible = smoothstep(0.12, 0.45, t);
  vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
  float facing = smoothstep(0.0, 0.2, dot(normalize(vWorldNormal), viewDirection));
  float daylight = smoothstep(-0.25, 0.3, dot(n, uSunDirection));
  vec3 color = ramp(t) * (0.6 + 0.5 * daylight);
  gl_FragColor = vec4(color, visible * (0.18 + 0.72 * t * t) * uOpacity * facing);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
