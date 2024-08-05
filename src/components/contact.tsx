import { MoveRight } from "lucide-react";
import { Button } from "./ui/button";

export default function Contact() {
  return (
    <section className="py-10 mx-6" id="contactSection">
      <h2 className="text-3xl mb-3">Contact Me</h2>
      <p className="text-muted-foreground mb-6">
        Want to learn more about my projects, hire me, or get freelance work
        done?
      </p>
      <div className="flex flex-col h-16 gap-3">
        <Button className="flex-1 rounded-xl text-lg justify-between px-6">
          Send me an email <MoveRight strokeWidth={1.5} className="ml-2" />
        </Button>
      </div>
    </section>
  );
}
