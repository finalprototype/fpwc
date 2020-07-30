import React, { useEffect, useState } from 'react';

import { history } from './app/AppHistory';
import PageContent from './ui/PageContent';
import FmvBackground from './ui/FmvBackground';

import DeadLink from '../images/dead_link.png';
import Video from '../videos/glitch.mp4';
import SynthwaveFallback from '../images/bkgds/360/synthwave-min.jpg';

import styles from './styles/NotFound.scss';

const NotFound: React.FunctionComponent = () => {
  const redirectSeconds = 5;
  const [count, setCount] = useState(redirectSeconds);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count === 1) {
        history.push('/');
        return;
      }
      setCount(count - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <FmvBackground
      videoSource={Video}
      imageFallback={SynthwaveFallback}
    >
      <PageContent flex centered>
        <div className={styles.title}>
          404
        </div>
        <div className={styles.subtitle}>
          (redirecting in {count})
        </div>
        <br />
        <img
          className={styles.hero}
          src={DeadLink}
          alt=""
        />
      </PageContent>
    </FmvBackground>
  );
};

export default NotFound;
