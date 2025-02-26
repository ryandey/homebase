import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex mt-14 h-[91vh] justify-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#181e2b_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="flex flex-col items-center justify-center gap-4 px-8">
        <X size={96} />
        <h1 className="text-6xl">
          Page <span className="text-primary">not found</span>.
        </h1>
        <p className="text-muted-foreground mb-4 text-center">
          The page you were looking for does not exist.
        </p>
        <Link href="/" passHref>
          <Button size="lg">Return to homepage</Button>
        </Link>
      </div>
    </div>
  );
}
