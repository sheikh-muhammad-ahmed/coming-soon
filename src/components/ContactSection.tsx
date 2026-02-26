"use client";

import { motion } from "framer-motion";
import { FiMail, FiSend } from "react-icons/fi";
import {
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa6";

const socials = [
  {
    icon: <FaInstagram size={20} />,
    label: "Instagram",
    href: "https://instagram.com/kheilkood",
    hoverColor: "hover:bg-pink-500/15 hover:text-pink-400 hover:border-pink-500/25",
  },
  {
    icon: <FaXTwitter size={20} />,
    label: "X / Twitter",
    href: "https://x.com/kheilkood",
    hoverColor: "hover:bg-white/10 hover:text-white hover:border-white/20",
  },
  {
    icon: <FaFacebookF size={20} />,
    label: "Facebook",
    href: "https://facebook.com/kheilkood",
    hoverColor: "hover:bg-blue-500/15 hover:text-blue-400 hover:border-blue-500/25",
  },
  {
    icon: <FaWhatsapp size={22} />,
    label: "WhatsApp",
    href: "https://wa.me/923001234567",
    hoverColor: "hover:bg-green-500/15 hover:text-green-400 hover:border-green-500/25",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-[#0e0e0e] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          className="mb-12 text-center md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#9dc4d5]">
            Support
          </span>
          <h2 className="text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-white/50 md:text-lg">
            We&apos;re here to help — reach out anytime.
          </p>
        </motion.div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Left — info */}
          <motion.div
            className="flex flex-col gap-8 lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Email */}
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-white/30">
                Email us
              </p>
              <a
                href="mailto:support@kheilkood.pk"
                className="group inline-flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-5 py-4 transition-colors duration-200 hover:border-[#9dc4d5]/20 hover:bg-white/[0.05]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#9dc4d5]/[0.08] text-[#9dc4d5]">
                  <FiMail size={18} />
                </span>
                <span className="text-sm font-semibold text-white/80 transition-colors group-hover:text-[#9dc4d5] sm:text-[15px]">
                  support@kheilkood.pk
                </span>
              </a>
            </div>

            {/* Socials */}
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-white/30">
                Follow us
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03] text-white/50 transition-all duration-200 hover:scale-110 ${s.hoverColor}`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Small note */}
            <p className="text-sm leading-relaxed text-white/25">
              Launching soon — questions, partnerships, and venue
              inquiries are all welcome.
            </p>
          </motion.div>

          {/* Right — form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form
              action="#"
              method="POST"
              className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 sm:p-8"
            >
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:gap-4">
                {/* Name */}
                <div className="flex-1">
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/30"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors duration-200 focus:border-[#9dc4d5]/40 focus:ring-1 focus:ring-[#9dc4d5]/20"
                  />
                </div>

                {/* Email */}
                <div className="flex-1">
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/30"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    className="w-full rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors duration-200 focus:border-[#9dc4d5]/40 focus:ring-1 focus:ring-[#9dc4d5]/20"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/30"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="How can we help?"
                  className="w-full resize-none rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors duration-200 focus:border-[#9dc4d5]/40 focus:ring-1 focus:ring-[#9dc4d5]/20"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#e3e53e] px-8 py-3.5 text-sm font-bold text-[#121212] transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(227,229,62,0.3)] sm:w-auto sm:text-base"
              >
                <FiSend size={16} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
