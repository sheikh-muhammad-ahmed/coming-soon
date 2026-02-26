"use client";

import { motion } from "framer-motion";
import {
  FiMessageCircle,
  FiPhoneOff,
  FiXCircle,
  FiTarget,
} from "react-icons/fi";

const painPoints = [
  { icon: <FiMessageCircle size={18} />, text: "Endless WhatsApp coordination" },
  { icon: <FiPhoneOff size={18} />, text: "Calling venues one by one" },
  { icon: <FiXCircle size={18} />, text: "Cancelled matches every week" },
  { icon: <FiTarget size={18} />, text: "No central sports platform" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#121212] py-16 md:py-24"
    >
      {/* Background accent */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#300B30]/30 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="mb-14 text-center md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#9dc4d5]">
            Our Story
          </span>
          <h2 className="text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl">
            Why We Built This
          </h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — narrative */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base leading-relaxed text-white/70 md:text-lg">
              We love playing sports. But actually getting a game together? That
              was always the hard part.
            </p>

            <p className="mt-5 text-base leading-relaxed text-white/55 md:text-[17px]">
              Every week it was the same story — endless messages trying to find
              enough players, calling venues one by one, and watching plans fall
              apart at the last minute. Games got cancelled. People stopped
              showing up. The thing we loved most just became too much effort.
            </p>

            <p className="mt-5 text-base leading-relaxed text-white/55 md:text-[17px]">
              We knew we weren&apos;t alone. Everywhere, thousands of
              players were stuck in the same cycle — and venue owners were
              sitting on empty slots with no easy way to fill them.{" "}
              <span className="font-semibold text-white/80">
                So we decided to fix it.
              </span>
            </p>

            <p className="mt-5 text-base leading-relaxed text-white/55 md:text-[17px]">
              KheilKood is what happens when you stop accepting &ldquo;match
              cancelled&rdquo; as normal. One platform where players find games,
              venues fill their slots, and nobody has to chase anyone on a group
              chat ever again.
            </p>
          </motion.div>

          {/* Right — pain points + vision card */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Pain point chips */}
            <div className="mb-8 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 sm:p-8">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-white/30">
                The problems we lived with
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {painPoints.map((p, i) => (
                  <motion.div
                    key={p.text}
                    className="flex items-center gap-3 rounded-xl bg-white/[0.04] px-4 py-3"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-500/[0.08] text-red-400/70">
                      {p.icon}
                    </span>
                    <span className="text-sm font-medium text-white/60">
                      {p.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Vision card */}
            <div className="rounded-2xl border border-[#9dc4d5]/15 bg-[#9dc4d5]/[0.03] p-6 sm:p-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-[#9dc4d5]/60">
                Our Vision
              </p>
              <p className="text-sm leading-relaxed text-white/50 md:text-[15px]">
                This isn&apos;t just an app. It&apos;s a movement to make sports
                accessible, organized, and effortless for every player and every
                venue in the world.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mission statement */}
        <motion.div
          className="mt-14 text-center md:mt-20"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-8 sm:px-10 sm:py-10">
            <p className="text-lg font-black leading-snug text-white md:text-xl lg:text-2xl">
              &ldquo;We&apos;re building the{" "}
              <span className="text-[#e3e53e]">operating system for sports</span>{" "}
              — connecting players, venues, and the game itself.&rdquo;
            </p>
            <p className="mt-4 text-sm font-semibold text-white/30">
              The KheilKood Team
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
