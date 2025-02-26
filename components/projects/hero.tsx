import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

type HeroProps = {
  heading: string;
  subtitle: string;
  liveUrl?: string;
  sourceUrl?: string;
};

export default function Hero(props: HeroProps) {
  const { heading, subtitle, liveUrl, sourceUrl } = props;

  return (
    <section className="flex flex-col items-center justify-center py-20 md:py-28 px-12 md:px-16 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#181e2b_1px,transparent_1px)] [background-size:16px_16px] border-b border-input">
      <h1 className="text-6xl md:text-7xl lg:text-8xl text-center">
        {heading}
      </h1>
      <p className="text-muted-foreground">{subtitle}</p>

      {liveUrl || sourceUrl ? (
        <div className="pt-8 flex gap-4">
          {liveUrl && (
            <Link href={liveUrl} passHref>
              <Button>Visit live site</Button>
            </Link>
          )}
          {sourceUrl && (
            <Link href={sourceUrl} passHref>
              <Button variant="outline">View source</Button>
            </Link>
          )}
        </div>
      ) : null}
    </section>
  );
}
