"use client"

import { motion } from "framer-motion"

export default function VideoReel() {
  return (
    <div className="w-full bg-black pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full"
        style={{ backgroundColor: "black" }}
      >
        <div className="relative w-full h-0 pb-[56.25%] bg-black">
          <iframe
            src="https://player.vimeo.com/video/1042820639?h=c9c8f9c9c9&autoplay=1&title=0&byline=0&portrait=0&background=1"
            className="absolute top-0 left-0 w-full h-full"
            style={{ backgroundColor: "black" }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Reel"
          ></iframe>
        </div>
      </motion.div>
    </div>
  )
}

