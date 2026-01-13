import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({ children, variant = "primary", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition-colors disabled:opacity-60";
  const styles =
    variant === "primary"
      ? "bg-zinc-900 text-white hover:bg-zinc-800"
      : "border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50";

  return (
    <button className={`${base} ${styles}`} {...props}>
      {children}
    </button>
  );
}