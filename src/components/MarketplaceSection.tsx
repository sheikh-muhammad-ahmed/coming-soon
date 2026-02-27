"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaUsers,
  FaCalendarAlt,
  FaBell,
  FaChartLine,
  FaCalendarCheck,
  FaCogs,
  FaBullhorn,
  FaUserShield,
  FaTrophy,
  FaClipboardList,
} from "react-icons/fa";

const playerFeatures = [
  { icon: <FaMapMarkerAlt size={16} />, text: "Find nearby venues" },
  { icon: <FaUsers size={16} />, text: "Join matches" },
  { icon: <FaCalendarAlt size={16} />, text: "Flexible booking" },
  { icon: <FaBell size={16} />, text: "Notifications & reminders" },
];

const venueFeatures = [
  { icon: <FaChartLine size={16} />, text: "Increase bookings" },
  { icon: <FaCalendarCheck size={16} />, text: "Manage schedules" },
  { icon: <FaCogs size={16} />, text: "Reduce manual coordination" },
  { icon: <FaBullhorn size={16} />, text: "Reach new customers" },
];

const teamFeatures = [
  { icon: <FaUsers size={16} />, text: "Build your roster" },
  { icon: <FaTrophy size={16} />, text: "Challenge other teams" },
  { icon: <FaClipboardList size={16} />, text: "Manage lineups" },
  { icon: <FaUserShield size={16} />, text: "Assign team roles" },
];

export default function MarketplaceSection() {
  return (
    <section
      id="marketplace"
      className="relative overflow-hidden bg-[#121212] py-14 md:py-20"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#e3e53e]/[0.03] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#9dc4d5]/[0.03] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-12">
        {/* Section Header */}
        <motion.div
          className="mb-14 text-center md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#e3e53e]">
            Who It&apos;s For
          </span>
          <h2 className="text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl">
            Built for Players, Teams &amp; Venues
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-white/50 md:text-lg">
            A marketplace designed for both sides of the game — play more, earn
            more.
          </p>
        </motion.div>

        {/* Two-Column Grid — horizontal scroll on mobile, grid on lg+ */}
        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:pb-0">
          {/* ---- FOR PLAYERS ---- */}
          <motion.div
            className="group relative min-w-[85vw] shrink-0 snap-center overflow-hidden rounded-2xl border border-[#e3e53e]/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-[4px] hover:border-[#e3e53e]/25 hover:shadow-[0_8px_40px_rgba(227,229,62,0.07)] sm:min-w-[420px] lg:min-w-0 lg:shrink"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Card image */}
            <div className="relative h-48 w-full overflow-hidden sm:h-56">
              <Image
                src="/images/image on mobile.png"
                alt="KheilKood app on a smartphone"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top opacity-60 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/70 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative px-6 pb-8 pt-2 sm:px-8">
              <div className="mb-4 flex items-center gap-2.5">
                <span className="inline-block h-2 w-2 rounded-full bg-[#e3e53e]" />
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  For Players
                </h3>
              </div>
              <p className="mb-6 text-sm text-white/45 sm:text-[15px]">
                Everything you need to play more and plan less.
              </p>

              <ul className="space-y-4">
                {playerFeatures.map((f) => (
                  <li key={f.text} className="flex items-center gap-3.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e3e53e]/[0.08] text-[#e3e53e]">
                      {f.icon}
                    </span>
                    <span className="text-sm font-semibold text-white/80 sm:text-[15px]">
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ---- FOR VENUE OWNERS ---- */}
          <motion.div
            className="group relative min-w-[85vw] shrink-0 snap-center overflow-hidden rounded-2xl border border-[#9dc4d5]/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-[4px] hover:border-[#9dc4d5]/25 hover:shadow-[0_8px_40px_rgba(157,196,213,0.07)] sm:min-w-[420px] lg:min-w-0 lg:shrink"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Card image */}
            <div className="relative h-48 w-full overflow-hidden sm:h-56">
              <Image
                src="/images/better arena image.png"
                alt="Aerial view of lit sports courts at night"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/70 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative px-6 pb-8 pt-2 sm:px-8">
              <div className="mb-4 flex items-center gap-2.5">
                <span className="inline-block h-2 w-2 rounded-full bg-[#9dc4d5]" />
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  For Venue Owners
                </h3>
              </div>
              <p className="mb-6 text-sm text-white/45 sm:text-[15px]">
                Fill more slots. Manage less chaos.
              </p>

              <ul className="space-y-4">
                {venueFeatures.map((f) => (
                  <li key={f.text} className="flex items-center gap-3.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#9dc4d5]/[0.08] text-[#9dc4d5]">
                      {f.icon}
                    </span>
                    <span className="text-sm font-semibold text-white/80 sm:text-[15px]">
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ---- FOR TEAMS ---- */}
          <motion.div
            className="group relative min-w-[85vw] shrink-0 snap-center overflow-hidden rounded-2xl border border-[#e3e53e]/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-[4px] hover:border-[#e3e53e]/25 hover:shadow-[0_8px_40px_rgba(227,229,62,0.07)] sm:min-w-[420px] lg:min-w-0 lg:shrink"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Card image */}
            <div className="relative h-48 w-full overflow-hidden sm:h-56">
              <Image
                src="/images/3rd section image.png"
                alt="Team of players on the field"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/70 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative px-6 pb-8 pt-2 sm:px-8">
              <div className="mb-4 flex items-center gap-2.5">
                <span className="inline-block h-2 w-2 rounded-full bg-[#e3e53e]" />
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  For Teams
                </h3>
              </div>
              <p className="mb-6 text-sm text-white/45 sm:text-[15px]">
                Organize your squad. Compete together.
              </p>

              <ul className="space-y-4">
                {teamFeatures.map((f) => (
                  <li key={f.text} className="flex items-center gap-3.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e3e53e]/[0.08] text-[#e3e53e]">
                      {f.icon}
                    </span>
                    <span className="text-sm font-semibold text-white/80 sm:text-[15px]">
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.a
            href="#venues"
            className="inline-flex items-center gap-2.5 rounded-xl bg-[#e3e53e] px-10 py-4 text-base font-bold text-[#121212] transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(227,229,62,0.35)] sm:text-lg"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            List Your Venue
          </motion.a>
          <p className="mt-4 text-sm text-white/30">
            Join the growing network of venues worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
}
