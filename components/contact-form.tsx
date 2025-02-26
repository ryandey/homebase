"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Success from "@/components/success";

const contactSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email().min(5),
  message: z.string(),
  "form-name": z.string().default("contact"),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Zod validator
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
      "form-name": "contact",
    },
  });

  //   Submission handler
  async function onSubmit(data: z.infer<typeof contactSchema>) {
    setIsSubmitting(true);
    console.log(data);
    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });

      // Show success
      if (response.ok) {
        console.log("Form submitted");
      } else {
        console.log("Form submission failed");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return <Success />;
  } else {
    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full text-center max-w-7xl"
          name="contact"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <div className="flex gap-4 items-center">
                    <FormLabel className="text-2xl md:text-3xl">Name</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      {...field}
                      required
                      disabled={isSubmitting}
                      minLength={2}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div className="flex gap-4 items-center">
                    <FormLabel className="text-2xl md:text-3xl">
                      Email
                    </FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input
                      placeholder="john@example.com"
                      {...field}
                      required
                      disabled={isSubmitting}
                      type="email"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="text-left">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <div className="flex gap-4 items-center">
                    <FormLabel className="text-2xl md:text-3xl">
                      Message
                    </FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Textarea
                      placeholder="Write your message here..."
                      className="max-w-full h-32 resize-none"
                      {...field}
                      required
                      disabled={isSubmitting}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" size="lg" disabled={isSubmitting}>
            {!isSubmitting ? <>Send my message</> : <>Submitting...</>}
          </Button>
        </form>
      </Form>
    );
  }
}
