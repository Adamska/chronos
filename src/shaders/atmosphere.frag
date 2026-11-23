uniform vec3 uSunDirection;
uniform vec3 uRayleigh;
uniform vec3 uMie;
uniform float uIntensity;
uniform float uShellRadius;
uniform float uScaleHeight;

varying vec3 vWorldNormal;
varying vec3 vWorldPosition;

float miePhase(float cosTheta, float g) {
  float g2 = g * g;
  return (1.0 - g2) / pow(max(1e-4, 1.0 + g2 - 2.0 * g * cosTheta), 1.5);
}

void main() {
  vec3 normal = normalize(vWorldNormal);
  vec3 viewDirection = normalize(vWorldPosition - cameraPosition);

  float exitCosine = clamp(dot(viewDirection, normal), 0.0, 1.0);
  float closestApproach = uShellRadius * sqrt(max(0.0, 1.0 - exitCosine * exitCosine));
  float altitude = max(closestApproach - 1.0, 0.0);
  float density = exp(-altitude / uScaleHeight) * smoothstep(0.0, 0.12, exitCosine);

  vec3 closestOffset = vWorldPosition - viewDirection * dot(vWorldPosition, viewDirection);
  vec3 closestPoint = closestOffset / max(length(closestOffset), 1e-5);
  float sunFacing = dot(closestPoint, uSunDirection);
  float illumination = smoothstep(-0.3, 0.4, sunFacing);

  float cosTheta = dot(viewDirection, uSunDirection);
  float rayleighPhase = 0.75 * (1.0 + cosTheta * cosTheta);
  float mie = miePhase(cosTheta, 0.76) * 0.02;

  vec3 scattering = uRayleigh * rayleighPhase * (0.12 + illumination) + uMie * mie * illumination;
  float twilightCoordinate = sunFacing / 0.2;
  float twilight = exp(-twilightCoordinate * twilightCoordinate);
  scattering += vec3(0.95, 0.5, 0.24) * twilight * 0.45;

  float alpha = density * uIntensity;
  gl_FragColor = vec4(scattering * alpha, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  gl_FragColor = any(isnan(gl_FragColor)) || any(isinf(gl_FragColor)) ? vec4(0.0) : gl_FragColor;
}
