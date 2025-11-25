"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const LinkedInSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Linkedin className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Featured Post</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Postingan LinkedIn Pilihan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Postingan andalan yang mencerminkan pemikiran dan pengalaman saya
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-full max-w-[504px] rounded-lg overflow-hidden shadow-2xl border border-border">
              <iframe 
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7355420722028007424" 
                height="1216" 
                width="100%" 
                frameBorder="0" 
                allowFullScreen 
                title="Embedded post 1"
                className="w-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-full max-w-[504px] rounded-lg overflow-hidden shadow-2xl border border-border">
              <iframe 
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7394939521940893696" 
                height="1089" 
                width="100%" 
                frameBorder="0" 
                allowFullScreen 
                title="Embedded post 2"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInSection;
