import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

import { ChevronUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B3D2E] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Campaign */}
          <div>
            <h2 className="text-3xl font-bold">
              Judah Katoo
              <br />
              Ole Metito
            </h2>

            <div className="my-5 h-1 w-16 rounded-full bg-[#C7A65B]" />

            <p className="leading-8 text-white/80">
              Building a stronger, inclusive and prosperous Kajiado through
              visionary leadership, accountable governance and sustainable
              development.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-[#C7A65B]">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {[
                ["Home", "#hero"],
                ["About", "#about"],
                ["Leadership Journey", "#journey"],
                ["Record of Impact", "#impact"],
                ["Vision", "#manifesto"],
                ["Gallery", "#gallery"],
                ["News", "#news"],
                ["Contact", "#contact"],
              ].map(([name, href]) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="transition hover:text-[#C7A65B]"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-[#C7A65B]">
              Contact
            </h3>

            <div className="space-y-5 text-white/80">
              <p>Kajiado Town</p>

              <p>+254 700 000 000</p>

              <p>info@katooolemetito.co.ke</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-[#C7A65B]">
              Follow Campaign
            </h3>

            <div className="flex gap-4">
              {[
                {
                  icon: <FaFacebookF />,
                  href: "#",
                },
                {
                  icon: <FaInstagram />,
                  href: "#",
                },
                {
                  icon: <FaXTwitter />,
                  href: "#",
                },
                {
                  icon: <FaYoutube />,
                  href: "#",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#C7A65B] hover:text-[#0B3D2E]"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <a
              href="#hero"
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#C7A65B] px-5 py-3 transition hover:bg-[#C7A65B] hover:text-[#0B3D2E]"
            >
              <ChevronUp size={18} />
              Back to Top
            </a>
          </div>
        </div>

        {/* Divider */}

        <div className="my-12 h-px bg-white/20" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-5 text-center text-sm text-white/70 md:flex-row">
          <p>
            © 2026 Judah Katoo Ole Metito Campaign. All Rights Reserved.
          </p>

          <p>
            Designed & Developed by{" "}
            <span className="font-semibold text-[#C7A65B]">
              Sylvia Kunaai
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}