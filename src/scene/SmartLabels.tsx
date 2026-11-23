"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo } from "react";
import { Vector3 } from "three";
import { populationAt } from "@/scene/cityMetrics";
import { combineLabels, labelNodes, labelsFor, polityLabelsFor, worldLabelsFor } from "@/scene/labelModel";
import { overlayVisible, politicalVisible, useAtlasStore } from "@/store/useAtlasStore";
import { worldEventPresence } from "@/data/worldLayer";
import { storyFocus } from "@/scene/storyFocus";
import { useChronosStore } from "@/store/useChronosStore";
import { usePolityStore } from "@/store/usePolityStore";
import { useWorldStore } from "@/store/useWorldStore";

const LABEL_HEIGHT = 20;
const MAX_ZONES = 12;
const ZONE_REFRESH_FRAMES = 15;
const projected = new Vector3();
const toCamera = new Vector3();

export function SmartLabels() {
  const campaign = useChronosStore((state) => state.campaign);
  const citiesOn = useAtlasStore((state) => state.overlays.cities);
  const atlasMode = useChronosStore((state) => state.mode === "atlas");
  const withCities = citiesOn && atlasMode;
  const polities = usePolityStore((state) => state.labels);
  const worldEvents = useWorldStore((state) => state.data?.events);
  const labels = combineLabels(combineLabels(labelsFor(campaign, withCities), polityLabelsFor(polities)), worldLabelsFor(worldEvents));
  const widths = useMemo(() => new Float32Array(labels.length), [labels]);
  const lastX = useMemo(() => new Float32Array(labels.length).fill(-1), [labels]);
  const lastY = useMemo(() => new Float32Array(labels.length).fill(-1), [labels]);
  const shown = useMemo(() => new Uint8Array(labels.length), [labels]);
  const incumbent = useMemo(() => new Uint8Array(labels.length), [labels]);
  const rects = useMemo(() => new Float32Array((labels.length + MAX_ZONES) * 4), [labels]);
  const zones = useMemo(() => ({ rects: new Float32Array(MAX_ZONES * 4), count: 0, frame: 0 }), []);

  useFrame(({ camera, size }) => {
    const { year, selection, mode } = useChronosStore.getState();
    const focus = storyFocus();
    const distance = camera.position.length();
    const threshold = distance > 4.2 ? 62 : distance > 3.1 ? 48 : distance > 2.3 ? 36 : distance > 1.7 ? 24 : 0;
    const selectedId = selection?.kind === "event" ? selection.id : null;
    toCamera.copy(camera.position).normalize();
    const politicalOn = politicalVisible(mode);
    const eventsOn = overlayVisible("events");
    if (zones.frame++ % ZONE_REFRESH_FRAMES === 0) {
      zones.count = 0;
      document.querySelectorAll<HTMLElement>("[data-hud-zone]").forEach((element) => {
        if (zones.count >= MAX_ZONES || element.getAttribute("aria-hidden") === "true") return;
        const bounds = element.getBoundingClientRect();
        if (bounds.width === 0) return;
        zones.rects.set([bounds.left - 6, bounds.top - 6, bounds.right + 6, bounds.bottom + 6], zones.count * 4);
        zones.count += 1;
      });
    }
    rects.set(zones.rects.subarray(0, zones.count * 4));
    let accepted = zones.count;

    const selectedIndex = selectedId ? labels.findIndex((label) => label.id === selectedId) : -1;
    incumbent.set(shown);
    for (let step = -1; step < labels.length * 2; step += 1) {
      const index = step < 0 ? selectedIndex : step % labels.length;
      if (index < 0 || (step >= 0 && index === selectedIndex)) continue;
      if (step >= 0 && (step < labels.length) !== (incumbent[index] === 1)) continue;
      const label = labels[index];
      const node = label ? labelNodes.get(label.id) : undefined;
      if (!label || !node) continue;
      if (!widths[index]) widths[index] = node.offsetWidth;

      let presence = 1;
      let priority = label.priority;
      if (label.event) {
        presence = (focus.events.get(label.event.id) ?? 0) >= 1 ? 1 : 0;
        priority += 60 + (label.id === focus.lead ? 40 : 0) + (label.id === selectedId ? 100 : 0);
      } else if (label.zone) {
        presence = focus.territories.has(label.zone.id) ? 1 : 0;
        priority += 40;
      } else if (label.world) {
        presence = eventsOn ? worldEventPresence(label.world, year) : 0;
        priority += presence * 20;
      } else if (label.kind === "polity") {
        presence = politicalOn ? 1 : 0;
      } else if (label.city) {
        const population = populationAt(label.city, year);
        presence = population > 0 ? 1 : 0;
        priority = population > 0 ? 8 + Math.log10(population) * 9 : 0;
      }

      const facing = label.anchor.dot(toCamera) / label.anchor.length();
      let visible = presence > 0.35 && facing > 0.22 && priority >= threshold;

      if (visible) {
        projected.copy(label.anchor).project(camera);
        const x = ((projected.x + 1) / 2) * size.width;
        const y = ((1 - projected.y) / 2) * size.height;
        const width = (widths[index] ?? 80) + 14;
        const left = x + 4;
        const top = y - LABEL_HEIGHT / 2;
        visible = projected.z < 1 && x > 0 && left + width < size.width - 8 && y > 12 && y < size.height - 12;
        for (let r = 0; visible && r < accepted; r += 1) {
          const o = r * 4;
          if (left < (rects[o + 2] ?? 0) && left + width > (rects[o] ?? 0) && top < (rects[o + 3] ?? 0) && top + LABEL_HEIGHT > (rects[o + 1] ?? 0)) visible = false;
        }
        if (visible) {
          const slot = accepted * 4;
          rects[slot] = left;
          rects[slot + 1] = top;
          rects[slot + 2] = left + width;
          rects[slot + 3] = top + LABEL_HEIGHT;
          accepted += 1;
          if (Math.abs(x - (lastX[index] ?? 0)) > 0.4 || Math.abs(y - (lastY[index] ?? 0)) > 0.4) {
            node.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
            lastX[index] = x;
            lastY[index] = y;
          }
        }
      }

      const state = visible ? 1 : 0;
      if (shown[index] !== state) {
        shown[index] = state;
        node.style.opacity = visible ? "1" : "0";
        node.style.visibility = visible ? "visible" : "hidden";
        node.style.pointerEvents = visible && (label.kind === "event" || label.kind === "world") ? "auto" : "none";
      }
    }
  });

  return null;
}
