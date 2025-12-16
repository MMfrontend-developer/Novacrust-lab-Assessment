"use client";
import Image from "next/image";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2 } from "lucide-react";
import CryptoSelectDropdown from "@/components/inputs/CryptoSelectDropdown";
import { ChevronDown } from "lucide-react";
import PaySelect from "@/components/inputs/PaySelect";
import Link from "next/link";

export default function Home() {
  const [activeTab, setActiveTab] = useState("crypto");
  const [loading, setLoading] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState("ETH");

  const handleCryptoChange = (value: string) => {
    console.log("Selected crypto:", value);
    setSelectedCrypto(value);
  };

  const handleTabChange = (value: string) => {
    if (value === activeTab) return;

    setLoading(true);
    setActiveTab(value);

    setTimeout(() => {
      setLoading(false);
    }, 600);
  };

  return (
    <main className="mt-10 flex items-center justify-center px-4">
      {/* FORM WIDTH CONTROLLER */}
      <div className="w-full max-w-125 sm:max-w-150 md:max-w-175 lg:max-w-130 rounded-[32px] border border-gray-200 bg-white p-5 shadow-lg">
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="flex flex-col items-center"
        >
          {/* Tabs (SMALLER THAN FORM) */}
          <TabsList className="mb-4 flex justify-center gap-0 bg-gray-100 rounded-full p-0 overflow-visible">
            <TabsTrigger
              value="crypto"
              className="
      rounded-full px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm
      text-[rgba(130,130,130,1)]
      data-[state=active]:bg-[rgba(1,57,65,1)]
      data-[state=active]:text-white
    "
            >
              Crypto to cash
            </TabsTrigger>

            <TabsTrigger
              value="cash"
              className="
      rounded-full px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm
      text-[rgba(130,130,130,1)]
      data-[state=active]:bg-[rgba(1,57,65,1)]
      data-[state=active]:text-white
    "
            >
              Cash to crypto
            </TabsTrigger>

            <TabsTrigger
              value="loan"
              className="
      rounded-full px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm
      text-[rgba(130,130,130,1)]
      data-[state=active]:bg-[rgba(1,57,65,1)]
      data-[state=active]:text-white
    "
            >
              Crypto to fiat loan
            </TabsTrigger>
          </TabsList>

          {/* Content */}
          {loading ? (
            <Loader2 className="mt-8 h-6 w-6 animate-spin text-[rgba(1,57,65,1)]" />
          ) : (
            <>
              <TabsContent value="crypto" className="w-full">
                <div className=" mt-3 border-2 border-gray-200 p-4 rounded-4xl w-full">
                  <div className="space-y-2">
                    <p className="text-[rgba(130,130,130,1)] font-semibold">
                      You pay
                    </p>

                    <div className="flex items-center justify-between gap-6">
                      <div className="font-semibold text-2xl">1.00</div>
                      <CryptoSelectDropdown
                        value={selectedCrypto}
                        onChange={handleCryptoChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-5 border-2 border-gray-200 p-4 rounded-4xl w-full">
                  <div className="space-y-2">
                    <p className="text-[rgba(130,130,130,1)] font-semibold">
                      You receive
                    </p>

                    <div className="flex items-center justify-between gap-6">
                      <div className="font-semibold text-2xl">1.00</div>

                      <div className="flex items-center justify-between border-2 border-gray-200 rounded-full px-3 py-1 bg-[#faf6f6]">
                        <div className="flex items-center gap-2">
                          <Image
                            src="/nigeria.png"
                            alt="NGN"
                            width={30}
                            height={30}
                            className="rounded-full"
                          />
                          <span className="font-medium">NGN</span>
                        </div>
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="font-bold text-md text-[rgba(1,57,65,1)]">
                    Pay from
                  </label>
                  <PaySelect />
                </div>

                <div className="mt-6">
                  <label className="font-bold text-md text-[rgba(1,57,65,1)]">
                    Pay to
                  </label>
                  <PaySelect />
                </div>

                <Link href="/recipent">
                  <button className="btn mt-6">Convert now</button>
                </Link>
              </TabsContent>

              <TabsContent value="cash">
                <p className="text-[rgba(1,57,65,1)] text-4xl">Coming soon!</p>
              </TabsContent>

              <TabsContent value="loan">
                <p className="text-[rgba(1,57,65,1)] text-4xl">Coming soon!</p>
              </TabsContent>
            </>
          )}
        </Tabs>
      </div>
    </main>
  );
}
