import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-background px-8">
      <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
        <div className="flex flex-col gap-2">
          <Link href="/" className="text-lg font-bold justify-start items-start -mr-8 md:mr-0">
            <Image
              src="/images/prestige-logo-transparent.png"
              alt="Site Logo"
              width={150}
              height={150}

            />
          </Link>
          <p className="text-sm md:text-lg text-gray-500 dark:text-gray-400">
            Capturing life&apos;s special moments <br /> with artistry and passion.
          </p>
        </div>
        <nav className="flex gap-x-6 text-lg font-medium uppercase">
          <Link href="/about" className="text-sm hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/gallery" className="text-sm hover:underline underline-offset-4">
            Gallery
          </Link>
          <Link href="/contact" className="text-sm hover:underline underline-offset-4">
            Contact
          </Link>
          <Link href="/admin/login" className="text-sm hover:underline underline-offset-4">
            Admin
          </Link>
        </nav>
        <div className="flex gap-4">
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 hover:bg-muted"
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 hover:bg-muted"
          >
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 hover:bg-muted"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
      <div className="border-t border-t-gray-200 py-6">
        <div className="container flex flex-col items-center justify-center gap-2 md:flex-row md:justify-between">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Photography Portfolio. All rights reserved.
          </p>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            <Link href="/privacy" className="hover:underline underline-offset-4">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="hover:underline underline-offset-4 ml-2">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

