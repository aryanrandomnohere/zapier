import { BiSolidZap } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
export default function ZapCell({title,subtitle,order}: {title: string, subtitle: string, order: number}) {
  return (
    <div className="flex flex-col gap-0"><div className=" flex hover:cursor-pointer pr-20 pl-2 transition-all transform duration-200 hover:shadow-xl min-w-[26rem] py-2 border border-black/10 "><div className="p-2.5 border border-black/20 rounded-md"><BiSolidZap className="text-white p-1.5 bg-black text-3xl rounded-full" /></div><div className=" flex flex-col pl-2">
      <div className="flex gap-1 font-bold text-xl">{order}. <div className="flex flex-col"><div className="font-bold text-xl" > {title}</div> <div className=" font-normal text-sm">{subtitle}</div></div></div></div></div>
  <div className="flex flex-col gap-2 items-center justify-center h-25">
      <div className="w-[0.5px] h-10 bg-gray-400"></div>
      <FiPlus className="text-blue-600 text-xl hover:cursor-pointer" />
      <div className="w-[0.5px] h-5 bg-gray-400"></div>
    </div></div>)
}
