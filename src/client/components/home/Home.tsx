import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../ui/Footer';
import PageContent from '../ui/PageContent';
import FmvBackground from '../ui/FmvBackground';
import Video from '../../videos/smb2.mp4';
import Fallback from '../../images/bkgds/360/smb2-min.jpg';

import styles from './styles/Home.scss';

const Home: React.FunctionComponent = () => (
  <FmvBackground
    videoSource={Video}
    imageFallback={Fallback}
  >
    <PageContent flex centered>
      <div className={styles.smb2badge}>
        <span className={styles.smb2badgetitle}>SUPER MARIO BROS. 2</span>
        <br />
        <span className={styles.smb2badgesubtitle}>JavaScript Edition</span>
      </div>
      Currently in development.
      <br />
      In the meantime, checkout the <Link to="/smb">SMB1 prototype</Link>
    </PageContent>
    <Footer fixed />
  </FmvBackground>
);

export default Home;
