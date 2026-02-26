"use client";

import { motion } from "framer-motion";
import {
  FiMapPin,
  FiUsers,
  FiCalendar,
  FiShield,
  FiCompass,
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
          className="mb-14 text-center md:mb-16"
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
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 text-center transition-all duration-300 ease-out hover:-translate-y-[5px]"
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
