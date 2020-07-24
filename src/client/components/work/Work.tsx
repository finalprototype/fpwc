import React from "react";

import Footer from '../ui/Footer';
import PageContent from '../ui/PageContent';
import FmvBackground from '../ui/FmvBackground';
import Video from '../../videos/synthwave.mp4';
import Fallback from '../../images/fallback-synthwave-min.jpg';

const Work: React.FunctionComponent = () => {
  return (
    <>
      <FmvBackground
        videoSource={Video}
        imageFallback={Fallback}
      />
      <PageContent flex centered>
        - in development -
      </PageContent>
      <Footer fixed />
    </>
  );
};

export default Work;
