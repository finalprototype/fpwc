import React from 'react';

import {
  useImagePreload,
  useVideoPreload
} from '../../hooks/preloadHooks';

import styles from './styles/FmvBackground.scss';

interface Props {
  videoSource: any;
  imageFallback: any;
  children?: React.ReactNode;
}

const FmvBackground: React.FunctionComponent<Props> = (props: Props) => {
  const videoLoaded = useVideoPreload(props.videoSource);
  const fallbackLoaded = useImagePreload(props.imageFallback);
  const renderChildren = videoLoaded && props.children;

  console.log('videoLoaded', videoLoaded);
  console.log('fallbackLoaded', fallbackLoaded);
  console.log('---');

  return (
    <>
      <div
        className={styles.container}
        style={{
          backgroundImage: fallbackLoaded ? `url('${props.imageFallback}')` : 'none';
          opacity: fallbackLoaded ? 1 : 0;
        }}
      >
        <video
          className={styles.fmv}
          loop
          autoPlay
          muted
          style={{
            opacity: videoLoaded ? 1 : 0;
          }}
        >
          <source src={props.videoSource} type="video/mp4" />
        </video>
      </div>
      {renderChildren || null}
    </>
  );
}

export default FmvBackground;