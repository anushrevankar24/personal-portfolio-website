"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiOfficeBuilding, HiCalendar, HiCheckCircle } from "react-icons/hi";
import Image from "next/image";

const experiences = [
  {
    company: "Visionify.ai",
    logo: "/visionify_inc_logo.jpeg",
    role: "AI Intern",
    period: "May 2025 – July 2025",
    technologies: ["GenAI", "LangGraph", "FastAPI", "Docker", "AWS"],
    achievements: [
      "Built a GenAI powered reporting agent capable of interpreting natural language queries and generating structured outputs such as text summaries, statistical insights, and visualizations",
      "Designed and implemented custom tools for the agent using LangGraph and OpenAI, enabling dynamic and context-aware tool selection",
      "Developed a REST API using FastAPI to handle user queries and route them to the GenAI agent",
      "Containerized the backend using Docker and deployed it to AWS EC2, ensuring scalability and portability",
      "Integrated the React frontend with the backend API to support real-time natural language query processing",
    ],
  },
  {
    company: "IRIS, NITK",
    logo: "/irisnitk_logo.jpeg",
    totalPeriod: "Jan 2024 – Present",
    roles: [
      {
        role: "Labs Lead",
        period: "Apr 2025 – Present",
        technologies: ["Python", "Django", "Docker", "nginx"],
        achievements: [
          "Leading a team of 8 developers to build scalable AI utilities for the official student-led ERP with 8k+ active users",
          "Built and deployed a Profanity Checker microservice to moderate Gyan submissions and block inappropriate content",
          "Developed the service using Django Rest Framework with JWT authentication, containerized with Docker",
          "Served via nginx as a reverse proxy for production deployment",
        ],
      },
      {
        role: "Web Developer",
        period: "Jan 2024 – Apr 2025",
        technologies: ["Ruby", "Ruby on Rails"],
        achievements: [
          "Enhanced the Hostel Management System, introducing the Q&M Warden role and dynamic mess access controls",
          "Created a new interface for managing student allotments",
          "Generalized role assignment and removal logic, eliminating hardcoded dependencies",
          "Optimized the Hostel Dashboard to display only relevant authorities while hiding irrelevant entries",
        ],
      },
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-12 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto" />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-8 relative"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="hidden md:block absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-purple-500 to-transparent" />
              )}

              <div className="glass-effect rounded-lg p-4 md:p-6 hover:border-purple-400 transition-all group">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-purple-500/30 glow-purple">
                      {exp.logo ? (
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      ) : (
                        <HiOfficeBuilding className="text-2xl text-purple-600" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {exp.roles ? (
                      // Multiple roles at same company (IRIS)
                      <>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                          <div>
                            <p className="text-2xl font-bold text-gray-300">{exp.company}</p>
                            <div className="flex items-center text-gray-400 mt-1">
                              <HiCalendar className="mr-2" />
                              <span>{exp.totalPeriod}</span>
                            </div>
                          </div>
                        </div>

                        {/* Multiple Roles with connecting line */}
                        <div className="relative">
                          {/* Vertical connecting line between roles */}
                          {exp.roles.length > 1 && (
                            <div className="hidden md:block absolute left-[-28px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600" />
                          )}
                          
                          {exp.roles.map((roleData, roleIndex) => (
                            <div
                              key={roleIndex}
                              className={`relative ${
                                roleIndex > 0 ? "mt-8 pt-6" : ""
                              }`}
                            >
                              {/* Role dot indicator */}
                              <div className="hidden md:block absolute left-[-34px] top-6 w-3 h-3 rounded-full bg-purple-500 border-2 border-purple-300 shadow-lg shadow-purple-500/50" />
                              
                              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <h3 className="text-xl font-bold text-purple-400">
                                  {roleData.role}
                                </h3>
                                <span className="text-sm text-gray-400 mt-1 md:mt-0">
                                  {roleData.period}
                                </span>
                              </div>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {roleData.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                              {/* Achievements */}
                              <ul className="space-y-3">
                                {roleData.achievements.map((achievement, i) => (
                                  <li key={i} className="flex items-start text-gray-300">
                                    <HiCheckCircle className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      // Single role
                      <>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-purple-400 mb-1">
                              {exp.role}
                            </h3>
                            <p className="text-xl text-gray-300">{exp.company}</p>
                          </div>
                          <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                            <HiCalendar className="mr-2" />
                            <span>{exp.period}</span>
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Achievements */}
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start text-gray-300">
                              <HiCheckCircle className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
