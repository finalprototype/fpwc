import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateBackground } from '../store/background/actions';
import { history } from './app/AppHistory';
import PageContent from './ui/PageContent';

import Video from '../videos/min/glitch.mp4';
import Fallback from '../images/bkgds/360/glitch-min.jpg';
import DeadLink from '../images/dead_link.png';

import styles from './__styles__/NotFound.scss';

const NotFound: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateBackground(
      Fallback,
      Video,
    ));
  }, [dispatch]);

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
    <>
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
    </>
  );
};

export default NotFound;
