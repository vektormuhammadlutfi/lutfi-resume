"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, Send } from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { useTheme } from "next-themes";

const HeroSection = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const textColor = isDarkMode ? "text-white" : "text-gray-900";
  const bgColor = isDarkMode ? "bg-muted/30" : "bg-white"; // Adjust as needed for light mode background
  const mutedTextColor = isDarkMode ? "text-gray-300" : "text-gray-700";


  return (
    <section className={`relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden ${bgColor}`}>
      <div className={`absolute inset-0 bg-[url('https://images.pexels.com/photos/373883/pexels-photo-373883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-5 bg-cover bg-center ${isDarkMode ? 'brightness-50' : ''}`}> {/* Adjust brightness for dark mode */}
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-center lg:text-left ${textColor}`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Hi, I'm <span className="text-primary">Muh Lutfi</span>
            </h1>
            <div className={`text-2xl md:text-3xl font-medium ${mutedTextColor} mb-6 h-16`}>
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer',
                  2000,
                  'Data Professional',
                  2000,
                  'Master of Computer Science',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className={`text-lg md:text-xl ${mutedTextColor} mb-8 max-w-2xl mx-auto lg:mx-0`}>
              Specializing in Data Mining & Predictive Analytics with expertise in full-stack development and data science.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gap-2">
                <Send className="h-4 w-4" />
                Contact Me
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <FileText className="h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto lg:ml-auto"
          >
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] relative rounded-full overflow-hidden border-4 border-primary/20">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQGo_XJr7Mww1Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1667053383227?e=1752710400&v=beta&t=vBczwSSsuAYcRSFKvhHS2k3p2U3ZgOYJTnkmI6Rbhfc"
                alt="Muhammad Lutfi - Full Stack Developer and Data Professional"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            </div>

            <div className={`absolute top-5 right-0 md:-right-8 p-3 bg-background border border-border rounded-lg shadow-lg ${textColor}`}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for work</span>
              </div>
            </div>

            <div className={`absolute bottom-5 left-0 md:-left-8 p-3 bg-background border border-border rounded-lg shadow-lg ${textColor}`}>
              <div className="text-sm font-medium">8+ Years Experience</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 md:mt-24 text-center"
        >
          <a
            href="#about"
            className={`inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors ${textColor}`}
          >
            <span>Scroll down</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </motion.div>
      </div>

      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
