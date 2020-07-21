import React from "react";

import PageContent from '../ui/PageContent';
import FmvBackground from '../ui/FmvBackground';
import Video from '../../videos/smb1.mp4';
import Fallback from '../../images/fallback-smb1.jpg';

import styles from './styles/SMB.scss';

const SMB: React.FunctionComponent = () => {
  return (
    <>
      <FmvBackground
        videoSource={Video}
        imageFallback={Fallback}
      />
      <PageContent flex>
        <h1>Super Mario Bros</h1>
        <h3>JavaScript prototype, written using ImpactJS</h3>
        <div className={styles.description}>
          <p>In 2010, <a href="https://en.wikipedia.org/wiki/Thoughts_on_Flash" target="_blank">Steve Jobs wrote</a> what became the obituary for Flash applications on the web. My company at the time was heavily reliant on Flash for it's advertising and marketing initiatives and were pushing for more projects to be mobile first and iPad optimized. This piece of news, which solidified Flash never coming to iPhones or iPads, sent them into a panic on future development and ideation.</p>
          <p>At the time, I was their lead interactive developer (fancy talk for Flash developer). While I did my best to ease concerns, explaining Javascript was a capable, if only at the time immature, replacement for our flash projects, there was still a hefty amount of skepticism. So it was on me to show them what was possible. I decided to build something in JavaScript that a) everyone was familiar with so there was no confusion in the result, and b) was highly interactive to push the limits at the time. Super Mario Bros was the most obvious choice.</p>
          <p>This is that demo, and I must emphasis, this is not an emulation (no original ROM file or assets). It's purely JavaScript and PNG sprite files written at 30 frames-per-second to a HTML5 canvas element. It included the first two levels of the original game (minus secret areas and some entities, like the flag pole), along with a custom 3rd level to show some uniqueness.</p>
          <p>While the game still works, time has not been kind to it. Due to browser security updates over the years, background music no longer works (thanks, ads), but luckily all general sound effects still work. Additionally, browser runtimes have been better optimized for the canvas element, which in turn has skewed some of the expected gravity physics.</p>
        </div>
        <button id={styles.loadgame}>Start Game</button>
      </PageContent>
    </>
  );
};

export default SMB;
