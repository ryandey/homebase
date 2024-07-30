import { Briefcase, User } from "lucide-react";
import { Button } from "./ui/button";

export default function Contact() {
  return (
    <section className="py-10 mx-6" id="contactSection">
      <h2 className="text-3xl mb-3">Contact Me</h2>
      <p className="text-muted-foreground mb-6">
        For freelance-related queries, please use the "work with me" button
        below. For other inquiries, please use the "inquiries" button.
      </p>
      <div className="flex gap-3 h-32">
        <Button
          variant="secondary"
          className="flex-1 h-full flex-col gap-2 rounded-xl"
        >
          <Briefcase />
          Work With Me
        </Button>
        <Button
          variant="secondary"
          className="flex-1 h-full flex-col gap-2 rounded-xl"
        >
          <User />
          Inquiries
        </Button>
      </div>
    </section>
  );
}
