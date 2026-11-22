import type { Camera } from "three";

let activeCamera: Camera | null = null;

export function registerCamera(camera: Camera | null): void {
  activeCamera = camera;
}

export function currentCamera(): Camera | null {
  return activeCamera;
}
