import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <>
      <section className="py-16">
        <h1 className="text-7xl uppercase mb-5">
          Ryan
          <br />
          Dey
        </h1>
        <p className="text-muted-foreground text-xl mb-10">
          Designer & Web Developer
        </p>
        <Button>See my work</Button>
      </section>
    </>
  );
};
