uniform float uMode;

varying float vAlpha;
varying float vHeight;
varying vec3 vColor;

void main() {
  float alpha = vAlpha;
  if (uMode > 0.5) alpha *= pow(1.0 - vHeight, 1.6) * 0.55;
  if (alpha < 0.003) discard;
  gl_FragColor = vec4(vColor * 1.6, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
