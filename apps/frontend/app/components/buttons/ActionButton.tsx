import React from "react";

export default function ActionButton({
  onClick,
  children,
  disabled,
}: {
  onClick?: () => void;
  children: React.ReactNode;
  disabled: boolean;
}) {
  return (
    <button
      className={`self-end px-1.5 my-1 py-0.5 rounded-md ${!onClick || !disabled ? "cursor-not-allowed bg-black/20" : "hover:cursor-pointer hover:bg-black/20 text-black/70 "}  bg-black/10 text-sm  justify-center mr-4 font-semibold  transition-all duration-300"`}
      onClick={onClick}
      disabled={!onClick || !disabled ? true : false}
    >
      {children}
    </button>
  );
}
