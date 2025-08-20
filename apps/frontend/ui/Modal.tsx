"use client";
import {
  ReactElement,
  ReactNode,
  cloneElement,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

interface ModalContextType {
  close: () => void;
  open: (name: string) => void;
  openName: string;
}

interface OpenProps {
  children: React.ReactElement<{ onClick?: () => void }>;
  opens: string;
}

interface WindowProps {
  children: ReactNode;
  name: string;
  portTo?: DocumentFragment | Element | HTMLElement | null;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal can only be used inside ModalProvider");
  }
  return context;
};

function Modal({ children }: { children: ReactNode }) {
  const [openName, setOpenName] = useState("");
  const open = (name: string) => {
    console.log("Modal opening:", name);
    setOpenName(name);
  };
  const close = () => {
    console.log("Modal closing from close function");
    setOpenName("");
  };

  useEffect(() => {
    console.log("Modal state changed:", openName);
  }, [openName]);

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Window({ children, name, portTo }: WindowProps) {
  const { openName, close } = useModal();

  // Using framer-motion's AnimatePresence for smooth enter/exit animations
  return createPortal(
    <AnimatePresence mode="wait">
      {openName === name && (
        <>
          <motion.div
            className="fixed inset-0 w-full h-screen bg-black/60 bg-opacity-5 z-[9999] flex items-center justify-center p-1"
            data-modal-backdrop
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
          >
            <motion.div
              className="flex flex-col w-auto h-auto max-w-full max-h-full bg-zinc-100 rounded-lg shadow-xl overflow-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1], // Custom bezier curve for a smoother feel
              }}
              onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                e.stopPropagation()
              }
            >
              <div className="px-5 py-4">{children}</div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body || portTo,
  );
}

function Open({ children, opens }: OpenProps) {
  const { open } = useModal();
  const handleClick = () => open(opens);
  return <div onClick={handleClick}>{children}</div>;
}

Modal.Open = Open;
Modal.Window = Window;
export default Modal;
