"use client";

import React from "react";
import MasonryGallery from "@/components/shared/Mansory_Gallery";
import GalleryFilter from "@/components/shared/Gallery_Filter";

const tabs = [
  { label: "All", value: "all" },
  { label: "Birthday Shots", value: "birthday-shots" },
  { label: "Outdoor Shots", value: "outdoor-shots" },
  { label: "Weddings", value: "weddings" },
  { label: "Events", value: "events" },
  { label: "Head Shots", value: "head-shots" },
];

const GalleryView = () => {
  const [activeFilter, setActiveFilter] = React.useState("all");

  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="px-4 lg:px-8 pt-10 pb-10 flex flex-col max-w-screen-2xl mx-auto">
        <GalleryFilter
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          tabs={tabs}
        />
        <MasonryGallery filter={activeFilter} />
      </div>
    </section>
  );
};

export default GalleryView;
