"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaSquare } from "react-icons/fa6";
import { itemTestMetaData, onStepEnum, RecordMetadata } from "@repo/types";
import { mockRecords } from "./mockdata";
import { RecordItem } from "./RecordItem";
import Task from "../BuiltInTriggers/Task";
import { useRecoilState, useSetRecoilState } from "recoil";
import { zapCreateState } from "@/app/RecoilState/store/zapCreate";
import {
  configureStepDetails,
  onStep,
  selectedItemMetaData,
} from "@/app/RecoilState/currentZap";
import axios from "axios";
import { useParams } from "next/navigation";
import {
  recordsAtom,
  selectedRecord,
} from "@/app/RecoilState/store/recordsAtom";
import ConfirmRecord from "./ConfirmRecord";
import SkipTest from "./SkipTest";
import { triggerTested } from "@/app/RecoilState/store/triggerAtom";

// Main Records Interface Component
const TriggerData = ({
  triggerName,
  zapImage,
  appId,
  item,
  id,
  handleComplete,
}: {
  zapImage: string;
  item: itemTestMetaData;
  appId?: string;
  triggerName: string;
  id: string;
  handleComplete: () => void;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [triedFetching, setTriedFetching] = useRecoilState(triggerTested);
  const [records, setRecords] = useRecoilState<RecordMetadata[]>(recordsAtom);
  const [selectedRecordId, setSelectedRecordId] =
    useRecoilState(selectedRecord);
  const [zapState, setZapState] = useRecoilState(zapCreateState);
  const { zapId } = useParams();
  const setMetaData = useSetRecoilState(selectedItemMetaData);
  const [optionId] = useRecoilState(configureStepDetails);
  const [recordIsOpenId, setRecordIsOpenId] = useState("");
  // Mock API call function
  const fetchRecords = async () => {
    // Simulate API delay
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/records/${zapId}/${optionId}`,
      {
        withCredentials: true,
      },
    );

    // Mock data that matches the screenshot
    return {
      records: response.data.records,
      total: response.data.records.length,
      lastUpdated: new Date().toISOString(),
    };
  };
  const testTrigger = async () => {
    const response = await axios.post(
      `http://localhost:3002/test/trigger/${zapId}`,
      {
        withCredentials: true,
      },
    );
    return {
      records: response.data.records,
      total: response.data.records.length,
      lastUpdated: new Date().toISOString(),
    };
  };

  // Handle finding new records
  const handleFindNewRecords = async () => {
    setLoading(true);
    setError(null);
    setTriedFetching(true);

    try {
      // Make API call to xyz endpoint
      const response = !appId ? await fetchRecords() : await testTrigger();

      setRecords(response.records);
      if (!records)
        setSelectedRecordId(response.records[response.records.length - 1].id);
    } catch (err) {
      setError("Failed to fetch records. Please try again.");
      console.error("API Error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Handle record click
  const handleRecordClick = async (record: RecordMetadata) => {
    //Saving the Selected Record in the backend
    await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/selectRecord`,
      {
        zapId: Number(zapId),
        recordId: record.id,
      },
      {
        withCredentials: true,
      },
    );
  };

  // Filter records based on search term
  const filteredRecords = records.filter((record) =>
    record.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="flex flex-col w-full min-h-full  justify-end bg-white text-xs">
      <div className="">
        {item.task && <Task id={id} imagePath={zapImage} item={item} />}
        {loading ||
        (!triedFetching && !selectedRecordId && records.length <= 0) ? (
          <div className="flex justify-center gap-6 px-3 mt-2 w-full">
            <div className="flex gap-1 ">
              {" "}
              <div className="flex items-center">
                <img
                  src={zapImage}
                  alt="logo"
                  className="w-8 h-8 p-1 border border-black/10 rounded"
                />
                <IoIosArrowRoundForward size={24} />
                <div className="text-red-500 rounded p-1 border border-black/10">
                  {" "}
                  <FaSquare size={22} />
                </div>
              </div>
            </div>
            <div className="flex flex-col max-w-2/3">
              <div className="font-bold my-2">{item.does}</div>
              <div>{item.aboutDoes}</div>
            </div>
          </div>
        ) : !loading && filteredRecords.length <= 0 ? (
          <div className="flex flex-col mt-2  text-xs gap-1.5 px-3">
            <div className="font-bold"> No request found</div>
            <div>Create a request in your account and test again</div>
            <div>{triggerName}</div>
            <a
              href="https://help.zapier.com/hc/en-us/articles/8496215655437-Zap-is-not-receiving-webhooks"
              className="text-blue-700 underline"
            >
              {" "}
              Learn more about testing instant triggers.
            </a>
          </div>
        ) : (
          <div className="flex flex-col h-full px-3  bg-white text-xs">
            <div className=" pr-1 h-[19rem]">
              <div className=" flex flex-col text-xs px-2 mt-3 ">
                We found records in your YouTube account. We will load up to 3
                most recent records, that have not appeared previously.
                <a
                  className="text-blue-700 underline"
                  href="https://help.zapier.com/hc/en-us/articles/8496288188429-Set-up-your-Zap-trigger#4-test-your-trigger-0-4"
                >
                  Learn more about test records
                </a>
              </div>
              {/* Search Bar */}

              <div className="px-2 py-2 border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Find New ds Button */}
              <div className="text-sm px-2 py-2 hover:cursor-pointer border-gray-200">
                <button
                  onClick={handleFindNewRecords}
                  disabled={loading}
                  className="w-full bg-white border border-gray-600 text-gray-700 py-2 px-2 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Finding Records..." : "Find new records"}
                </button>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mx-4 mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                  {error}
                </div>
              )}

              {/* Records List */}
              <div className="flex-1 px-2 py-4 ">
                {filteredRecords.length === 0 && !loading ? (
                  <div className="text-center text-gray-500 py-8">
                    {searchTerm
                      ? "No records match your search."
                      : "No records found."}
                  </div>
                ) : (
                  <div className="max-h-96">
                    {filteredRecords.slice(0, 4).map((record) => (
                      <RecordItem
                        setIsOpen={setRecordIsOpenId}
                        isOpen={recordIsOpenId}
                        setSelectedRecord={setSelectedRecordId}
                        selectedRecord={selectedRecordId}
                        key={record.id}
                        record={record}
                        onRecordClick={handleRecordClick}
                      />
                    ))}{" "}
                  </div>
                )}

                {loading && (
                  <div className="text-center text-gray-500 py-8">
                    Loading records...
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className=" absolute w-full bottom-0">
        {" "}
        {selectedRecordId ? (
          zapState.selectedItems.length === 1 ? (
            <ConfirmRecord handleContinue={handleComplete} />
          ) : (
            <div
              onClick={handleComplete}
              className="w-full border-t border-black/10 self-start justify-start"
            >
              <div className="flex gap-1 w-full my-4 px-2">
                <button className="px-2 w-full bg-blue-700 text-white hover:bg-blue-800 cursor-not-allowed py-2 rounded text-sm font-bold text-center transition-all duration-200 hover:cursor-pointer">
                  Continue with selected record
                </button>
              </div>
            </div>
          )
        ) : !loading ? (
          <div className="w-full border-t border-black/10 self-start justify-start">
            <div className="flex gap-1 w-full my-4 px-2 ">
              <button
                className={` ${!loading && filteredRecords.length >= 0 && triedFetching ? "w-1/2 bg-transparent text-black hover:bg-gray-500/50 border border-gray-400" : "w-full bg-blue-700 text-white hover:bg-blue-800"} py-2 rounded text-sm font-bold text-center transition-all duration-200 hover:cursor-pointer`}
                onClick={() => handleFindNewRecords()}
              >
                Test Trigger
              </button>{" "}
              {!loading && filteredRecords.length <= 0 && triedFetching && (
                <>
                  {zapState.selectedItems.length === 1 ? (
                    <SkipTest handleSkip={handleComplete} />
                  ) : (
                    <button
                      onClick={handleComplete}
                      className="w-1/2 bg-blue-700 text-white hover:bg-blue-800 py-2 rounded text-sm font-bold text-center transition-all duration-200 hover:cursor-pointer"
                    >
                      Skip test
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="w-full border-t border-black/10 self-start justify-start">
            {" "}
            <div className="flex gap-1 w-full my-4 px-2 ">
              <button
                disabled={true}
                className=" w-full  px-2 bg-black/10 text-black/40 cursor-not-allowed py-2 rounded text-sm font-bold text-center transition-all duration-200 hover:cursor-pointer"
              >
                {" "}
                Testing
              </button>{" "}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TriggerData;
