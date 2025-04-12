export interface CloudinaryVideo {
  asset_id: string;
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
}

export interface VideoProps {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface CloudinaryResource {
  asset_id: string;
  secure_url: string;
  resource_type: "image" | "video";
  public_id: string;
  width: number;
  height: number;
  created_at: string;
  tags?: string[];
}
