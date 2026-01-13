import React from "react";

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-zinc-200/70 bg-white/80 backdrop-blur shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}