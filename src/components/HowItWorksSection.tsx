"use client";

import { motion } from "framer-motion";
import { FiSearch, FiCalendar, FiCheckCircle } from "react-icons/fi";

const steps = [
  {
    num: "01",
    icon: <FiSearch size={28} />,
    title: "Search venue or match",
    description: "Find nearby games or available venues in seconds.",
    accent: "#e3e53e",
  },
  {
    num: "02",
    icon: <FiCalendar size={28} />,
    title: "Book or join instantly",
    description: "Reserve your slot or join a match with one tap.",
    accent: "#b0d468",
  },
  {
    num: "03",
    icon: <FiCheckCircle size={28} />,
    title: "Show up & play",
    description: "Arrive, connect, and enjoy the game.",
    accent: "#9dc4d5",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#121212] py-16 md:py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[#e3e53e]/[0.02] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="mb-14 text-center md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#9dc4d5]">
            How It Works
          </span>
          <h2 className="text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl">
            Get Playing in 3 Easy Steps
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-white/50 md:text-lg">
            Simple steps to find, join, and play — no hassle.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {/* Connector lines (desktop only) */}
          <div className="pointer-events-none absolute left-0 right-0 top-[72px] z-0 hidden md:block">
            <div className="mx-auto flex max-w-[70%] items-center justify-center">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#e3e53e]/20 to-[#e3e53e]/20" />
              <div className="h-px flex-1 bg-gradient-to-r from-[#9dc4d5]/20 via-[#9dc4d5]/20 to-transparent" />
            </div>
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="group relative z-10 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-7 text-center transition-all duration-300 hover:-translate-y-[5px] md:p-8"
              style={{
                boxShadow: "0 0 0 rgba(0,0,0,0)",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{
                boxShadow: `0 0 35px ${step.accent}10`,
                borderColor: `${step.accent}30`,
              }}
            >
              {/* Step number + icon */}
              <div className="relative mx-auto mb-6 flex h-[88px] w-[88px] items-center justify-center">
                {/* Outer ring */}
                <div
                  className="absolute inset-0 rounded-full transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `conic-gradient(from 180deg, ${step.accent}15, transparent 60%)`,
                    opacity: 0.5,
                  }}
                />
                {/* Inner circle */}
                <div
                  className="relative flex h-16 w-16 items-center justify-center rounded-full transition-colors duration-300"
                  style={{
                    backgroundColor: `${step.accent}12`,
                    color: step.accent,
                  }}
                >
                  {step.icon}
                </div>
                {/* Step number badge */}
                <span
                  className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full text-xs font-black"
                  style={{
                    backgroundColor: step.accent,
                    color: "#121212",
                  }}
                >
                  {step.num.replace("0", "")}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-bold text-white">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mx-auto max-w-[240px] text-sm leading-relaxed text-white/45">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
