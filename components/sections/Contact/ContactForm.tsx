"use client";

import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <div className="rounded-[2rem] border border-[#E8E2D6] bg-white p-10 shadow-2xl">
      <h3 className="mb-2 text-3xl font-bold text-[#0B3D2E]">
        Send Us a Message
      </h3>

      <p className="mb-10 text-gray-600">
        We'd love to hear from you. Fill in the form below and our campaign
        team will get back to you as soon as possible.
      </p>

      <form className="space-y-6">
        {/* Name */}
        <div>
          <label className="mb-2 block font-medium text-[#0B3D2E]">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-[#E8E2D6] bg-[#F8F6F1] px-5 py-4 outline-none transition focus:border-[#0B3D2E] focus:ring-2 focus:ring-[#0B3D2E]/20"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block font-medium text-[#0B3D2E]">
            Email Address
          </label>

          <input
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-xl border border-[#E8E2D6] bg-[#F8F6F1] px-5 py-4 outline-none transition focus:border-[#0B3D2E] focus:ring-2 focus:ring-[#0B3D2E]/20"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="mb-2 block font-medium text-[#0B3D2E]">
            Subject
          </label>

          <input
            type="text"
            placeholder="How can we help?"
            className="w-full rounded-xl border border-[#E8E2D6] bg-[#F8F6F1] px-5 py-4 outline-none transition focus:border-[#0B3D2E] focus:ring-2 focus:ring-[#0B3D2E]/20"
          />
        </div>

        {/* Message */}
        <div>
          <label className="mb-2 block font-medium text-[#0B3D2E]">
            Message
          </label>

          <textarea
            rows={6}
            placeholder="Write your message..."
            className="w-full resize-none rounded-xl border border-[#E8E2D6] bg-[#F8F6F1] px-5 py-4 outline-none transition focus:border-[#0B3D2E] focus:ring-2 focus:ring-[#0B3D2E]/20"
          />
        </div>

        <Button
          size="lg"
          className="group w-full bg-[#0B3D2E] py-7 text-lg text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#14523D] hover:shadow-xl"
        >
          <span className="flex items-center gap-3">
            Send Message
            <Send
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </Button>
      </form>
    </div>
  );
}