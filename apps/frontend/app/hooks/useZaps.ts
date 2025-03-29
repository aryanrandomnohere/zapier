"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { zapInterface } from "../types";

export default function useZaps() {
  const [loading, setLoading] = useState(false);
  const [zaps, setZaps] = useState<zapInterface[]>([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap`, {
        headers: { authorization: `${localStorage.getItem("token")}` },
      })
      .then((response) => {
        console.log(response.data.zaps);
        setZaps(response.data.zaps);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  return {
    zaps,
    loading,
    error,
  };
}
