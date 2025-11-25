"use client";

import { motion } from "framer-motion";
import { Code, Database, Layout } from "lucide-react";
import { useTheme } from "next-themes";

const AboutSection = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const textColor = isDarkMode ? "text-white" : "text-gray-900";
  const mutedTextColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  const bgColor = isDarkMode ? "bg-muted/30" : "bg-white";


  return (
    <section id="about" className={`py-16 md:py-24 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textColor}`}>About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="relative md:order-last"
          >
            <div className="relative z-10 rounded-lg overflow-hidden border-4 border-background shadow-xl">
              <img
                src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2024/12/website-development-illustration.jpg"
                alt="Developer workspace with computer and VS Code"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-sm font-semibold text-primary">💼 Professional Profile</span>
            </div>
            
            <h3 className={`text-2xl md:text-3xl font-bold ${textColor} mb-4`}>
              Transforming Data Into Actionable Insights
            </h3>
            
            <p className={`text-base md:text-lg leading-relaxed ${textColor}`}>
              Results-driven <strong>Full-Stack Developer & Data Professional</strong> with 8+ years of experience building user-centric web applications and implementing data-driven solutions.
            </p>
            
            <p className={`text-base md:text-lg leading-relaxed ${mutedTextColor}`}>
              Master's in Computer Systems & Bachelor's in Informatics Engineering from STMIK Handayani Makassar. Proficient in Node.js, React, PHP, MySQL, PostgreSQL, MongoDB, REST APIs, and agile methodologies.
            </p>

            {/* Key Highlights */}
            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className={`${mutedTextColor}`}>Led ISO 27001 implementation for enterprise DMS systems</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className={`${mutedTextColor}`}>Developed 19+ successful projects with 95% client satisfaction</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className={`${mutedTextColor}`}>Expert in data mining, predictive analytics, and full-stack development</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
