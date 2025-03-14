import { MediaDto } from "src/types/media.data.dto";

export function createMediaUrl(media: MediaDto) {
  return `/media/${media.id}`;
}
