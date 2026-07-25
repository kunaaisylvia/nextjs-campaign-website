import { MapPin, Phone, Mail } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

import { contact } from "./contactData";

const iconMap = {
  location: MapPin,
  phone: Phone,
  email: Mail,
};

const socialIcons = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  YouTube: FaYoutube,
  X: FaXTwitter,
};

export default function ContactInfo() {
  return (
    <div className="space-y-10">
      {/* Heading */}
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#C7A65B]">
          {contact.badge}
        </p>

        <h2 className="text-5xl font-bold leading-tight text-[#0B3D2E] md:text-6xl">
          {contact.title}
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          {contact.description}
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-5">
        {contact.info.map((item) => {
          const Icon = iconMap[item.icon];

          return (
            <div
              key={item.title}
              className="flex items-center gap-5 rounded-2xl border border-[#E8E2D6] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0B3D2E] text-white">
                <Icon size={24} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0B3D2E]">
                  {item.title}
                </h3>

                <p className="mt-1 text-gray-600">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Social Media */}
      <div>
        <h3 className="mb-5 text-xl font-bold text-[#0B3D2E]">
          Follow the Campaign
        </h3>

        <div className="flex gap-4">
          {contact.socials.map((social) => {
            const Icon =
              socialIcons[social.name as keyof typeof socialIcons];

            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B3D2E] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#C7A65B] hover:shadow-lg"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-3xl bg-[#0B3D2E] p-8 text-white shadow-xl">
        <h3 className="text-2xl font-bold">
          Join the Movement
        </h3>

        <p className="mt-4 leading-8 text-white/90">
          Together we can build a stronger, more prosperous and united
          Kajiado County. Your voice, ideas and participation matter.
        </p>
      </div>
    </div>
  );
}