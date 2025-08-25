"use client";
import React, { useState } from "react";
import { Home, Sparkles, AppWindow, Zap, Wrench } from "lucide-react";

interface FilterOption {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const FilterItems: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const filterOptions: FilterOption[] = [
    { id: "home", label: "", icon: <Home size={16} /> },
    { id: "apps", label: "Apps", icon: <AppWindow size={16} /> },
    { id: "zapier-products", label: "Zapier products", icon: <Zap size={16} /> },
    { id: "built-in-tools", label: "Built-in tools", icon: <Wrench size={16} /> },
    { id: "ai", label: "AI", icon: <Sparkles size={16} /> },
  ];

  const handleFilterClick = (filterId: string) => {
    setSelectedFilter(filterId === selectedFilter ? null : filterId);
  };

  return (
    <div className="flex flex-wrap sm:flex-nowrap gap-1 p-1 w-full">
      {filterOptions.map((option) => (
        <button
          key={option.id}
          onClick={() => handleFilterClick(option.id)}
          className={`flex items-center gap-1.5 py-[3px] px-[4px] rounded transition-colors duration-200 border border-black/20 whitespace-nowrap ${
            selectedFilter === option.id
              ? "bg-blue-300/20 text-blue-600"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <span className="flex items-center justify-center">{option.icon}</span>
          {option.label && <span className="text-xs font-bold">{option.label}</span>}
        </button>
      ))}
    </div>
  );
};

export default FilterItems;
