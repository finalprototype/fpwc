import React from 'react';

import Footer from '../ui/Footer';
import PageContent from '../ui/PageContent';
import FmvBackground from '../ui/FmvBackground';
import Video from '../../videos/sea.mp4';
import Fallback from '../../images/bkgds/sea.jpg';

const About: React.FunctionComponent = () => (
  <FmvBackground
    videoSource={Video}
    imageFallback={Fallback}
  >
    <PageContent flex centered>
      - in development -
    </PageContent>
    <Footer fixed />
  </FmvBackground>
);

export default About;
