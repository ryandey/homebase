import React from "react";

export default function Success() {
  return (
    <div className="w-full py-32 px-8 border border-dashed border-input">
      <p className="font-instrumentSerif text-4xl text-center mb-4">
        Your message has been sent!
      </p>
      <p className="text-muted-foreground text-center">
        Thank you for taking the time to reach out. I will respond as soon as
        possible.
      </p>
    </div>
  );
}
