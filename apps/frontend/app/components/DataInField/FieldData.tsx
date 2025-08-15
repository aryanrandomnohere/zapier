"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import { Field } from "@repo/types";

interface DataInFormProps {
  fields?: Field[];
  handlePublish: () => void;
}

const DataInForm: React.FC<DataInFormProps> = ({
  fields = [],
  handlePublish,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [tested, setTested] = useState(false);
  const [skipped, setSkipped] = useState(false);
  const [loading, setLoading] = useState();
  // Sample data matching the design
  const fieldsToRender = fields;
  // Separate fields with values and empty fields
  const filledFields = fieldsToRender.filter(
    (field) => field.fieldValue !== null && field.fieldValue !== "",
  );
  const emptyFields = fieldsToRender.filter(
    (field) => field.fieldValue === null || field.fieldValue === "",
  );

  const renderFieldValue = (field: Field) => {
    const content =
      field.fieldValue || `empty ${!field.required ? "(optional)" : ""}`;
    return <span className="text-xs text-gray-700 font-medium">{content}</span>;
  };

  const handleTestAction = () => {};
  return (
    <div className="w-full flex flex-col  max-w-md">
      {/* Header - Outside the box */}
      <div className="mb-0 ml-2 mx-3">
        <h2 className="text-xs font-medium text-gray-900 mb-2 pl-3">Data In</h2>
        <div className="h-0.5 w-12 bg-blue-500 mb-0 pl-3"></div>
      </div>

      {/* Main container */}
      <div className="bg-white border border-gray-200 mx-3 rounded-lg shadow-sm">
        {/* Search Bar */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              className="w-full pl-10 pr-3 py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white"
              placeholder="Search item data..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Form Fields */}
        <div className="p-3 space-y-3">
          {/* Fields with values */}
          {filledFields.map((field) => (
            <div key={field.name} className="flex items-center gap-3">
              <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded border">
                {field.fieldLabel}
              </span>
              {renderFieldValue(field)}
            </div>
          ))}

          {/* Empty Fields Section */}
          {emptyFields.length > 0 && (
            <>
              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-xs font-medium text-gray-900 mb-3">
                  Empty fields:
                </h3>
                <div className="space-y-3">
                  {emptyFields.map((field) => (
                    <div key={field.name} className="flex items-center gap-3">
                      <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded border">
                        {field.fieldLabel}
                      </span>
                      {renderFieldValue(field)}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className=" absolute w-full bottom-0">
        <div className="w-full border-t border-black/10 self-start justify-start">
          <div className="flex gap-1 w-full my-4 px-2 ">
            {tested || skipped ? (
              <button
                className={`w-1/2 bg-transparent text-black hover:bg-gray-500/50 border border-gray-400"  py-2 rounded text-sm font-bold text-center transition-all duration-200 hover:cursor-pointer`}
                onClick={() => handleTestAction()}
              >
                {tested ? "Retest step" : "Test step"}
              </button>
            ) : (
              <button
                className={` w-1/2 text-black hover:bg-gray-500/50 border border-gray-400 bg-transparent py-2 rounded text-sm font-bold text-center transition-all duration-200 hover:cursor-pointer`}
                onClick={() => setSkipped(true)}
              >
                Skip test
              </button>
            )}
            {skipped || tested ? (
              <button
                onClick={handlePublish}
                className={`w-1/2 bg-blue-700 text-white hover:bg-blue-800" py-2 rounded text-sm font-bold text-center transition-all duration-200 hover:cursor-pointer`}
              >
                Publish
              </button>
            ) : (
              <button
                className={`w-1/2 bg-blue-700 text-white hover:bg-blue-800" py-2 rounded text-sm font-bold text-center transition-all duration-200 hover:cursor-pointer`}
              >
                Test step
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataInForm;
