import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all disabled:opacity-60 disabled:cursor-not-allowed";
  const styles =
    variant === "primary"
      ? "bg-zinc-950 text-white shadow-sm hover:bg-zinc-900 hover:shadow"
      : variant === "secondary"
      ? "border border-zinc-200 bg-white text-zinc-950 hover:bg-zinc-50"
      : "text-zinc-950 hover:bg-zinc-100";

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}