import { zeroLeft } from './zero-left';

export function secondsToTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const min = Math.floor((seconds - hours * 3600) / 60);
  const seg = seconds - hours * 3600 - min * 60;
  return `${zeroLeft(hours)}:${zeroLeft(min)}:${zeroLeft(seg)}`;
}
