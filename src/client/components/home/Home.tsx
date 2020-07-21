import React from "react";

import PageContent from '../ui/PageContent';
import FmvBackground from '../ui/FmvBackground';
import SynthwaveVideo from '../../videos/synthwave.mp4';
import SynthwaveFallback from '../../images/fallback-synthwave.jpg';

const Home: React.FunctionComponent = () => {
  return (
    <>
      <FmvBackground
        videoSource={SynthwaveVideo}
        imageFallback={SynthwaveFallback}
      />
      <PageContent flex centered>
        - in development -
      </PageContent>
    </>
  );
};

export default Home;
