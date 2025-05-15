"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Project {
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  tags: string[];
  category: string[];
}

const ProjectsSection = () => {
  const [filter, setFilter] = useState<string>("all");

  const projects: Project[] = [
    {
      title: "ISO 27001 Implementation",
      description: "Keamanan sistem untuk DMS After Sales",
      image: "https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      liveUrl: "#",
      githubUrl: "#",
      tags: ["Security", "ISO 27001", "Kalla Group"],
      category: ["projects"]
    },
    {
      title: "Dealer Management System (After Sales)",
      description: "Sistem manajemen bengkel",
      image: "https://images.pexels.com/photos/10029877/pexels-photo-10029877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liveUrl: "#",
      githubUrl: "#",
      tags: ["Management", "System", "Kalla Group"],
      category: ["projects"]
    },
    {
      title: "SMS Gateway Integration",
      description: "Integrasi API Nusasms untuk komunikasi pelanggan",
      image: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg",
      liveUrl: "#",
      githubUrl: "#",
      tags: ["API", "SMS", "Kalla Group"],
      category: ["projects"]
    },
    {
      title: "Dealer Management System for Sales",
      description: "Sistem penjualan mobil Toyota",
      image: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liveUrl: "#",
      githubUrl: "#",
      tags: ["Sales", "Toyota", "PT. Haka Sarana Investama"],
      category: ["projects"]
    },
    {
      title: "Arsip Digital Kendaraan",
      description: "Mockup arsip digital kendaraan",
      image: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg",
      liveUrl: "#",
      githubUrl: "#",
      tags: ["Arsip", "Digital", "Kallatransport"],
      category: ["projects"]
    },
    {
      title: "Web Utilisasi",
      description: "Platform rental kendaraan",
      image: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg",
      liveUrl: "#",
      githubUrl: "#",
      tags: ["Rental", "Web", "Kallatransport"],
      category: ["projects"]
    },
    {
      title: "Web Portal",
      description: "Portal informasi internal perusahaan",
      image: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg",
      liveUrl: "#",
      githubUrl: "#",
      tags: ["Portal", "Web", "Kallatransport"],
      category: ["projects"]
    },
    {
      title: "Website Dinas Perikanan Bantaeng",
      description: "Website instansi pemerintah",
      image: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg",
      liveUrl: "#",
      githubUrl: "#",
      tags: ["Website", "Pemerintah", "Media Sakti"],
      category: ["projects"]
    },
    {
      title: "Website Crowdfunding Lingkar Dakwah",
      description: "Platform donasi komunitas",
      image: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg",
      liveUrl: "#",
      githubUrl: "#",
      tags: ["Website", "Donasi", "Freelance"],
      category: ["projects"]
    },
    {
      title: "Sedekahplus Web",
      description: "Website donasi online",
      image: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg",
      liveUrl: "#",
      githubUrl: "#",
      tags: ["Website", "Donasi", "Freelance"],
      category: ["projects"]
    },
    {
      title: "Web Koperasi Baji Artha",
      description: "Website koperasi",
      image: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg",
      liveUrl: "#",
      githubUrl: "#",
      tags: ["Website", "Koperasi", "Freelance"],
      category: ["projects"]
    },
    {
      title: "Web Pupuk Lampokobiourine",
      description: "Website produk pupuk organik",
      image: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg",
      liveUrl: "#",
      githubUrl: "#",
      tags: ["Website", "Pupuk", "Freelance"],
      category: ["projects"]
    },
    {
      title: "One Map Info ESDM Web",
      description: "Pemetaan tanah via Google Maps API",
      image: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg",
      liveUrl: "#",
      githubUrl: "#",
      tags: ["Website", "Pemetaan", "Freelance"],
      category: ["projects"]
    },
    {
      title: "PT ZNH Travel Web",
      description: "Website travel umroh",
      image: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg",
      liveUrl: "#",
      githubUrl: "#",
      tags: ["Website", "Travel", "Freelance"],
      category: ["projects"]
    },
    {
      title: "Web PSB SMAN 2 Sungguminasa",
      description: "Portal penerimaan siswa baru",
      image: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg",
      liveUrl: "#",
      githubUrl: "#",
      tags: ["Website", "PSB", "Freelance"],
      category: ["projects"]
    },
    {
      title: "Naïve Bayes & SES for Commodity Forecasting",
      description: "Paper presented at ICOST 2019",
      image: "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg",
      liveUrl: "#",
      githubUrl: "#",
      tags: ["Research", "ICOST 2019", "Naive Bayes", "SES", "Commodity Forecasting"],
      category: ["achievements"]
    },
    {
      title: "Sistem Pendukung Keputusan AHP",
      description: "Published in J. Media Inform. Budidarma",
      image: "https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liveUrl: "#",
      githubUrl: "#",
      tags: ["Research", "J. Media Inform. Budidarma", "AHP", "Decision Support System"],
      category: ["achievements"]
    },
    {
      title: "K-Means for Student Admission Recommendation",
      description: "Paper presented at ICOST 2019",
      image: "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg",
      liveUrl: "#",
      githubUrl: "#",
      tags: ["Research", "ICOST 2019", "K-Means", "Student Admission"],
      category: ["achievements"]
    },
    {
      title: "Mobile Learning Pra Nikah (Unity 3D)",
      description: "Published in Jurnal INSTEK",
      image: "https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg",
      liveUrl: "#",
      githubUrl: "#",
      tags: ["Research", "Jurnal INSTEK", "Unity 3D", "Mobile Learning"],
      category: ["achievements"]
    },
    {
      title: "Juara 3 Web Design",
      description: "Electrical Day UNM (2020)",
      image: "https://images.pexels.com/photos/6120397/pexels-photo-6120397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liveUrl: "#",
      githubUrl: "#",
      tags: ["Award", "Web Design", "UNM"],
      category: ["achievements"]
    },
    {
      title: "Juara 1 Web Design",
      description: "Kampoeng IT, UMI (2020)",
      image: "https://images.pexels.com/photos/6120397/pexels-photo-6120397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liveUrl: "#",
      githubUrl: "#",
      tags: ["Award", "Web Design", "UMI"],
      category: ["achievements"]
    },
    {
      title: "Juara KOIN 2022",
      description: "Pirus Smart Parking",
      image: "https://images.pexels.com/photos/6120397/pexels-photo-6120397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liveUrl: "#",
      githubUrl: "#",
      tags: ["Award", "KOIN 2022", "Pirus Smart Parking"],
      category: ["achievements"]
    }
  ];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(project => project.category.includes(filter));

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Projects & Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Explore my latest projects, professional certifications, awards, and research publications in data science and web development.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-10"
        >
          <Tabs defaultValue="all" className="w-full max-w-md mx-auto">
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="all" onClick={() => setFilter("all")}>All</TabsTrigger>
              <TabsTrigger value="projects" onClick={() => setFilter("projects")}>Projects</TabsTrigger>
              <TabsTrigger value="achievements" onClick={() => setFilter("achievements")}>Achievements</TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow group">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {project.liveUrl !== "#" && project.githubUrl !== "#" && (
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>Preview</span>
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                          <Github className="h-4 w-4" />
                          <span>Details</span>
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
                <CardContent className="pt-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                {project.liveUrl !== "#" && (
                  <CardFooter>
                    <Button variant="ghost" className="text-primary w-full justify-between" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <span>View Details</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
