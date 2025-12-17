// Add this to your MovableCells component
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
import {
  ZapCreateState,
  zapPositionAtom,
  zoomToFitTriggerAtom,
} from "../../../RecoilState/store/zapCreate";
import { zoomLevelAtom } from "../../../RecoilState/store/zapCreate";

export default function MovableCells({
  zapState,
  loading,
  setZapState,
  setIsFullScreen,
}: {
  zapState: ZapCreateState;
  loading: boolean;
  setIsFullScreen: (isFullscreen: boolean) => void;
  setZapState: SetterOrUpdater<ZapCreateState>;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [currentOffset, setCurrentOffset] = useState({ x: 0, y: 0 });
  const [zoomLevel, setZoomLevel] = useRecoilState(zoomLevelAtom);
  const [zapPosition, setZapPosition] = useRecoilState(zapPositionAtom);
  const [zoomToFitTrigger, setZoomToFitTrigger] =
    useRecoilState(zoomToFitTriggerAtom);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [copiedItem, setCopiedItem] = useState<any>(null);
  const [metaData, setMetaData] = useRecoilState(selectedItemMetaData);
  const setConfigurationId = useSetRecoilState(configureStepDetails);
  const [onStepValue, setOnStep] = useRecoilState(onStep);
  const [isMobile, setIsMobile] = useState(false);

  // Sync currentOffset with global zapPosition state
  useEffect(() => {
    setCurrentOffset(zapPosition);
  }, [zapPosition]);

  // Update global state when currentOffset changes (with debouncing to avoid loops)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setZapPosition(currentOffset);
    }, 10);

    return () => clearTimeout(timeoutId);
  }, [currentOffset.x, currentOffset.y, setZapPosition]);

  // Listen for zoom to fit trigger
  useEffect(() => {
    if (zoomToFitTrigger) {
      performZoomToFit();
      setZoomToFitTrigger(false); // Reset the trigger
    }
  }, [zoomToFitTrigger]);

  // Most robust zoom to fit function
  const performZoomToFit = () => {
    if (!containerRef.current || !contentRef.current) return;

    const optimalZoom = calculateZoomToFit();

    // Get dimensions before any changes
    const dimensions = getContentDimensions();
    if (!dimensions) return;

    const { content, viewport } = dimensions;

    // Calculate new content dimensions at optimal zoom
    const newContentWidth = content.width * optimalZoom;
    const newContentHeight = content.height * optimalZoom;

    // Calculate centering offset
    const centerOffsetX = (viewport.width - newContentWidth) / 2;
    const centerOffsetY = (viewport.height - newContentHeight) / 2;

    // Apply changes simultaneously to prevent visual jumping
    setZoomLevel(optimalZoom);
    setCurrentOffset({
      x: centerOffsetX,
      y: centerOffsetY,
    });

    console.log("Zoom to fit applied:", {
      optimalZoom,
      contentDimensions: content,
      viewportDimensions: viewport,
      newOffset: { x: centerOffsetX, y: centerOffsetY },
    });
  };

  // Function to calculate content dimensions and check if it fits
  const getContentDimensions = () => {
    if (!contentRef.current || !containerRef.current) return null;

    const contentRect = contentRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    return {
      content: {
        width: contentRect.width / zoomLevel, // Actual content width
        height: contentRect.height / zoomLevel, // Actual content height
      },
      container: {
        width: containerRect.width,
        height: containerRect.height,
      },
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    };
  };

  // Function to calculate zoom to fit
  const calculateZoomToFit = () => {
    const dimensions = getContentDimensions();
    if (!dimensions) return 1;

    const { content, viewport } = dimensions;

    // Add padding to ensure content doesn't touch edges
    const padding = 100;
    const availableWidth = viewport.width - padding;
    const availableHeight = viewport.height - padding;

    // Calculate zoom ratios for width and height
    const widthRatio = availableWidth / content.width;
    const heightRatio = availableHeight / content.height;

    // Use the smaller ratio to ensure content fits in both dimensions
    const optimalZoom = Math.min(widthRatio, heightRatio);

    // Clamp between min and max zoom levels
    return Math.max(0.3, Math.min(optimalZoom, 2));
  };

  // Function to check if content fits in viewport
  const doesContentFit = () => {
    const dimensions = getContentDimensions();
    if (!dimensions) return true;

    const { content, viewport } = dimensions;
    const scaledWidth = content.width * zoomLevel;
    const scaledHeight = content.height * zoomLevel;

    return scaledWidth <= viewport.width && scaledHeight <= viewport.height;
  };

  // Remove the old zoomToFit function since we're using performZoomToFit
  // No longer needed since we're using global state

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsFullScreen(mobile ? true : false);
      setZoomLevel(mobile ? 0.7 : 1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setZoomLevel]);

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

  const handleTouchStart = (e: TouchEvent) => {
    if (!e.touches[0]) return;
    const touch = e.touches[0];

    const target = e.target as HTMLElement;
    if (target.closest(".zap-cell")) {
      return;
    }

    setIsDragging(true);
    setInitialPosition({
      x: touch.clientX - currentOffset.x,
      y: touch.clientY - currentOffset.y,
    });
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !e.touches[0]) return;
    const touch = e.touches[0];

    setCurrentOffset({
      x: touch.clientX - initialPosition.x,
      y: touch.clientY - initialPosition.y,
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
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
    const clampedNewZoomLevel = Math.max(0.5, Math.min(newZoomLevel, 2));

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
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchstart", handleTouchStart);

    if (containerRef.current) {
      containerRef.current.addEventListener("wheel", handleWheel, {
        passive: false,
      });
    }

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchStart);

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
      updatedActions.splice(order, 0, { id: "", name: "", imagePath: "" });
      return { ...prev, selectedItems: updatedActions };
    });
  };

  console.log("Zoom level:", zoomLevel);
  console.log("Content fits:", doesContentFit());

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        ref={containerRef}
        className={`fixed w-fit h-fit ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        style={{
          transform: `translate(${currentOffset.x}px, ${currentOffset.y}px) scale(${zoomLevel})`,
          transformOrigin: "0 0",
        }}
        onMouseDown={handleMouseDown}
      >
        <div
          ref={contentRef}
          className="absolute flex flex-col top-1/2 -translate-x-3/6 -translate-y-2/4"
        >
          {loading && (
            <ZapCell
              copiedItem={copiedItem}
              setCopiedItem={setCopiedItem}
              SelectCell={SelectCell}
              loading={loading}
              imagePath={zapState.selectedItems[0]?.imagePath}
              title={zapState.selectedItems[0]?.name || "Trigger"}
              subtitle={
                zapState.selectedItems[0]?.metadata?.fields[0].fieldValue
              }
              order={1}
            />
          )}
          {!loading &&
          !zapState.selectedItems[0]?.imagePath &&
          !zapState.selectedItems[0]?.name ? (
            <Modal>
              <Modal.Open opens="select">
                <div>
                  <ZapCell
                    copiedItem={copiedItem}
                    setCopiedItem={setCopiedItem}
                    SelectCell={SelectCell}
                    loading={loading}
                    imagePath={zapState.selectedItems[0]?.imagePath}
                    title={zapState.selectedItems[0]?.name || "Trigger"}
                    subtitle={
                      zapState.selectedItems[0]?.metadata?.fields[0].fieldValue
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
            !loading && (
              <div
                onClick={() => {
                  if (!metaData.isOpen) {
                    handleSetMetaData(0);
                  }
                }}
              >
                <ZapCell
                  copiedItem={copiedItem}
                  setCopiedItem={setCopiedItem}
                  SelectCell={SelectCell}
                  loading={loading}
                  imagePath={zapState.selectedItems[0]?.imagePath}
                  title={zapState.selectedItems[0]?.name || "Trigger"}
                  subtitle={
                    zapState.selectedItems[0]?.metadata?.fields[0].fieldValue ||
                    "An event that starts your Zap"
                  }
                  order={1}
                />
              </div>
            )
          )}
          <AddCell handleClick={addCell} index={1} />
          {!loading &&
            zapState.selectedItems.length > 0 &&
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
                              loading={loading}
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
                    !loading && (
                      <div onClick={() => handleSetMetaData(index)}>
                        <ZapCell
                          loading={loading}
                          imagePath={item.imagePath}
                          copiedItem={copiedItem}
                          setCopiedItem={setCopiedItem}
                          SelectCell={SelectCell}
                          title={item.name || "Action"}
                          subtitle="The task your Zap performs"
                          order={index + 1}
                        />
                      </div>
                    )
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
