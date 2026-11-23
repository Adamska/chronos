uniform vec3 uSunDirection;
uniform sampler2D uShelf;
uniform sampler2D uRelief;
uniform float uHasRelief;
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
  if (uHasRelief > 0.5) {
    float code = texture2D(uRelief, vec2(uv.x, 1.0 - uv.y)).r * 255.0;
    float trench = clamp((127.0 - min(code, 127.0)) / 127.0, 0.0, 1.0);
    shelf = 1.0 - trench;
  }
  float relief = fbm(n * 6.0) * (uHasRelief > 0.5 ? 0.05 : 0.18);
  float depth = clamp(shelf + relief - 0.09, 0.0, 1.0);

  vec3 ocean = mix(uOceanDeep, uOceanShallow, pow(smoothstep(0.0, 0.95, depth), 1.6));

  float contourValue = depth * 9.0;
  float contourWidth = max(fwidth(contourValue), 1e-4);
  float contour = 1.0 - smoothstep(0.0, contourWidth * 1.4, abs(fract(contourValue - 0.5) - 0.5));
  ocean += uGraticule * contour * 0.018 * smoothstep(0.04, 0.2, depth);

  float lonDegrees = degrees(longitude);
  float lonDerivative = min(fwidth(lonDegrees), fwidth(degrees(shiftedLongitude)));
  float latDegrees = degrees(latitude);
  float latDerivative = fwidth(latDegrees);
  float poleFade = smoothstep(88.0, 76.0, abs(latDegrees));
  float graticule = max(gridLine(lonDegrees, 15.0, lonDerivative) * poleFade, gridLine(latDegrees, 15.0, latDerivative));
  float equator = 1.0 - smoothstep(0.0, latDerivative * 1.5, abs(latDegrees));
  ocean += uGraticule * (graticule * 0.035 + equator * 0.03);

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
