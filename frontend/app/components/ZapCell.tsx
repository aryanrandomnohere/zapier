import { BiSolidZap } from "react-icons/bi";
export default function ZapCell({title,subtitle,order}: {title: string, subtitle: string, order: number}) {
  return (
    <div className="flex flex-col gap-0 zap-cell"><div className=" flex bg-white hover:cursor-pointer pr-20 pl-2 transition-all transform duration-200 hover:shadow-xl min-w-[26rem] py-2 border border-black/10 "><div className="p-2.5 border border-black/20 rounded-md"><BiSolidZap className="text-white p-1.5 bg-black text-3xl rounded-full" /></div><div className=" flex flex-col pl-2">
      <div className="flex gap-1 font-bold text-xl">{order}. <div className="flex flex-col"><div className="font-bold text-xl" > {title}</div> <div className=" font-normal text-sm">{subtitle}</div></div></div></div></div>
</div>)
}
