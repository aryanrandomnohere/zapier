"use client";

import { useEffect } from "react";

export default function Success() {
  useEffect(() => {
    if (window.opener) {
      window.opener.postMessage("oauth-success", "*");
      window.close();
    }
  }, []);

  return <p>Success! You can close this tab.</p>;
}
