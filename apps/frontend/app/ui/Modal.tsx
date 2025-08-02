import {
  ReactElement,
  ReactNode,
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

interface ModalContextType {
  close: () => void;
  open: (name: string) => void;
  openName: string;
}

interface OpenProps {
  children: ReactNode;
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
  const open = (name: string) => setOpenName(name);
  const close = () => setOpenName("");
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
            className="fixed inset-0 w-full h-screen bg-black/60 bg-opacity-5 z-[1000] flex items-center justify-center p-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={close}
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
              onClick={(e) => e.stopPropagation()}
            >
              {/* <div
                className="self-end p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full text-2xl cursor-pointer transition-colors duration-200"
                onClick={close}
              >\
                <HiXMark />
              </div> */}
              <div className="px-5 py-4">
                {cloneElement(children as React.ReactElement)}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    portTo || document.body,
  );
}

function Open({ children, opens }: OpenProps) {
  const { open } = useModal();
  const handleClick = () => open(opens);
  return cloneElement(children as ReactElement, { onClick: handleClick });
}

Modal.Open = Open;
Modal.Window = Window;
export default Modal;
