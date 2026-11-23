uniform float uTime;
uniform float uOpacity;
uniform vec3 uWarm;
uniform vec3 uCold;
uniform vec3 uWind;
uniform vec3 uMonsoon;

varying float vProgress;
varying float vLength;
varying float vKind;

void main() {
  float speed = vKind > 1.5 ? 0.9 : 0.35;
  float spacing = vKind > 1.5 ? 16.0 : 22.0;
  float dash = fract(vProgress * vLength * spacing - uTime * speed);
  float head = smoothstep(0.0, 0.08, dash) * (1.0 - smoothstep(0.55, 1.0, dash));
  float ends = smoothstep(0.0, 0.06, vProgress) * smoothstep(1.0, 0.9, vProgress);

  vec3 color = vKind < 0.5 ? uWarm : vKind < 1.5 ? uCold : vKind < 2.5 ? uWind : uMonsoon;
  float alpha = uOpacity * ends * (0.18 + 0.82 * head);
  gl_FragColor = vec4(color, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  gl_FragColor = any(isnan(gl_FragColor)) || any(isinf(gl_FragColor)) ? vec4(0.0) : gl_FragColor;
}
