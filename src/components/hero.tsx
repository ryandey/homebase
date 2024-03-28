import Link from "next/link";

function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start space-y-4 text-left">
          {/* Hero Text */}
          <div className="space-y-2">
            <h1 className="text-primary text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Ryan Dey
            </h1>
            <p className="mx-auto md:text-xl">Web Engineer</p>
          </div>

          {/* Work Button */}
          <Link
            href="#work"
            className="inline-flex h-9 items-center justify-center rounded-md border px-4 shadow-sm text-sm font-medium transition-colors hover:bg-gray-50 hover:text-gray-900"
          >
            See my work
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
