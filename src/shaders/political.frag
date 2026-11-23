uniform sampler2D uBorders;
uniform sampler2D uPrevious;
uniform float uMix;
uniform vec3 uSunDirection;
uniform float uOpacity;

varying vec3 vObjectNormal;
varying vec3 vWorldNormal;
varying vec3 vWorldPosition;

#define PI 3.141592653589793

void main() {
  vec3 n = normalize(vObjectNormal);
  vec2 uv = vec2(atan(n.x, n.z) / (2.0 * PI) + 0.5, 0.5 - asin(clamp(n.y, -1.0, 1.0)) / PI);
  vec2 dx = dFdx(uv);
  vec2 dy = dFdy(uv);
  vec2 dxSeam = dFdx(fract(uv + vec2(0.5, 0.0)));
  vec2 dySeam = dFdy(fract(uv + vec2(0.5, 0.0)));
  if (abs(dxSeam.x) < abs(dx.x)) dx.x = dxSeam.x;
  if (abs(dySeam.x) < abs(dy.x)) dy.x = dySeam.x;
  vec4 polity = mix(textureGrad(uPrevious, uv, dx, dy), textureGrad(uBorders, uv, dx, dy), smoothstep(0.0, 1.0, uMix));
  if (polity.a < 0.01) discard;
  vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
  float facing = smoothstep(0.0, 0.2, dot(normalize(vWorldNormal), viewDirection));
  float daylight = smoothstep(-0.25, 0.3, dot(n, uSunDirection));
  vec3 color = polity.rgb * (0.55 + 0.55 * daylight);
  gl_FragColor = vec4(color, polity.a * uOpacity * facing * 0.82);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  gl_FragColor = any(isnan(gl_FragColor)) || any(isinf(gl_FragColor)) ? vec4(0.0) : gl_FragColor;
}
