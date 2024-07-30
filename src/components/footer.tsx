import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="mx-6 pt-10">
      <div className="flex flex-col h-64 gap-3">
        <Button
          variant="outline"
          className="flex-1 h-64 rounded-xl text-xl justify-between px-6"
        >
          LinkedIn
          <ArrowUpRight />
        </Button>
        <Button
          variant="outline"
          className="flex-1 h-64 rounded-xl text-xl justify-between px-6"
        >
          GitHub
          <ArrowUpRight />
        </Button>
        <Button
          variant="outline"
          className="flex-1 h-64 rounded-xl text-xl justify-between px-6"
        >
          Instagram
          <ArrowUpRight />
        </Button>
      </div>

      {/* Copyright */}
      <p className="text-center text-muted-foreground pt-8 pb-12">
        &copy; 2024 Ryan Dey. All rights reserved.
      </p>
    </footer>
  );
}
