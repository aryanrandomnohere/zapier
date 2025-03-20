import { BiSolidZap } from "react-icons/bi";
export default function ZapCell() {
  return (
    <div className=" flex pr-20 pl-2 shadow-xl min-w-[26rem] py-3 border border-black/10 "><div className="p-2.5 border border-black/20 rounded-md"><BiSolidZap className="text-white p-1.5 bg-black text-3xl rounded-full" /></div><div className=" flex flex-col pl-2"><div className="font-bold text-xl" >1. Trigger</div> <div className="">An event that starts your zap</div></div></div>
  )
}
