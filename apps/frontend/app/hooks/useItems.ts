import axios from "axios";
import { useEffect, useState } from "react";
import { itemInterface } from "../../../../packages/types/src";

export default function useItems(type: "actions" | "triggers") {
  const [items, setItems] = useState<itemInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/${type}/available`)
      .then((response) => {
        setItems(response.data.items);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, [type]);
  return {
    items,
    isLoading,
    error,
  };
}
