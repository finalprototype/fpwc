import React from "react";

import Footer from '../ui/Footer';
import PageContent from '../ui/PageContent';
import FmvBackground from '../ui/FmvBackground';
import Video from '../../videos/drive.mp4';
import Fallback from '../../images/fallback-drive.jpg';

const Work: React.FunctionComponent = () => {
  return (
    <>
      <FmvBackground
        videoSource={Video}
        imageFallback={Fallback}
      />
      <PageContent flex centered>
        Work
      </PageContent>
      <Footer fixed />
    </>
  );
};

export default Work;
