export default function SaveButton({
  children,
  onClick,
  disabled,
  type,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
  type?: "danger";
}) {
  return (
    <button
      className={`flex ${type === "danger" ? "bg-red-600" : "bg-blue-600"} hover:cursor-pointer text-sm font-medium text-white px-3 py-2 rounded ${type === "danger" ? "hover:bg-red-700" : "hover:bg-blue-700"} disabled:bg-gray-400`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
