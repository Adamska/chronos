attribute float aKind;
attribute float aLength;

varying float vProgress;
varying float vLength;
varying float vKind;

void main() {
  vProgress = uv.x;
  vLength = aLength;
  vKind = aKind;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
