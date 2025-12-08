import React from "react";
import { SalesPerson } from "../types";

interface LayoutProps {
  children: React.ReactNode;
  currentUser?: SalesPerson | null;
  onLogout?: () => void;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  currentUser,
  onLogout,
}) => {
  return (
    <div className="min-h-screen flex flex-col items-center selection:bg-white/20">
      <header className="w-full max-w-4xl px-6 py-8 flex justify-between items-center border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-black"
            >
              <path
                fillRule="evenodd"
                d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="font-semibold text-xl tracking-tight text-white">
            DriveVerify
          </span>
        </div>
        {currentUser && (
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-sm font-medium text-white">
                {currentUser.fullName}
              </span>
              <span className="text-xs text-zinc-500">
                Team {currentUser.salesTeam}
              </span>
            </div>
            <button
              onClick={onLogout}
              className="text-xs font-medium text-zinc-500 hover:text-white transition-colors uppercase tracking-wider"
            >
              Log out
            </button>
          </div>
        )}
      </header>
      <main className="w-full max-w-lg px-6 py-12 flex-1 flex flex-col justify-center">
        {children}
      </main>
      <footer className="w-full py-8 text-center text-zinc-600 text-xs border-t border-white/5">
        &copy; {new Date().getFullYear()} DriveVerify Platform. Internal Use
        Only.
      </footer>
    </div>
  );
};
