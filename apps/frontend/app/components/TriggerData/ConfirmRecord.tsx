import Modal from "@/app/ui/Modal";
import SelectItem from "../SelectItem";

export default function ConfirmRecord() {
  return (
    <div>
      <Modal>
        {" "}
        <Modal.Open opens="select">
          {" "}
          <div className="w-full border-t border-black/10 self-start justify-start">
            {" "}
            <div className="flex gap-1 w-full my-4 px-2 ">
              <button className="  px-2 w-full bg-blue-700 text-white hover:bg-blue-800 cursor-not-allowed py-2 rounded text-sm font-bold text-center transition-all duration-200 hover:cursor-pointer">
                {" "}
                Continue with selected record
              </button>{" "}
            </div>
          </div>
        </Modal.Open>
        <Modal.Window name="select">
          <SelectItem type="actions" />
        </Modal.Window>
      </Modal>
    </div>
  );
}
