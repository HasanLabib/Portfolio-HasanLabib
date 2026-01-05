import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useAnimations";
import {
  fadeInUp,
  fadeInLeft,
  staggerContainer,
  staggerItem,
} from "../utils/motionVariants";
import projectsData from "../data/projects.json";

const Projects = () => {
  /**
   * Normalize JSON so UI never breaks
   * Supports:
   * - single object
   * - array of objects
   * - { projects: [] }
   */
  const rawProjects = Array.isArray(projectsData)
    ? projectsData
    : Array.isArray(projectsData?.projects)
    ? projectsData.projects
    : [projectsData];

  const normalizeProject = (p, index) => {
    const stack = p?.details?.technologyStack || {};

    const technologies = [
      ...(stack.frontend || []),
      ...(stack.backend || []),
      ...(stack.tools || []),
    ];

    return {
      id: p.id || `project-${index}`,
      title: p.name || p.title || `Project ${index + 1}`,
      category: p.category || p.type || "Project",
      description:
        p.card?.shortDescription ||
        p.details?.description ||
        p.description ||
        "",
      image:
        p.card?.thumbnail ||
        p.ui?.hero?.image ||
        (Array.isArray(p.images) ? p.images[0] : null),
      technologies,
      liveSite:
        p.details?.links?.liveSite ||
        p.links?.liveSite ||
        null,
      viewText: p.card?.viewDetailsText || "View Details",
    };
  };

  const projects = rawProjects.map(normalizeProject);

  const titleRef = useScrollAnimation({
    from: { opacity: 0, y: 100, rotateX: -15 },
    to: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 1.2,
      ease: "power3.out",
    },
  });

  const renderProjectVisual = (project, isReversed, index) => {
    if (!project.image) return null;

    return (
      <motion.div
        className={`w-full ${
          isReversed ? "md:w-5/12" : "md:w-7/12"
        } relative`}
        initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="relative rounded-xl overflow-hidden shadow-2xl"
          whileHover={{ scale: 1.02 }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>

        <motion.div
          className={`absolute -z-10 -bottom-6 ${
            isReversed ? "-left-6" : "-right-6"
          } w-full h-full border border-gray-800 rounded-xl hidden md:block`}
          whileHover={{
            x: isReversed ? 8 : -8,
            y: 8,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    );
  };

  return (
    <motion.section
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
      id="projects"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Section Header */}
      <motion.div className="flex items-end justify-between mb-16 relative">
        <motion.div ref={titleRef}>
          <motion.h2
            className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter uppercase leading-none dark:text-white"
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
            }}
          >
            Projects<span className="text-primary">.</span>
          </motion.h2>

          <motion.p
            className="mt-4 text-gray-500 dark:text-gray-400 text-lg max-w-lg"
            variants={fadeInUp}
          >
            A selection of my favorite works, from experimental tools to
            production-ready applications.
          </motion.p>
        </motion.div>

        <motion.div
          className="hidden md:block absolute -top-12 right-0 opacity-5 text-[10rem] font-display font-black text-gray-500 select-none pointer-events-none"
          animate={{ rotate: [0, 1, -1, 0], scale: [1, 1.02, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          WORK
        </motion.div>
      </motion.div>

      {/* Projects */}
      {projects.map((project, index) => {
        const isReversed = index % 2 === 1;

        return (
          <motion.div
            key={project.id}
            className="flex flex-col md:flex-row gap-8 md:gap-16 mb-32 items-stretch group"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {renderProjectVisual(project, isReversed, index)}

            {/* Text */}
            <motion.div
              className={`w-full ${
                isReversed ? "md:w-7/12" : "md:w-5/12"
              } ${isReversed ? "order-2 md:order-1" : "order-1 md:order-2"}`}
              initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-xs uppercase tracking-widest text-primary font-mono mb-2 block">
                {project.category}
              </span>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary font-mono text-sm">
                  {(index + 1).toString().padStart(2, "0")}.
                </span>
                <h3 className="text-3xl font-display font-bold dark:text-white">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1 text-xs font-mono rounded border bg-gray-100 dark:bg-[#1A222C] border-gray-200 dark:border-gray-700"
                    variants={staggerItem}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#3B82F6",
                      color: "#fff",
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-6">
                <Link
                  to={`/projects/${project.id}`}
                  className="font-medium hover:text-primary transition-colors"
                >
                  {project.viewText} →
                </Link>

                {project.liveSite && (
                  <a
                    href={project.liveSite}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </motion.section>
  );
};

export default Projects;
