uniform vec3 uSunDirection;
uniform vec3 uBaseColor;
uniform vec3 uHighlightColor;
uniform vec3 uRimColor;
uniform float uBaseRadius;
uniform float uTopRadius;
uniform float uOpacity;
uniform sampler2D uRelief;
uniform float uHasRelief;

varying vec3 vWorldNormal;
varying vec3 vWorldPosition;
varying float vElevation;

#define PI 3.141592653589793

float landHeight(vec2 uv) {
  float code = texture2D(uRelief, vec2(uv.x, 1.0 - uv.y)).r * 255.0;
  float t = clamp((code - 128.0) / 127.0, 0.0, 1.0);
  return t * t * 6000.0;
}

vec3 terrainColor(float elevation, float latitude, float grain) {
  float lat = abs(latitude);
  float arid = exp(-pow((lat - 24.0) / 8.0, 2.0)) * 0.8 + exp(-pow((lat - 42.0) / 5.0, 2.0)) * 0.3;
  vec3 humid = vec3(0.07, 0.085, 0.072);
  vec3 desert = vec3(0.13, 0.112, 0.085);
  vec3 lowland = mix(humid, desert, clamp(arid * 0.85 + grain * 0.2, 0.0, 1.0));
  vec3 upland = vec3(0.12, 0.105, 0.088);
  vec3 peaks = vec3(0.19, 0.175, 0.16);
  vec3 color = mix(lowland, upland, smoothstep(300.0, 1800.0, elevation));
  color = mix(color, peaks, smoothstep(2400.0, 4800.0, elevation));
  float ice = max(smoothstep(62.0, 72.0, lat) * smoothstep(200.0, 1400.0, elevation + (lat > 75.0 ? 1200.0 : 0.0)), smoothstep(5300.0, 6000.0, elevation) * 0.6);
  return mix(color, vec3(0.46, 0.5, 0.54), ice * 0.8);
}

void main() {
  vec3 normal = normalize(vWorldNormal);
  vec3 radial = normalize(vWorldPosition);
  vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
  float longitude = atan(radial.x, radial.z);
  float latitude = asin(clamp(radial.y, -1.0, 1.0));
  vec2 uv = vec2(longitude / (2.0 * PI) + 0.5, latitude / PI + 0.5);

  float height = clamp((vElevation - uBaseRadius) / max(uTopRadius - uBaseRadius, 1e-5), 0.0, 1.0);
  float isWall = 1.0 - smoothstep(0.6, 0.95, abs(dot(normal, radial)));
  float grain = fbm(radial * 9.0) - 0.5;
  float daylight = smoothstep(-0.2, 0.35, dot(radial, uSunDirection));

  vec3 base;
  vec3 shadingNormal = normal;
  if (uHasRelief > 0.5) {
    vec2 texel = vec2(1.0 / 720.0, 1.0 / 360.0);
    float elevation = landHeight(uv);
    float dx = landHeight(uv + vec2(texel.x, 0.0)) - landHeight(uv - vec2(texel.x, 0.0));
    float dy = landHeight(uv + vec2(0.0, texel.y)) - landHeight(uv - vec2(0.0, texel.y));
    float metresPerTexel = 111200.0 * 0.5;
    float eastSpan = 2.0 * metresPerTexel * max(cos(latitude), 0.08);
    float northSpan = 2.0 * metresPerTexel;
    vec3 east = normalize(vec3(cos(longitude), 0.0, -sin(longitude)));
    vec3 north = normalize(cross(radial, east));
    float exaggeration = 26.0;
    shadingNormal = normalize(radial - east * (dx / eastSpan) * exaggeration - north * (dy / northSpan) * exaggeration);
    shadingNormal = normalize(mix(shadingNormal, normal, isWall));
    base = terrainColor(elevation, degrees(latitude), grain) * (1.0 + grain * 0.18);
  } else {
    float latitudeTone = smoothstep(0.55, 0.95, abs(radial.y));
    base = uBaseColor * (1.0 + grain * 0.35) + vec3(0.02, 0.025, 0.03) * latitudeTone;
  }

  float diffuse = max(dot(shadingNormal, uSunDirection), 0.0);
  float hillshade = mix(0.55, 1.25, diffuse);
  vec3 lit = uHasRelief > 0.5 ? base * hillshade : mix(base, uHighlightColor * (1.0 + grain * 0.25), 0.35 + 0.65 * diffuse);
  lit = mix(lit, base * 0.55, isWall * (1.0 - height * 0.6));
  vec3 color = mix(base * 0.36, lit, daylight);

  float rim = pow(1.0 - max(dot(radial, viewDirection), 0.0), 3.0);
  color += uRimColor * rim * 0.18 * (0.3 + daylight);

  gl_FragColor = vec4(color, uOpacity);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
