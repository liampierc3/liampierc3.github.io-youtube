"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Header() {
  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Liam's Video Portfolio</span>
            <span
              className="text-xl"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400 }}
            >
              Liam Pierce
            </span>
          </Link>
        </div>
      </nav>
    </motion.header>
  )
}

