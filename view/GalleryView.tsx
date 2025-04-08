"use client"

import React from 'react'
import Image from 'next/image';


interface GalleryImage {
  src: string;
  alt: string;
}

const images: GalleryImage[] = [
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg", alt: "Gallery image 1" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg", alt: "Gallery image 2" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg", alt: "Gallery image 3" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg", alt: "Gallery image 4" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg", alt: "Gallery image 5" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg", alt: "Gallery image 6" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg", alt: "Gallery image 7" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg", alt: "Gallery image 8" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg", alt: "Gallery image 9" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg", alt: "Gallery image 10" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg", alt: "Gallery image 11" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg", alt: "Gallery image 12" },
];

const outdoorImages: GalleryImage[] = [
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg", alt: "Outdoor 1" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg", alt: "Outdoor 2" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg", alt: "Gallery image 4" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg", alt: "Gallery image 5" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg", alt: "Gallery image 6" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg", alt: "Gallery image 7" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg", alt: "Gallery image 8" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg", alt: "Gallery image 9" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg", alt: "Gallery image 10" },
]

const weddingImages: GalleryImage[] = [
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg", alt: "Wedding 1" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg", alt: "Wedding 2" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg", alt: "Gallery image 4" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg", alt: "Gallery image 5" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg", alt: "Gallery image 6" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg", alt: "Gallery image 7" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg", alt: "Gallery image 8" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg", alt: "Gallery image 9" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg", alt: "Gallery image 10" },
]

const eventImages: GalleryImage[] = [
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg", alt: "Event 1" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg", alt: "Event 2" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg", alt: "Gallery image 4" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg", alt: "Gallery image 5" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg", alt: "Gallery image 6" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg", alt: "Gallery image 7" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg", alt: "Gallery image 8" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg", alt: "Gallery image 9" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg", alt: "Gallery image 10" },
]

const headshotImages: GalleryImage[] = [
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg", alt: "Head Shot 1" },
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg", alt: "Head Shot 2" },
]
const tabs = [
  { label: "Birthday Shots", value: "birthday-shots" },
  { label: "Outdoor Shots", value: "outdoor-shots" },
  { label: "Weddings", value: "weddings" },
  { label: "Events", value: "events" },
  { label: "Head Shots", value: "head-shots" },
];

const imageMap: Record<string, { src: string; alt: string }[]> = {
  "birthday-shots": images,
  "outdoor-shots": outdoorImages,
  "weddings": weddingImages,
  "events": eventImages,
  "head-shots": headshotImages,
}


const GalleryView = () => {
  const [selectedTab, setSelectedTab] = React.useState("birthday-shots");

  const selectedImages = imageMap[selectedTab] || [];

  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="px-4 lg:px-8 pt-20 pb-10 flex flex-col max-w-screen-2xl mx-auto">
        <div className="flex flex-row flex-wrap uppercase space-x-6 py-4 bg-[#fff8e5] border-l-8 border-brandPrimary pl-4 mb-10 text-black font-semibold text-lg">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setSelectedTab(tab.value)}
              className={`transition-colors duration-200 ${selectedTab === tab.value
                ? "text-brandPrimary underline underline-offset-4"
                : "text-black hover:text-brandPrimary"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="list mt-10">
          {selectedImages.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={500}
              height={500}
            />

          ))}
        </div>
      </div>
    </section>

  )
}

export default GalleryView