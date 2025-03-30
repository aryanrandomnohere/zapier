"use client";
import ZapCell from "@/app/components/ZapCell";
import { useEffect, useRef } from "react";
import AddCell from "../../components/AddCell";
import Modal from "../../ui/Modal";
import SelectItem from "@/app/components/SelectItem";
import { useRecoilState } from "recoil";
import { zapCreateState } from "../../RecoilState/store/zapCreate";
import axios from "axios";
import { ItemType } from "@/app/types";

export default function Page1() {
  const [zapState, setZapState] = useRecoilState(zapCreateState);
  const canvasRef = useRef<HTMLDivElement | null>(null);



  const addCell = (order: number) => {
    setZapState(prev => {
      const updatedActions = [...prev.selectedItems];
      updatedActions.splice(order, 0, { id: "", name: "", imagePath: "" });
      return { ...prev, selectedItems: updatedActions };
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest(".zap-cell")) {
      return;
    }

    setZapState(prev => ({
      ...prev,
      isDragging: true,
      initialPosition: {
        x: e.clientX - prev.position.x,
        y: e.clientY - prev.position.y,
      }
    }));
  };

  const handleMouseUp = () => {
    setZapState(prev => ({ ...prev, isDragging: false }));
  };

  const handleMouseMove = (e: globalThis.MouseEvent) => {
    if (!zapState.isDragging) return;
    const newX = e.clientX - zapState.initialPosition.x;
    const newY = e.clientY - zapState.initialPosition.y;
    setZapState(prev => ({ ...prev, position: { x: newX, y: newY } }));
  };

  function SelectCell(index:number){
    setZapState(prev => ({ ...prev, selectedCell: index }));
    console.log(zapState.selectedCell)
  }

  async function handlePublish(){
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap`,
    {
      triggerId: zapState.selectedItems[0].id,
      triggerMetadata: zapState.selectedItems[0].metadata || {},
      actions: zapState.selectedItems.slice(1).map((item:ItemType) => ({
        actionId: item.id,
        actionMetadata: item.metadata || {},
      })),
    },{
      headers:{
        authorization: `${localStorage.getItem("token")}`
      }
    })
    console.log(response)
  }

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [zapState.isDragging, zapState.initialPosition]);

  return (
    <div className="flex flex-col  min-w-screen min-h-screen overflow-hidden relative bg-stone-200 dot-background">
      <div className="flex flex-col w-full h-10 bg-stone-50 justify-center"> <div className="self-end px-1.5 py-0.5 bg-black/10 text-sm rounded justify-center mr-4 font-semibold hover:bg-black/20 hover:cursor-pointer transition-all duration-300" onClick={handlePublish} >Publish</div></div>
      
      <div
        className={`absolute w-screen h-screen ${zapState.isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        style={{ transform: `translate(${zapState.position.x}px, ${zapState.position.y}px)` }}
        ref={canvasRef}
        onMouseDown={handleMouseDown}
      >
        <div className="absolute flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4">
          <Modal>
            <Modal.Open opens="select">
              <div >
                <ZapCell
                  SelectCell={SelectCell}
                  imagePath={zapState.selectedItems[0]?.imagePath}
                  title={zapState.selectedItems[0]?.name || "Trigger"}
                  subtitle="An event that starts your Zap"
                  order={1}
                />
              </div>
            </Modal.Open>

            <Modal.Window name="select">
              <SelectItem  type="triggers" />
            </Modal.Window>
          </Modal>
          <AddCell handleClick={addCell} index={1} />
          {zapState.selectedItems.length > 0 &&
            zapState.selectedItems.map((item, index) => { 
              if(index === 0) return null
              return(
              <div key={index} className="flex flex-col">
                <div className="zap-cell">
                  <Modal>
                    <Modal.Open opens="select">
                      <div>
                        <ZapCell
                          imagePath={item.imagePath}
                          SelectCell={SelectCell}
                          title={item.name|| "Action"}
                          subtitle="The task your Zap performs"
                          order={index + 1}
                        />
                      </div>
                    </Modal.Open>

                    <Modal.Window name="select">
                      <SelectItem  type="actions" />
                    </Modal.Window>
                  </Modal>
                </div>
                <AddCell handleClick={addCell} index={index+1} />
              </div>
            )})}
        </div>
      </div>
    </div>
  );
}
