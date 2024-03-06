/// <reference types="astro/client" />

declare function customSlider(
  minWidth: number,
  maxWidth: number,
  targetClassName: string | null,
  duration: number
): void;

interface Window {
  customSlider(
    minWidth: number,
    maxWidth: number,
    targetClassName: string | null,
    duration: number
  ): void;
}
