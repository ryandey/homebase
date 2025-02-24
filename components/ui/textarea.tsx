import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "font-instrumentSans border-input placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-ring/50 focus-visible:shadow-pop aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex field-sizing-content min-h-16 w-full border bg-transparent px-3 py-2 text-lg shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-xl",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
