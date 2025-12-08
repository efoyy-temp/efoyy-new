import React, { useState } from "react";
import { Driver } from "../types";

interface DriverProfileProps {
  driver: Driver;
  onClose: () => void;
  onApprove: (password: string) => boolean;
}

export const DriverProfile: React.FC<DriverProfileProps> = ({
  driver,
  onClose,
  onApprove,
}) => {
  const isApproved = driver.approvalStatus === "Approved";
  const isRejected = driver.approvalStatus === "Rejected";

  const [isConfirming, setIsConfirming] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleApproveClick = () => {
    setIsConfirming(true);
    setError(false);
  };

  const handleConfirm = () => {
    const success = onApprove(password);
    if (success) {
      setIsConfirming(false);
      setPassword("");
    } else {
      setError(true);
      setPassword("");
    }
  };

  const handleCancelConfirm = () => {
    setIsConfirming(false);
    setPassword("");
    setError(false);
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Status Header */}
      <div
        className={`p-4 rounded-xl border flex items-center justify-between backdrop-blur-md ${
          isApproved
            ? "bg-green-500/10 border-green-500/20 text-green-400"
            : isRejected
              ? "bg-red-500/10 border-red-500/20 text-red-400"
              : "bg-amber-500/10 border-amber-500/20 text-amber-400"
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-2.5 h-2.5 rounded-full shadow-[0_0_10px] ${
              isApproved
                ? "bg-green-500 shadow-green-500/50"
                : isRejected
                  ? "bg-red-500 shadow-red-500/50"
                  : "bg-amber-500 shadow-amber-500/50"
            }`}
          />
          <span className="font-bold text-xs uppercase tracking-widest">
            {driver.approvalStatus}
          </span>
        </div>
        <span className="text-[10px] font-mono font-medium opacity-80 border border-current px-2 py-0.5 rounded-full">
          RISK SCORE: {driver.riskScore}
        </span>
      </div>

      <div className="bg-[#18181b] border border-white/10 shadow-2xl rounded-2xl overflow-hidden">
        {/* Car Image Section */}
        <div className="relative w-full aspect-video bg-zinc-900 overflow-hidden group">
          <img
            src={`https://picsum.photos/800/450?random=${driver.phoneNumber.replace(/\D/g, "")}`}
            alt="Car"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#18181b] via-transparent to-transparent opacity-80"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
            <h3 className="text-white font-bold text-2xl tracking-tight drop-shadow-md">
              {driver.carColor} {driver.carModel}
            </h3>
            <p className="text-zinc-300 text-sm drop-shadow-md">
              {driver.carYear}
            </p>
          </div>
        </div>

        {/* Driver Info Section */}
        <div className="p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-1">
                {driver.fullName}
              </h2>
              <p className="text-zinc-500 text-sm">{driver.phoneNumber}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm mb-8">
            <div>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">
                License Plate
              </p>
              <div className="font-mono bg-zinc-900/50 inline-block px-3 py-1.5 rounded-lg border border-white/5 text-zinc-300 tracking-wider">
                {driver.licensePlate}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">
                License Number
              </p>
              <p className="text-zinc-200 font-medium tracking-wide">
                {driver.licenseNumber}
              </p>
            </div>
          </div>

          {/* License Picture */}
          <div className="mb-8">
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">
              Driver's License
            </p>
            <div className="relative w-full rounded-xl overflow-hidden border border-white/20 shadow-lg">
              {/* Light background for license to simulate real ID card contrast */}
              <img
                src={`https://placehold.co/600x380/e4e4e7/18181b?text=LICENSE%0A${driver.licenseNumber}`}
                alt="Driver License"
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>

          <div className="pt-6 border-t border-white/5">
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">
              Analysis Notes
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {driver.notes}
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-3 h-14">
        {!isConfirming ? (
          <>
            <button
              onClick={onClose}
              className="flex-1 bg-[#18181b] border border-white/10 text-zinc-300 font-medium rounded-xl hover:bg-zinc-800 transition-all text-sm"
            >
              Back
            </button>
            {!isApproved && (
              <button
                onClick={handleApproveClick}
                className="flex-1 bg-white text-black font-semibold rounded-xl hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/10 transition-all text-sm"
              >
                Approve Driver
              </button>
            )}
            {isApproved && (
              <div className="flex-1 bg-green-500 text-black font-bold rounded-xl flex items-center justify-center gap-2 cursor-default text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Approved
              </div>
            )}
          </>
        ) : (
          /* Password Confirmation View */
          <div className="flex-1 flex gap-2 animate-in fade-in zoom-in-95 duration-200">
            <input
              type="password"
              autoFocus
              placeholder="Enter password to confirm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`flex-[2] bg-zinc-900 border ${error ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-white/30"} rounded-xl px-4 text-white text-sm focus:outline-none focus:ring-0 transition-all placeholder:text-zinc-600`}
              onKeyDown={(e) => e.key === "Enter" && handleConfirm()}
            />
            <button
              onClick={handleConfirm}
              className="bg-white text-black font-semibold px-6 rounded-xl hover:bg-zinc-200 transition-all text-sm"
            >
              Confirm
            </button>
            <button
              onClick={handleCancelConfirm}
              className="w-12 flex items-center justify-center bg-zinc-800 text-zinc-400 rounded-xl hover:bg-zinc-700 hover:text-white transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
