import { useRecoilState} from "recoil"
import { zapCreateState } from "../RecoilState/store/zapCreate"
import { selectedItemMetaData } from "../RecoilState/currentZap"
import { SlSizeFullscreen } from "react-icons/sl"
import { RxCross2 } from "react-icons/rx"
import { FiEdit3 } from "react-icons/fi"

export default function SideModal() {
  const [zap,setZapState] = useRecoilState(zapCreateState)
  const [metaData,setMetaData] = useRecoilState(selectedItemMetaData)
  const {index} = metaData;
  if(index == null) return null
  return (
    <div className="min-h-screen
       flex flex-col items-center  w-96 border border-blue-600 z-20 m-2 mt-5 mb-64 transform-all ease-in-out duration-300  bg-white ">
    <div className="flex justify-between w-full items-center bg-blue-300/10">
     
      <div className=" flex items-center gap-1 text-sm font-bold"> 
      <img src={zap.selectedItems[index].imagePath} className=" m-2 w-10 h-10 p-1.5 border border-black/20 bg-white rounded" />
         {index+1}. Select an event <FiEdit3 /></div>
      <div className="flex items-center gap-2 m-2"><SlSizeFullscreen className="font-bold" /><div onClick={()=>setMetaData({index:null,isOpen:false})} className="cursor-pointer"><RxCross2  className="text-lg font-bold" /></div></div>
    </div>
    </div>
  )
}
