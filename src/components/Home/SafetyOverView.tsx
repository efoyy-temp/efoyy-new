import React from "react";

const features = [
  {
    title: "GLOBAL ACCOUNT ACCESS",
    desc: "Receive Payments In USD, EUR, GBP, And More With Local Bank Details.",
  },
  {
    title: "FOREIGN EXCHANGE RATES",
    desc: "Benefit From Real-Time Rates With Minimal Conversion Fees.",
  },
  {
    title: "SMART FAST PAY TOOLS",
    desc: "Easily Connect With Platforms Like Upwork, Fiverr, And Amazon.",
  },
  {
    title: "SUPER EASY FUND WITHDRAWALS",
    desc: "Transfer Funds To Your Local Bank Or Use Our Payrot Card For Direct Access.",
  },
];

export default function() {
  return (
    <section className="mx-auto max-w-screen-xl  p-6">
      <h2 className="text-9xl mb-12 font-bold from-primary text-center to-transparent text-clip bg-clip-text text-transparent bg-gradient-to-b  tracking-wide ">
        SAFETY
      </h2>
      <div className="space-y-8">
        {features.map(({ title, desc }, i) => (
          <div
            key={i}
            className="flex items-center justify-between border-b border-border pb-4"
          >
            <div className="flex items-center gap-6">
              <div>
                <h3 className="font-medium text-foreground text-3xl tracking-wider">
                  {title}
                </h3>
                <p className="text-sm text-secondary-foreground mt-1 max-w-md">
                  {desc}
                </p>
              </div>
            </div>
            <button
              aria-label={`More about ${title}`}
              className={` p-3 rounded-full hover:opacity-90 transition-opacity`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
