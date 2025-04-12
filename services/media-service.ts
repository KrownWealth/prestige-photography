import { GalleryItemType } from "@/types/gallery";

export async function fetchMediaFromCloud(
  page = 1,
  limit = 12
): Promise<{
  items: GalleryItemType[];
  hasMore: boolean;
  nextPage: number;
}> {
  try {
    const res = await fetch("/api/get-media");
    if (!res.ok) throw new Error("Failed to fetch media");

    const allItems: GalleryItemType[] = await res.json();

    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedItems = allItems.slice(start, end);

    const hasMore = end < allItems.length;

    return {
      items: paginatedItems,
      hasMore,
      nextPage: hasMore ? page + 1 : page,
    };
  } catch (error) {
    console.error("Error fetching media from cloud:", error);
    throw error;
  }
}
