"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import zapAtom from "../RecoilState/store/zapAtom";
import { fetchZaps } from "../services/zapServices";

export default function useZaps() {
  const [loading, setLoading] = useState(false);
  const [zaps, setZaps] = useRecoilState(zapAtom);
  const [error, setError] = useState(null);

  async function refetchZaps() {
    setLoading(true);
    try {
      const response = await fetchZaps();
      setZaps(response);
    } //@ts-ignore gemini
    catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (zaps.length > 0) {
      console.log("zaps already fetched");
      setLoading(false);
      return;
    }
    refetchZaps();
  }, []);

  return {
    zaps,
    loading,
    error,
    refetchZaps,
  };
}
