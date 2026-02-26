"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiCalendar,
  FiUsers,
  FiSearch,
  FiMapPin,
  FiClock,
  FiStar,
  FiChevronRight,
  FiHome,
  FiUser,
  FiMap,
} from "react-icons/fi";
import { FaRocket } from "react-icons/fa";

/* Tiny reusable logo for phone mock headers */
function MockLogo({ size = 14 }: { size?: number }) {
  return (
    <Image
      src="/images/appLogo/KK 48 by 48.png"
      alt="KK"
      width={size}
      height={size}
      className="rounded-[3px]"
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Mock screen builders – each returns the inner JSX for one phone   */
/* ------------------------------------------------------------------ */

function BookingScreen() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[#1a0f28] to-[#0d0d18]">
      {/* Status area */}
      <div className="flex items-center justify-between px-4 pt-10 pb-2">
        <span className="flex items-center gap-1 text-[11px] font-bold text-white">
          <MockLogo />
          <span className="text-[#e3e53e]">Kheil</span><span className="text-[#9dc4d5]">Kood</span>
        </span>
        <span className="text-[9px] text-white/40">9:41</span>
      </div>

      {/* Venue header */}
      <div className="mx-3 mt-1 rounded-xl bg-white/[0.05] p-3">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e3e53e]/10 text-[#e3e53e]">
            <FiMapPin size={14} />
          </div>
          <div>
            <p className="text-[11px] font-bold text-white">City Arena</p>
            <p className="text-[8px] text-white/40">Downtown District</p>
          </div>
        </div>
        <div className="flex gap-1.5">
          {["Futsal", "Cricket", "Tennis"].map((s) => (
            <span
              key={s}
              className="rounded-full bg-[#e3e53e]/10 px-2 py-0.5 text-[7px] font-semibold text-[#e3e53e]"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Calendar strip */}
      <div className="mt-3 flex items-center gap-1.5 px-3">
        {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d, i) => (
          <div
            key={d}
            className={`flex flex-1 flex-col items-center rounded-lg py-1.5 text-[8px] ${
              i === 2
                ? "bg-[#e3e53e] font-bold text-[#121212]"
                : "bg-white/[0.04] text-white/50"
            }`}
          >
            <span>{d}</span>
            <span className="mt-0.5 text-[10px] font-bold">{12 + i}</span>
          </div>
        ))}
      </div>

      {/* Time slots */}
      <p className="mt-3 px-3 text-[9px] font-semibold text-white/60">
        Available Slots
      </p>
      <div className="mt-1.5 flex flex-col gap-1.5 px-3">
        {[
          { time: "6:00 PM", price: "$35", open: true },
          { time: "8:00 PM", price: "$40", open: true },
          { time: "10:00 PM", price: "$30", open: false },
        ].map((s) => (
          <div
            key={s.time}
            className="flex items-center justify-between rounded-lg bg-white/[0.04] px-3 py-2"
          >
            <div className="flex items-center gap-2">
              <FiClock size={10} className="text-white/30" />
              <span className="text-[10px] font-semibold text-white/80">
                {s.time}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-white/40">{s.price}</span>
              <span
                className={`rounded-md px-2 py-0.5 text-[7px] font-bold ${
                  s.open
                    ? "bg-[#e3e53e]/15 text-[#e3e53e]"
                    : "bg-white/[0.06] text-white/30"
                }`}
              >
                {s.open ? "Book" : "Full"}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <MockBottomNav active={1} />
    </div>
  );
}

function MatchLobbyScreen() {
  const matches = [
    {
      sport: "⚽",
      title: "Futsal 5v5",
      venue: "Metro Sports Hub",
      time: "8 PM Tonight",
      spots: 2,
    },
    {
      sport: "🏏",
      title: "Tape Ball Cricket",
      venue: "Central Ground",
      time: "Sat 6 AM",
      spots: 4,
    },
    {
      sport: "🏸",
      title: "Badminton Doubles",
      venue: "Riverside Arena",
      time: "Sun 7 PM",
      spots: 1,
    },
  ];

  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[#1a0f28] to-[#0d0d18]">
      <div className="flex items-center justify-between px-4 pt-10 pb-2">
        <span className="text-[11px] font-bold text-white">Match Lobby</span>
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#e3e53e]/10 text-[#e3e53e]">
          <FiSearch size={10} />
        </div>
      </div>

      {/* Sport filter chips */}
      <div className="flex gap-1.5 px-3 pb-2">
        {["All", "Futsal", "Cricket", "Badminton"].map((s, i) => (
          <span
            key={s}
            className={`rounded-full px-2.5 py-1 text-[8px] font-semibold ${
              i === 0
                ? "bg-[#e3e53e] text-[#121212]"
                : "bg-white/[0.06] text-white/50"
            }`}
          >
            {s}
          </span>
        ))}
      </div>

      {/* Match cards */}
      <div className="flex flex-1 flex-col gap-2 px-3 pt-1">
        {matches.map((m) => (
          <div
            key={m.title}
            className="rounded-xl border border-white/[0.06] bg-white/[0.04] p-3"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg">{m.sport}</span>
                <div>
                  <p className="text-[10px] font-bold text-white">{m.title}</p>
                  <p className="text-[8px] text-white/40">{m.venue}</p>
                </div>
              </div>
              <span className="rounded-full bg-[#e3e53e]/10 px-2 py-0.5 text-[7px] font-bold text-[#e3e53e]">
                {m.spots} spots
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-1 text-[8px] text-white/35">
                <FiClock size={8} />
                {m.time}
              </div>
              <span className="flex items-center gap-0.5 text-[8px] font-semibold text-[#e3e53e]">
                Join <FiChevronRight size={8} />
              </span>
            </div>
          </div>
        ))}
      </div>

      <MockBottomNav active={2} />
    </div>
  );
}

function PlayerDiscoveryScreen() {
  const players = [
    { name: "Ali Khan", sport: "Futsal", rating: 4.8, dist: "1.2 km" },
    { name: "Bilal Ahmed", sport: "Cricket", rating: 4.5, dist: "2.8 km" },
    { name: "Saad Malik", sport: "Tennis", rating: 4.9, dist: "0.6 km" },
    { name: "Farhan Raza", sport: "Futsal", rating: 4.3, dist: "3.1 km" },
  ];

  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[#1a0f28] to-[#0d0d18]">
      <div className="flex items-center justify-between px-4 pt-10 pb-2">
        <span className="text-[11px] font-bold text-white">Find Players</span>
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#9dc4d5]/10 text-[#9dc4d5]">
          <FiMap size={10} />
        </div>
      </div>

      {/* Search */}
      <div className="mx-3 flex items-center gap-2 rounded-lg bg-white/[0.05] px-3 py-2">
        <FiSearch size={10} className="text-white/30" />
        <span className="text-[9px] text-white/30">Search players nearby...</span>
      </div>

      {/* Player list */}
      <div className="mt-3 flex flex-1 flex-col gap-2 px-3">
        {players.map((p) => (
          <div
            key={p.name}
            className="flex items-center gap-2.5 rounded-xl bg-white/[0.04] p-2.5"
          >
            {/* Avatar */}
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#9dc4d5]/30 to-[#e3e53e]/20 text-[10px] font-bold text-white">
              {p.name
                .split(" ")
                .map((w) => w[0])
                .join("")}
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-bold text-white">{p.name}</p>
              <p className="text-[8px] text-white/40">
                {p.sport} · {p.dist}
              </p>
            </div>
            <div className="flex flex-col items-end gap-0.5">
              <div className="flex items-center gap-0.5 text-[8px] text-[#e3e53e]">
                <FiStar size={8} />
                {p.rating}
              </div>
              <span className="rounded-md bg-[#9dc4d5]/10 px-1.5 py-0.5 text-[7px] font-semibold text-[#9dc4d5]">
                Invite
              </span>
            </div>
          </div>
        ))}
      </div>

      <MockBottomNav active={3} />
    </div>
  );
}

function VenueListingScreen() {
  const venues = [
    { name: "Metro Sports Hub", sports: "Futsal · Cricket", rating: 4.7, price: "$35/hr" },
    { name: "Total Football Arena", sports: "Futsal", rating: 4.9, price: "$50/hr" },
    { name: "City Club Courts", sports: "Tennis · Badminton", rating: 4.6, price: "$25/hr" },
  ];

  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[#1a0f28] to-[#0d0d18]">
      <div className="flex items-center justify-between px-4 pt-10 pb-2">
        <span className="flex items-center gap-1 text-[11px] font-bold text-white">
          <MockLogo />
          <span className="text-[#e3e53e]">Kheil</span><span className="text-[#9dc4d5]">Kood</span>
        </span>
        <span className="text-[9px] text-white/40">Near You</span>
      </div>

      {/* Search */}
      <div className="mx-3 flex items-center gap-2 rounded-lg bg-white/[0.05] px-3 py-2">
        <FiSearch size={10} className="text-white/30" />
        <span className="text-[9px] text-white/30">Search venues...</span>
      </div>

      <p className="mt-3 px-3 text-[9px] font-semibold text-white/60">
        Popular Near You
      </p>

      {/* Venue cards */}
      <div className="mt-1.5 flex flex-1 flex-col gap-2 px-3">
        {venues.map((v) => (
          <div
            key={v.name}
            className="rounded-xl border border-white/[0.06] bg-white/[0.04] p-3"
          >
            {/* Venue image placeholder */}
            <div className="mb-2 h-14 w-full rounded-lg bg-gradient-to-r from-[#1a2a1a] to-[#0f1a2a]">
              <div className="flex h-full items-center justify-center text-[8px] text-white/15">
                Venue Photo
              </div>
            </div>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-bold text-white">{v.name}</p>
                <p className="text-[8px] text-white/40">{v.sports}</p>
              </div>
              <div className="flex items-center gap-0.5 text-[8px] text-[#e3e53e]">
                <FiStar size={8} />
                {v.rating}
              </div>
            </div>
            <div className="mt-1.5 flex items-center justify-between">
              <span className="text-[8px] font-semibold text-[#9dc4d5]">
                {v.price}
              </span>
              <span className="rounded-md bg-[#e3e53e]/10 px-2 py-0.5 text-[7px] font-bold text-[#e3e53e]">
                View
              </span>
            </div>
          </div>
        ))}
      </div>

      <MockBottomNav active={0} />
    </div>
  );
}

/* Shared bottom nav */
function MockBottomNav({ active }: { active: number }) {
  const items = [
    { icon: <FiHome size={12} />, label: "Home" },
    { icon: <FiCalendar size={12} />, label: "Book" },
    { icon: <FiUsers size={12} />, label: "Matches" },
    { icon: <FiUser size={12} />, label: "Profile" },
  ];
  return (
    <div className="mt-auto flex justify-around border-t border-white/[0.06] bg-black/30 px-1 py-2">
      {items.map((item, i) => (
        <div
          key={item.label}
          className={`flex flex-col items-center gap-0.5 text-[7px] ${
            i === active ? "text-[#e3e53e]" : "text-white/30"
          }`}
        >
          {item.icon}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Screen data                                                        */
/* ------------------------------------------------------------------ */

const screens = [
  {
    id: "booking",
    caption: "Instant Venue Booking",
    component: <BookingScreen />,
    accent: "#e3e53e",
  },
  {
    id: "lobby",
    caption: "Join Matches Easily",
    component: <MatchLobbyScreen />,
    accent: "#9dc4d5",
  },
  {
    id: "players",
    caption: "Find Players Near You",
    component: <PlayerDiscoveryScreen />,
    accent: "#9dc4d5",
  },
  {
    id: "venues",
    caption: "Explore Top Grounds",
    component: <VenueListingScreen />,
    accent: "#e3e53e",
  },
];

/* ------------------------------------------------------------------ */
/*  Main section component                                             */
/* ------------------------------------------------------------------ */

export default function AppPreviewSection() {
  return (
    <section
      id="app-preview"
      className="relative overflow-hidden bg-[#0e0e0e] py-16 md:py-24"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#e3e53e]/[0.02] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-[#9dc4d5]/[0.02] blur-[140px]" />

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
            App Preview
          </span>
          <h2 className="text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl">
            See It in Action
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-white/50 md:text-lg">
            A sneak peek at what&apos;s launching soon.
          </p>
        </motion.div>

        {/* Phone grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4 sm:gap-8">
          {screens.map((screen, i) => (
            <motion.div
              key={screen.id}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
            >
              {/* Phone frame */}
              <motion.div
                className="group relative"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative h-[420px] w-[210px] overflow-hidden rounded-[32px] border-[2.5px] border-[#2a2a2a] bg-[#1a1a1a] p-[6px] shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-shadow duration-300 group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.6)]">
                  {/* Dynamic island */}
                  <div className="absolute left-1/2 top-[8px] z-30 h-[18px] w-[60px] -translate-x-1/2 rounded-full bg-black" />

                  {/* Screen */}
                  <div className="h-full w-full overflow-hidden rounded-[26px]">
                    {screen.component}
                  </div>

                  {/* Coming Soon overlay */}
                  <div className="absolute inset-[6px] z-20 flex flex-col items-center justify-center rounded-[26px] bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <motion.div
                      className="mb-2 flex h-10 w-10 items-center justify-center rounded-full"
                      style={{ backgroundColor: `${screen.accent}33` }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <FaRocket style={{ color: screen.accent }} size={16} />
                    </motion.div>
                    <span
                      className="rounded-full px-4 py-1.5 text-[11px] font-black tracking-wide text-[#121212]"
                      style={{ backgroundColor: screen.accent }}
                    >
                      COMING SOON
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Caption */}
              <p className="mt-5 text-sm font-bold text-white/80">
                {screen.caption}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA with stadium image */}
        <motion.div
          className="relative mt-14 overflow-hidden rounded-2xl md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative h-[200px] w-full sm:h-[240px]">
            <Image
              src="/images/coming soon.png"
              alt="Stadium at night"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/70 to-transparent" />
          </div>
          <div className="relative -mt-20 pb-10 text-center">
            <p className="mb-6 text-sm text-white/50 md:text-base">
              Launching soon — be the first to play.
            </p>
            <motion.a
            href="#early-access"
            className="inline-flex items-center gap-2.5 rounded-xl bg-[#e3e53e] px-10 py-4 text-base font-bold text-[#121212] transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(227,229,62,0.35)] sm:text-lg"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Get Early Access
          </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
