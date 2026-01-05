import { useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useParallax } from "../hooks/useParallax";
import { useMagneticEffect, useGSAPAnimation } from "../hooks/useAnimations";
import {
  fadeInUp,
  fadeInLeft,
  staggerContainer,
  staggerItem,
  floating,
  morphing,
} from "../utils/motionVariants";
import SkillsMarquee from "./SkillsMarquee";
import profileBanner from "../assets/profileBanner.png";

const Hero = () => {
  const parallaxOffset = useParallax(0.1);
  const magneticRef1 = useMagneticEffect();
  const magneticRef2 = useMagneticEffect();
  const profileRef = useRef(null);
  const decorElementsRef = useRef(null);

  /* GSAP – profile image */
  useGSAPAnimation(profileRef, (el) => {
    gsap.fromTo(
      el,
      { scale: 0.8, opacity: 0, rotation: -10 },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.3)",
        delay: 0.8,
      }
    );
  });

  /* GSAP – decor symbols */
  useGSAPAnimation(decorElementsRef, (el) => {
    const symbols = el.querySelectorAll(".decor-symbol");
    gsap.fromTo(
      symbols,
      { opacity: 0, scale: 0, rotation: -180 },
      {
        opacity: 0.3,
        scale: 1,
        rotation: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
        delay: 1.2,
      }
    );
  });

  return (
    <motion.section
      className="relative"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* HERO ROW */}
      <motion.header className="relative pt-12 pb-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* LEFT – TEXT */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          variants={staggerContainer}
        >
          <motion.h2
            className="text-xl md:text-2xl font-semibold text-primary flex items-center gap-2"
            variants={fadeInUp}
          >
            Hello
            <motion.span
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.h2>

          <motion.div className="relative" variants={staggerContainer}>
            <motion.div
              className="flex items-center gap-4 mb-2"
              variants={staggerItem}
            >
              <motion.span
                className="hidden md:block h-0.5 bg-primary"
                initial={{ width: 0 }}
                animate={{ width: "3rem" }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <motion.h1
                className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white"
                variants={fadeInUp}
              >
                I'm Labib
              </motion.h1>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
              variants={fadeInUp}
            >
              Frontend Web Developer
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-gray-600 dark:text-gray-400 max-w-md text-lg"
            variants={fadeInUp}
          >
            Building user friendly, accessible, pixel-perfect, and performant
            web experiences.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            variants={staggerContainer}
          >
            <motion.a
              ref={magneticRef1}
              href="#contacts"
              className="bg-primary text-white py-3 px-8 rounded-md shadow-lg"
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Got a project?
            </motion.a>

            <motion.a
              ref={magneticRef2}
              href="#"
              className="border border-gray-400 dark:border-gray-600 py-3 px-8 rounded-md"
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              My resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT – IMAGE */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-end items-center"
          variants={fadeInUp}
        >
          <div className="relative w-[320px] h-[320px] md:w-[460px] md:h-[460px]">
            {/* Rings */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              className="absolute inset-6 rounded-full bg-gradient-to-br from-primary/10 to-transparent"
              variants={morphing}
              initial="initial"
              animate="animate"
            />

            {/* Decor */}
            <div ref={decorElementsRef}>
              <div className="decor-symbol absolute -top-6 -left-6 text-6xl opacity-30">
                &lt;
              </div>
              <div className="decor-symbol absolute -bottom-6 -right-6 text-6xl opacity-30">
                &gt;
              </div>
            </div>

            {/* PROFILE */}
            <motion.div
              ref={profileRef}
              className="relative mx-auto w-[260px] h-[260px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 shadow-2xl bg-white dark:bg-gray-800"
              style={{ y: parallaxOffset }}
              variants={floating}
              animate="animate"
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={`${profileBanner}`}
                alt="Jensen Portrait"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.header>

      {/* SKILLS */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        
        <SkillsMarquee />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
