"use client";

import { cn } from "@/lib/utils";

export function Loading({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center min-h-[200px]", className)}>
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-main/20 border-t-main animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-main animate-pulse" />
        </div>
      </div>
    </div>
  );
} 