import React from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "white" | "gray";
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  color = "primary",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  const colorClasses = {
    primary: "text-blue-600",
    white: "text-white",
    black: "text-black",
    gray: "text-gray-500",
  };

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <svg
        className={`animate-spin ${sizeClasses[size]} ${colorClasses[color]}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
};

// Button with loading state
export const LoadingButton: React.FC<{
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
  type?: "primary" | "secondary";
  onClick?: () => void;
  disabled?: boolean;
}> = ({
  loading = false,
  children,
  className = "",
  onClick,
  disabled,
  type = "primary",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={loading || disabled}
      className={`inline-flex gap-2 items-center justify-start px-4 py-2 border border-transparent text-sm font-medium  ${type === "secondary" ? "shadow-none" : "shadow-sm"} focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200 ${
        loading
          ? type === "secondary"
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gray-400 cursor-not-allowed"
          : type === "secondary"
            ? "text-black"
            : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
      }  ${className}`}
    >
      {loading && <LoadingSpinner size="sm" color="gray" className="mr-2" />}
      {children}
    </button>
  );
};

// Page loading overlay
export const PageLoadingOverlay: React.FC<{ loading?: boolean }> = ({
  loading = false,
}) => {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center">
        <LoadingSpinner size="lg" color="primary" className="mb-4" />
        <p className="text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  );
};

// Inline loading with text
export const InlineLoading: React.FC<{
  text?: string;
  size?: "sm" | "md" | "lg";
}> = ({ text = "Loading...", size = "md" }) => (
  <div className="inline-flex items-center space-x-2">
    <LoadingSpinner size={size} color="primary" />
    <span className="text-gray-600 font-medium">{text}</span>
  </div>
);

// Card loading state
export const CardLoading: React.FC = () => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 animate-pulse">
    <div className="flex items-center space-x-3 mb-4">
      <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
      <div className="flex-1">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
    <div className="space-y-2">
      <div className="h-3 bg-gray-200 rounded"></div>
      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
      <div className="h-3 bg-gray-200 rounded w-4/6"></div>
    </div>
  </div>
);

// Table loading state
export const TableLoading: React.FC<{ rows?: number }> = ({ rows = 5 }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
    <div className="px-6 py-4 border-b border-gray-200">
      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
    </div>
    <div className="divide-y divide-gray-200">
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="px-6 py-4 animate-pulse">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-200 rounded"></div>
              <div>
                <div className="h-4 bg-gray-200 rounded w-32 mb-1"></div>
                <div className="h-3 bg-gray-200 rounded w-24"></div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-6 bg-gray-200 rounded w-16"></div>
              <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
