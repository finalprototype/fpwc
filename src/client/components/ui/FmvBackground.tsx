import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import { RootState } from '../../reducers';
import { useImagePreload } from '../../hooks/preloadHooks';
import Loader from './Loader';

import styles from './styles/FmvBackground.scss';

export interface ActiveBkgdState {
  imageSource?: string;
  videoSource?: string;
}

export const initialState: ActiveBkgdState = {
  imageSource: undefined,
  videoSource: undefined,
};

export const FmvBackground: React.FunctionComponent = () => {
  const bkgdState = useSelector((state: RootState) => state.background);
  const imageLoaded = useImagePreload(bkgdState.imageSource);
  const [activeBkgd, updateActiveBkgd] = useState(initialState);

  useEffect(() => {
    if (imageLoaded && imageLoaded !== activeBkgd.imageSource) {
      updateActiveBkgd({ ...{}, ...bkgdState });
    }
  }, [imageLoaded, activeBkgd.imageSource, bkgdState]);

  const renderLoader = Boolean(
    !activeBkgd.imageSource
    || bkgdState.imageSource !== activeBkgd.imageSource
  ) || null;

  const renderBackground = Boolean(activeBkgd.imageSource) || null;
  const renderVideo = Boolean(activeBkgd.videoSource) || null;

  return (
    <>
      {renderBackground && (
        <SwitchTransition mode="in-out">
          <CSSTransition
            key={activeBkgd.imageSource}
            addEndListener={(node, done) => {
              node.addEventListener('transitionend', done, false);
            }}
            classNames={{
              enter: styles['fade-enter'],
              enterActive: styles['fade-enter-active'],
              exit: styles['fade-exit'],
              exitActive: styles['fade-exit-active'],
            }}
            timeout={250}
          >
            <div
              className={styles.container}
              style={{
                backgroundImage: `url('${activeBkgd.imageSource}')`,
              }}
            >
              {renderVideo && (
                <video
                  className={styles.fmv}
                  loop
                  autoPlay
                  muted
                  webkit-playsInline
                  playsInline
                >
                  <source src={activeBkgd.videoSource} type="video/mp4" />
                </video>
              )}
            </div>
          </CSSTransition>
        </SwitchTransition>
      )}
      {renderLoader && (
        <Loader size={256} className={styles.loader} />
      )}
    </>
  );
};

export default React.memo(FmvBackground);
