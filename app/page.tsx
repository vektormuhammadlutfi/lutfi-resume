import dynamic from 'next/dynamic';
import { Toaster } from "sonner";

// Dynamically import components with client-side functionality
const HeroSection = dynamic(() => import('@/components/HeroSection'), { ssr: true });
const AboutSection = dynamic(() => import('@/components/AboutSection'), { ssr: true });
const ExperienceSection = dynamic(() => import('@/components/ExperienceSection'), { ssr: true });
const SkillsSection = dynamic(() => import('@/components/SkillsSection'), { ssr: true });
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection'), { ssr: true });
const LinkedInSection = dynamic(() => import('@/components/LinkedInSection'), { ssr: true });
const ContactSection = dynamic(() => import('@/components/ContactSection'), { ssr: true });

export default function Home() {
  return (
    <>
      <Toaster position="top-right" />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <LinkedInSection />
      <ContactSection />
    </>
  );
}
