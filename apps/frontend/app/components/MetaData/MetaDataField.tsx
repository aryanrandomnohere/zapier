"use client";
import {
  configureStepDetails,
  onStep,
  OptionChanged,
} from "@/app/RecoilState/currentZap";
import { Field, FieldOption, onStepEnum, SessionType } from "@repo/types";
import { useEffect, useRef, useState } from "react";
import { BiSolidZap } from "react-icons/bi";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import FloatingModal from "../../ui/FloatingModal";
import { Plus } from "lucide-react";
import DittoComponent from "./SelectActionField";
import { userAtom } from "@/app/RecoilState/store/userAtom";
import { useParams } from "next/navigation";

interface MetaDataFieldProps {
  field: Field;
  onFieldChange: (fieldNumber: number, value: string, type: onStepEnum) => void;
  type: string;
  setEditingField: (fieldId: string) => void;
  selectedField: string;
  imagePath: string;
  id: string;
}

export default function MetaDataField({
  field,
  onFieldChange,
  type,
  selectedField,
  setEditingField,
  imagePath,
  id,
}: MetaDataFieldProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectFieldIsOpen, setSelectFieldIsOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [value, setValue] = useState(field.fieldValue);
  const inputRef = useRef<HTMLInputElement>(null);
  const [configureStepIndex, setConfigureStepIndex] =
    useRecoilState(configureStepDetails);
  const setOptionChanged = useSetRecoilState(OptionChanged);
  const stepIndex = useRecoilValue(onStep);
  const user = useRecoilValue(userAtom);
  const { zapId } = useParams();
  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (field.fieldNumber === 0) return;
      if (event.origin !== window.location.origin) return;

      if (event.data?.status === "oauth-success") {
        const { email, name, picture } = event.data;
        console.log(field);
        onFieldChange(field.fieldNumber, email, onStepEnum.SETUP);

        // Optional: Save to backend, or trigger something
        console.log("User info received:", event.data);
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  if (
    type === "trigger" &&
    id === "email" &&
    stepIndex === onStepEnum.CONFIGURATION
  ) {
    if (!user) return;
    const placeholder = `.${user.zapmail}${field.fieldPlaceholder}`;
    return (
      <div className="flex iw-full max-w-sm">
        <div>
          <div className="flex gap-1 text-xs font-bold">
            {field.fieldLabel}{" "}
            {field.required && <div className="text-red-400">*</div>}
          </div>
          <div className="flex items-center border border-gray-300 rounded px-3 py-1 bg-white">
            <input
              ref={inputRef}
              onClick={() => setEditingField("")}
              type={field.fieldInputType}
              value={value?.split("@")[0] || ""}
              onChange={(e) => {
                if (stepIndex == onStepEnum.CONFIGURATION) {
                  onFieldChange(
                    field.fieldNumber,
                    e.target.value + placeholder,
                    onStepEnum.CONFIGURATION,
                  );
                  setValue(e.target.value);
                  console.log(field.fieldValue);
                } else {
                  onFieldChange(
                    field.fieldNumber,
                    e.target.value,
                    onStepEnum.SETUP,
                  );
                }
              }}
              className={`relative px-0.5 py-1 border outline-none border-black/20 rounded w-full text-sm hover:border-blue-500 focus:border-blue-500 flex-1 border-none  bg-transparent placeholder-gray-400 `}
              required={field.required}
            />
            <span className="text-gray-500 select-none text-xs">
              {placeholder}
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (field.fieldInputType === "dropdown") {
    return (
      <div className="relative flex flex-col gap-1 w-full">
        <div className="flex gap-1 text-xs font-bold">
          {field.fieldLabel}{" "}
          {field.required && <div className="text-red-400">*</div>}
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex justify-between items-center px-3 py-2 border border-black/20 rounded hover:border-blue-500 cursor-pointer"
        >
          <div className="flex items-center gap-2 text-xs font-medium">
            {field.fieldValue || field.fieldPlaceholder}
          </div>
          <div className="text-xs text-gray-500">
            <div className="text-black/50 rotate-90">
              <FaArrowRightArrowLeft />
            </div>
          </div>
          {isOpen && (
            <FloatingModal>
              <div className="p-2">
                <div className="flex items-center gap-2 px-2 py-1.5 bg-white mb-3.5 border border-black/20 rounded focus:border focus:border-blue-600">
                  <div className="text-gray-500">
                    <IoSearch size={16} />
                  </div>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="outline-none w-full text-sm "
                  />
                </div>
              </div>
              <div className="max-h-60 ">
                {field.options
                  ?.filter((option) =>
                    option.id.toLowerCase().includes(searchTerm.toLowerCase()),
                  )
                  .map((option: FieldOption, index: number) => (
                    <div
                      key={index}
                      onClick={() => {
                        if (stepIndex == onStepEnum.CONFIGURATION)
                          onFieldChange(
                            field.fieldNumber,
                            option.id,
                            onStepEnum.CONFIGURATION,
                          );
                        else
                          onFieldChange(
                            field.fieldNumber,
                            option.id,
                            onStepEnum.SETUP,
                          );
                        setIsOpen(false);
                        setOptionChanged((option) => option++);
                        if (stepIndex === onStepEnum.SETUP)
                          setConfigureStepIndex(option.id);
                      }}
                      className="flex flex-col gap-0.5 mb-2 mx-3 px-3 py-1.5  hover:bg-blue-50 cursor-pointer text-xs font-medium"
                    >
                      <div className="flex items-center gap-1 font-semibold">
                        {option.id}
                        <div className="flex items-center gap-1 text-xs font-semibold bg-yellow-500/20 rounded px-1">
                          {" "}
                          <div className="border border-black rounded-full p-[0.5px]">
                            <BiSolidZap size={11} />{" "}
                          </div>
                          {option.type}
                        </div>
                      </div>
                      <div>{option.description}</div>
                    </div>
                  ))}
              </div>
            </FloatingModal>
          )}
        </div>
      </div>
    );
  }
  console.log(
    "selected",
    selectedField,
    "passed",
    field.fieldLabel,
    selectedField === field.fieldLabel,
  );
  console.log(selectFieldIsOpen);
  console.log(stepIndex !== onStepEnum.SETUP);
  console.log(type === "action");

  if (field.fieldInputType === "text") {
    return (
      <div className="flex flex-col gap-1 relative w-full">
        <div className="flex gap-1 text-xs font-bold">
          {field.fieldLabel}{" "}
          {field.required && <div className="text-red-400">*</div>}
        </div>
        <input
          ref={inputRef}
          onClick={() => setEditingField("")}
          type={field.fieldInputType}
          placeholder={field.fieldPlaceholder}
          value={field.fieldValue || ""}
          onChange={(e) => {
            if (stepIndex == onStepEnum.CONFIGURATION)
              onFieldChange(
                field.fieldNumber,
                e.target.value,
                onStepEnum.CONFIGURATION,
              );
            else
              onFieldChange(
                field.fieldNumber,
                e.target.value,
                onStepEnum.SETUP,
              );
          }}
          className={`relative px-3 py-1.5 ${type != "action" ? "pr-9" : ""} border border-black/20 rounded w-full text-sm hover:border-blue-500 focus:border-blue-500 outline-none`}
          required={field.required}
        />
        {selectedField === field.fieldLabel &&
          selectFieldIsOpen &&
          stepIndex !== onStepEnum.SETUP &&
          type === "action" && (
            <FloatingModal>
              <DittoComponent
                setValue={setValue}
                fieldLabel={field.fieldLabel}
                imagePath={imagePath}
                fieldNumber={field.fieldNumber}
                currentStep={onStepEnum.CONFIGURATION}
                currentValue={field.fieldValue || ""}
                cursorPosition={
                  inputRef.current?.selectionStart ||
                  inputRef.current?.selectionEnd ||
                  field.fieldValue?.length ||
                  0
                }
                onFieldChange={onFieldChange}
              />
            </FloatingModal>
          )}
        {selectFieldIsOpen &&
          stepIndex !== onStepEnum.SETUP &&
          type === "action" && (
            <div
              onClick={() => {
                if (selectedField === field.fieldLabel) setEditingField("");
                else setEditingField(field.fieldLabel);
              }}
              className="absolute right-1.5 bottom-[5.5px] rounded p-0.5 focus hover:cursor-pointer border border-gray-600/30 hover:bg-black/10 text-gray-600/80 "
            >
              <Plus size={18} />
            </div>
          )}
      </div>
    );
  }

  if (field.fieldInputType === "connection") {
    return (
      <>
        <div className="flex flex-col gap-1 relative w-full">
          <div className="flex gap-1 text-xs font-bold">
            {field.fieldLabel}{" "}
            {field.required && <div className="text-red-400">*</div>}
          </div>
          <div className="flex justify-between items-center px-3 py-2 border border-black/20 rounded hover:border-blue-500 cursor-pointer">
            <div className="flex items-center gap-2 text-xs font-medium">
              {field.fieldValue || field.fieldPlaceholder}
            </div>
            <div className="text-xs text-gray-500">
              {!!!field.fieldValue ? (
                <button
                  onClick={() => {
                    console.log(user?.id);
                    const popup = window.open(
                      `/api/oauth/google/start?userId=${user?.id || "2"}&zapId=${zapId}`,
                      "oauthPopup",
                      "width=500,height=600",
                    );

                    // Optional: Poll until the popup closes
                    const interval = setInterval(() => {
                      if (popup?.closed) {
                        clearInterval(interval);
                        // Refetch data or update UI
                        console.log("OAuth popup closed");
                        // window.location.reload(); or update state
                      }
                    }, 500);
                  }}
                  className="text-blue-500 text-xs border border-black/20 rounded px-2 py-[1px] hover:bg-gray-100 font-bold hover:cursor-pointer"
                >
                  Sign in
                </button>
              ) : (
                <button
                  onClick={() => {
                    console.log(user?.id);
                    const popup = window.open(
                      `/api/oauth/google/start?userId=${user?.id || "2"}&zapId=${zapId}`,
                      "oauthPopup",
                      "width=500,height=600",
                    );

                    // Optional: Poll until the popup closes
                    const interval = setInterval(() => {
                      if (popup?.closed) {
                        clearInterval(interval);
                        // Refetch data or update UI
                        console.log("OAuth popup closed");
                        // window.location.reload(); or update state
                      }
                    }, 500);
                  }}
                  className="text-blue-500 text-xs border border-black/20 rounded px-2 py-[1px] hover:bg-gray-100 font-bold hover:cursor-pointer"
                >
                  Change
                </button>
              )}
            </div>
          </div>
          <div className="text-sm mt-6">{field.fieldDescription}</div>
        </div>
      </>
    );
  }
  console.log(field);
  return (
    <div className="flex flex-col relative w-full">
      <div className="flex gap-1 text-xs font-bold">
        {field.fieldLabel} <div className="text-red-400">*</div>
      </div>
      <input
        type={field.fieldInputType}
        placeholder={field.fieldPlaceholder}
        // defaultValue={field.fieldValue || undefined}
        onChange={(e) => {
          onFieldChange(field.fieldNumber, e.target.value, onStepEnum.SETUP);
          setValue(e.target.value);
        }}
        className="px-3 py-2 border border-black/20 rounded w-full text-sm hover:border-blue-500 focus:border-blue-500 outline-none"
        required={field.required}
      />
    </div>
  );
}
