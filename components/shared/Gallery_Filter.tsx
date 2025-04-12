"use client";

interface GalleryFilterProps {
  onFilterChange: (filter: string) => void;
  activeFilter: string;
  tabs: { label: string; value: string }[];
}

export default function GalleryFilter({
  onFilterChange,
  activeFilter,
  tabs,
}: GalleryFilterProps) {
  return (
    <div className="flex justify-start mb-6 w-full">
      <div className="w-full flex flex-row flex-wrap uppercase space-x-6 py-4 bg-[#fff8e5] border-l-8
       border-brandPrimary pl-4 mb-10 text-black font-semibold text-lg">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => onFilterChange(tab.value)}
            className={`transition-colors duration-200 text-sm ${activeFilter === tab.value
              ? "text-brandPrimary underline underline-offset-4"
              : "text-black hover:text-brandPrimary"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
