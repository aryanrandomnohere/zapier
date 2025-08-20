import Image from "next/image";

export default function SelectField({
  fieldName,
  imagePath,
  fieldValue,
  handleFieldClick,
  parentPath = "",
}: {
  fieldName: string;
  imagePath: string;
  fieldValue: string | Record<string, string>;
  handleFieldClick: (param: string) => void;
  parentPath?: string;
}) {
  const currentPath = parentPath ? `${parentPath}.${fieldName}` : fieldName;

  if (typeof fieldValue === "object" && fieldValue != null) {
    return (
      <div>
        <div
          key={fieldName}
          onClick={() => handleFieldClick(currentPath)}
          className="flex justify-between items-start p-1 rounded hover:bg-blue-600/5 cursor-pointer transition"
        >
          <div className="flex gap-1.5 border items-center rounded-sm border-black/20 hover:border-blue-600 p-0.5">
            <Image
              width={21}
              height={21}
              src={imagePath}
              alt="logo"
              className="w-[21px] h-[21px] p-0.5"
            />
            <p className="text-xs font-bold text-gray-900">
              {fieldName[0].toUpperCase() + fieldName.slice(1)}
            </p>
          </div>
        </div>

        {/* Render nested fields */}
        <div className="pl-6 mt-1">
          {Object.entries(fieldValue).map(([key, value]) => (
            <SelectField
              key={key}
              imagePath={imagePath}
              fieldName={key}
              fieldValue={value}
              handleFieldClick={handleFieldClick}
              parentPath={currentPath}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      key={fieldName}
      onClick={() => handleFieldClick(currentPath)}
      className="flex justify-between items-start p-1 rounded hover:bg-blue-600/5 cursor-pointer transition"
    >
      <div className="flex gap-1.5 border items-center rounded-sm border-black/20 hover:border-blue-600 p-0.5">
        <Image
          src={imagePath}
          alt="logo"
          className="w-[21px] h-[21px] p-0.5"
          width={21}
          height={21}
        />
        <p className="text-xs font-bold text-gray-900">
          {fieldName[0].toUpperCase() + fieldName.slice(1)}
        </p>
        <p className="text-xs text-gray-500 truncate">{fieldValue}</p>
      </div>
    </div>
  );
}
