"use client";
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

type SuggestionsDropdownProps<T> = {
  inputRef: React.RefObject<HTMLInputElement | null> | any;
  inputValue: string;
  data?: T[];
  onSelectItem: (item: T) => void;
  nameKey: keyof T;
  setActiveDropdownName: (value: string | null) => void;
  activeIndex?: number;
};

const SuggestionsDropdown = <T,>({
  inputRef,
  inputValue,
  data = [],
  onSelectItem,
  nameKey,
  setActiveDropdownName,
  activeIndex,
}: SuggestionsDropdownProps<T>) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState<T[] | null>(
    null
  );
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Filter suggestions based on input value
  useEffect(() => {
    if ((inputValue && data?.length > 0) || activeIndex !== null) {
      const filtered = data?.filter((item) =>
        String(item[nameKey])
          ?.toLowerCase()
          ?.includes(inputValue?.toLowerCase())
      );
      data &&
        setFilteredSuggestions(Number(filtered?.length) > 0 ? filtered : data);
    }
  }, [inputValue, data, nameKey, activeIndex]);

  // Handle clicks outside the input and dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setActiveDropdownName(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef, setActiveDropdownName]);

  // Handle selecting an item
  const handleSelect = (item: T) => {
    onSelectItem(item);
    setActiveDropdownName(null);
  };

  // Get the input position to place the dropdown
  const [dropdownStyles, setDropdownStyles] = useState<React.CSSProperties>({});
  useEffect(() => {
    if (inputRef?.current) {
      const rect = inputRef.current.getBoundingClientRect();
      setDropdownStyles({
        position: "absolute",
        top: `${rect.bottom + window.scrollY}px`,
        left: `${rect.left + window.scrollX}px`,
        width: `${rect.width}px`,
        zIndex: 9999,
      });
    }
  }, [inputRef]);

  // Render dropdown inside a portal
  return ReactDOM.createPortal(
    <div
      ref={dropdownRef}
      style={dropdownStyles}
      className="bg-[#fbfcfc] border-2 border-[#e5e8eb] max-h-44 overflow-auto z-[9999] rounded-xl shadow-[0px_64px_64px_-48px_rgba(15,15,15,0.08)]"
    >
      <ul>
        {Number(filteredSuggestions?.length) > 0 ? (
          filteredSuggestions?.map((item, index) => (
            <li
              key={index}
              className="p-2 hover:bg-primary-600 hover:text-white cursor-pointer rounded-xl px-2"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleSelect(item);
              }}
            >
              {String(item[nameKey])}
            </li>
          ))
        ) : (
          <li className="p-2 text-gray-500">لا توجد اقتراحات</li>
        )}
      </ul>
    </div>,
    document.body // Render the dropdown inside the <body>
  );
};

export default SuggestionsDropdown;
