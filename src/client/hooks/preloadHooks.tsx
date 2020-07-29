import { useEffect, useState } from 'react';

export const useImagePreload = (src: string): string|null => {
  const [sourceLoaded, setSourceLoaded] = useState<string|null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setSourceLoaded(src);
  }, [src]);

  return sourceLoaded;
};

export const useVideoPreload = (src: string): string|null => {
  const [sourceLoaded, setSourceLoaded] = useState<string|null>(null);

  useEffect(() => {
    const vid = document.createElement('video');
    vid.src = src;
    vid.oncanplaythrough = () => setSourceLoaded(src);
  }, [src]);

  return sourceLoaded;
};
