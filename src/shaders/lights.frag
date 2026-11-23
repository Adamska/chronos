varying float vIntensity;

void main() {
  if (vIntensity < 0.01) discard;
  float radius = length(gl_PointCoord - 0.5) * 2.0;
  float glow = pow(max(0.0, 1.0 - radius), 2.2);
  gl_FragColor = vec4(vec3(1.0, 0.78, 0.46) * glow * vIntensity * 1.6, glow * vIntensity);
  gl_FragColor = any(isnan(gl_FragColor)) || any(isinf(gl_FragColor)) ? vec4(0.0) : gl_FragColor;
}
