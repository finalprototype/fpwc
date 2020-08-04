import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../ui/Footer';
import PageContent from '../ui/PageContent';
import FmvBackground from '../ui/FmvBackground';
import Video from '../../videos/min/smb2.mp4';
import Fallback from '!url-loader!../../images/bkgds/360/smb2-min.jpg';
import SMB2Badge from '../../images/smb2je-logo-300.png';

import styles from './styles/Home.scss';

const Home: React.FunctionComponent = () => (
  <FmvBackground
    videoSource={Video}
    imageFallback={Fallback}
  >
    <PageContent flex centered>
      <img
        className={styles.smb2badge}
        src={SMB2Badge}
        alt="Super Mario Bros. 2 - Javascript Edition"
      />
      Currently in development.
      <br />
      In the meantime, checkout the <Link to="/smb">SMB1 prototype</Link>
    </PageContent>
    <Footer fixed />
  </FmvBackground>
);

export default Home;
