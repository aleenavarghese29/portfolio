import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[var(--color-primary-charcoal)] text-white shadow hover:bg-[var(--color-primary-black)] dark:bg-[var(--color-accent-primary)] dark:text-black",
        secondary:
          "border-transparent bg-[var(--color-bg-linen)] text-[var(--color-text-body)] hover:bg-[var(--color-border-default)] dark:bg-[var(--color-card-dark)] dark:text-[var(--color-text-light)]",
        destructive:
          "border-transparent bg-[var(--color-error)] text-white hover:bg-red-600",
        outline: "text-foreground",
        luxury: "border-[var(--color-border-hover)] bg-[var(--color-bg-ivory)] text-[var(--color-accent-primary)] dark:bg-[var(--color-bg-dark)] dark:border-[#524430]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
