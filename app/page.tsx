import { Button } from "@/components/ui/button";
import Hero from "./hero";
import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="h-[100vh]">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <p>Paragraph</p>
      <div className="flex flex-row gap-4 mt-4">
        <Button variant="default">See my work</Button>
        <Button variant="outline">Get my resume</Button>
        <Button variant="secondary">Get my resume</Button>
        <ThemeToggle />
      </div>
      <Hero />
    </div>
  );
}
