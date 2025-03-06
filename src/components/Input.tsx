"use client";

import { Eye, EyeOff } from "lucide-react";
import React, { forwardRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  label?: string;
  error?: string;
  labelClassName?: string;
  containerClassName?: string;
} & React.ComponentProps<"input">;

const Input = forwardRef<HTMLInputElement, Props>(function Input(
  {
    label,
    error,
    className,
    containerClassName,
    labelClassName,
    type,
    ...rest
  },
  ref,
) {
  const [inputType, setInputType] = useState(type);
  return (
    <div className={cn("group", containerClassName)}>
      {label && (
        <label
          className={cn(
            "block text-gray-700 text-sm font-semibold mb-1",
            { "text-red-500": error },
            { "group-focus-within:text-accent ": !error },
            labelClassName,
          )}
        >
          {label}
        </label>
      )}
      <div className="relative flex">
        <input
          {...rest}
          ref={ref}
          type={inputType}
          className={cn(
            "py-3 px-3 bg-[#161616] w-full group-focus-within:outline group-focus-within:outline-primary border border-[#79797993] group-focus-within:border-primary rounded-lg placeholder:text-[#797979CA] text-white transition-all ease-in-out",
            { "border-red-500": error },
            className,
          )}
        />
        {type == "password" && (
          <button
            type="button"
            className="absolute right-2 top-1 bottom-1 active:opacity-70 transition duration-500 rounded-full aspect-square flex items-center justify-center "
            onClick={() => {
              if (type != "password") return;
              setInputType(inputType == "password" ? "text" : "password");
            }}
          >
            {inputType == "password" ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
        )}
      </div>
      <p
        className={cn(
          "text-xs h-0 overflow-hidden transition-all ml-1 text-red-500",
          {
            "h-auto mt-1": error,
          },
        )}
      >
        {error}
      </p>
    </div>
  );
});

export default Input;
