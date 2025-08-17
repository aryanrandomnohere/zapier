"use client";
import ZapCell from "@/app/components/ZapDashboard/ZapCell";
import { useEffect, useRef, useState } from "react";
import AddCell from "../../../components/ZapCreate/AddCell";
import Modal from "../../../ui/Modal";
import SelectItem from "@/app/components/ZapCreate/SelectItem";
import SideModal from "@/app/ui/SideModal";
// const SideModal = dynamic(() => import("@/app/ui/SideModal"), { ssr: false });
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { zapCreateState } from "../../../RecoilState/store/zapCreate";
import axios from "axios";
import { ItemType, onStepEnum, RecordMetadata } from "@repo/types";
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
import { Play } from "lucide-react";
import { userAtom } from "@/app/RecoilState/store/userAtom";
import { skippedTrigger as skippedTriggerAtom } from "@/app/RecoilState/store/triggerAtom";

export default function CreatePage() {
  const [zapState, setZapState] = useRecoilState(zapCreateState);
  const [metaData, setMetaData] = useRecoilState(selectedItemMetaData);
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const setConfigurationId = useSetRecoilState(configureStepDetails);
  const [onStepValue, setOnStep] = useRecoilState(onStep);
  const setRecords = useSetRecoilState<RecordMetadata[]>(recordsAtom);
  const setSelectedRecordId = useSetRecoilState(selectedRecord);
  const configureId = useRecoilValue(configureStepDetails);
  const [user, setUser] = useRecoilState(userAtom);
  const selectedRecordId = useRecoilValue(selectedRecord);
  const skippedTrigger = useRecoilValue(skippedTriggerAtom);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [copiedItem, setCopiedItem] = useState<ItemType | null>(null);
  const { zapId } = useParams();
  const router = useRouter();
  const addCell = (order: number) => {
    setZapState((prev) => {
      const updatedActions = [...prev.selectedItems];
      //@ts-ignore
      updatedActions.splice(order, 0, { id: "", name: "", imagePath: "" });
      return { ...prev, selectedItems: updatedActions };
    });
  };

  const CheckStepValidity = (
    Index: onStepEnum,
    index?: number,
    specificCongigId?: string | null,
  ) => {
    if (metaData.index === null || metaData.index === undefined) {
      return false;
    }
    const ofIndex = index ?? metaData.index;
    const stepConfigurationId = specificCongigId || configureId;

    const currentStep =
      Index === onStepEnum.CONFIGURATION
        ? zapState.selectedItems[ofIndex]?.metadata.optionConfiguration[
            stepConfigurationId
          ].configurationStep
        : zapState.selectedItems[ofIndex]?.metadata;
    if (!currentStep?.fields) {
      console.log("Field does not exist returnning");
      return false;
    }

    // Check if all required fields in the current step have values
    return currentStep.fields.every((field) => {
      if (field.required) {
        return field.fieldValue && field.fieldValue.trim() !== "";
      }
      return true;
    });
  };

  const checkPublishability = () => {
    let isPublishable = true;
    zapState.selectedItems.map((step, i) => {
      if (
        step.metadata?.fields[0].fieldValue ||
        zapState.selectedItems.length > 1
      ) {
        if (
          !(
            CheckStepValidity(
              onStepEnum.SETUP,
              i,
              step.metadata?.fields[0].fieldValue,
            ) &&
            CheckStepValidity(
              onStepEnum.CONFIGURATION,
              i,
              step.metadata?.fields[0].fieldValue,
            ) &&
            CheckStepValidity(
              onStepEnum.TEST,
              i,
              step.metadata?.fields[0].fieldValue,
            ) &&
            !!selectedRecordId
          )
        )
          isPublishable = false;
      } else {
        isPublishable = false;
      }
    });
    return isPublishable;
  };
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
      if (onStepValue === onStepEnum.TEST) setOnStep(onStepEnum.SETUP);
      setConfigurationId(
        zapState.selectedItems[index].metadata?.fields[0].fieldValue,
      );
    } else {
      setConfigurationId("");
      setOnStep(onStepEnum.SETUP);
    }

    setZapState((prev) => ({ ...prev, selectedCell: index }));
  }

  async function handlePublish() {
    console.log({
      triggerId: zapState.selectedItems[0].id,
      zapId: Number(zapId),
      userId: Number(user?.userId || 8),
      triggerConfiguration: zapState.selectedItems[0].metadata || {},
      actions: zapState.selectedItems.slice(1).map((item: ItemType) => ({
        actionId: item.id,
        configuration: item.metadata,
      })),
    });
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/publish`,
      {
        triggerId: zapState.selectedItems[0].id,
        zapId: Number(zapId),
        userId: Number(user?.userId || 8),
        triggerConfiguration: zapState.selectedItems[0].metadata || {},
        actions: zapState.selectedItems.slice(1).map((item: ItemType) => ({
          actionId: item.id,
          stepId: item.stepId,
          configuration: item.metadata,
        })),
      },
      {
        withCredentials: true,
      },
    );
    if (response.data.zapId) {
      router.push("/zap/dashboard");
    }
  }

  function handleTest() {
    console.log("Testing the zap");
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
        {
          withCredentials: true,
        },
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
      if (!user) {
        const session = await getSession();
        setUser(session?.user);
      }
    }
    handleLoadZap();
  }, []);
  return (
    <>
      <div
        className="flex  w-full  bg-[#FFFDF9] border-b border-zinc-200 justify-end items-center"
        id=" zap-create "
      >
        {" "}
        {/* <ActionButton disabled={checkStack()}>
          <div className="flex gap-2">
            {" "}
            <Undo size={18} /> Undo
          </div>
        </ActionButton>
        <ActionButton disabled={true}>
          <ClockFadingIcon size={18} />{" "}
        </ActionButton> */}
        <ActionButton disabled={checkPublishability()} onClick={handleTest}>
          <div className="flex gap-2">
            {" "}
            <Play size={18} /> Test Run
          </div>
        </ActionButton>
        <ActionButton disabled={checkPublishability()} onClick={handlePublish}>
          Publish
        </ActionButton>
      </div>
      <div className="flex flex-col w-full h-[calc(100vh-5.6rem)] overflow-hidden relative bg-[rgb(249,247,243)] dot-background-alt">
        {metaData.isOpen && (
          <div
            className={` fixed flex max-w-[35rem] min-h-4/5 max-h-4/5 right-2 z-50  mt-4 ${isFullScreen ? "justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" : ""}`}
          >
            <SideModal
              CheckStepValidity={CheckStepValidity}
              handlePublish={handlePublish}
              isFullScreen={isFullScreen}
              setIsFullScreen={setIsFullScreen}
            />
          </div>
        )}

        <div
          className={`absolute w-screen  h-full ${zapState.isDragging ? "cursor-grabbing" : "cursor-grab"}`}
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
                      copiedItem={copiedItem}
                      setCopiedItem={setCopiedItem}
                      SelectCell={SelectCell}
                      loading={false}
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
                  copiedItem={copiedItem}
                  setCopiedItem={setCopiedItem}
                  SelectCell={SelectCell}
                  loading={false}
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
                                loading={false}
                                imagePath={item.imagePath}
                                copiedItem={copiedItem}
                                setCopiedItem={setCopiedItem}
                                SelectCell={SelectCell}
                                title={item.name || "Action"}
                                subtitle={
                                  zapState.selectedItems[index].metadata
                                    ?.fields[0].fieldValue ||
                                  "The task your Zap performs"
                                }
                                order={index + 1}
                              />
                            </div>
                          </Modal.Open>

                          <Modal.Window name="select">
                            <SelectItem
                              type="actions"
                              index={index}
                              insertingOrNew={
                                index === zapState.selectedItems.length - 1
                                  ? "new"
                                  : "inserting"
                              }
                            />
                          </Modal.Window>
                        </Modal>
                      </div>
                    ) : (
                      <div onClick={() => handleSetMetaData(index)}>
                        {" "}
                        <ZapCell
                          loading={false}
                          imagePath={item.imagePath}
                          copiedItem={copiedItem}
                          setCopiedItem={setCopiedItem}
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
