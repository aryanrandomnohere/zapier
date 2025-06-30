import React, { useState } from "react";
import { Search } from "lucide-react";

interface FieldOption {
  label: string;
  value: string;
}

interface Field {
  name: string;
  fieldInputType: string;
  fieldLabel: string;
  fieldPlaceholder: string;
  fieldValue: string | null;
  required: boolean;
  options?: FieldOption[];
  fieldNumber: number;
}

interface DataInFormProps {
  fields?: Field[];
}

const DataInForm: React.FC<DataInFormProps> = ({ fields = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data matching the design
  const sampleFields: Field[] = [
    {
      name: "to",
      fieldInputType: "text",
      fieldLabel: "To",
      fieldPlaceholder: "",
      fieldValue: "jj",
      required: true,
      fieldNumber: 1,
    },
    {
      name: "subject",
      fieldInputType: "text",
      fieldLabel: "Subject",
      fieldPlaceholder: "",
      fieldValue: "j",
      required: true,
      fieldNumber: 2,
    },
    {
      name: "body",
      fieldInputType: "textarea",
      fieldLabel: "Body",
      fieldPlaceholder: "",
      fieldValue: "jj",
      required: true,
      fieldNumber: 3,
    },
    {
      name: "attachment",
      fieldInputType: "file",
      fieldLabel: "Attachment",
      fieldPlaceholder: "",
      fieldValue: null,
      required: false,
      fieldNumber: 4,
    },
    {
      name: "fromName",
      fieldInputType: "text",
      fieldLabel: "From Name",
      fieldPlaceholder: "",
      fieldValue: null,
      required: false,
      fieldNumber: 5,
    },
    {
      name: "replyTo",
      fieldInputType: "email",
      fieldLabel: "Reply To",
      fieldPlaceholder: "",
      fieldValue: null,
      required: false,
      fieldNumber: 6,
    },
    {
      name: "cc",
      fieldInputType: "text",
      fieldLabel: "Cc",
      fieldPlaceholder: "",
      fieldValue: null,
      required: false,
      fieldNumber: 7,
    },
  ];

  const fieldsToRender = fields.length > 0 ? fields : sampleFields;

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

  return (
    <div className="w-full px-3 max-w-md">
      {/* Header - Outside the box */}
      <div className="mb-0 ml-2">
        <h2 className="text-xs font-medium text-gray-900 mb-2">Data In</h2>
        <div className="h-0.5 w-12 bg-blue-500 mb-0"></div>
      </div>

      {/* Main container */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
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
        <div className="p-4 space-y-3">
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
    </div>
  );
};

export default DataInForm;
