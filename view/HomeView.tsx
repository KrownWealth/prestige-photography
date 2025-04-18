"use client";

import { About, Creatives, Featured, Hero, InspirationLoaded, More, Contact, TestimonialSection } from '@/components/shared'
import React from 'react'

export function HomeView() {
  return (
    <main>
      <Hero />
      <Featured />
      <Creatives />
      <InspirationLoaded />
      <More />
      <About />
      <Contact />
      <TestimonialSection />
    </main>
  )
}

