import {  ItemType } from "@repo/types";
import { RiPushpinLine } from "react-icons/ri";
import { useRecoilState, useSetRecoilState} from "recoil";
import { zapCreateState } from "@/app/RecoilState/store/zapCreate";
import { selectedItemMetaData } from "@/app/RecoilState/currentZap";

export default function OptionList({items,title,onClose}:{items?:ItemType[],title:string,onClose:()=>void}) {
    const [Item,setItem] = useRecoilState(zapCreateState)
    const setMetaData = useSetRecoilState(selectedItemMetaData);
  if(!items) return null  
  
  function handleClick(item:ItemType,index:number){ 

    if(Item.selectedCell === undefined) return
    setItem((zap)=>{ 
      if(zap.selectedCell === null) return zap
      if(zap.selectedCell === 0) {
        return {
          ...zap,
          selectedItems: [item, ...zap.selectedItems.slice(1, zap.selectedItems.length)]
        }
      }
      return ({
        ...zap,
        selectedItems:[...zap.selectedItems.slice(0,Item.selectedCell),item,...zap.selectedItems.slice(Item.selectedCell+1,zap.selectedItems.length)]
    })
  })
  setMetaData((prev)=>({index:Item.selectedCell,isOpen:true}))
  onClose();
  }

  return (
    <div className="flex flex-col gap-1 w-full ">
        <div className="font-semibold text-sm text-stone-500">{title}</div>
        {items.map((item:ItemType,index:number)=>(<div
        onClick={()=>handleClick(item,index)}
  key={item.id}
  className="flex p-1.5 hover:cursor-pointer transform transition-all duration-200 ease-in-out rounded group hover:bg-blue-500/10 min-w items-center gap-2 text-sm font-semibold justify-start hover:justify-between group-hover:justify-between"
>
  <div className="flex gap-1.5 items-center"><img
    src={item.imagePath}
    alt="LOGO"
    className="w-5 h-5 hover:cursor-pointer"
  />
  {item.name}</div>
  <div className="hidden group-hover:flex text-blue-400"><RiPushpinLine size={16} /></div>
</div>))}</div>
  )
}
