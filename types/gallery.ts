export interface GalleryItemType {
  id: string;
  type: "image" | "video";
  src: string;
  alt?: string;
  poster?: string;
  width?: number;
  height?: number;
  aspectRatio?: number;
  title: string;
  author: string;
  uploadDate?: string;
  tags?: string[];
}

export interface GalleryState {
  items: GalleryItemType[];
  loading: boolean;
  error: string | null;
  page: number;
  hasMore: boolean;
}
