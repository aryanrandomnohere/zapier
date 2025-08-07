import { useEffect, useState } from "react";

export default function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  specificFunction?: () => void,
) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener(
      "mousedown",
      specificFunction || handleClickOutside,
    );
    return () => {
      document.removeEventListener(
        "mousedown",
        specificFunction || handleClickOutside,
      );
    };
  }, []);
  return { open, setOpen };
}
