import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/40 pt-12 pb-6 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 p-4">
          <div>
            <Link href="/" className="text-2xl font-bold text-primary mb-4 block">
              Lutfi<span className="text-primary-foreground">.</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Web developer and designer creating unique digital experiences
              with a focus on performance and usability.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/vektormuhammadlutfi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/muh-lutfi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:sainteclutfi@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <p className="text-muted-foreground mb-2">Makassar, Indonesia</p>
            <p className="text-muted-foreground mb-2">sainteclutfi@gmail.com</p>
            <p className="text-muted-foreground">+6289 695 925 514</p>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 text-center text-muted-foreground">
          <p>© {currentYear} Lutfi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
