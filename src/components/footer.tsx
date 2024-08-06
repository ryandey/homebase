import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "@/assets/logo.svg";

export default function Footer() {
  return (
    <footer className="mx-6 py-10 space-y-8">
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
      <p className="text-center text-muted-foreground">
        &copy; 2024 Ryan Dey. All rights reserved.
      </p>

      {/* Logo */}
      <div className="flex justify-center align-middle">
        <a href="/">
          <img src={Logo} alt="Ryan Dey Logo" className="h-8" />
        </a>
      </div>
    </footer>
  );
}
