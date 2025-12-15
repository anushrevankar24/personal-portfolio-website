"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiAcademicCap, HiCode, HiLightningBolt } from "react-icons/hi";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const highlights = [
    {
      icon: <HiAcademicCap className="text-4xl" />,
      title: "Education",
      description: "B.Tech in AI at NIT Surathkal (CGPA: 8.07/10)",
    },
    {
      icon: <HiCode className="text-4xl" />,
      title: "Experience",
      description: "Labs Lead at IRIS, GenAI Intern at Visionify",
    },
    {
      icon: <HiLightningBolt className="text-4xl" />,
      title: "Leadership",
      description: "Executive Member at TEDx NITK & Web Enthusiasts' Club",
    },
  ];

  return (
    <section id="about" className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              I&apos;m a B.Tech student in Artificial Intelligence at{" "}
              <span className="text-purple-400 font-semibold">NIT Surathkal</span>, 
              passionate about building AI-powered solutions that solve real-world problems. 
              My journey in tech has been driven by curiosity and a desire to create impactful applications.
            </p>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              As the <span className="text-purple-400 font-semibold">Labs Lead at IRIS</span>, 
              I lead a team of 8 developers building scalable AI utilities for our student-led ERP 
              platform serving 8,000+ active users. My work focuses on creating microservices that 
              enhance platform reliability and user experience.
            </p>
            <p className="text-base text-gray-300 leading-relaxed">
              I specialize in <span className="text-purple-400 font-semibold">GenAI, LangGraph, FastAPI, and Django</span>, 
              with hands-on experience in building intelligent systems, REST APIs, and containerized applications. 
              I&apos;m always excited to explore new technologies and collaborate on innovative projects.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect p-6 rounded-lg hover:border-purple-400 transition-all group"
              >
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
