uniform vec3 uSunDirection;
uniform vec3 uColor;
uniform float uOpacity;
uniform float uBaseRadius;
uniform float uTopRadius;

varying vec3 vWorldNormal;
varying vec3 vWorldPosition;
varying float vElevation;

void main() {
  vec3 normal = normalize(vWorldNormal);
  vec3 radial = normalize(vWorldPosition);
  float isWall = 1.0 - smoothstep(0.55, 0.95, abs(dot(normal, radial)));
  float height = clamp((vElevation - uBaseRadius) / max(uTopRadius - uBaseRadius, 1e-5), 0.0, 1.0);
  float daylight = smoothstep(-0.25, 0.3, dot(radial, uSunDirection));

  float stripe = dot(vWorldPosition, vec3(0.57735)) * 260.0;
  float stripeWidth = max(fwidth(stripe), 1e-4);
  float hatch = 1.0 - smoothstep(0.0, stripeWidth * 1.5, abs(fract(stripe) - 0.5) - 0.32);

  float capAlpha = 0.16 + hatch * 0.08;
  float wallAlpha = 0.6 * (1.0 - height * 0.75);
  float alpha = uOpacity * mix(capAlpha, wallAlpha, isWall);

  vec3 color = uColor * (0.5 + 0.6 * daylight) * (1.0 + isWall * 0.35);
  gl_FragColor = vec4(color, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
