varying vec3 vWorldNormal;
varying vec3 vWorldPosition;
varying float vElevation;

void main() {
  vWorldNormal = normalize(mat3(modelMatrix) * normal);
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPosition.xyz;
  vElevation = length(position);
  gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
