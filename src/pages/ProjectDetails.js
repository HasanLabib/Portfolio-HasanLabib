import React from "react";
import { useParams, Link } from "react-router-dom";
import projectsData from "../data/projects.json";
import Navigation from "../components/Navigation";

const ProjectDetails = () => {
  const { id } = useParams();

  const rawProjects = Array.isArray(projectsData)
    ? projectsData
    : Array.isArray(projectsData?.projects)
    ? projectsData.projects
    : [projectsData];

  const project = rawProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Project not found
      </div>
    );
  }

  const {
    name,
    category,
    card,
    ui,
    details,
  } = project;

  const techStack = [
    ...(details?.technologyStack?.frontend || []),
    ...(details?.technologyStack?.backend || []),
    ...(details?.technologyStack?.tools || []),
  ];

  return (
    <>
      <Navigation />

      <main className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        {/* Back */}
        <div className="mb-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-lg">
              arrow_back
            </span>
            Back to Projects
          </Link>
        </div>

        {/* HERO */}
        <div className="relative w-full aspect-[16/9] md:aspect-[2.4/1] rounded-3xl overflow-hidden shadow-2xl mb-12 group ring-1 ring-white/10">
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent z-10"></div>

          <img
            src={ui?.hero?.image || card?.thumbnail}
            alt={name}
            className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700"
          />

          <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
            <span className="px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
              {category}
            </span>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT */}
          <div className="lg:col-span-8 space-y-12">
            {/* Intro */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold dark:text-white">
                {name.split(" ")[0]}{" "}
                <span className="text-primary">
                  {name.split(" ").slice(1).join(" ")}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-light max-w-3xl">
                {details?.description}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                {details?.links?.liveSite && (
                  <a
                    href={details.links.liveSite}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-primary hover:bg-primary-hover text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-glow flex items-center gap-2"
                  >
                    Live Project
                    <span className="material-symbols-outlined">
                      open_in_new
                    </span>
                  </a>
                )}

                {details?.links?.clientRepo && (
                  <a
                    href={details.links.clientRepo}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-700 py-3 px-8 rounded-full flex items-center gap-2 hover:border-primary hover:text-primary transition"
                  >
                    <span className="material-symbols-outlined">code</span>
                    GitHub Repo
                  </a>
                )}
              </div>
            </div>

            {/* FEATURES */}
            <section>
              <h2 className="text-2xl font-display font-bold mb-6 dark:text-white flex items-center gap-3">
                <span className="p-2 bg-primary/10 rounded-lg text-primary">
                  <span className="material-symbols-outlined">star</span>
                </span>
                Key Features
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {details?.features?.map((f, i) => (
                  <div
                    key={i}
                    className="bg-white dark:bg-card-dark p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <span className="material-symbols-outlined">
                        {f.icon}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg dark:text-white mb-2">
                      {f.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {f.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* CHALLENGES */}
            <section>
              <h2 className="text-2xl font-display font-bold mb-6 dark:text-white flex items-center gap-3">
                <span className="p-2 bg-primary/10 rounded-lg text-primary">
                  <span className="material-symbols-outlined">psychology</span>
                </span>
                Challenges & Solutions
              </h2>

              <div className="bg-white dark:bg-card-dark rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xs font-bold text-red-500 uppercase mb-2">
                      The Challenge
                    </h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                      {details?.challenges?.map((c, i) => (
                        <li key={i}>• {c}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-green-500 uppercase mb-2">
                      The Solution
                    </h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                      {details?.solutions?.map((s, i) => (
                        <li key={i}>• {s}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-4 space-y-8">
            {/* TECH */}
            <div className="bg-white dark:bg-card-dark rounded-2xl p-6 border border-gray-200 dark:border-gray-800 sticky top-6">
              <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-gray-400">
                Technologies Used
              </h3>

              <div className="flex flex-wrap gap-2">
                {techStack.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-bold rounded-md border bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-primary hover:text-primary transition"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-3">
                {Object.entries(ui?.meta || {}).map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-center justify-between"
                  >
                    <span className="text-xs font-bold uppercase text-gray-500">
                      {k}
                    </span>
                    <span className="text-sm font-medium dark:text-white">
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ROADMAP */}
            <div className="bg-gradient-to-br from-[#0a0e13] to-black rounded-2xl p-6 border border-gray-800 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  rocket_launch
                </span>
                Future Roadmap
              </h3>

              <div className="space-y-6">
                {details?.roadmap?.map((r) => (
                  <div key={r.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-sm font-bold text-gray-300">
                      {r.step}
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-200 font-medium">
                        {r.title}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {r.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* NAV */}
        <div className="mt-20 border-t border-gray-200 dark:border-gray-800 pt-12 flex justify-between items-center">
          {ui?.navigation?.previous && (
            <Link
              to={`/projects/${ui.navigation.previous.id}`}
              className="group"
            >
              <span className="text-xs uppercase text-gray-400">
                Previous Project
              </span>
              <div className="text-lg font-display font-bold group-hover:text-primary">
                {ui.navigation.previous.title}
              </div>
            </Link>
          )}

          <Link
            to="/#projects"
            className="w-12 h-12 rounded-full border flex items-center justify-center hover:border-primary"
          >
            <span className="material-symbols-outlined">grid_view</span>
          </Link>

          {ui?.navigation?.next && (
            <Link
              to={`/projects/${ui.navigation.next.id}`}
              className="group text-right"
            >
              <span className="text-xs uppercase text-gray-400">
                Next Project
              </span>
              <div className="text-lg font-display font-bold group-hover:text-primary">
                {ui.navigation.next.title}
              </div>
            </Link>
          )}
        </div>
      </main>
    </>
  );
};

export default ProjectDetails;
