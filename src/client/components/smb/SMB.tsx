import React, { useEffect, useState } from "react";

import Button from '../ui/Button';
import PageContent from '../ui/PageContent';
import FmvBackground from '../ui/FmvBackground';
import Video from '../../videos/smb1.mp4';
import Fallback from '../../images/fallback-smb1-min.jpg';

import styles from './styles/SMB.scss';

interface Props {
  gameInit?: boolean;
}

const SMB: React.FunctionComponent<Props> = (props: Props) => {
  const [gameInit, setGameInit] = useState(props.gameInit || false);

  const cleanup = () => {
    if (window.ig) {
      window.ig.system.stopRunLoop();
      window.ig.music.stop();
      window.ig.soundManager.audioContext.close();
    }
  }

  useEffect(() => {
    if (!gameInit) {
      return;
    }
    if (window.ig) {
      window.ig.main('#canvas', window.GameTitle, 30, 400, 240, 2);
    } else {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://dxcrey4r28b1w.cloudfront.net/smb1/js/mario.min.js';
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }
    return () => cleanup();
  }, [gameInit]);

  return (
    <>
      <FmvBackground
        videoSource={Video}
        imageFallback={Fallback}
      />
      <PageContent flex centered={gameInit} full={gameInit}>
        {gameInit && (
          <canvas id="canvas" className={styles.smbcanvas}></canvas>
        )}
        {!gameInit && (
          <>
            <div className={styles.header}>
              <div className={styles.title}>
                SUPER MARIO BROS.
              </div>
              <div className={styles.subtitle}>
                A JavaScript prototype
              </div>
            </div>
            <div className={styles.description}>
              <p>In 2010, <a href="https://en.wikipedia.org/wiki/Thoughts_on_Flash" target="_blank">Steve Jobs wrote</a> what became the obituary for Flash applications on the web. My company at the time was heavily reliant on Flash for it's advertising and marketing initiatives and were pushing for more projects to be mobile first and iPad optimized. This piece of news, which solidified Flash never coming to iPhones or iPads, sent them into a panic on future development and ideation.</p>
              <p>At the time, I was their lead interactive developer (fancy talk for Flash developer). While I did my best to ease concerns, explaining Javascript was a capable, if only at the time immature, replacement for our flash projects, there was still a hefty amount of skepticism. So it was on me to show them what was possible. I decided to build something in JavaScript that a) everyone was familiar with so there was no confusion in the result, and b) was highly interactive to push the limits at the time. Super Mario Bros was the most obvious choice.</p>
              <p>This is that demo, and I must emphasis, this is not an emulation (no original ROM file or assets). It's purely JavaScript and PNG sprite files written at 30 frames-per-second to a HTML5 canvas element. It included the first two levels of the original game (minus secret areas and some entities, like the flag pole), along with a custom 3rd level to show some uniqueness. A keyboard is required, as it does not have touch controls implemented (although it will load/run in mobile browsers without issue).</p>
              <p>Since the prototype was built, browser runtimes have been better optimized for the canvas element. The game looks and runs even smoother than it originally did, but the grass is not all green still. The expected gravity physics have become skewed due to the speed increase, as has webAudio (slightly higher pitched now). Some collision is also behaving oddly. In all, be kind. It's old.</p>
            </div>
            <Button
              color="blue"
              size="large"
              type="neon"
              className={styles.loadgame}
              onClick={() => setGameInit(true)}
            >
              Start Game
            </Button>
          </>
        )}
      </PageContent>
    </>
  );
};

export default SMB;
