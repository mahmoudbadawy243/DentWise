"use client";

import { PricingTable } from "@clerk/nextjs";
import { useTheme } from "next-themes";

export default function PricingTableTheme() {
  const { resolvedTheme } = useTheme();

  const colorDark  = "oklch(0.6716 0.1368 48.5130)";
  const colorLight  = "oklch(0.6731 0.1624 144.2083)";

  const colorPrimary =
    resolvedTheme === "dark" ? colorDark : colorLight;

  return <PricingTable appearance={{ variables: { colorPrimary } }} />;
}