#define MAX_ARCS 64

attribute float aArc;
attribute float aLength;
attribute vec3 aColor;

uniform float uPresence[MAX_ARCS];
uniform float uSelected;

varying float vProgress;
varying float vLength;
varying float vPresence;
varying float vSelected;
varying vec3 vColor;

void main() {
  int arcIndex = int(aArc + 0.5);
  vProgress = uv.x;
  vLength = aLength;
  vPresence = uPresence[arcIndex];
  vSelected = abs(aArc - uSelected) < 0.5 ? 1.0 : 0.0;
  vColor = aColor;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
