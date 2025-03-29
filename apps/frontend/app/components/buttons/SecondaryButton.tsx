import { ReactNode } from "react";

export default function SecondaryButton({
  children,
  onClick,
  size = "small",
}: {
  children: ReactNode;
  onClick: () => void;
  size: string;
}) {
  return (
    <button
      onClick={onClick}
      className=" bg-fuchsia-800 p-2 text-white font-semibold rounded hover:cursor-pointer transform transition-all duration-400 shadow-2xl hover:bg-fuchsia-900"
    >
      {children}
    </button>
  );
}
