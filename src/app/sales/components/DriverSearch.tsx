import React, { useState } from "react";
// import { searchDriverByPhone } from "../../../../inspo/services/geminiService";
import { Driver } from "../types";

interface DriverSearchProps {
  onDriverFound: (driver: Driver) => void;
}

export const DriverSearch: React.FC<DriverSearchProps> = ({
  onDriverFound,
}) => {
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;

    setIsLoading(true);
    setError(null);

    try {
      const driverData = {};
      // onDriverFound(driverData);
    } catch (err) {
      console.error(err);
      setError("Failed to retrieve driver details. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-white mb-4 tracking-tight">
          Driver Search
        </h1>
        <p className="text-zinc-500">
          Enter a driver`&apos;s phone number to retrieve their verification
          profile.
        </p>
      </div>

      <form onSubmit={handleSearch} className="relative group">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-zinc-600 group-focus-within:text-white transition-colors"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <input
          type="tel"
          className="w-full pl-14 pr-4 py-5 bg-[#18181b] border border-white/10 rounded-2xl shadow-xl focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all text-lg placeholder:text-zinc-700 text-white"
          placeholder="(555) 000-0000"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !phone}
          className="absolute right-3 top-3 bottom-3 bg-white text-black px-6 rounded-xl text-sm font-semibold hover:bg-zinc-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
            </div>
          ) : (
            "Check"
          )}
        </button>
      </form>

      {error && (
        <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 shrink-0"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </div>
      )}

      {!isLoading && !error && (
        <div className="mt-12 grid grid-cols-2 gap-4">
          <div className="p-6 bg-[#18181b] rounded-2xl border border-white/5 shadow-lg text-center">
            <p className="text-3xl font-bold text-white">1.4k</p>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-2">
              Verified Drivers
            </p>
          </div>
          <div className="p-6 bg-[#18181b] rounded-2xl border border-white/5 shadow-lg text-center">
            <p className="text-3xl font-bold text-white">98%</p>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-2">
              Safety Score
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
