"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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
    <Carousel className="w-full mb-6">
      <CarouselContent className="py-3 bg-brandPrimaryLightShade border-l-4 border-brandPrimary">
        {tabs.map((tab, index) => (
          <CarouselItem
            className="basis-auto shrink-0 grow-0 pr-4"
            key={index}
          >
            <CategoryItem
              item={tab.label}
              active={activeFilter === tab.value}
              onPress={() => onFilterChange(tab.value)}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

const CategoryItem = ({
  item,
  active,
  onPress,
}: {
  item: string;
  active: boolean;
  onPress: () => void;
}) => {
  return (
    <button
      onClick={onPress}
      className={`transition-colors duration-200 whitespace-nowrap capitalize text-sm font-semibold ${active
        ? "text-brandPrimary underline underline-offset-4"
        : "text-black hover:text-brandPrimary"
        }`}
    >
      {item}
    </button>
  );
};
