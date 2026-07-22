import Link from "next/link";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-6 z-50 flex justify-center">
      <nav className="flex w-[92%] max-w-7xl items-center justify-between rounded-full border border-white/20 bg-white/80 px-8 py-4 shadow-xl backdrop-blur-md">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wider text-[#0B3D2E]"
        >
          KM
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-[#0B3D2E]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}