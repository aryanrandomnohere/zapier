export default function ToggleButton({
  isChecked,
  setIsChecked,
}: {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div>
      <label className="inline-flex items-center  cursor-pointer">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          className="sr-only peer"
        />
        <div className="relative w-[29.5px] h-4 bg-gray-200 peer-focus:outline-none   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all dark:border-gray-600 peer-checked:bg-black dark:peer-checked:bg-blue-500"></div>
        <span className="ms-1 text-sm font-medium text-gray-900 dark:text-gray-300">
          {isChecked ? "On" : "Off"}
        </span>
      </label>
    </div>
  );
}
