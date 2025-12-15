"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiExternalLink, HiCode } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "InstaCaptionPro",
    description:
      "AI-powered Instagram caption generator that creates engaging captions based on uploaded images, context, and tone preferences. Built to solve the problem of finding suitable captions for social media posts.",
    technologies: ["GenAI", "PyTorch", "Streamlit", "Google Gemini API", "MS COCO", "ResNet50"],
    achievements: [
      "Trained an image captioning model on MS COCO dataset using Encoder-Decoder architecture with ResNet50",
      "Achieved a BLEU score of 0.194 for caption generation accuracy",
      "Enhanced caption creativity by integrating with Google Gemini API for diverse tone options",
      "Implemented caching and session state management for optimized performance",
    ],
    date: "May 2024",
    githubUrl: "https://github.com/anushrevankar24/InstaCaptionPro",
    demoUrl: "https://drive.google.com/file/d/1dGzSpKMzISMa1IQ7jMHh8oVxdDXxBQ18/view",
  },
  {
    title: "CourseMate",
    description:
      "Web-based course registration system built with Django that simplifies course enrollment for students and streamlines course management for administrators and faculty.",
    technologies: ["Django", "SQLite3", "HTML", "CSS", "SMTP", "Python"],
    achievements: [
      "Designed scalable MVC architecture with Django for 3 user roles: Students, Faculty, and Admin",
      "Implemented automated email notifications for enrollment updates using SMTP",
      "Built prerequisite validation system to check CGPA criteria before course enrollment",
      "Created course cart functionality with enrollment request workflow and approval system",
    ],
    date: "December 2023",
    githubUrl: "https://github.com/anushrevankar24/CourseMate",
    demoUrl: "https://drive.google.com/file/d/1sly_RVERBAspky_HDWZv2N_uAMavxk1j/view",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect rounded-lg overflow-hidden hover:border-purple-400 transition-all group"
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-purple-900/50 to-violet-900/50 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all" />
                <HiCode className="text-6xl text-purple-300 relative z-10 group-hover:scale-110 transition-transform" />
                <div className="absolute top-4 right-4 bg-purple-500/30 px-3 py-1 rounded-full text-sm">
                  {project.date}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-purple-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded text-xs text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Achievements */}
                <ul className="space-y-2 mb-6">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-purple-400 rounded-lg hover:bg-purple-400/10 transition-all text-sm"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all text-sm"
                  >
                    <HiExternalLink />
                    <span>Demo Video</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">
            More projects available on my GitHub
          </p>
          <a
            href="https://github.com/anushrevankar24"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-purple-400 rounded-lg hover:bg-purple-400/10 transition-all"
          >
            <FaGithub className="text-xl" />
            <span>View All Projects</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
