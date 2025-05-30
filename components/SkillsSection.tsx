"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const SkillsSection = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  
  // Updated skillsData based on your previous input
  const skillsData: Skill[] = [
    { name: "HTML5, CSS3", level: 90, category: "Web & Software Development" },
    { name: "JavaScript", level: 90, category: "Web & Software Development" },
    { name: "React.js, Next.js", level: 80, category: "Web & Software Development" },
    { name: "AJAX, Responsive Design", level: 90, category: "Web & Software Development" },
    { name: "Node.js, Hono, Express.js", level: 80, category: "Web & Software Development" },
    { name: "PHP, MySQL", level: 75, category: "Web & Software Development" },
    { name: "REST API Development", level: 85, category: "Web & Software Development" },
    { name: "Software Architecture", level: 80, category: "Web & Software Development" },
    { name: "Database Management (MySQL, MongoDB, PostgreSQL)", level: 80, category: "Databases & DevOps" },
    { name: "Git, CI/CD", level: 85, category: "Databases & DevOps" },
    { name: "Figma", level: 70, category: "Web & Software Development" },
    { name: "CodeIgniter, Laravel", level: 90, category: "Web & Software Development" },
    { name: "Problem Solving, Analytical Skills", level: 90, category: "Soft Skills" },
    { name: "Teamwork, Collaboration", level: 90, category: "Soft Skills" },
    { name: "Time Management", level: 85, category: "Soft Skills" },
    { name: "Adaptability", level: 80, category: "Soft Skills" },
    { name: "Communication", level: 85, category: "Soft Skills" },
    { name: "Attention to Detail", level: 90, category: "Soft Skills" },
    { name: "Creativity", level: 80, category: "Soft Skills" },
    { name: "Project Management", level: 75, category: "Soft Skills" }
  ];

  const uniqueCategories = skillsData
    .map(skill => skill.category)
    .filter((category, index, array) => array.indexOf(category) === index);

  const categories = uniqueCategories.map((category, index) => ({ id: category, title: category, index }));
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const barColor = isDarkMode ? "#4299e1" : "#4299e1";
  const bgColor = isDarkMode ? "#222831" : "#ffffff";
  const textColor = isDarkMode ? "text-white" : "text-gray-900";
  const mutedTextColor = isDarkMode ? "text-gray-400" : "text-gray-600";

  return (
    <section id="skills" className={`py-16 md:py-24 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textColor}`}>
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>
        <Tabs defaultValue={categories[0].id} className="w-full">
          <TabsList className="flex gap-x-2 mb-10">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="w-full">
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillsData
                  .filter((skill) => skill.category === category.id)
                  .map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <p className="font-medium">{skill.name}</p>
                        <p className="text-sm text-muted-foreground">{skill.level}%</p>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsSection;
