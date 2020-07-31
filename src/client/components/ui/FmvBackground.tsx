import React from 'react';

import {
  useImagePreload,
} from '../../hooks/preloadHooks';

import styles from './styles/FmvBackground.scss';

interface Props {
  videoSource: string;
  imageFallback: string;
  children?: React.ReactNode;
}

const FmvBackground: React.FunctionComponent<Props> = (props: Props) => {
  const { videoSource, imageFallback, children } = props;
  const fallbackLoaded = useImagePreload(imageFallback);
  const renderChildren = fallbackLoaded && children;

  return (
    <>
      <div
        className={styles.container}
        style={{
          backgroundImage: fallbackLoaded ? `url('${imageFallback}')` : 'none',
          opacity: fallbackLoaded ? 1 : 0,
        }}
      >
        <video
          className={styles.fmv}
          loop
          autoPlay
          muted
          webkit-playsInline
          playsInline
        >
          <source src={videoSource} type="video/mp4" />
        </video>
      </div>
      {renderChildren || null}
    </>
  );
};

FmvBackground.defaultProps = {
  children: undefined,
};

export default FmvBackground;
