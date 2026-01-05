import React, { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation, useMagneticEffect } from "../hooks/useAnimations";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  floating,
} from "../utils/motionVariants";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const magneticSubmitRef = useMagneticEffect();

  const titleRef = useScrollAnimation({
    from: { opacity: 0, x: -100, rotateY: -15 },
    to: { opacity: 1, x: 0, rotateY: 0, duration: 1, ease: "power3.out" },
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  console.log(
    "ENV:",
    process.env.REACT_APP_EMAIL_SERVICE_ID,
    process.env.REACT_APP_EMAIL_TEMPLATE_ID,
    process.env.REACT_APP_EMAIL_PUBLIC_KEY
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        () => {
          toast("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("EmailJS error:", error);
          toast("Failed to send message");
        }
      );
  };

  return (
    <motion.section
      className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden"
      id="contacts"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <motion.div
          className="flex flex-col justify-center h-full space-y-8"
          variants={staggerContainer}
        >
          <motion.div variants={staggerContainer}>
            <motion.div
              className="flex items-center gap-3 mb-6"
              variants={fadeInLeft}
            >
              <motion.div
                className="h-[1px] w-8 bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <span className="text-primary font-mono text-sm tracking-widest uppercase">
                Contact
              </span>
            </motion.div>

            <motion.h2
              ref={titleRef}
              className="text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white leading-tight mb-6"
              variants={fadeInUp}
              whileHover={{
                scale: 1.02,
                textShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
              }}
            >
              Let's build something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                extraordinary.
              </span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 max-w-md leading-relaxed"
              variants={fadeInUp}
            >
              Whether you have a question, a project proposal, or just want to
              say hi, my inbox is always open.
            </motion.p>
          </motion.div>

          <motion.div variants={staggerContainer}>
            <motion.h4
              className="text-xl font-display font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3"
              variants={fadeInUp}
            >
              Connect with me
            </motion.h4>

            <motion.div
              className="flex flex-col gap-4 mb-8"
              variants={staggerContainer}
            >
              <motion.a
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors group"
                href="mailto:hasanlabib3@gmail.com"
                variants={staggerItem}
                whileHover={{ x: 10 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-[#1E1E1E] flex items-center justify-center border border-gray-200 dark:border-gray-800 group-hover:border-primary group-hover:text-primary transition-colors"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#3B82F615",
                  }}
                >
                  <span className="material-icons text-lg">email</span>
                </motion.div>
                <span className="text-lg font-medium">
                  hasanlabib3@gmail.com
                </span>
              </motion.a>

              <motion.a
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors group"
                href="tel:+8801770254632"
                variants={staggerItem}
                whileHover={{ x: 10 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-[#1E1E1E] flex items-center justify-center border border-gray-200 dark:border-gray-800 group-hover:border-primary group-hover:text-primary transition-colors"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#3B82F615",
                  }}
                >
                  <span className="material-icons text-lg">phone</span>
                </motion.div>
                <span className="text-lg font-medium">+8801770254632</span>
              </motion.a>
            </motion.div>

            {/* Social media floating circles with advanced animations */}
            <motion.div
              className="relative w-full h-[300px] md:h-[350px]"
              variants={fadeInUp}
            >
              <motion.a
                className="absolute top-0 left-1/2 -translate-x-1/2 z-10 group"
                href="https://www.linkedin.com/in/hasan-imtiaz-labib/"
                rel="noopener noreferrer"
                target="_blank"
                variants={floating}
                animate="animate"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                }}
              >
                <div className="w-32 h-32 rounded-full border-2 border-primary flex flex-col items-center justify-center bg-transparent group-hover:bg-primary/10 transition-colors duration-300">
                  <span className="text-gray-500 text-xs font-mono mb-1 group-hover:text-primary transition-colors">
                    &lt;&gt;
                  </span>
                  <span className="text-white font-mono text-sm font-bold tracking-wider group-hover:text-primary transition-colors">
                    LinkedIn
                  </span>
                  <span className="text-gray-500 text-xs font-mono mt-1 group-hover:text-primary transition-colors">
                    &lt;/&gt;
                  </span>
                </div>
              </motion.a>

              <motion.a
                className="absolute top-24 left-0 md:left-12 z-0 group"
                href="https://github.com/HasanLabib"
                rel="noopener noreferrer"
                target="_blank"
                animate={{
                  y: [-15, 15, -15],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -10, 10, 0],
                }}
              >
                <div className="w-28 h-28 rounded-full border-2 border-primary flex flex-col items-center justify-center bg-transparent group-hover:bg-primary/10 transition-colors duration-300">
                  <span className="text-gray-500 text-xs font-mono mb-1 group-hover:text-primary transition-colors">
                    &lt;&gt;
                  </span>
                  <span className="text-white font-mono text-sm font-bold tracking-wider group-hover:text-primary transition-colors">
                    GitHub
                  </span>
                  <span className="text-gray-500 text-xs font-mono mt-1 group-hover:text-primary transition-colors">
                    &lt;/&gt;
                  </span>
                </div>
              </motion.a>

              <motion.a
                className="absolute bottom-0 left-1/4 z-10 group"
                href="https://x.com/hasanlabib3"
                rel="noopener noreferrer"
                target="_blank"
                animate={{
                  y: [-10, 10, -10],
                  x: [-5, 5, -5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 360,
                }}
              >
                <div className="w-24 h-24 rounded-full border-2 border-primary flex flex-col items-center justify-center bg-transparent group-hover:bg-primary/10 transition-colors duration-300">
                  <span className="text-gray-500 text-xs font-mono mb-1 group-hover:text-primary transition-colors">
                    &lt;&gt;
                  </span>
                  <span className="text-white font-mono text-xs font-bold tracking-wider group-hover:text-primary transition-colors">
                    X / Twitter
                  </span>
                  <span className="text-gray-500 text-xs font-mono mt-1 group-hover:text-primary transition-colors">
                    &lt;/&gt;
                  </span>
                </div>
              </motion.a>

              <motion.a
                className="absolute bottom-12 right-0 md:right-8 z-0 group"
                href="https://www.facebook.com/hasan.labib.1/"
                rel="noopener noreferrer"
                target="_blank"
                animate={{
                  y: [-20, 20, -20],
                  rotate: [0, -3, 3, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, 15, -15, 0],
                }}
              >
                <div className="w-28 h-28 rounded-full border-2 border-primary flex flex-col items-center justify-center bg-transparent group-hover:bg-primary/10 transition-colors duration-300">
                  <span className="text-gray-500 text-xs font-mono mb-1 group-hover:text-primary transition-colors">
                    &lt;&gt;
                  </span>
                  <span className="text-white font-mono text-sm font-bold tracking-wider group-hover:text-primary transition-colors">
                    Facebook
                  </span>
                  <span className="text-gray-500 text-xs font-mono mt-1 group-hover:text-primary transition-colors">
                    &lt;/&gt;
                  </span>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact form with advanced animations */}
        <motion.div className="relative" variants={fadeInRight}>
          <motion.div
            className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl z-0"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.form
            onSubmit={handleSubmit}
            className="relative z-10 bg-white dark:bg-[#161b22] p-8 md:p-10 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)",
            }}
          >
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="group" variants={staggerItem}>
                <motion.label
                  className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2"
                  htmlFor="name"
                  whileHover={{ color: "#3B82F6" }}
                >
                  Name
                </motion.label>
                <motion.input
                  className="w-full bg-gray-50 dark:bg-[#0D1218] border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                  id="name"
                  placeholder="John Doe"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  whileFocus={{
                    scale: 1.02,
                    borderColor: "#3B82F6",
                  }}
                />
              </motion.div>

              <motion.div className="group" variants={staggerItem}>
                <motion.label
                  className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2"
                  htmlFor="email"
                  whileHover={{ color: "#3B82F6" }}
                >
                  Email
                </motion.label>
                <motion.input
                  className="w-full bg-gray-50 dark:bg-[#0D1218] border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                  id="email"
                  placeholder="john@example.com"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  whileFocus={{
                    scale: 1.02,
                    borderColor: "#3B82F6",
                  }}
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="group"
              variants={staggerItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.label
                className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2"
                htmlFor="subject"
                whileHover={{ color: "#3B82F6" }}
              >
                Subject
              </motion.label>
              <motion.input
                className="w-full bg-gray-50 dark:bg-[#0D1218] border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                id="subject"
                placeholder="Project Inquiry"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                whileFocus={{
                  scale: 1.02,
                  borderColor: "#3B82F6",
                }}
              />
            </motion.div>

            <motion.div
              className="group"
              variants={staggerItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.label
                className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2"
                htmlFor="message"
                whileHover={{ color: "#3B82F6" }}
              >
                Message
              </motion.label>
              <motion.textarea
                className="w-full bg-gray-50 dark:bg-[#0D1218] border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 min-h-[150px] resize-y"
                id="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                whileFocus={{
                  scale: 1.02,
                  borderColor: "#3B82F6",
                }}
              />
            </motion.div>

            <motion.button
              ref={magneticSubmitRef}
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 group"
              variants={staggerItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 15px 35px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
              <motion.span
                className="material-icons text-sm transform group-hover:translate-x-1 transition-transform"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                send
              </motion.span>
            </motion.button>
          </motion.form>
        </motion.div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, -60, -30],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Contact;
