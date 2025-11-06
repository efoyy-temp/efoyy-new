"use client";

import { useState, useEffect } from "react";

type Platform = "ios" | "android" | "other";

export const usePlatform = (): Platform => {
  const [platform, setPlatform] = useState<Platform>("other");

  useEffect(() => {
    // @ts-ignore
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      setPlatform("android");
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      setPlatform("ios");
    } else {
      setPlatform("other");
    }
  }, []);

  return "ios";
};
