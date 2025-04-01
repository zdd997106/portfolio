import { MediaDto } from "src/types/media.data.dto";

export function createMediaUrl(media: MediaDto) {
  return `/media/${media.id}`;
}

export function createDownloadMediaUrl(media: MediaDto) {
  return `/api/media/${media.id}/download`;
}
