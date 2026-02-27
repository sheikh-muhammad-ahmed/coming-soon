"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiDownload,
  FiMapPin,
  FiHome,
  FiSearch,
  FiCalendar,
  FiUser,
} from "react-icons/fi";
import FeaturesSection from "@/components/FeaturesSection";
import MarketplaceSection from "@/components/MarketplaceSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AppPreviewSection from "@/components/AppPreviewSection";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
    <section className={styles.hero} id="hero">
      {/* Background layers */}
      <div className={styles.bgOverlay} />
      <div className={styles.glowGreen} />
      <div className={styles.glowBlue} />

      <div className={styles.container}>
        {/* Navigation */}
        <motion.nav
          className={styles.nav}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.logo}>
            <Image
              src="/images/appLogo/KK 48 by 48.png"
              alt="KheilKood"
              width={36}
              height={36}
              className={styles.logoIcon}
            />
            <span><span className={styles.logoHighlight}>Kheil</span><span className={styles.logoHighlightBlue}>Kood</span></span>
          </div>
        </motion.nav>

        {/* Hero Content */}
        <div className={styles.heroContent}>
          {/* Left Column – Text */}
          <motion.div
            className={styles.textColumn}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className={styles.headline}>
              Never cancel a match{" "}
              <span className={styles.headlineHighlight}>again.</span>
            </h1>

            <p className={styles.subheadline}>
              Find players. Book venues. Play more. All in one powerful sports
              network built for athletes everywhere.
            </p>

            <div className={styles.ctas}>
              <motion.a
                href="#download"
                className={styles.primaryBtn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload size={18} />
                Download App
              </motion.a>

              <motion.a
                href="#venues"
                className={styles.secondaryBtn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMapPin size={18} />
                List Our Venues
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column – Phone Mockup */}
          <motion.div
            className={styles.phoneColumn}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className={styles.phoneWrapper}>
              <div className={styles.phone}>
                <div className={styles.phoneDynamicIsland} />

                <div className={styles.phoneScreen}>
                  {/* Mock header */}
                  <div className={styles.mockHeader}>
                    <span className={styles.mockLogo}>
                      <Image
                        src="/images/appLogo/KK 48 by 48.png"
                        alt="KK"
                        width={22}
                        height={22}
                        className={styles.mockLogoIcon}
                      />
                      <span><span className={styles.mockLogoAccent}>Kheil</span><span className={styles.mockLogoAccentBlue}>Kood</span></span>
                    </span>
                    <div className={styles.mockAvatar} />
                  </div>

                  {/* Mock search */}
                  <div className={styles.mockSearch}>
                    <FiSearch size={14} />
                    <span>Find venues near you...</span>
                  </div>

                  {/* Mock match cards */}
                  <div className={styles.mockCard}>
                    <div className={styles.mockCardIcon}>⚽</div>
                    <div className={styles.mockCardText}>
                      <strong>Futsal Match Tonight</strong>
                      <span>Downtown Arena · 8:00 PM · 3 spots left</span>
                    </div>
                  </div>

                  <div className={styles.mockCard}>
                    <div className={styles.mockCardIcon}>🏏</div>
                    <div className={styles.mockCardText}>
                      <strong>Weekend Cricket</strong>
                      <span>Central Ground · Sat 6 AM · 5 spots left</span>
                    </div>
                  </div>

                  <div className={styles.mockCard}>
                    <div className={styles.mockCardIcon}>🏸</div>
                    <div className={styles.mockCardText}>
                      <strong>Badminton Doubles</strong>
                      <span>Riverside Arena · 7:30 PM · 1 spot left</span>
                    </div>
                  </div>

                  {/* Mock bottom nav */}
                  <div className={styles.mockBottomNav}>
                    <div
                      className={`${styles.mockNavItem} ${styles.mockNavActive}`}
                    >
                      <FiHome size={16} />
                      <span>Home</span>
                    </div>
                    <div className={styles.mockNavItem}>
                      <FiSearch size={16} />
                      <span>Explore</span>
                    </div>
                    <div className={styles.mockNavItem}>
                      <FiCalendar size={16} />
                      <span>Matches</span>
                    </div>
                    <div className={styles.mockNavItem}>
                      <FiUser size={16} />
                      <span>Profile</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    <FeaturesSection />
    <MarketplaceSection />
    <HowItWorksSection />
    <AppPreviewSection />
    <AboutSection />
    <FaqSection />
    <ContactSection />
    <Footer />
    </>
  );
}
