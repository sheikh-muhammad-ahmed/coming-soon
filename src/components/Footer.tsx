import Image from "next/image";
import { FiMail, FiMapPin } from "react-icons/fi";
import {
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaWhatsapp,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa6";

const socials = [
  { icon: <FaInstagram size={18} />, label: "Instagram", href: "#" },
  { icon: <FaXTwitter size={18} />, label: "X", href: "#" },
  { icon: <FaFacebookF size={18} />, label: "Facebook", href: "#" },
  { icon: <FaWhatsapp size={18} />, label: "WhatsApp", href: "#" },
];

const links = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/appLogo/KK 48 by 48.png"
                alt="KheilKood"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <p className="text-xl font-black text-white">
                <span className="text-[#e3e53e]">Kheil</span><span className="text-[#9dc4d5]">Kood</span>
              </p>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/40">
              The all-in-one sports network connecting players and venues
              worldwide.
            </p>
            {/* Socials */}
            <div className="mt-5 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] text-white/40 transition-all duration-200 hover:scale-110 hover:border-[#9dc4d5]/25 hover:bg-[#9dc4d5]/10 hover:text-[#9dc4d5]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-white/30">
              Quick Links
            </p>
            <ul className="flex flex-col gap-2.5">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/45 transition-colors duration-200 hover:text-[#9dc4d5]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Legal + Contact */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-white/30">
              Legal
            </p>
            <ul className="mb-6 flex flex-col gap-2.5">
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-white/45 transition-colors duration-200 hover:text-[#9dc4d5]"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-sm text-white/45 transition-colors duration-200 hover:text-[#9dc4d5]"
                >
                  Terms of Service
                </a>
              </li>
            </ul>

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-white/30">
              Reach Us
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:support@kheilkood.pk"
                className="flex items-center gap-2 text-sm text-white/45 transition-colors hover:text-[#9dc4d5]"
              >
                <FiMail size={14} />
                support@kheilkood.pk
              </a>
              <span className="flex items-center gap-2 text-sm text-white/35">
                <FiMapPin size={14} />
                Worldwide
              </span>
            </div>
          </div>

          {/* Col 4 — App Store */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-white/30">
              Get the App
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="group flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 transition-all duration-200 hover:border-white/[0.15] hover:bg-white/[0.06]"
              >
                <FaApple size={24} className="text-white/70" />
                <div>
                  <p className="text-[9px] font-medium uppercase leading-none tracking-wide text-white/35">
                    Coming soon on
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-white/80">
                    App Store
                  </p>
                </div>
              </a>
              <a
                href="#"
                className="group flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 transition-all duration-200 hover:border-white/[0.15] hover:bg-white/[0.06]"
              >
                <FaGooglePlay size={20} className="text-white/70" />
                <div>
                  <p className="text-[9px] font-medium uppercase leading-none tracking-wide text-white/35">
                    Coming soon on
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-white/80">
                    Google Play
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.06]" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/25">
            &copy; 2026 KheilKood. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Launching soon worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
