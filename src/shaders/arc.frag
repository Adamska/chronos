uniform float uTime;

varying float vProgress;
varying float vLength;
varying float vPresence;
varying float vSelected;
varying vec3 vColor;

void main() {
  if (vPresence < 0.002) discard;

  float reveal = 1.0 - smoothstep(vPresence * 1.08 - 0.08, vPresence * 1.08, vProgress);
  float endFade = smoothstep(0.0, 0.05, vProgress) * smoothstep(1.0, 0.95, vProgress);

  float pulseCoordinate = vProgress * vLength * 9.0 - uTime * (1.4 + vSelected * 0.8);
  float pulse = pow(1.0 - fract(pulseCoordinate), 7.0);

  float base = 0.26 + vSelected * 0.3;
  float alpha = vPresence * reveal * endFade * (base + pulse * 0.95);
  vec3 color = vColor * (0.75 + pulse * 1.9 + vSelected * 0.6);

  gl_FragColor = vec4(color, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  gl_FragColor = any(isnan(gl_FragColor)) || any(isinf(gl_FragColor)) ? vec4(0.0) : gl_FragColor;
}
