import React from "react";
import { motion } from "framer-motion";
import {
  useScrollAnimation,
  useStaggerAnimation,
} from "../hooks/useAnimations";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  cardHover,
} from "../utils/motionVariants";

const About = () => {
  const titleRef = useScrollAnimation({
    from: { opacity: 0, y: 100, rotateX: -15 },
    to: { opacity: 1, y: 0, rotateX: 0, duration: 1.2, ease: "power3.out" },
  });

  const cardsRef = useStaggerAnimation(".feature-card", {
    from: { opacity: 0, y: 60, scale: 0.8 },
    to: { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
    stagger: 0.15,
  });

  return (
    <motion.section
      className="py-20 px-6 md:px-12 max-w-7xl mx-auto"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="flex flex-col lg:flex-row gap-16">
        <motion.div
          className="w-full lg:w-1/2 space-y-10"
          variants={staggerContainer}
        >
          <motion.div ref={titleRef} className="relative">
            <motion.h2
              className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter uppercase leading-none dark:text-white"
              variants={fadeInLeft}
              whileHover={{
                scale: 1.02,
                textShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
              }}
            >
              About<span className="text-primary font-light">/</span>
              <br />
              Me<span className="text-primary">.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
            variants={staggerContainer}
          >
            <motion.p variants={fadeInUp}>
              Hi, I'm Labib—a front-end developer who thrives on curiosity
              and creativity. My journey into programming started when I found
              myself fascinated by how websites worked and how game characters
              would interact and respond. That sense of wonder pushed me to
              start creating interactive experiences of my own.
            </motion.p>
            <motion.p variants={fadeInUp}>
              I love working with React and modern JavaScript, crafting clean,
              responsive interfaces and focusing on details that make products
              feel smooth and intuitive. When I’m not coding, I’m gaming or
              listening to music, constantly inspired by interaction, flow, and
              user experience. I’m curious, proactive, and always
              learning—focused on building digital products people actually
              enjoy using.
            </motion.p>
          </motion.div>



          <motion.div
            className="bg-[#121212] border border-[#1E1E1E] rounded-lg p-6 relative overflow-hidden group"
            variants={fadeInUp}
            whileHover={{
              scale: 1.02,
              borderColor: "rgba(59, 130, 246, 0.5)",
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.1)",
            }}
          >
            <motion.div
              className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <span className="w-2 h-2 bg-primary rounded-full block"></span>
            </motion.div>
            <motion.h3
              className="text-xl md:text-2xl font-display font-bold text-white uppercase tracking-wider z-10 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Fully equipped for global <br /> remote collaboration.
            </motion.h3>
          </motion.div>

          {/* Experience, Education, Publications sections with stagger animations */}
          <motion.div className="pt-4 space-y-12" variants={staggerContainer}>
            <motion.div variants={staggerItem}>
              <motion.h4
                className="text-primary uppercase text-sm font-bold tracking-[0.2em] mb-6 border-b border-gray-800 pb-2 inline-block"
                whileHover={{ scale: 1.05, color: "#60A5FA" }}
              >
                Experience
              </motion.h4>
              <motion.div
                className="flex flex-col gap-1 pl-4 border-l-2 border-gray-800 hover:border-primary transition-colors"
                whileHover={{
                  x: 10,
                  borderColor: "#3B82F6",
                }}
              >
                <p className="text-gray-900 dark:text-white font-display font-bold text-xl uppercase leading-tight">
                  Innoen Dynamics
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  Frontend Developer{" "}
                  <span className="text-primary mx-1">•</span> 2022 - Present
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={staggerItem}>
              <motion.h4
                className="text-primary uppercase text-sm font-bold tracking-[0.2em] mb-6 border-b border-gray-800 pb-2 inline-block"
                whileHover={{ scale: 1.05, color: "#60A5FA" }}
              >
                Education
              </motion.h4>
              <motion.div className="space-y-8" variants={staggerContainer}>
                {[
                  {
                    title: "Ahsanullah University of Science and Technology",
                    degree: "Bachelor of Science - BS, Computer Science",
                    period: "2016 - 2022",
                    grade: "3.041",
                  },
                  {
                    title: "Adamjee Cantonment College",
                    degree: "Higher Secondary Certificate, Science",
                    period: "2014 - 2016",
                    grade: "5",
                  },
                  {
                    title: "Bangladesh Navy School & College, Dhaka",
                    degree: "Secondary School Certificate, Science",
                    period: "2014",
                    grade: "5",
                  },
                ].map((edu, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col gap-1 pl-4 border-l-2 border-gray-800 hover:border-primary transition-colors group"
                    variants={staggerItem}
                    whileHover={{
                      x: 10,
                      borderColor: "#3B82F6",
                    }}
                  >
                    <h5 className="text-gray-900 dark:text-white font-display font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                      {edu.title}
                    </h5>
                    <p className="text-gray-800 dark:text-gray-300 text-base font-medium">
                      {edu.degree}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-2 text-sm text-gray-500 dark:text-gray-400 mt-1">
                      <span>{edu.period}</span>
                      <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                      <span>Grade: {edu.grade}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={staggerItem}>
              <motion.h4
                className="text-primary uppercase text-sm font-bold tracking-[0.2em] mb-6 border-b border-gray-800 pb-2 inline-block"
                whileHover={{ scale: 1.05, color: "#60A5FA" }}
              >
                Publications
              </motion.h4>
              <motion.div
                className="flex flex-col gap-3 pl-4 border-l-2 border-gray-800 hover:border-primary transition-colors"
                whileHover={{
                  x: 10,
                  borderColor: "#3B82F6",
                }}
              >
                <h5 className="text-gray-900 dark:text-white font-display font-bold text-lg leading-tight">
                  A Deep Learning-Based Bengali Visual Question Answering System
                </h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-relaxed">
                  2022 International Conference on Computer and Information
                  Technology
                  <br />
                  <span className="text-gray-500 text-xs">
                    At: Cox's Bazar, Bangladesh
                  </span>
                </p>
                <div className="mt-1">
                  <motion.a
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-hover text-sm font-bold uppercase tracking-wider transition-colors group"
                    href="#"
                    whileHover={{ x: 5 }}
                  >
                    Show publication
                    <motion.span
                      className="material-icons text-sm transform group-hover:translate-x-1 transition-transform"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      arrow_forward
                    </motion.span>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Feature cards with advanced animations */}
        <motion.div
          ref={cardsRef}
          className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
        >
          {[
            {
              icon: "language",
              title: "Global\nReady",
              desc: "Remote collaboration across time zones",
            },
            {
              icon: "bolt",
              title: "Fast\nAdaptable",
              desc: "Swiftly mastering new tech ecosystems",
            },
            {
              icon: "lightbulb",
              title: "Problem\nFixer",
              desc: "Elegant solutions for complex logic",
            },
            {
              icon: "rocket_launch",
              title: "Results\nDriven",
              desc: "Delivering production grade excellence",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="feature-card bg-[#121212] border border-[#1E1E1E] rounded-[2rem] p-8 flex flex-col items-start gap-6 hover:border-primary/50 transition-colors group h-full"
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-14 h-14 rounded-2xl bg-[#1E1E1E] flex items-center justify-center group-hover:bg-primary/10 transition-colors"
                whileHover={{
                  rotate: [0, -10, 10, 0],
                  scale: 1.1,
                }}
                transition={{ duration: 0.5 }}
              >
                <span className="material-symbols-outlined text-primary text-3xl">
                  {card.icon}
                </span>
              </motion.div>
              <div>
                <motion.h3
                  className="text-white font-display font-bold text-xl uppercase mb-1"
                  whileHover={{ color: "#3B82F6" }}
                >
                  {card.title.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i === 0 && <br />}
                    </span>
                  ))}
                </motion.h3>
              </div>
              <motion.p
                className="text-gray-500 text-sm font-medium uppercase tracking-wider leading-relaxed"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
              >
                {card.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
