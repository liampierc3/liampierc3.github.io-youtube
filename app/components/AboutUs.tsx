"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutUs() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl mb-12 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-2xl mb-4 text-foreground">Storytelling Through Video</h3>
            <p className="text-muted-foreground mb-6">
              I'm a freelance videographer and filmmaker with over 8 years of experience creating compelling visual
              content for brands and businesses. My approach combines technical expertise with a strong narrative focus
              to deliver videos that not only look professional but also connect with viewers on an emotional level.
            </p>
            <p className="text-muted-foreground">
              Whether you're looking to showcase your products, share your brand story, or document an important event,
              I bring a thoughtful and strategic approach to every project. My goal is to understand your unique needs
              and create video content that helps you achieve your objectives.
            </p>
          </motion.div>
          <motion.div
            className="relative aspect-square"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-15%20at%2011.31.14%E2%80%AFAM.png-tscgJciNv2y1iOK7gznbytigZrBFog.jpeg"
                alt="Liam's headshot"
                fill
                className="object-cover rounded-none grayscale"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

