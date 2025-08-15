"use client";
import { lazy, useCallback, useEffect, useRef, useState } from "react";
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
import ZapCellModal from "./ZapCellModal";
const ZapCell = lazy(() => import("@/app/components/ZapDashboard/ZapCell"));
const SideModal = lazy(() => import("@/app/ui/SideModal"));
const AddCell = lazy(() => import("../../../components/ZapCreate/AddCell"));


export default function CreatePage() {
  const [zapState, setZapState] = useRecoilState(zapCreateState);
  const [metaData, setMetaData] = useRecoilState(selectedItemMetaData);
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(false);
  const setConfigurationId = useSetRecoilState(configureStepDetails);
  const [onStepValue, setOnStep] = useRecoilState(onStep);
  const setRecords = useSetRecoilState<RecordMetadata[]>(recordsAtom);
  const setSelectedRecordId = useSetRecoilState(selectedRecord);
  const configureId = useRecoilValue(configureStepDetails);
  const [user, setUser] = useRecoilState(userAtom);
  const selectedRecordId = useRecoilValue(selectedRecord);
  const { zapId } = useParams();
  const router = useRouter();


  const addCell = useCallback((order: number) => {
    setZapState((prev) => {
      const updatedActions = [...prev.selectedItems];
      //@ts-ignore
      updatedActions.splice(order, 0, { id: "", name: "", imagePath: "" });
      return { ...prev, selectedItems: updatedActions };
    });
  }, [zapState, setZapState]);

  const CheckStepValidity = useCallback((
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
  }, [metaData, zapState, configureId]);

  const checkPublishability = useCallback(() => {
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
  }, [CheckStepValidity, zapState]);
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
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
  }, [zapState, setZapState]);

  const handleMouseUp = useCallback(() => {
    setZapState((prev) => ({ ...prev, isDragging: false }));
  }, [setZapState]);

  const handleMouseMove = useCallback((e: globalThis.MouseEvent) => {
    if (!zapState.isDragging) return;
    const newX = e.clientX - zapState.initialPosition.x;
    const newY = e.clientY - zapState.initialPosition.y;
    setZapState((prev) => ({ ...prev, position: { x: newX, y: newY } }));
  }, [zapState, setZapState]);

  const SelectCell = useCallback((index: number) => {
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
  }, [setMetaData, setConfigurationId, setOnStep, setZapState]);

  const handlePublish = useCallback(async () => { 
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
  }, [zapState, zapId, user, router]);

  const handleTest = useCallback(() => {  
    console.log("Testing the zap");
  }, [zapState]);

  const handleSetMetaData = useCallback((index: number) => {  
    setMetaData((prev) => ({ ...prev, isOpen: true, index: index }));
  }, [setMetaData]);

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [zapState.isDragging, zapState.initialPosition]);

  useEffect(() => {
    const handleLoadZap = async () => {
      setLoading(true);
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
      setLoading(false);
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
          <div className=" fixed flex max-w-96 min-h-4/5 max-h-4/5   right-2 z-50 transform-all duration-300 mt-4">
            <SideModal
              CheckStepValidity={CheckStepValidity}
                handlePublish={handlePublish}
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
              // <Modal>
              //   <Modal.Open opens="select">
              //     <div>
              //       <ZapCell
              //         loading={loading}
              //         SelectCell={SelectCell}
              //         imagePath={zapState.selectedItems[0]?.imagePath}
              //         title={zapState.selectedItems[0]?.name || "Trigger"}
              //         subtitle={
              //           zapState.selectedItems[0]?.metadata?.fields[0]
              //             .fieldValue || "An event that starts your Zap"
              //         }
              //         order={1}
              //       />
              //     </div>
              //   </Modal.Open>

              //   <Modal.Window name="select">
              //     <SelectItem type="triggers" />
              //   </Modal.Window>
              // </Modal>
              <ZapCellModal
  loading={loading}
  SelectCell={SelectCell}
  imagePath={zapState.selectedItems[0]?.imagePath}
  title={zapState.selectedItems[0]?.name || "Trigger"}
  subtitle={
    zapState.selectedItems[0]?.metadata?.fields[0].fieldValue || 
    "An event that starts your Zap"
  }
  order={1}
  type="triggers"
/>
            ) : (
              <div onClick={() => handleSetMetaData(0)}>
                {" "}
                <ZapCell
                  loading={loading}
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
                       
                         <ZapCellModal
    key={index}
    loading={loading}
    SelectCell={SelectCell}
    imagePath={item.imagePath}
    title={item.name || "Action"}
    subtitle={
      zapState.selectedItems[index + 1]?.metadata?.fields[0]?.fieldValue ||
      "The task your Zap performs"
    }
    order={index + 2}
    type="actions"
  />
                      </div>
                    ) : (
                      <div onClick={() => handleSetMetaData(index)}>
                        {" "}
                        <ZapCell
                          loading={loading}
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
