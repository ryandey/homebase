import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center border-y border-input -translate-y-[1px]">
      <div className="py-4 mx-14 sm:border-x border-input px-8 w-full h-full">
        <div className="flex flex-col gap-4 sm:flex-row h-full items-center justify-between">
          <Link
            href="/"
            passHref
            className="flex flex-row items-center gap-3 h-full"
          >
            <Image
              src="/logos/logo-light.svg"
              alt="Ryan Dey's logo"
              width={30}
              height={30}
              className="hidden dark:block"
            />
            <Image
              src="/logos/logo-dark.svg"
              alt="Ryan Dey's logo"
              width={30}
              height={30}
              className="block dark:hidden"
            />
            <p>Ryan Dey</p>
          </Link>
          <p className="text-sm text-muted-foreground">
            Copyright © 2025 Ryan Dey
          </p>
        </div>
      </div>
    </footer>
  );
}
