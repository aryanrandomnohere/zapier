import { FiPlus } from "react-icons/fi";

export default function AddCell({
  handleClick,
}: {
  handleClick?: (order: number) => void;
}) {
  return (
    <div className="flex flex-col gap-1 items-center justify-center h-25">
      <div className="w-[1px] h-10 bg-gray-400"></div>
      <FiPlus
        onClick={handleClick}
        className="text-blue-600 hover:text-white from-5% hover:bg-blue-600 rounded-full transform transition-all duration-300 p-0.5 text-xl hover:cursor-pointer"
      />
      <div className="w-[1px] h-5 bg-gray-400"></div>
    </div>
  );
}
