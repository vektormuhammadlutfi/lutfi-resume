"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";


const ContactSection = () => {

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      value: "sainteclutfi@gmail.com",
      link: "mailto:sainteclutfi@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      value: "+62 89 695 925 514",
      link: "tel:+6289695925514"
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Location",
      value: "Gowa, Perumahan Green Nurhidayat Romangpolong, Makassar, Indonesia",
      link: "https://www.google.com/maps/search/Gowa,+Perumahan+Green+Nurhidayat+Romangpolong,+Makassar,+Indonesia"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Feel free to reach out to me using the contact details below.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="space-y-6"
        >
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target={item.title === "Location" ? "_blank" : undefined}
              rel={item.title === "Location" ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:bg-card/80 transition-colors"
            >
              {item.icon}
              <div>
                <p className="font-medium">{item.title}:</p>
                <p className="text-muted-foreground">{item.value}</p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
