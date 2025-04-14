"use client"

import type React from "react"
import { useMemo, useState } from "react"
import type { GalleryItemType } from "@/types/gallery"
import { CldImage, CldVideoPlayer } from 'next-cloudinary';

interface GalleryItemProps {
  item: GalleryItemType
}

export default function GalleryItem({ item }: GalleryItemProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  const aspectRatio = useMemo(() => {
    if (item.aspectRatio) return item.aspectRatio
    if (item.width && item.height) return item.width / item.height
    return 2 / 3
  }, [item.aspectRatio, item.width, item.height])


  return (
    <>

      {/* Loading skeleton */}
      {!isLoaded && (
        <div
          className="absolute inset-0 dark:bg-white animate-pulse"
          style={{ paddingBottom: `${(1 / aspectRatio) * 100}%` }}
        />
      )}

      {item.type === "image" ? (
        <CldImage
          src={item.src || "/placeholder.svg"}
          alt={item.alt || item.title}
          className={`object-cover w-full h-auto bg-transparent  rounded-2xl `}
          style={{ paddingBottom: `${(1 / aspectRatio) * 100}%` }}
          onLoad={() => setIsLoaded(true)}
          width={500}
          height={500}
        />
      ) : (

        <CldVideoPlayer
          src={item.src}
          poster={item.poster}
          className={`absolute inset-0 w-full h-full object-cover ${isLoaded ? "opacity-100" : "opacity-0"}`}
          muted
          loop
          playsinline
          onDataLoad={() => setIsLoaded(true)}
        />

      )}
    </>
  )
}
