"use client";

import { ArrowLeft, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function RecipientPage() {
  return (
    <main className="flex justify-center mt-10 px-4">
      {/* Form wrapper */}
      <div className="w-full max-w-125 sm:max-w-150 md:max-w-175 lg:max-w-130 rounded-[32px] border border-gray-200 bg-white p-6 pb-8 shadow-lg">

        
        {/* Header */}
        <div className="flex items-center mb-6">
  <Link href="/" className="flex items-center">
    <ArrowLeft className="w-5 h-5 text-[rgba(0,0,0,1)]" />
  </Link>
  <h1 className="flex-1 text-center text-lg font-semibold text-[rgba(1,57,65,1)]">
    Recipient details
  </h1>
</div>

        {/* Bank */}
        <div>
          <label className="text-sm font-medium text-[rgba(1,57,65,1)]">
            Bank
          </label>

          <div className="mt-3 flex items-center justify-between border-2 border-gray-200 rounded-full px-3 py-2 bg-white cursor-pointer">
            <span className="text-[rgba(1,57,65,1)]">Select an option</span>
            <ChevronDown className="w-4 h-4 text-[rgba(1,57,65,1)]" />
          </div>
        </div>

        {/* Account number */}
        <div className="mt-6"> 
          <label className="text-sm font-medium text-[rgba(1,57,65,1)]">
            Account number
          </label>

          <input
            type="text"
            placeholder="Enter your account number"
            className="mt-3 w-full border-2 border-gray-200 rounded-full px-3 py-2 outline-none"
          />
        </div>

        {/* Account name */}
        <div className="mt-6">
          <label className="text-sm font-medium text-[rgba(1,57,65,1)]">
            Account name
          </label>

          <input
            type="text"
            value="ODUTUGA GBEKE"
            readOnly
            className="mt-3 w-full border-2 border-gray-200 rounded-full px-3 py-2 outline-none text-gray-800 bg-gray-200"
          />
        </div>

        <button className="btn mt-35  w-full">Next</button>
      </div>
    </main>
  );
}
