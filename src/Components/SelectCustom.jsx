import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const CustomSelect = ({
  options,
  placeholder = "Select an option",
  disabled = false,
  onChange,
  isMulti = false, // New prop to enable multi-select
}) => {
  const [selected, setSelected] = useState(isMulti ? [] : null); // Array for multi-select, null for single
  const [isOpen, setIsOpen] = useState(false);
  const [openUpward, setOpenUpward] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    if (isOpen && selectRef.current) {
      const rect = selectRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      setOpenUpward(spaceBelow < 150);
    }
  }, [isOpen]);

  const handleOptionClick = (option) => {
    if (isMulti) {
      const isSelected = selected.some((sel) => sel.value === option.value);
      let newSelected;
      if (isSelected) {
        // Remove if already selected
        newSelected = selected.filter((sel) => sel.value !== option.value);
      } else {
        // Add to selected
        newSelected = [...selected, option];
      }
      setSelected(newSelected);
      onChange(newSelected.map((sel) => sel.value)); // Pass array of values to parent
    } else {
      setSelected(option);
      setIsOpen(false);
      onChange(option.value); // Pass single value to parent
    }
  };

  const displayText = isMulti
    ? selected.length > 0
      ? selected.map((sel) => sel.label).join(", ")
      : placeholder
    : selected
    ? selected.label
    : placeholder;

  return (
    <div className="relative" ref={selectRef}>
      <button
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`flex justify-between items-center w-full px-4 py-2 border rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 
          ${disabled ? "cursor-not-allowed opacity-50 bg-gray-200" : "border-gray-500"}`}
      >
        <span className="truncate">{displayText}</span>
        <ChevronDown className="w-5 h-5 text-gray-500" />
      </button>

      {isOpen && (
        <div
          className={`absolute mt-2 w-full bg-white border-2 border-gray-300 rounded-md shadow-lg z-10 ${
            openUpward ? "bottom-full mb-2" : "mt-2"
          } max-h-60 overflow-y-auto`}
        >
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className={`block w-full text-left px-4 py-2 border-b-1 border-gray-300 hover:bg-blue-300 transition ${
                isMulti && selected.some((sel) => sel.value === option.value)
                  ? "bg-blue-200"
                  : ""
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;