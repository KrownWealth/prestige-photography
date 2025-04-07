"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "./Mode_Toggle"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-sm"
          : "bg-background",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[90rem] items-center justify-between  px-4 lg:px-8">
        {/* Left side: Logo and Navigation */}
        <div className="flex items-center gap-x-10">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/images/prestige-logo.png"
              alt="Site Logo"
              width={150}
              height={150}
              className="h-auto w-[150px]"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-x-6 text-lg font-medium uppercase">
            <Link href="/" className="whitespace-nowrap rounded-md px-3 py-1.5 transition-colors hover:bg-accent/50 hover:text-foreground/80">
              Home
            </Link>
            <Link href="/gallery" className="whitespace-nowrap rounded-md px-3 py-1.5 transition-colors hover:bg-accent/50 hover:text-foreground/80">
              Gallery
            </Link>
            <div className="group relative">
              <Link
                href="/categories"
                className="flex items-center gap-1 whitespace-nowrap rounded-md px-3 py-1.5 transition-colors hover:bg-accent/50 hover:text-foreground/80"
              >
                Categories <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="invisible absolute left-0 top-full z-50 mt-1 w-48 rounded-md border bg-popover p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <Link href="/categories/weddings" className="block rounded-md px-3 py-2 text-sm hover:bg-accent">
                  Weddings
                </Link>
                <Link href="/categories/events" className="block rounded-md px-3 py-2 text-sm hover:bg-accent">
                  Events
                </Link>
                <Link href="/categories/birthday-shots" className="block rounded-md px-3 py-2 text-sm hover:bg-accent">
                  Birthday Shots
                </Link>
              </div>
            </div>
            <Link href="/about" className="whitespace-nowrap rounded-md px-3 py-1.5 transition-colors hover:bg-accent/50 hover:text-foreground/80">
              About
            </Link>
            <Link href="/contact" className="whitespace-nowrap rounded-md px-3 py-1.5 transition-colors hover:bg-accent/50 hover:text-foreground/80">
              Contact
            </Link>
          </nav>
        </div>

        {/* Right side: Toggle and Button */}
        <div className="flex items-center gap-x-4">
          <ModeToggle />
          <Button asChild
            className="hidden whitespace-nowrap bg-brandPrimary px-6 py-6 md:flex font-semibold text-lg 
            shadow-lg hover:bg-brandPrimary/80 transition duration-300">
            <Link href="/contact">Book a Session</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="mt-8 flex flex-col gap-2">
                <Link href="/" className="rounded-md px-4 py-2 text-lg hover:bg-accent">
                  Home
                </Link>
                <Link href="/gallery" className="rounded-md px-4 py-2 text-lg hover:bg-accent">
                  Gallery
                </Link>
                <div className="rounded-md px-4 py-2 hover:bg-accent">
                  <Link href="/categories" className="block text-lg">
                    Categories
                  </Link>
                  <div className="ml-4 mt-2 flex flex-col gap-1">
                    <Link href="/categories/weddings" className="rounded-md px-3 py-1.5 text-sm hover:bg-accent">
                      Weddings
                    </Link>
                    <Link href="/categories/events" className="rounded-md px-3 py-1.5 text-sm hover:bg-accent">
                      Events
                    </Link>
                    <Link href="/categories/birthday-shots" className="rounded-md px-3 py-1.5 text-sm hover:bg-accent">
                      Birthday Shots
                    </Link>
                  </div>
                </div>
                <Link href="/about" className="rounded-md px-4 py-2 text-lg hover:bg-accent">
                  About
                </Link>
                <Link href="/contact" className="rounded-md px-4 py-2 text-lg hover:bg-accent">
                  Contact
                </Link>
                <Button asChild size="sm" className="mx-4 mt-4 bg-brand-primary py-4">
                  <Link href="/contact">Book a Session</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}