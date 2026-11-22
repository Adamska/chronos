uniform vec3 uSunDirection;
uniform sampler2D uShelf;
uniform vec3 uOceanDeep;
uniform vec3 uOceanShallow;
uniform vec3 uGraticule;
uniform vec3 uRayleigh;
uniform vec3 uAccent;
uniform float uTime;

varying vec3 vObjectNormal;
varying vec3 vWorldNormal;
varying vec3 vWorldPosition;

#define PI 3.141592653589793

float hash(vec3 p) {
  p = fract(p * 0.3183099 + 0.1);
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

float valueNoise(vec3 x) {
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(hash(i), hash(i + vec3(1, 0, 0)), f.x), mix(hash(i + vec3(0, 1, 0)), hash(i + vec3(1, 1, 0)), f.x), f.y),
    mix(mix(hash(i + vec3(0, 0, 1)), hash(i + vec3(1, 0, 1)), f.x), mix(hash(i + vec3(0, 1, 1)), hash(i + vec3(1, 1, 1)), f.x), f.y),
    f.z
  );
}

float fbm(vec3 p) {
  float sum = 0.0;
  float amplitude = 0.5;
  for (int octave = 0; octave < 4; octave++) {
    sum += amplitude * valueNoise(p);
    p *= 2.07;
    amplitude *= 0.5;
  }
  return sum;
}

float gridLine(float coordinate, float spacing, float derivative) {
  float distanceToLine = abs(fract(coordinate / spacing - 0.5) - 0.5) * spacing;
  return 1.0 - smoothstep(0.0, derivative * 1.25, distanceToLine);
}

void main() {
  vec3 n = normalize(vObjectNormal);
  float longitude = atan(n.x, n.z);
  float shiftedLongitude = atan(-n.x, -n.z);
  float latitude = asin(clamp(n.y, -1.0, 1.0));

  vec2 uv = vec2(longitude / (2.0 * PI) + 0.5, latitude / PI + 0.5);
  float shelf = texture2D(uShelf, uv).r;
  float relief = fbm(n * 6.0) * 0.18;
  float depth = clamp(shelf + relief - 0.09, 0.0, 1.0);

  vec3 ocean = mix(uOceanDeep, uOceanShallow, pow(smoothstep(0.0, 0.95, depth), 1.6));

  float contourValue = depth * 9.0;
  float contourWidth = max(fwidth(contourValue), 1e-4);
  float contour = 1.0 - smoothstep(0.0, contourWidth * 1.4, abs(fract(contourValue - 0.5) - 0.5));
  ocean += uGraticule * contour * 0.05 * smoothstep(0.04, 0.2, depth);

  float lonDegrees = degrees(longitude);
  float lonDerivative = min(fwidth(lonDegrees), fwidth(degrees(shiftedLongitude)));
  float latDegrees = degrees(latitude);
  float latDerivative = fwidth(latDegrees);
  float poleFade = smoothstep(88.0, 76.0, abs(latDegrees));
  float graticule = max(gridLine(lonDegrees, 15.0, lonDerivative) * poleFade, gridLine(latDegrees, 15.0, latDerivative));
  float equator = 1.0 - smoothstep(0.0, latDerivative * 1.5, abs(latDegrees));
  ocean += uGraticule * (graticule * 0.075 + equator * 0.06);

  vec3 worldNormal = normalize(vWorldNormal);
  vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
  float diffuse = dot(worldNormal, uSunDirection);
  float daylight = smoothstep(-0.18, 0.32, diffuse);

  vec3 halfVector = normalize(uSunDirection + viewDirection);
  float glint = pow(max(dot(worldNormal, halfVector), 0.0), 90.0) * daylight * (1.0 - depth * 0.6);

  float terminatorBand = exp(-pow(diffuse / 0.09, 2.0));
  vec3 night = ocean * 0.32;
  vec3 color = mix(night, ocean * (0.75 + 0.45 * max(diffuse, 0.0)), daylight);
  color += vec3(0.92, 0.55, 0.28) * terminatorBand * 0.045;
  color += vec3(0.85, 0.82, 0.74) * glint * 0.22;

  float fresnel = pow(1.0 - max(dot(worldNormal, viewDirection), 0.0), 3.2);
  color += uRayleigh * fresnel * (0.12 + 0.55 * daylight);
  color += uAccent * fresnel * 0.04;

  gl_FragColor = vec4(color, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
