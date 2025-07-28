import { useState } from "react";
import { Calendar, Clock, ChevronLeft, ChevronRight, X } from "lucide-react";

export const DatePickerModal = ({
  isOpen,
  onClose,
  onDateSelect,
  selectedValue = "Last 30 days",
  title = "Date",
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 5)); // June 2025
  const [selectedDate, setSelectedDate] = useState(null);
  const [activePreset, setActivePreset] = useState("Last 30 days");

  const presets = [
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

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

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

  const navigateMonth = (direction) => {
    setCurrentMonth((prev) => {
      const newMonth = new Date(prev);
      newMonth.setMonth(prev.getMonth() + direction);
      return newMonth;
    });
  };

  const handlePresetClick = (preset) => {
    setActivePreset(preset.label);
    setSelectedDate(null);
  };

  const handleDateClick = (dayInfo) => {
    setSelectedDate(dayInfo.date);
    setActivePreset(null);
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
    <div className="bg-opacity-50 flex items-center justify-center z-50 ">
      <div className="bg-white rounded shadow-2xl w-full max-w-md">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-2 space-y-4">
          {/* Current Selection Display */}
          {/* <div className="relative">
            <Calendar size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <div className="w-full pl-10 pr-10 py-2 border-2 border-blue-500 rounded-md text-xs bg-white">
              {selectedValue}
            </div>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
              <X size={12} className="text-white" />
            </div>
          </div> */}

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

// Example usage component
const DatePickerExample = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("Last 30 days");

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    console.log("Selected date:", date);
  };

  return (
    <div className="p-5 space-y-2">
      <h1 className="text-2xl font-bold">Date Picker Modal Example</h1>

      <div className="space-y-4">
        <label className="block text-xs font-medium text-gray-700">Date</label>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-1.5 px-2 py-1.5 border border-gray-300 rounded-md bg-white hover:border-gray-400 transition-colors"
        >
          <Calendar size={16} className="text-gray-400" />
          <span className="text-xs">{selectedDate}</span>
        </button>
      </div>

      <DatePickerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDateSelect={handleDateSelect}
        selectedValue={selectedDate}
        title="Select Date Range"
      />
    </div>
  );
};

export default DatePickerExample;
