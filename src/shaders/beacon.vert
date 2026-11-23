attribute float aPhase;
attribute float aPresence;
attribute vec3 aColor;

uniform float uTime;
uniform float uMode;

varying float vAlpha;
varying float vHeight;
varying vec3 vColor;

void main() {
  vec3 transformed = position;
  vColor = aColor;
  vHeight = uv.y;

  if (uMode < 0.5) {
    float cycle = fract(uTime * 0.42 + aPhase);
    transformed *= 0.2 + cycle;
    vAlpha = aPresence * pow(clamp(1.0 - cycle, 0.0, 1.0), 1.7);
  } else {
    vAlpha = aPresence * (0.85 + 0.15 * sin(uTime * 2.2 + aPhase * 6.2831));
  }

  gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(transformed, 1.0);
}
