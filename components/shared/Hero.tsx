"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-black/70 z-0" />

      {/* Main content container */}
      <div className="relative z-10 h-full w-full flex flex-col lg:flex-row items-center justify-between
       px-4 lg:px-8 gap-12 max-w-screen-2xl mx-auto">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full pt-16 lg:pt-8 items-center justify-center flex flex-col lg:items-start lg:justify-start text-center lg:text-left"
        >
          <h1 className="text-6xl md:text-6xl lg:text-8xl font-bold leading-tight">
            Capturing Moments &
            <br />
            <span className="text-yellow-400">Lifetime Memories.</span>
          </h1>

          <p className="mt-6 text-sm md:text-lg text-gray-300 max-w-xl">
            Award-winning photography that transforms ordinary scenes into extraordinary memories.
          </p>

          {/* Bottom floating card - moved to left side */}
          <Button asChild
            className="hidden whitespace-nowrap bg-brandPrimary px-6 md:flex w-1/2 py-6 font-semibold 
            text-lg text-black shadow-lg hover:bg-brandPrimary/80 transition duration-300 mt-8">
            <Link href="/contact">Book a Session</Link>
          </Button>
        </motion.div>

        {/* Right side - Bold circular image with floating elements */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center py-10">
          {/* Bold circular image */}
          <motion.div
            className="relative h-[300px] w-[300px] md:h-[600px] md:w-[600px] rounded-full overflow-hidden border-8 border-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.3)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Image
              src="/images/hero-image-photography.jpg?height=1080&width=1080"
              alt="Dramatic landscape photography"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>

          {/* Floating elements around the circular image */}
          <motion.div
            className="absolute top-4 md:top-8 left-12 md:left-24 flex flex-col items-center justify-center transform -translate-y-1/2 translate-x-1/2
             bg-black/80 backdrop-blur-md rounded-full h-16 w-16 md:h-24 md:w-24 border-2 border-gray-400 z-20"

            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <span className="text-brandPrimary text-xs hidden md:flex">Experience</span>
            <span className="text-lg md:text-2xl font-bold">15+</span>
            <span className="text-gray-400  text-[8px] md:text-xs">Years</span>
          </motion.div>

          <motion.div
            className="absolute bottom-8 md:bottom-16 left-20 bg-black/80 backdrop-blur-md rounded-full 
            p-4 flex flex-col items-center justify-center border-2 border-gray-400 h-16 w-16 md:h-24 md:w-24"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <span className="text-yellow-400 text-sm md:flex hidden">Projects</span>
            <span className="text-lg md:text-2xl font-bold">250+</span>
            <span className="text-gray-400 text-[8px] md:text-xs">Completed</span>
          </motion.div>

          <motion.div
            className="absolute top-10 right-20 md:right-10 transform -translate-y-1/2 
            translate-x-1/2 
            z-20
            h-10 w-10 rounded-full bg-yellow-400 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 8, ease: "linear" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-black"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
              </svg>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute top-1/2 -right-10 transform -translate-y-1/2 translate-x-1/2 bg-black/80 backdrop-blur-md
             rounded-full w-16 h-16 md:h-20 md:w-20 flex items-center justify-center border border-gray-800 z-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-yellow-400"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m16 12-4-4v8l4-4Z" />
            </svg>
          </motion.div>


          {/* Decorative ring around the image */}
          <motion.div
            className="absolute h-[350px] w-[350px] md:h-[650px] md:w-[650px] rounded-full border-2 border-dashed border-yellow-400/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          />

          {/* Animated rotating outer ring */}
          <motion.div
            className="absolute h-[380px] w-[380px] md:h-[620px] md:w-[620px] rounded-full border border-yellow-400/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 360 } : { opacity: 0, scale: 0.8, rotate: 0 }}
            transition={{
              opacity: { duration: 0.7, delay: 0.6 },
              scale: { duration: 0.7, delay: 0.6 },
              rotate: { duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            }}
          />
        </div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-yellow-400"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </motion.div>
    </section>
  )
}

