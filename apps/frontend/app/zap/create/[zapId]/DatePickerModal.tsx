"use client";
import { useState } from "react";
import { Calendar, Clock, ChevronLeft, ChevronRight, X } from "lucide-react";

type Preset = {
  label: string;
  value: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

type DayInfo = {
  day: number;
  isCurrentMonth: boolean;
  isNextMonth: boolean;
  date: Date;
};

type DatePickerModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onDateSelect: (date: string) => void;
  selectedValue?: string;
  title?: string;
};

export const DatePickerModal = ({
  isOpen,
  onClose,
  onDateSelect,
  selectedValue = "Last 30 days",
  title = "Date",
}: DatePickerModalProps) => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date(2025, 5)); // June 2025
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [activePreset, setActivePreset] = useState<string>("Last 30 days");

  const presets: Preset[] = [
    { label: "Last 24 hours", value: "24h", icon: Clock },
    { label: "Last 7 days", value: "7d", icon: Calendar },
    { label: "Last 30 days", value: "30d", icon: Calendar },
    { label: "Last 60 days", value: "60d", icon: Calendar },
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekDays = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

  const getDaysInMonth = (date: Date): DayInfo[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: DayInfo[] = [];

    // Previous month days
    const prevMonth = new Date(year, month - 1, 0);
    const daysInPrevMonth = prevMonth.getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: daysInPrevMonth - i,
        isCurrentMonth: false,
        isNextMonth: false,
        date: new Date(year, month - 1, daysInPrevMonth - i),
      });
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        day,
        isCurrentMonth: true,
        isNextMonth: false,
        date: new Date(year, month, day),
      });
    }

    // Next month days
    const remainingCells = 42 - days.length; // 6 rows * 7 days
    for (let day = 1; day <= remainingCells; day++) {
      days.push({
        day,
        isCurrentMonth: false,
        isNextMonth: true,
        date: new Date(year, month + 1, day),
      });
    }

    return days;
  };

  const navigateMonth = (direction: number) => {
    setCurrentMonth((prev) => {
      const newMonth = new Date(prev);
      newMonth.setMonth(prev.getMonth() + direction);
      return newMonth;
    });
  };

  const handlePresetClick = (preset: Preset) => {
    setActivePreset(preset.label);
    setSelectedDate(null);
  };

  const handleDateClick = (dayInfo: DayInfo) => {
    setSelectedDate(dayInfo.date);
    setActivePreset("");
  };

  const handleDone = () => {
    if (activePreset) {
      onDateSelect(activePreset);
    } else if (selectedDate) {
      onDateSelect(selectedDate.toLocaleDateString());
    }
    onClose();
  };

  if (!isOpen) return null;

  const days = getDaysInMonth(currentMonth);

  return (
    <div className="absolute bg-opacity-50 flex items-center top-12 justify-center z-50 ">
      <div className="bg-white rounded border border-zinc-300  w-full max-w-md">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 hover:cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-2 space-y-4">
          {/* Preset Buttons */}
          <div className="grid grid-cols-2 gap-2">
            {presets.map((preset) => {
              const IconComponent = preset.icon;
              const isActive = activePreset === preset.label;

              return (
                <button
                  key={preset.value}
                  onClick={() => handlePresetClick(preset)}
                  className={`flex items-center gap-1 px-2 py-1 border rounded-md text-xs transition-colors ${
                    isActive
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-300 hover:border-gray-400 text-gray-700"
                  }`}
                >
                  <IconComponent
                    size={16}
                    className={isActive ? "text-blue-500" : "text-gray-400"}
                  />
                  {preset.label}
                </button>
              );
            })}
          </div>

          {/* Calendar */}
          <div className="space-y-4">
            {/* Month Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => navigateMonth(-1)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <ChevronLeft size={20} className="text-gray-600" />
              </button>
              <h4 className="text-lg font-semibold text-gray-900">
                {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h4>
              <button
                onClick={() => navigateMonth(1)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <ChevronRight size={20} className="text-gray-600" />
              </button>
            </div>

            {/* Week Days */}
            <div className="grid grid-cols-7 gap-1 text-center">
              {weekDays.map((day) => (
                <div
                  key={day}
                  className="text-xs font-medium text-gray-500 py-1"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-1">
              {days.map((dayInfo, index) => {
                const isSelected =
                  selectedDate &&
                  dayInfo.date.toDateString() === selectedDate.toDateString();

                return (
                  <button
                    key={index}
                    onClick={() => handleDateClick(dayInfo)}
                    className={`
                      h-10 w-10 text-xs rounded flex items-center justify-center transition-colors
                      ${
                        !dayInfo.isCurrentMonth
                          ? "text-gray-300 hover:bg-gray-50"
                          : isSelected
                            ? "bg-blue-500 text-white"
                            : "text-blue-600 hover:bg-blue-50"
                      }
                    `}
                  >
                    {dayInfo.day}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Done Button */}
          <button
            onClick={handleDone}
            className=" flex justify-center items-center w-full py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
