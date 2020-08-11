import { useEffect, useState } from 'react';

export const useImagePreload = (src?: string): string|undefined => {
  const [sourceLoaded, setSourceLoaded] = useState<string|undefined>(undefined);

  useEffect(() => {
    if (!src) {
      return;
    }
    const img = new Image();
    img.onload = () => setSourceLoaded(src);
    img.src = src;
  }, [src]);

  return sourceLoaded;
};

export const useVideoPreload = (src?: string): string|undefined => {
  const [sourceLoaded, setSourceLoaded] = useState<string|undefined>(undefined);

  useEffect(() => {
    if (!src) {
      return;
    }
    const vid = document.createElement('video');
    vid.oncanplaythrough = () => setSourceLoaded(src);
    vid.src = src;
  }, [src]);

  return sourceLoaded;
};
