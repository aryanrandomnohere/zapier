import { itemInterface } from "@/app/types";
import { RiPushpinLine } from "react-icons/ri";

export default function OptionList({items,title,setItem}:{items?:itemInterface[],title:string,setItem?:()=>void}) {
    if(!items) return null
  return (
    <div className="flex flex-col gap-1 w-full ">
        <div className="font-semibold text-sm text-stone-500">{title}</div>
        {items.map((item:itemInterface,index)=>(<div
        onClick={()=>setItem(item,index)}
  key={item.id}
  className="flex p-1.5 hover:cursor-pointer transform transition-all duration-200 ease-in-out rounded group hover:bg-blue-500/10 min-w items-center gap-2 text-sm font-semibold justify-start hover:justify-between group-hover:justify-between"
>
  <div className="flex gap-1.5 items-center"><img
    src={item.imagePath}
    alt="LOGO"
    className="w-5 h-5 hover:cursor-pointer"
  />
  {item.name}</div>
  <RiPushpinLine className="hidden group-hover:flex text-blue-400" />
</div>))}</div>
  )
}
