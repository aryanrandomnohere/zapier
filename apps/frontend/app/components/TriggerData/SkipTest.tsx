import Modal from "@/app/ui/Modal";
import React from "react";
import SelectItem from "../ZapCreate/SelectItem";

export default function SkipTest({ handleSkip }: { handleSkip: () => void }) {
  return (
    <Modal>
      <Modal.Open opens={"select"}>
        <button
          onClick={handleSkip}
          className={`w-1/2 bg-blue-700 text-white hover:bg-blue-800" py-2 rounded text-sm font-bold text-center transition-all duration-200 hover:cursor-pointer`}
        >
          Skip test
        </button>
      </Modal.Open>
      <Modal.Window name="select">
        <SelectItem type="actions" index={1} />
      </Modal.Window>
    </Modal>
  );
}
