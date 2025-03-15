"use client"
import { motion } from "framer-motion"
import { Play } from "lucide-react"

const videos = [
  {
    id: 1,
    title: "Surf Documentary",
    videoUrl: "https://www.youtube.com/watch?v=C3tVe_XPfo0",
    thumbnail: `https://img.youtube.com/vi/C3tVe_XPfo0/maxresdefault.jpg`,
  },
  {
    id: 2,
    title: "Brand Film",
    videoUrl: "https://www.youtube.com/watch?v=Kn9jafKQ_PA",
    thumbnail: `https://img.youtube.com/vi/Kn9jafKQ_PA/maxresdefault.jpg`,
  },
  {
    id: 3,
    title: "Commercial",
    videoUrl: "https://www.youtube.com/watch?v=OUMHMSO6jeU",
    thumbnail: `https://img.youtube.com/vi/OUMHMSO6jeU/maxresdefault.jpg`,
  },
  {
    id: 4,
    title: "Documentary",
    videoUrl: "https://www.youtube.com/watch?v=flmcDnI_fdE",
    thumbnail: `https://img.youtube.com/vi/flmcDnI_fdE/maxresdefault.jpg`,
  },
]

export default function VideoShowcase() {
  return (
    <section id="work" className="py-20 bg-background">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Work
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {videos.map((video, index) => (
            <a
              key={video.id}
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-video bg-black rounded-none overflow-hidden"
              style={{ minHeight: "340px" }} // Reduced by 15% from 400px
            >
              <img
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Play className="w-16 h-16 text-white" />
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

