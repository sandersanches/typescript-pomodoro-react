import { zeroLeft } from './zero-left';

export function secondsToMinutes(seconds: number): string {
  const min = Math.floor(seconds / 60);
  const seg = seconds - min * 60;
  return `${zeroLeft(min)}:${zeroLeft(seg)}`;
}
