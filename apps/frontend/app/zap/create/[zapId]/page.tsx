"use client";
import ZapCell from "@/app/components/ZapDashboard/ZapCell";
import { useEffect, useRef, useState } from "react";
import AddCell from "../../../components/ZapCreate/AddCell";
import Modal from "../../../ui/Modal";
import SelectItem from "@/app/components/ZapCreate/SelectItem";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { zapCreateState } from "../../../RecoilState/store/zapCreate";
import axios from "axios";
import { ItemType, onStepEnum, RecordMetadata } from "@repo/types";
import SideModal from "@/app/ui/SideModal";
import {
  configureStepDetails,
  onStep,
  selectedItemMetaData,
} from "@/app/RecoilState/currentZap";
import { useParams } from "next/navigation";
import { getSession } from "next-auth/react";
import {
  recordsAtom,
  selectedRecord,
} from "@/app/RecoilState/store/recordsAtom";
import { useRouter } from "next/navigation";
import ActionButton from "@/app/components/buttons/ActionButton";
import { ClockFadingIcon, Play, Undo } from "lucide-react";
import { userAtom } from "@/app/RecoilState/store/userAtom";
export default function Page1() {
  const [zapState, setZapState] = useRecoilState(zapCreateState);
  const [metaData, setMetaData] = useRecoilState(selectedItemMetaData);
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const setConfigurationId = useSetRecoilState(configureStepDetails);
  const setOnStep = useSetRecoilState(onStep);
  const setRecords = useSetRecoilState<RecordMetadata[]>(recordsAtom);
  const setSelectedRecordId = useSetRecoilState(selectedRecord);
  const [user, setUser] = useRecoilState(userAtom)
  const { zapId } = useParams();
  const router = useRouter();
  const addCell = (order: number) => {
    setZapState((prev) => {
      const updatedActions = [...prev.selectedItems];
      updatedActions.splice(order, 0, { id: "", name: "", imagePath: "" });
      return { ...prev, selectedItems: updatedActions };
    });
  };

  const handleCloseSideModal = (index: number | null, isOpen: boolean) => {
    setMetaData(() => ({ index, isOpen }));
  };
  const checkStack = ()=>{
    return false;
  }
  const checkPublishability = ()=>{
      return true;
  }
  const handleMouseDown = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest(".zap-cell")) {
      return;
    }

    setZapState((prev) => ({
      ...prev,
      isDragging: true,
      initialPosition: {
        x: e.clientX - prev.position.x,
        y: e.clientY - prev.position.y,
      },
    }));
  };

  const handleMouseUp = () => {
    setZapState((prev) => ({ ...prev, isDragging: false }));
  };

  const handleMouseMove = (e: globalThis.MouseEvent) => {
    if (!zapState.isDragging) return;
    const newX = e.clientX - zapState.initialPosition.x;
    const newY = e.clientY - zapState.initialPosition.y;
    setZapState((prev) => ({ ...prev, position: { x: newX, y: newY } }));
  };

  function SelectCell(index: number) {
    setMetaData((prev) => {
      return { ...prev, index };
    });
    if (
      zapState.selectedItems[index]?.metadata &&
      zapState.selectedItems[index].metadata?.fields[0].fieldValue
    ) {
      console.log(
        "Setting seelcted configuration Id",
        zapState.selectedItems[index].metadata?.fields[0].fieldValue,
      );
      setConfigurationId(
        zapState.selectedItems[index].metadata?.fields[0].fieldValue,
      );
    } else {
      console.log("Configuration id does not exizst");
      setConfigurationId("");
      setOnStep(onStepEnum.SETUP);
    }

    setZapState((prev) => ({ ...prev, selectedCell: index }));
  }

  async function handlePublish() {
    console.log(user?.userId)
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/publish`,
      {
        triggerId: zapState.selectedItems[0].id,
        zapId: Number(zapId),
        userId: Number(user?.userId || 8),
        triggerConfiguration: zapState.selectedItems[0].metadata || {}, 
        actions: zapState.selectedItems.slice(1).map((item: ItemType) => ({
          actionId: item.id,
          configuration: item.metadata,
        })),
      },
      {
        headers: {
          authorization: `${localStorage.getItem("token")}`,
        },
      },
    );
    console.log(response);
    if (response.data.zapId) {
      router.push("/dashboard");
    }
  }

  function handleSetMetaData(index: number) {
    setMetaData((prev) => ({ ...prev, isOpen: true, index: index }));
  }

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [zapState.isDragging, zapState.initialPosition]);

  useEffect(() => {
    async function handleLoadZap() {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/loadzap/${zapId}`,
      );
      setSelectedRecordId(response.data.RecordId);
      setRecords(response.data.records);
      setZapState((prev) => {
        let newZap = { ...prev };
        let newItems = { ...newZap.selectedItems };
        newItems = response.data.finalZap;
        newZap = { ...newZap, selectedItems: newItems };
        return newZap;
      });
    if(!user) { 
       const session = await getSession();
       setUser(session?.user)
    }
    }
    handleLoadZap();
  }, []);
  return (
    <>
      <div className="flex  w-full  bg-stone-50 justify-end items-center">
        {" "}
       <ActionButton disabled={checkStack()} ><div className="flex gap-2"> <Undo size={18} /> Undo</div></ActionButton>
        <ActionButton disabled={true}><ClockFadingIcon size={18}/> </ActionButton>
        <ActionButton disabled={checkPublishability()} >
          <div className="flex gap-2"> <Play size={18} /> Test Run</div>
        </ActionButton>
        <ActionButton disabled={checkPublishability()} onClick={handlePublish}>Publish</ActionButton>
      </div>
      <div className="flex flex-col w-full h-[calc(100vh-5.6rem)] overflow-hidden relative bg-stone-200 dot-background">
        {metaData.isOpen && (
          <div className=" fixed flex max-w-96 min-h-4/5 max-h-4/5   right-2 z-50 transform-all duration-300 mt-4">
            <SideModal
              index={metaData.index || 0}
              setMetaData={handleCloseSideModal}
              handlePublish={handlePublish}
            />
          </div>
        )}

        <div
          className={`absolute w-screen h-full ${zapState.isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          style={{
            transform: `translate(${zapState.position.x}px, ${zapState.position.y}px)`,
          }}
          ref={canvasRef}
          onMouseDown={handleMouseDown}
        >
          <div className="absolute flex flex-col top-1/2 left-4/9  -translate-x-2/6 -translate-y-2/4">
            {!zapState.selectedItems[0]?.imagePath &&
            !zapState.selectedItems[0]?.name ? (
              <Modal>
                <Modal.Open opens="select">
                  <div>
                    <ZapCell
                      SelectCell={SelectCell}
                      imagePath={zapState.selectedItems[0]?.imagePath}
                      title={zapState.selectedItems[0]?.name || "Trigger"}
                      subtitle={
                        zapState.selectedItems[0]?.metadata?.fields[0]
                          .fieldValue || "An event that starts your Zap"
                      }
                      order={1}
                    />
                  </div>
                </Modal.Open>

                <Modal.Window name="select">
                  <SelectItem type="triggers" />
                </Modal.Window>
              </Modal>
            ) : (
              <div onClick={() => handleSetMetaData(0)}>
                {" "}
                <ZapCell
                  SelectCell={SelectCell}
                  imagePath={zapState.selectedItems[0]?.imagePath}
                  title={zapState.selectedItems[0]?.name || "Trigger"}
                  subtitle={
                    zapState.selectedItems[0]?.metadata?.fields[0].fieldValue ||
                    "An event that starts your Zap"
                  }
                  order={1}
                />
              </div>
            )}
            <AddCell handleClick={addCell} index={1} />
            {zapState.selectedItems.length > 0 &&
              zapState.selectedItems.map((item, index) => {
                if (index === 0) return null;
                return (
                  <div key={index} className="flex flex-col">
                    {!zapState.selectedItems[index]?.imagePath &&
                    !zapState.selectedItems[index]?.name ? (
                      <div className="zap-cell">
                        <Modal>
                          <Modal.Open opens="select">
                            <div>
                              <ZapCell
                                imagePath={item.imagePath}
                                SelectCell={SelectCell}
                                title={item.name || "Action"}
                                subtitle="The task your Zap performs"
                                order={index + 1}
                              />
                            </div>
                          </Modal.Open>

                          <Modal.Window name="select">
                            <SelectItem type="actions" />
                          </Modal.Window>
                        </Modal>
                      </div>
                    ) : (
                      <div onClick={() => handleSetMetaData(index)}>
                        {" "}
                        <ZapCell
                          imagePath={item.imagePath}
                          SelectCell={SelectCell}
                          title={item.name || "Action"}
                          subtitle="The task your Zap performs"
                          order={index + 1}
                        />
                      </div>
                    )}
                    <AddCell handleClick={addCell} index={index + 1} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
