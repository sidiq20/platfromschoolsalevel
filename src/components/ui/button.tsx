import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline"
  size?: "sm" | "md" | "lg"
  asChild?: boolean
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  asChild = false,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-body font-semibold tracking-wide transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson disabled:opacity-50 disabled:pointer-events-none"

  const variants = {
    primary:  "bg-crimson text-white hover:bg-[#a0182f]",
    secondary: "bg-navy text-white hover:bg-navy-deep",
    ghost:    "bg-transparent text-navy border border-hairline hover:bg-off-white",
    outline:  "bg-transparent text-crimson border border-crimson hover:bg-crimson-bg",
  }

  const sizes = {
    sm: "h-[34px] px-4 text-[12px]",
    md: "h-[42px] px-6 text-[13px]",
    lg: "h-[52px] px-8 text-[14px]",
  }
  
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  )
}
