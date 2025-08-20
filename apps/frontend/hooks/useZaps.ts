"use client";
import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import zapAtom from "../RecoilState/store/zapAtom";
import { fetchZaps } from "../services/zapServices";

export default function useZaps() {
  const [loading, setLoading] = useState(false);
  const [zaps, setZaps] = useRecoilState(zapAtom);
  const [error, setError] = useState(null);

  const refetchZaps = useCallback(
    async function refetchZaps() {
      if (zaps.length > 0) {
        console.log("zaps already fetched");
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const response = await fetchZaps();
        setZaps(response);
      } catch (error) {
        //@ts-expect-error: Temporary fix for type error
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [zaps.length, setZaps],
  );

  useEffect(() => {
    if (zaps.length > 0) {
      console.log("zaps already fetched");
      setLoading(false);
      return;
    }
    refetchZaps();
  }, [refetchZaps, zaps.length]);

  return {
    zaps,
    loading,
    error,
    refetchZaps,
  };
}
