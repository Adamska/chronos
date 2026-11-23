uniform float uMode;

varying float vAlpha;
varying float vHeight;
varying vec3 vColor;

void main() {
  float alpha = vAlpha;
  if (uMode > 0.5) alpha *= pow(clamp(1.0 - vHeight, 0.0, 1.0), 1.6) * 0.55;
  if (alpha < 0.003) discard;
  gl_FragColor = vec4(vColor * 1.6, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  gl_FragColor = any(isnan(gl_FragColor)) || any(isinf(gl_FragColor)) ? vec4(0.0) : gl_FragColor;
}
