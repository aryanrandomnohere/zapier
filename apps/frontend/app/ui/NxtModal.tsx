"use client";

import { ReactNode, useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  trigger: ReactNode;
  children: ReactNode;
}

export default function NxtModal({ trigger, children }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Trigger */}
      <div ref={triggerRef} onClick={open} className="inline-block">
        {trigger}
      </div>

      {/* Modal */}
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-[1000] bg-black/60 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={close} // ✅ backdrop click closes modal
            >
              <motion.div
                className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                  e.stopPropagation()
                } // ✅ prevents bubbling to backdrop
              >
                <div className="p-5">
                  {/* Cloning child to give it access to `close()` */}
                  {typeof children === "function"
                    ? (children as (close: () => void) => ReactNode)(close)
                    : children}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
}
