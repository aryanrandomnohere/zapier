const AddCell = lazy(() => import("../../../components/ZapCreate/AddCell"));
const SelectItem = lazy(() => import("@/app/components/ZapCreate/SelectItem"));
const ZapCell = lazy(() => import("@/app/components/ZapDashboard/ZapCell"));
import { SetterOrUpdater, useRecoilState, useSetRecoilState } from "recoil";
import Modal from "../../../ui/Modal";
import { lazy, useEffect, useRef, useState } from "react";
import {
  configureStepDetails,
  onStep,
  selectedItemMetaData,
} from "@/app/RecoilState/currentZap";
import { onStepEnum } from "@repo/types";
import { ZapCreateState } from "../../../RecoilState/store/zapCreate";
export default function MovableCells({
  zapState,
  setZapState,
}: {
  zapState: ZapCreateState;
  setZapState: SetterOrUpdater<ZapCreateState>;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [currentOffset, setCurrentOffset] = useState({ x: 0, y: 0 });
  const [zoomLevel, setZoomLevel] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [copiedItem, setCopiedItem] = useState<any>(null);
  const [metaData, setMetaData] = useRecoilState(selectedItemMetaData);
  const setConfigurationId = useSetRecoilState(configureStepDetails);
  const [onStepValue, setOnStep] = useRecoilState(onStep);

  const handleMouseDown = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest(".zap-cell")) {
      return;
    }
    setIsDragging(true);
    setInitialPosition({
      x: e.clientX - currentOffset.x,
      y: e.clientY - currentOffset.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  function handleSetMetaData(index: number) {
    setMetaData((prev) => ({ ...prev, isOpen: true, index: index }));
  }

  const handleMouseMove = (e: globalThis.MouseEvent) => {
    if (!isDragging) return;
    setCurrentOffset({
      x: e.clientX - initialPosition.x,
      y: e.clientY - initialPosition.y,
    });
  };

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();

    const scaleAmount = 0.1;
    const newZoomLevel =
      e.deltaY > 0 ? zoomLevel - scaleAmount : zoomLevel + scaleAmount;
    const clampedNewZoomLevel = Math.max(0.5, Math.min(newZoomLevel, 2)); // Clamp between 0.5x and 2x

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const contentX = (mouseX - currentOffset.x) / zoomLevel;
      const contentY = (mouseY - currentOffset.y) / zoomLevel;

      const newOffsetX = mouseX - contentX * clampedNewZoomLevel;
      const newOffsetY = mouseY - contentY * clampedNewZoomLevel;

      setZoomLevel(clampedNewZoomLevel);
      setCurrentOffset({ x: newOffsetX, y: newOffsetY });
    }
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    if (containerRef.current) {
      containerRef.current.addEventListener("wheel", handleWheel, {
        passive: false,
      });
    }
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      if (containerRef.current) {
        containerRef.current.removeEventListener("wheel", handleWheel);
      }
    };
  }, [isDragging, initialPosition, zoomLevel, currentOffset]);

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

    setZapState((prev: ZapCreateState) => ({ ...prev, selectedCell: index }));
  }
  const addCell = (order: number) => {
    setZapState((prev: ZapCreateState) => {
      const updatedActions = [...prev.selectedItems];
      //@ts-ignore
      updatedActions.splice(order, 0, { id: "", name: "", imagePath: "" });
      return { ...prev, selectedItems: updatedActions };
    });
  };

  return (
    <div className=" flex items-center justify-center w-full h-full">
      <div
        ref={containerRef}
        className={`fixed  w-fit  h-fit ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        style={{
          transform: `translate(${currentOffset.x}px, ${currentOffset.y}px) scale(${zoomLevel})`,
          transformOrigin: "0 0",
        }}
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
            <div
              onClick={() => {
                if (!metaData.isOpen) {
                  handleSetMetaData(0);
                }
              }}
            >
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
  );
}
