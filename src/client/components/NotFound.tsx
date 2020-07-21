import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import PageContent from './ui/PageContent';
import FmvBackground from './ui/FmvBackground';
import Video from '../videos/glitch.mp4';
import SynthwaveFallback from '../images/fallback-synthwave.jpg';
import styles from "./styles/NotFound.scss";
import DeadLink from "../images/dead_link.png";

interface Props {
  seconds?: number;
}

const NotFound: React.FunctionComponent<Props> = (props: Props) => {
  const { seconds = 5 } = props;
  const [count, setCount] = useState(seconds);
  const history = useHistory();

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
    <>
      <FmvBackground
        videoSource={Video}
        imageFallback={SynthwaveFallback}
      />
      <PageContent flex centered>
        <div className={styles.title}>
          404
        </div>
        <div className={styles.subtitle}>
          (redirecting in {count})
        </div>
        <br />
        <img className={styles.hero} src={DeadLink} />
      </PageContent>
    </>
  );
};

export default NotFound;
