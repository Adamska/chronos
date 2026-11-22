"use client";

import { useCallback, useState } from "react";
import { buildShareUrl } from "@/components/atlas/shareState";

export function useShareLink(): { readonly copied: boolean; readonly copy: () => void } {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(() => {
    const url = buildShareUrl();
    const done = () => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    };
    if (navigator.clipboard) void navigator.clipboard.writeText(url).then(done, () => window.prompt("Copy this link", url));
    else window.prompt("Copy this link", url);
  }, []);
  return { copied, copy };
}
