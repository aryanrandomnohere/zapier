import { useEffect, useState } from "react";

export default function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  specificFunction?: () => void,
) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Don't close dropdown if clicking inside a modal
      console.log("handleClickOutside");
      const target = event.target as HTMLElement;
      if (target && target.closest("[data-modal-backdrop]")) {
        return;
      }

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
