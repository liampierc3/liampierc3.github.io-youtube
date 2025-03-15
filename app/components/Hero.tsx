"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-black min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl px-6 py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <motion.h1
            className="mt-10 text-4xl tracking-tight text-foreground sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400 }}
          >
            <span className="text-gradient">Hey, i'm Liam</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I create compelling visual stories. With years of experience, I bring a unique perspective to every project,
            blending technical expertise with creative vision.
          </motion.p>
        </div>
        <motion.div
          className="mx-auto mt-16 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-15%20at%2011.31.14%E2%80%AFAM.png-tscgJciNv2y1iOK7gznbytigZrBFog.jpeg"
              alt="Liam's headshot"
              fill
              className="object-cover grayscale"
              sizes="(max-width: 768px) 100vw, 250px"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

