import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import type { GalleryItemType } from "@/types/gallery";
import { CloudinaryResource } from "@/types/cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    //const folderPrefix = "prestige-photography/";
    const folderPrefix = "apple-remastered/images/";

    const [imagesResult, videosResult] = await Promise.all([
      cloudinary.api.resources({
        type: "upload",
        prefix: folderPrefix,
        resource_type: "image",
        max_results: 100,
      }),
      cloudinary.api.resources({
        type: "upload",
        prefix: folderPrefix,
        resource_type: "video",
        max_results: 100,
      }),
    ]);

    const mapToGalleryItem = (
      resource: CloudinaryResource
    ): GalleryItemType => {
      const isVideo = resource.resource_type === "video";

      return {
        id: resource.asset_id,
        src: resource.secure_url,
        type: resource.resource_type === "video" ? "video" : "image",
        ...(isVideo
          ? {
              poster: resource.secure_url + ".jpg",
            }
          : {
              alt: resource.public_id,
            }),
        width: resource.width,
        height: resource.height,
        title: resource.public_id.split("/").pop() as string,
        author: "Cloudinary",
        uploadDate: resource.created_at,
        tags: resource.tags || [],
      };
    };

    const combined: GalleryItemType[] = [
      ...imagesResult.resources.map(mapToGalleryItem),
      ...videosResult.resources.map(mapToGalleryItem),
    ];

    return NextResponse.json(combined, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching media from Cloudinary:", error);
      return NextResponse.json(
        { error: `Failed to fetch media: ${error.message}` },
        { status: 500 }
      );
    } else {
      console.error("Unknown error fetching media:", error);
      return NextResponse.json(
        { error: "Failed to fetch media: Unknown error" },
        { status: 500 }
      );
    }
  }
}
