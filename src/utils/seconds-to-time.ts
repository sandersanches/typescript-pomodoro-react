export function secondsToTime(seconds: number): string {
  const zeroLeft = (n: number) => {
    return n.toString().padStart(2, '0');
  };

  const min = Math.floor(seconds / 60);
  const seg = seconds - min * 60;
  return `${zeroLeft(3)}:${zeroLeft(seg)}`;
}
