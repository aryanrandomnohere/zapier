"use client";
import ZapCell from "@/app/components/ZapCell";
import { MouseEvent, useEffect, useRef, useState } from "react";
import AddCell from "../../components/AddCell";
import Modal from "../../ui/Modal";
import SelectItem from "@/app/components/SelectItem";
interface ActionType {
  ActionTitle: string;
  ActionSubtitle: string;
}

interface TriggerType {
  TriggerTitle: string;
  TriggerSubtitle: string;
}

export default function Page1() {
  const [selectedTrigger, setSelectedTrigger] = useState<TriggerType>();
  const [selectedActions, setSelectedActions] = useState<ActionType[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [initailPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const addCell = (order: number) => {
    setSelectedActions((prev) => {
      const updatedActions = [...prev];
      updatedActions.splice(order, 0, { ActionSubtitle: "", ActionTitle: "" });
      return updatedActions;
    });
  };

  const handleMouseDown = (e) => {
    // Only allow dragging when clicking on the background, not on ZapCells
    if (e.target.closest(".zap-cell")) {
      return;
    }
    console.log(
      "On mouse down",
      "Mouse Event:",
      e.clientX,
      e.clientY,
      "CurrnetPosition:",
      position.x,
      position.y,
    );
    setIsDragging(true);
    setInitialPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    console.log(
      "Changed Position",
      e.clientX,
      e.clientY,
      "Inital Position",
      initailPosition.x,
      initailPosition.y,
    );
    const newX = e.clientX - initailPosition.x;
    const newY = e.clientY - initailPosition.y;
    setPosition({ x: newX, y: newY });
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging, initailPosition]);

  return (
    <div className="min-w-screen min-h-screen overflow-hidden relative bg-stone-200  dot-background  ">
      <div
        className={`absolute w-screen h-screen ${isDragging ? "cursor-grabbing " : "cursor-grab"}`}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        ref={canvasRef}
        onMouseDown={handleMouseDown}
      >
        <div className="absolute flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 ">
          <Modal>
            <Modal.Open opens="select">
              <div>
                <ZapCell
                  title={selectedTrigger?.TriggerTitle || "Trigger"}
                  subtitle={
                    selectedTrigger?.TriggerSubtitle ||
                    "An event that starts your Zap"
                  }
                  order={1}
                />
              </div>
            </Modal.Open>

            <Modal.Window name="select">
              <SelectItem />
            </Modal.Window>
          </Modal>
          <AddCell handleClick={() => addCell(2)} />
          {selectedActions.length > 0 &&
            selectedActions.map((action, index) => (
              <div key={index} className="flex flex-col">
                <div className="zap-cell">
                  {" "}
                  <Modal>
            <Modal.Open opens="select">
              <div>
                  <ZapCell
                    title={action.ActionTitle || "Action"}
                    subtitle={
                      action.ActionSubtitle || "The task your Zap performs "
                    }
                    order={index + 2}
                  />
                  </div>
            </Modal.Open>

            <Modal.Window name="select">
              <SelectItem />
            </Modal.Window>
          </Modal>
                </div>{" "}
                <AddCell handleClick={() => addCell(index + 2)} />{" "}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
