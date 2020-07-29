import React, { useEffect, useState } from 'react';

export const useImagePreload = (src) => {  
  const [sourceLoaded, setSourceLoaded] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setSourceLoaded(src);
  }, [src]);

  return sourceLoaded;
};

export const useVideoPreload = (src) => {  
  const [sourceLoaded, setSourceLoaded] = useState(null);

  useEffect(() => {
    const vid = document.createElement('video');
    vid.src = src;
    vid.oncanplaythrough  = () => setSourceLoaded(src);
  }, [src]);

  return sourceLoaded;
};
