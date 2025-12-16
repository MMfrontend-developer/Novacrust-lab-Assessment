"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, WalletMinimal } from "lucide-react";

interface PayOption {
  label: string;
  image?: string;
  icon?: React.ReactNode;
}

const options: PayOption[] = [
  { label: "Metamask", image: "/metamask.png" },
  { label: "Rainbow", image: "/rainbow.png" },
  { label: "WalletConnect", image: "/WalletConnect.png" },
  {
    label: "Other Crypto Wallets (Binance, Coinbase, Bybit etc)",
    icon: (
      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[rgba(1,57,65,1)]">
        <WalletMinimal className="w-4 h-4 text-white" />
      </div>
    ),
  },
];

export default function PaySelect() {
  const [selected, setSelected] = useState<PayOption | null>(null);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: PayOption) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative w-full ">
      
      {/* Input */}
      <div
        className="mt-1 flex items-center justify-between border-2 border-gray-200 rounded-full px-3 py-2 bg-white cursor-pointer "
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="flex items-center gap-2">
          {selected?.image && (
            <Image
              src={selected.image}
              alt={selected.label}
              width={20}
              height={20}
              className="rounded-full"
            />
          )}

          {selected?.icon && selected.icon}

          <span className={selected ? "text-black" : "text-[rgba(1,57,65,1)]"}>
            {selected ? selected.label : "Select an option"}
          </span>
        </div>

        <ChevronDown
          className={`w-4 h-4 text-[rgba(1,57,65,1)] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown */}
      {/* Dropdown */}
{open && (
  <div className="absolute top-full -mt-3 left-1/2 z-10 w-[95%] -translate-x-1/2 rounded-lg border bg-white shadow-md">
    {options.map((option) => (
      <div
        key={option.label}
        onClick={() => handleSelect(option)}
        className="flex items-center rounded-lg gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100"
      >
        {option.image && (
          <Image
            src={option.image}
            alt={option.label}
            width={20}
            height={20}
            className="rounded-full"
          />
        )}

        {option.icon && option.icon}

        <span>{option.label}</span>
      </div>
    ))}
  </div>
)}
    </div>
  );
}
