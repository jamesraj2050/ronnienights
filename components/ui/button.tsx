import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold tracking-[0.18em] uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#D4AF37] text-black shadow-[0_18px_55px_rgba(212,175,55,0.25)] hover:bg-[#f0ce5d] hover:shadow-[0_24px_70px_rgba(212,175,55,0.36)]",
        outline:
          "border border-white/20 bg-white/[0.03] text-white hover:border-[#D4AF37]/70 hover:bg-[#D4AF37]/10 hover:text-[#f4d96d]",
        ghost: "text-white/80 hover:bg-white/10 hover:text-white"
      },
      size: {
        default: "h-12 px-7",
        lg: "h-14 px-9",
        icon: "h-11 w-11"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
