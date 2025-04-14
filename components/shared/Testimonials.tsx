"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ArrowLeft, ArrowRight, Quote } from "lucide-react"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Bride",
    content:
      "The photos from our wedding day are absolutely stunning. Every emotion and special moment was captured beautifully. We couldn't be happier with the results!",
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Event Organizer",
    content:
      "Professional, creative, and a pleasure to work with. The event photos exceeded our expectations and perfectly captured the atmosphere of our corporate gala.",
    avatar: "MC",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Mother",
    content:
      "The birthday photoshoot for my daughter was amazing. The photographer was great with kids and captured the most genuine smiles and precious moments.",
    avatar: "ER",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "Bride",
    content:
      "The photos from our wedding day are absolutely stunning. Every emotion and special moment was captured beautifully. We couldn't be happier with the results!",
    avatar: "SJ",
  },
  {
    id: 5,
    name: "Sarah Johnson",
    role: "Bride",
    content:
      "The photos from our wedding day are absolutely stunning. Every emotion and special moment was captured beautifully. We couldn't be happier with the results!",
    avatar: "SJ",
  },
]

export function TestimonialSection() {
  const carouselRef = useRef<CarouselApi | null>(null)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!carouselRef.current) return

    const api = carouselRef.current

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", updateCurrent)
    updateCurrent()
  }, [])


  return (
    <section id="testimonials" className="relative w-full overflow-hidden bg-background">
      <div className="px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-screen-2xl mx-auto pt-16 pb-10">
        {/* Left Text */}
        <div className="space-y-4 text-start">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight dark:text-brandPrimaryLightShade">Client Testimonials</h1>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed  max-w-[700px]">
            Don&apos;t just take my word for it. Here&apos;s what my clients have to say.
          </p>
        </div>

        {/* Right Carousel */}
        <div className="relative w-full">

          <div className="flex justify-end space-x-2 mb-4 mt-6">
            <button
              onClick={() => carouselRef.current?.scrollPrev()}
              className="custom-prev rounded-full bg-brandPrimaryLightShade p-2"
              aria-label="Previous">
              <ArrowLeft className="text-black" />
            </button>
            <button
              onClick={() => carouselRef.current?.scrollNext()}
              className="custom-next rounded-full bg-brandPrimary p-2"
              aria-label="Next">
              <ArrowRight className="text-white" />
            </button>
          </div>
          <Carousel
            opts={{
              loop: true,
            }}
            setApi={(api) => (carouselRef.current = api)}
            // autoplay={true}
            // autoplayInterval={5000}
            className="w-full">

            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id}
                  className="basis-full md:basis-1/2 lg:basis-1/3">
                  <Card
                    className={`transition-all border-0  ${index === current ? "bg-brandPrimaryLightShade shadow-lg text-black"
                      : "bg-brandSecondary"
                      }`}
                  >
                    <CardContent className="p-6 flex flex-col h-full">
                      <Quote fill="#000" stroke="#fff" className="h-8 w-8 text-primary mb-4 text-black" />
                      <p
                        className={`flex-1  ${index === current ? "text-black"
                          : "text-gray-400"
                          }`}
                      >
                        {testimonial.content}
                      </p>
                      <div className="flex items-center gap-4 mt-4">
                        <Avatar className="bg-brandPrimary">
                          <AvatarFallback className="bg-brandPrimary">{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-black ">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

          </Carousel>
        </div>
      </div>
    </section>
  )
}
