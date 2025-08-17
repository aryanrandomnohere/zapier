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

function LightweightModal({ children }: { children: ReactNode }) {
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

  // Using pure CSS animations instead of framer-motion
  return createPortal(
    <>
      {openName === name && (
        <>
          <div
            className="fixed inset-0 w-full h-screen bg-black/60 bg-opacity-5 z-[9999] flex items-center justify-center p-1
                     animate-in fade-in duration-300"
            data-modal-backdrop
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
          >
            <div
              className="flex flex-col w-auto h-auto max-w-full max-h-full bg-zinc-100 rounded-lg shadow-xl overflow-auto
                       animate-in zoom-in-95 fade-in duration-400 ease-out"
              onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                e.stopPropagation()
              }
            >
              <div className="px-5 py-4">{children}</div>
            </div>
          </div>
        </>
      )}
    </>,
    document.body || portTo,
  );
}

function Open({ children, opens }: OpenProps) {
  const { open } = useModal();
  const handleClick = () => open(opens);
  return cloneElement(children as ReactElement, { onClick: handleClick });
}

LightweightModal.Open = Open;
LightweightModal.Window = Window;

// Add CSS animations to reduce bundle size
const modalStyles = `
  @keyframes modal-fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes modal-zoom-in {
    from { 
      opacity: 0;
      transform: scale(0.95);
    }
    to { 
      opacity: 1;
      transform: scale(1);
    }
  }

  .modal-animate-in {
    animation: modal-fade-in 0.3s ease-out;
  }

  .modal-zoom-in {
    animation: modal-zoom-in 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

// Inject styles if not already present
if (
  typeof document !== "undefined" &&
  !document.getElementById("lightweight-modal-styles")
) {
  const style = document.createElement("style");
  style.id = "lightweight-modal-styles";
  style.textContent = modalStyles;
  document.head.appendChild(style);
}

export default LightweightModal;
