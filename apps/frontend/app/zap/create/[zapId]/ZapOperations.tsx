import { ReactNode } from "react";
import HelpActions from "./HelpActions";
import { RxCross2 } from "react-icons/rx";

export default function ZapOperations({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <div className="fixed px-1 pl-2 pt-3 min-h-full left-11 top-[73px]  bg-[#FFFDF9] shadow-md justify-center z-40 border border-zinc-300 flex ">
      {children}
      <button
        onClick={onClick}
        className=" text-gray-500 hover:text-gray-700 hover:cursor-pointer font-extrabold text-lg self-start max-w-fit z-50 "
      >
        <RxCross2 color="black" size={21} />
      </button>
    </div>
  );
}
