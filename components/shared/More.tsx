"use client"

import React from 'react'
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Card,
} from "@/components/ui/card"
import { Star } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'

export function More() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="relative w-full overflow-hidden bg-background" ref={ref}>
      <div className="px-4 lg:px-8 flex flex-col max-w-screen-2xl mx-auto pt-16 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-20 md:max-w-4xl"
        >

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold dark:text-brandPrimaryLightShade z-10 ">
            Want More?  <br />
            <span>View Our Gallery.</span>
          </h1>
        </motion.div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 md:gap-x-4'>
          <Card className="relative h-80 overflow-hidden border-0 shadow-none  mb-8 md:mb-0">
            <Image
              src="/images/hero-image-photography.jpg"
              alt="Sample"
              priority
              className="w-full h-full object-cover"
              width={500}
              height={500}

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
              fill
              className="w-full h-full object-cover"
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
            <p className="text-sm md:text-lg">
              The best way to feel and view all our creatives and more is with Prestige Gallery.
            </p>
            <p className="flex text-sm text-white items-center gap-x-2"><span><Star fill="#eeba2c" strokeWidth={0}
              className="w-6 h-6 text-brandPrimary" /></span> Not that tiny camera you wear on your forehead.</p>

            <Button asChild
              className="hidden whitespace-nowrap bg-brandPrimary px-6 py-6 md:flex font-semibold text-xl 
            shadow-lg hover:bg-brandPrimary/80 transition duration-300 uppercase">
              <Link href="/contact">Bigger. Better. Feel</Link>
            </Button>

          </div>
        </div>
      </div>
    </section>
  )
}
