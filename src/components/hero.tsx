import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

export const Hero = () => {
  return (
    <>
      <section className="py-16 mt-12 mx-6">
        <h1 className="text-7xl uppercase mb-5">
          Ryan
          <br />
          Dey
        </h1>
        <p className="text-muted-foreground text-xl mb-10">
          Designer & Web Developer
        </p>
        <div className="flex flex-col h-16 gap-3">
          <Button className="flex-1 rounded-xl text-lg justify-between px-6">
            See my work <MoveRight strokeWidth={1.5} className="ml-2" />
          </Button>
        </div>
      </section>
    </>
  );
};
