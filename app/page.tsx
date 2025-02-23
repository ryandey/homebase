import Hero from "../components/landing/hero";

export default function Home() {
  return (
    <div className="h-[100vh]">
      <Hero />
      <h2 className="text-6xl">
        A little bit about <span className="text-primary">who I am</span>
      </h2>
      <h2 className="text-6xl">
        Some of the <span className="text-primary">work I've done</span>
      </h2>
      <h2 className="text-6xl">
        Let's <span className="text-primary">get in touch</span>
      </h2>
    </div>
  );
}
