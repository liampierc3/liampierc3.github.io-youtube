"use client"

import { motion } from "framer-motion"

export default function ContactForm() {
  return (
    <section id="contact" className="bg-background py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl text-foreground mb-4">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground">Let's collaborate on your next project. Reach out to me at:</p>
          <a href="mailto:liampierc3@gmail.com" className="text-lg text-primary hover:underline mt-2 inline-block">
            liampierc3@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  )
}

