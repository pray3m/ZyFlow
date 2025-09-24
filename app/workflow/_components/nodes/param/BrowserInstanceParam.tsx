"use client";

import type { ParamProps } from "@/types/appNode";

export function BrowserInstanceParam({ param }: ParamProps) {
  return <p className="text-xs">{param.name}</p>;
}
