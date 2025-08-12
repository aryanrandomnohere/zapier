export default function CancelButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      className="flex bg-gray-200 hover:cursor-pointer text-sm font-medium text-gray-700 px-3 py-2 rounded hover:bg-gray-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
