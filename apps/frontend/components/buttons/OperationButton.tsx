"use client";
export default function OperationButton({
  disabled,
  onClick,
  children,
}: {
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="bg-blue-500 text-white px-4 py-2 rounded-md"
    >
      {children}
    </button>
  );
}
