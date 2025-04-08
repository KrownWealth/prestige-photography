"use client"

import React from 'react'
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Card,
} from "@/components/ui/card"
import Image from 'next/image'

export function Featured() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="relative w-full overflow-hidden bg-background" ref={ref}>
      <div className="px-4 lg:px-8 flex flex-col max-w-screen-2xl mx-auto pt-16 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-16 md:max-w-3xl"
        >

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold dark:text-brandPrimaryLightShade z-10 ">
            Welcome to the nicest studio to take a shot 📷
          </h1>
        </motion.div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 md:gap-x-4'>
          <Card className="relative h-80 overflow-hidden border-0 shadow-none mb-8 md:mb-0">
            <Image
              src="/images/hero-image-photography.jpg"
              alt="Sample"
              className="w-full h-full object-cover"
              width={100}
              height={100}
            />
            <div className="absolute inset-0 bg-[#fdf8ea] opacity-70 mix-blend-multiply pointer-events-none" />

            {/* Text */}
            <div className="absolute bottom-0 w-full md:px-4 md:py-3">
              <p
                className="text-lg font-semibold text-right bg-gradient-to-r from-[#eeba2c] via-[#ffc107] to-[#fdf8ea] bg-clip-text text-transparent"
              >
                Studio Vibes
              </p>
            </div>
          </Card>

          <Card className="relative h-80 overflow-hidden -top-12 border-0 shadow-none">
            <Image
              src="/images/hero-image-photography.jpg"
              alt="Sample"
              className="w-full h-full object-cover"
              width={100}
              height={100}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#fdf8ea] opacity-70 mix-blend-multiply pointer-events-none" />

            {/* Text */}
            <div className="absolute bottom-0 w-full px-4 py-3">
              <p
                className="text-lg font-semibold text-right bg-gradient-to-r from-[#eeba2c] via-[#ffc107] to-[#fdf8ea] bg-clip-text text-transparent"
              >
                Studio Vibes
              </p>
            </div>
          </Card>


          <div className="flex flex-col gap-y-8 max-w-md items-start justify-start">
            <p className="text-sm md:text-lg"> Prestige Photography is a one of the best photography studio in town: we&apos;re here
              to help you created unforgettable memeories. Get pictured. Get feedback. Get lost in a world of new photo style! We&apos;ve got you covered.</p>

            <p className='uppercase font-semibold text-brandPrimary underline text-xl'>best. Studio. Ever.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
