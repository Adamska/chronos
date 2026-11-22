attribute float aIntensity;

uniform vec3 uSunDirection;
uniform float uPixelRatio;

varying float vIntensity;

void main() {
  vec3 normal = normalize(position);
  float night = smoothstep(0.05, -0.25, dot(normal, uSunDirection));
  vIntensity = aIntensity * night;
  vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = (2.0 + aIntensity * 9.0) * uPixelRatio * (2.6 / max(-viewPosition.z, 0.5));
  gl_Position = projectionMatrix * viewPosition;
}
