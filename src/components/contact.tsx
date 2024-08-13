import { SendHorizonal } from "lucide-react";
import { Button } from "./ui/button";

export default function Contact() {
  return (
    <section className="py-10 mx-6 my-5" id="contactSection">
      <h2 className="text-3xl mb-3">Contact Me</h2>
      <p className="text-muted-foreground text-xl mb-8">
        Want to learn more about my projects, hire me, or get freelance work
        done?
      </p>

      <Button
        className="email-btn rounded-xl text-lg justify-between px-6 h-16 w-full group transition-all duration-300 ease-in-out sm:w-auto hover:shadow-muted hover:shadow-xl"
        asChild
      >
        <a href="mailto:hello@ryandey.xyz">
          Send me an email{" "}
          <SendHorizonal
            strokeWidth={2}
            className="ml-2 transition-all duration-300 ease-in-out group-hover:translate-x-1.5"
          />
        </a>
      </Button>
    </section>
  );
}
