"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook to ensure portal rendering only happens on client-side
 * This prevents SSR issues with document not being available
 */
export default function useClientOnlyPortal() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    mounted,
    portalRoot: mounted ? document.body : null,
  };
}
