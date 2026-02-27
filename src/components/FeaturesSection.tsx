"use client";

import { motion } from "framer-motion";
import {
  FiMapPin,
  FiUsers,
  FiCalendar,
  FiShield,
  FiCompass,
  FiChevronRight,
} from "react-icons/fi";

const features = [
  {
    icon: <FiMapPin size={26} />,
    title: "Book Venues Instantly",
    description: "Reserve courts in seconds. No calls, no hassle.",
    accent: "#e3e53e",
  },
  {
    icon: <FiUsers size={26} />,
    title: "Find Players Nearby",
    description: "Fill your match instantly with nearby athletes.",
    accent: "#9dc4d5",
  },
  {
    icon: <FiCalendar size={26} />,
    title: "Manage Bookings",
    description: "Stay organized effortlessly with smart tools.",
    accent: "#e3e53e",
  },
  {
    icon: <FiShield size={26} />,
    title: "Secure Payments",
    description: "Safe, seamless transactions every time.",
    accent: "#9dc4d5",
  },
  {
    icon: <FiCompass size={26} />,
    title: "Discover Courts",
    description: "Explore the best grounds near you.",
    accent: "#e3e53e",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-16 md:py-24 bg-[#121212]">
      <div className="mx-auto max-w-7xl px-5 md:px-12">
        {/* Section Header */}
        <motion.div
          className="mb-10 text-center md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#e3e53e]">
            Core Features
          </span>
          <h2 className="text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl">
            What You Can Do
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-white/50 md:text-lg">
            Everything you need to play more, stress less.
          </p>

          {/* Swipe hint — mobile only */}
          <motion.div
            className="mt-5 flex items-center justify-center gap-1 sm:hidden"
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs font-semibold tracking-wide text-[#9dc4d5]">
              swipe
            </span>
            <FiChevronRight size={14} className="text-[#9dc4d5]" />
            <FiChevronRight size={14} className="text-[#9dc4d5]/50" />
          </motion.div>
        </motion.div>

        {/* Feature Grid — horizontal scroll on mobile, grid on sm+ */}
        {/* -mx-5 + px-5 pulls the scroll container to full viewport width to prevent right-side clipping */}
        <div className="-mx-5 flex items-stretch gap-4 overflow-x-auto snap-x snap-mandatory px-5 pb-4 scrollbar-hide sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 xl:grid-cols-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="group flex w-[78vw] shrink-0 snap-start flex-col rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 text-center transition-all duration-300 ease-out hover:-translate-y-[5px] first:ml-3 last:mr-5 sm:w-auto sm:shrink sm:first:ml-0 sm:last:mr-0"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                borderColor: `${feature.accent}40`,
                boxShadow: `0 0 30px ${feature.accent}14`,
              }}
            >
              {/* Icon */}
              <div
                className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl transition-colors duration-300"
                style={{
                  backgroundColor: `${feature.accent}14`,
                  color: feature.accent,
                }}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-[15px] font-bold leading-snug text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-white/40">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
