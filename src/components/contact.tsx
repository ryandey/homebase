import { SendHorizonal } from "lucide-react";
import { Button } from "./ui/button";

export default function Contact() {
  return (
    <section className="py-10 mx-6" id="contactSection">
      <h2 className="text-3xl mb-3">Contact Me</h2>
      <p className="text-muted-foreground mb-6">
        Want to learn more about my projects, hire me, or get freelance work
        done?
      </p>
      <div className="min-h-16">
        <Button className="rounded-xl text-lg justify-between px-6 h-16 w-full sm:w-auto">
          Send me an email <SendHorizonal strokeWidth={1.5} className="ml-2" />
        </Button>
      </div>
    </section>
  );
}
