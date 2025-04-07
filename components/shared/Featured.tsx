import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Featured() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="px-4 lg:px-8 flex flex-col max-w-screen-2xl mx-auto py-10">
        <div className=''>
          <h1 className="text-6xl md:text-6xl lg:text-8xl font-bold text-white mb-10 max-w-2xl leading-[0.5] ">
            Welcome to the nicest studio to take a shot 📷
          </h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <Card className="relative h-80 overflow-hidden">
            <img
              src="/images/hero-image-photography.jpg"
              alt="Sample"
              className="w-full h-full object-cover"
            />
          </Card>

          <Card className="relative h-80 overflow-hidden -top-12">
            <img
              src="/images/hero-image-photography.jpg"
              alt="Sample"
              className="w-full h-full object-cover"
            />
          </Card>

          <div className="flex flex-col gap-y-4">
            <p> Prestige Photography is a one of the best photography studio in town: we&apos;re here
              to help you created unforgettable memeories. Get pictured. Get feedback. Get lost in a world of new photo style! We&apos;ve got you covered.</p>

            <p className='uppercase font-semibold text-brandPrimary underline text-xl'>best. Studio. Ever.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
