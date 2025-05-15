"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string[];
  type: "work" | "education";
}

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const timelineData: TimelineItem[] = [
    {
      title: "Software Designer – Frontend & Backend Associate",
      organization: "Kalla Group",
      period: "Mar 2022 – Present",
      description: [
        "Leading full-stack development initiatives using modern web technologies.",
        "Designing intuitive user interfaces with Figma and implementing responsive layouts.",
        "Collaborating cross-functionally to gather requirements and build scalable APIs.",
        "Conducting code reviews, ensuring adherence to SDLC best practices."
      ],
      type: "work"
    },
    {
      title: "Senior Software Development Engineer",
      organization: "Kalla Group",
      period: "Jan 2021 – Mar 2022",
      description: [
        "Focused on developing robust front-end features and back-end APIs.",
        "Improved application performance and ensured consistent user experiences.",
        "Mentored junior developers and facilitated agile workflows."
      ],
      type: "work"
    },
    {
      title: "System Development Engineer",
      organization: "PT. Haka Sarana Investama (Holding Kalla Group)",
      period: "Aug 2018 – Jan 2021",
      description: [
        "Developed and maintained enterprise systems across Kalla subsidiaries.",
        "Integrated RESTful services and ensured secure data handling.",
        "Contributed to system architecture and UI/UX planning."
      ],
      type: "work"
    },
    {
      title: "Web Programmer",
      organization: "Kallatransport",
      period: "Oct 2017 – Aug 2018",
      description: [
        "Built web-based transportation management tools tailored for logistics operations.",
        "Optimized user interfaces and improved front-end responsiveness."
      ],
      type: "work"
    },
    {
      title: "Web Developer",
      organization: "Media Sakti",
      period: "Jun 2015 – Jun 2017",
      description: [
        "Designed and developed client websites using PHP and integrated with PhpMyAdmin.",
        "Maintained and updated legacy systems while improving UI/UX consistency."
      ],
      type: "work"
    },
    {
      title: "Graphic Designer",
      organization: "Foto Sahabat",
      period: "Feb 2015 – May 2016",
      description: [
        "Created marketing materials and digital content for photography services.",
        "Collaborated with clients to design layouts for events and promotions."
      ],
      type: "work"
    },
    {
      title: "Magister in Sistem Komputer",
      organization: "STMIK Handayani Makassar",
      period: "2020",
      description: [],
      type: "education"
    },
    {
      title: "Sarjana in Teknik Informatika",
      organization: "STMIK Handayani Makassar",
      period: "2017",
      description: [],
      type: "education"
    },
    {
      title: "Web Development Certification",
      organization: "Tech Academy",
      period: "2017",
      description: [
        "Comprehensive training in modern web development technologies",
        "Focused on JavaScript frameworks and responsive design principles",
        "Created several full-stack projects as part of the curriculum",
        "Received recognition for outstanding project work"
      ],
      type: "education"
    }
  ];

  const filteredTimeline = activeTab === "all"
    ? timelineData
    : timelineData.filter(item => item.type === activeTab);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            My professional journey and educational background that have shaped my expertise in web development and design.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <Tabs defaultValue="all" className="w-full max-w-3xl mx-auto mb-10">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all" onClick={() => setActiveTab("all")}>All</TabsTrigger>
              <TabsTrigger value="work" onClick={() => setActiveTab("work")}>Work</TabsTrigger>
              <TabsTrigger value="education" onClick={() => setActiveTab("education")}>Education</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2"></div>

            {/* Timeline items */}
            {filteredTimeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={cn(
                  "relative mb-12 md:mb-0 md:w-1/2",
                  index % 2 === 0
                    ? "md:pr-12 md:ml-0 md:text-right"
                    : "md:pl-12 md:ml-auto"
                )}
              >
                {/* Timeline dot */}
                <div
                  className={cn(
                    "absolute top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10",
                    index % 2 === 0
                      ? "left-0 md:right-0 md:left-auto md:translate-x-1/2"
                      : "left-0 md:left-0 md:-translate-x-1/2"
                  )}
                >
                  {item.type === "work" ? (
                    <Briefcase className="h-4 w-4 text-white" />
                  ) : (
                    <GraduationCap className="h-4 w-4 text-white" />
                  )}
                </div>

                <div
                  className={cn(
                    "relative z-10 p-6 bg-card border border-border rounded-lg shadow-sm mb-12",
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  )}
                >
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{item.period}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-primary font-medium mb-4">{item.organization}</p>
                  <ul className={cn(
                    "space-y-1 text-muted-foreground",
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  )}>
                    {item.description.map((point, i) => (
                      <li key={i} className="text-sm">{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
