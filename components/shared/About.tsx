"use client"

import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion"
import Image from 'next/image'

export function About() {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="relative w-full overflow-hidden bg-background" ref={ref}>
      <div className="px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-screen-2xl mx-auto  pt-16 pb-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-6xl md:text-6xl lg:text-8xl font-bold leading-tight"> About Us</h1>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Passionate About Visual Storytelling</h2>
          <p className="mb-6">
            With over 15 years of experience, our photography studio has mastered the art of capturing moments that tell
            compelling stories. We believe that every image should evoke emotion and create a lasting impression.
          </p>
          <p className=" mb-8">
            Our team of award-winning photographers specializes in a wide range of styles, from breathtaking landscapes
            to intimate portraits. We work closely with our clients to understand their vision and bring it to life
            through our lens.
          </p>
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors">
            Learn More About Us
          </button>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.7 }}
        >
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src="/images/hero-image-photography.jpg?height=800&width=800"
              alt="Photographer at work"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-black p-4 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-yellow-400 flex items-center justify-center">
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
                  className="text-black"
                >
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">Our Approach</p>
                <p className="font-semibold">Creativity & Precision</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}