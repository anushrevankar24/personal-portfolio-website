"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiPython,
  SiRuby,
  SiHtml5,
  SiCss3,
  SiDjango,
  SiRubyonrails,
  SiFastapi,
  SiPytorch,
  SiGit,
  SiGithub,
  SiGitlab,
  SiPostman,
  SiDocker,
  SiAmazonwebservices,
} from "react-icons/si";
import { BiData } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: <SiPython className="text-4xl text-[#3776AB]" /> },
      { name: "Java", icon: <FaJava className="text-4xl text-[#007396]" /> },
      { name: "Ruby", icon: <SiRuby className="text-4xl text-[#CC342D]" /> },
      { name: "SQL", icon: <BiData className="text-4xl text-[#00758F]" /> },
      { name: "HTML", icon: <SiHtml5 className="text-4xl text-[#E34F26]" /> },
      { name: "CSS", icon: <SiCss3 className="text-4xl text-[#1572B6]" /> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Django", icon: <SiDjango className="text-4xl text-[#092E20]" /> },
      { name: "Ruby on Rails", icon: <SiRubyonrails className="text-4xl text-[#CC0000]" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-4xl text-[#009688]" /> },
      { name: "PyTorch", icon: <SiPytorch className="text-4xl text-[#EE4C2C]" /> },
      { name: "LangGraph", icon: <BiData className="text-4xl text-[#1C3C3C]" /> },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git", icon: <SiGit className="text-4xl text-[#F05032]" /> },
      { name: "GitHub", icon: <SiGithub className="text-4xl text-white" /> },
      { name: "GitLab", icon: <SiGitlab className="text-4xl text-[#FCA121]" /> },
      { name: "Postman", icon: <SiPostman className="text-4xl text-[#FF6C37]" /> },
      { name: "VS Code", icon: <VscCode className="text-4xl text-[#007ACC]" /> },
      { name: "Docker", icon: <SiDocker className="text-4xl text-[#2496ED]" /> },
      { name: "AWS", icon: <SiAmazonwebservices className="text-4xl text-[#FF9900]" /> },
    ],
  },
  {
    title: "Core Knowledge",
    skills: [
      { name: "Data Structures & Algorithms" },
      { name: "Operating Systems" },
      { name: "DBMS" },
      { name: "OOP" },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto" />
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-purple-400 mb-6 text-center md:text-left">
                {category.title}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    className="glass-effect rounded-lg p-6 flex flex-col items-center justify-center hover:border-purple-400 transition-all group cursor-pointer"
                  >
                    {skill.icon && (
                      <div className="mb-3 group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </div>
                    )}
                    <p className="text-center text-sm md:text-base font-medium text-gray-200">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
