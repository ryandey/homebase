"use client";
import React from "react";
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

const formSchema = z.object({
  fullName: z.string(),
  email: z.string().email().min(5),
  message: z.string(),
});

export default function ContactForm() {
  // Zod validator
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  //   Submission handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full text-center max-w-7xl"
      >
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
                  <Input placeholder="John Doe" {...field} />
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
                  <FormLabel className="text-2xl md:text-3xl">Email</FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Input placeholder="john@example.com" {...field} />
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
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" size="lg">
          Send my message
        </Button>
      </form>
    </Form>
  );
}
