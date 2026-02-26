"use client";

import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    q: "When is the app launching?",
    a: "We're targeting a global launch in Q3 2026. Join early access to be the first to know when we go live.",
  },
  {
    q: "Which sports are supported?",
    a: "We're starting with cricket, football (futsal), and badminton — with more sports being added soon after launch.",
  },
  {
    q: "Is it free to use?",
    a: "Yes, signing up and joining matches is completely free. Venue booking fees depend on the ground and time slot you choose.",
  },
  {
    q: "How can I list my venue?",
    a: "You can apply through our 'List Your Venue' form. We'll verify details, help you set up your profile, and get you live on the platform.",
  },
  {
    q: "Where is KheilKood available?",
    a: "We're launching globally — connecting players and venues in cities worldwide. Stay tuned for updates on coverage in your area.",
  },
  {
    q: "How do payments work?",
    a: "All bookings are handled through secure in-app payments. You pay when you book, and venue owners receive payouts automatically.",
  },
  {
    q: "What if a match gets cancelled?",
    a: "If a match is cancelled by the organizer, you'll be notified instantly and receive a full refund or credit to rebook.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="relative bg-[#121212] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <motion.div
          className="mb-12 text-center md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#9dc4d5]">
            FAQ
          </span>
          <h2 className="text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-white/50 md:text-lg">
            Everything you need to know before we launch.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <details className="group rounded-xl border border-white/[0.06] bg-white/[0.03] transition-colors duration-200 hover:border-white/[0.1] hover:bg-white/[0.04]">
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5">
                  <span className="text-sm font-semibold text-white/90 sm:text-[15px]">
                    {faq.q}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-white/50 transition-transform duration-300 group-open:rotate-180 group-open:bg-[#9dc4d5]/10 group-open:text-[#9dc4d5]">
                    <FiChevronDown size={16} />
                  </span>
                </summary>
                <div className="faq-answer px-5 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-sm leading-relaxed text-white/45 sm:text-[15px]">
                    {faq.a}
                  </p>
                </div>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
