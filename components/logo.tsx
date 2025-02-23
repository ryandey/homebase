"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

export default function () {
  const { theme } = useTheme();

  return (
    <Image
      src={theme === "dark" ? "/logos/logo-dark.svg" : "/logos/logo-light.svg"}
      alt="Ryan Dey's logo"
      width={30}
      height={30}
    />
  );
}
