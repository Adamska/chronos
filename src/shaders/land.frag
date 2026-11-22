uniform vec3 uSunDirection;
uniform vec3 uBaseColor;
uniform vec3 uHighlightColor;
uniform vec3 uRimColor;
uniform float uBaseRadius;
uniform float uTopRadius;
uniform float uOpacity;

varying vec3 vWorldNormal;
varying vec3 vWorldPosition;
varying float vElevation;

void main() {
  vec3 normal = normalize(vWorldNormal);
  vec3 radial = normalize(vWorldPosition);
  vec3 viewDirection = normalize(cameraPosition - vWorldPosition);

  float diffuse = dot(normal, uSunDirection);
  float daylight = smoothstep(-0.2, 0.35, dot(radial, uSunDirection));
  float height = clamp((vElevation - uBaseRadius) / max(uTopRadius - uBaseRadius, 1e-5), 0.0, 1.0);
  float isWall = 1.0 - smoothstep(0.6, 0.95, abs(dot(normal, radial)));

  float grain = fbm(radial * 9.0) - 0.5;
  float latitudeTone = smoothstep(0.55, 0.95, abs(radial.y));
  vec3 base = uBaseColor * (1.0 + grain * 0.35) + vec3(0.02, 0.025, 0.03) * latitudeTone;
  vec3 lit = mix(base, uHighlightColor * (1.0 + grain * 0.25), 0.35 + 0.65 * max(diffuse, 0.0));
  lit = mix(lit, base * 0.55, isWall * (1.0 - height * 0.6));
  vec3 color = mix(base * 0.38, lit, daylight);

  float rim = pow(1.0 - max(dot(radial, viewDirection), 0.0), 3.0);
  color += uRimColor * rim * 0.18 * (0.3 + daylight);

  gl_FragColor = vec4(color, uOpacity);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
