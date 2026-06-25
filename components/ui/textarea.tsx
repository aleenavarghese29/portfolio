import * as React from "react"
import { cn } from "@/lib/utils"

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-md border border-[var(--color-border-default)] bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-transparent focus-visible:outline-none focus-visible:border-[var(--color-accent-primary)] focus-visible:ring-1 focus-visible:ring-[var(--color-accent-secondary)] disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 peer dark:border-[var(--color-border-dark)]",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
