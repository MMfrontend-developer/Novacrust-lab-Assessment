"use client";

import { FC, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, Search } from "lucide-react";

interface CryptoOption {
  label: string;
  value: string;
  image: string;
}

interface CryptoSelectDropdownProps {
  options?: CryptoOption[];
  value?: string;
  onChange?: (value: string) => void;
}

const defaultOptions: CryptoOption[] = [
  { label: "USDT-CELO", value: "BTC", image: "/celo.png" },
  { label: "USDT-TON", value: "ADA", image: "/ton.png" },
  { label: "USDT-BNB", value: "SOL", image: "/bnb.png" },
];

const CryptoSelectDropdown: FC<CryptoSelectDropdownProps> = ({
  options = defaultOptions,
  onChange,
}) => {
  const [selected, setSelected] = useState<CryptoOption>({
    label: "ETH",
    value: "ETH",
    image: "/eth.png",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: CryptoOption) => {
    setSelected(option);
    setIsOpen(false);
    setSearch("");
    onChange?.(option.value);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Selected input */}
      <div
        className="flex items-center justify-between border-2 rounded-full px-3 py-1 bg-[#faf6f6] cursor-pointer border-gray-200"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="flex items-center gap-2">
          <Image
            src={selected.image}
            alt={selected.label}
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="font-medium">{selected.label}</span>
        </div>

        <ChevronDown
          className={`w-4 h-4 text-gray-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-0.5 bg-white border w-44 rounded-xl shadow-lg z-10 p-2">

          {/* Search input */}
          <div className="flex items-center gap-2 border rounded-full px-3 py-2 mb-2">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full outline-none text-sm"
            />
          </div>

          {/* Options */}
          {filteredOptions.map((option) => (
            <div
              key={option.value}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              <Image
                src={option.image}
                alt={option.label}
                width={30}
                height={30}
                className="rounded-full"
              />
              <span className="text-sm">{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CryptoSelectDropdown;
