"use client"

import { motion } from "framer-motion"
import { Video, Film, Camera, Edit, Mic, Presentation } from "lucide-react"

const services = [
  {
    icon: <Film className="w-8 h-8 mb-4 text-primary" />,
    title: "Commercial Production",
    description:
      "High-quality commercials that showcase your brand's unique value proposition and connect with your audience.",
  },
  {
    icon: <Camera className="w-8 h-8 mb-4 text-primary" />,
    title: "Brand Films",
    description:
      "Cinematic storytelling that communicates your brand's mission, values, and impact in a compelling way.",
  },
  {
    icon: <Edit className="w-8 h-8 mb-4 text-primary" />,
    title: "Post-Production",
    description:
      "Expert editing, color grading, and motion graphics that elevate your footage to professional standards.",
  },
  {
    icon: <Mic className="w-8 h-8 mb-4 text-primary" />,
    title: "Interview Series",
    description: "Thoughtfully produced interview content that highlights expertise and builds thought leadership.",
  },
  {
    icon: <Video className="w-8 h-8 mb-4 text-primary" />,
    title: "Social Media Content",
    description: "Engaging short-form video optimized for social platforms to increase engagement and reach.",
  },
  {
    icon: <Presentation className="w-8 h-8 mb-4 text-primary" />,
    title: "Event Coverage",
    description: "Comprehensive documentation of your events with highlight reels that capture key moments.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl mb-16 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Services
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-background p-6 rounded-md border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {service.icon}
              <h3 className="text-xl mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

