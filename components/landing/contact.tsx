import { Mail } from "lucide-react";
import React from "react";
import ContactForm from "@/components/contact-form";

export default function Contact() {
  return (
    <section id="contact" className="px-4 lg:px-36 py-28 border-b border-input">
      {/* Section Label */}
      <div className="flex flex-row gap-2 justify-center items-center py-2 text-muted-foreground">
        <Mail size={16} />
        <p className="text-sm">Contact me</p>
      </div>

      {/* Heading */}
      <h2 className="text-6xl mb-16 text-center">
        Let's <span className="text-primary">get in touch</span>
      </h2>

      <ContactForm />
    </section>
  );
}
