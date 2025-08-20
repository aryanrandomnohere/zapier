import { useEffect, useState } from "react";
import { fetchDeletedZaps } from "../services/zapServices";

export default function useDeletedZap() {
  const [deletedZaps, setDeletedZaps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function refetchDeletedZaps() {
    try {
      const response = await fetchDeletedZaps();
      setDeletedZaps(response);
    } catch (error) {
      //@ts-expect-error: Temporary fix for type error
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    refetchDeletedZaps();
    setLoading(false);
  }, []);

  return {
    deletedZaps,
    loading,
    error,
    refetchDeletedZaps,
  };
}
