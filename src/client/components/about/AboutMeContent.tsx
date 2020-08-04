import React from 'react';

import { useModal } from '../../hooks/Modals';
import Button from '../ui/Button';

import Face from '../../images/face_256.png';

import styles from './styles/About.scss';

const AboutMeContent: React.FunctionComponent = () => {
  const { showModal } = useModal();

  const header = (
    <header className={styles.header}>
      <h1 id="overview">About Me</h1>
    </header>
  );

  const overview = (
    <section className={styles.overview}>
      <img
        src={Face}
        className={styles.face}
        alt=""
      />
      <p>
        My name is Nick (&quot;fp&quot;). I live in Williamsburg, Brooklyn and have
        a cat named Sephiroth.
      </p>
      <p>
        Hello <span role="img" aria-labelledby="wave">👋</span>
      </p>
    </section>
  );

  const professional = (
    <section className={styles.professional}>
      <h2 id="professional">Professionally</h2>
      <p>
        I&apos;m a web applications software architect and engineer. With over 15
        years experience, I&apos;ve had the pleasure of working in a wide array of
        industries, from e-commerce and marketing to publishing and workplace
        management.
      </p>
      <p>
        I primarily develop in JavaScript/Node, with additional proficiencies in
        AWS dev ops, and Python. While I&apos;m a capable full-stack engineer, my
        expertise is in front-end development with an emphasis on user
        experience and optimization. The architecture and scaling of an
        application or feature set is also a major focus; Providing a
        maintainable and extendable layer for teams to build on top of, with
        responsible code practices, is something I&apos;ve been passionate about.
      </p>
      <p>
        My journey through code has been a self-taught one. Learning and
        applying new frameworks and patterns as the needs arise has helped
        cultivate an adaptable attitude towards growth and change. Considering
        the rapid pace JavaScript has experienced in the last 10 years alone,
        being malleable to experiment with change has been an important factor.
        While it hasn&apos;t always been an easy path, it&apos;s definitely been a
        gratifying one. To see developed code come alive and not only be used,
        but be useful, is a driving force behind wanting to learn more and
        consistently grow.
      </p>
    </section>
  );

  const nintendoModalContent = (
    <h1 className={styles.nintendo}>
      Nintendo Switch Friend Code
      <br />
      <code className={styles.friendcode}>
        SW-1797-4236-4401
      </code>
    </h1>
  );

  const personal = (
    <section className={styles.personal}>
      <h2 id="personal">Personally</h2>
      <p>
        I like to grill steaks and peaches.<br />
        I love scotch and japanese whiskey.<br />
        I sometimes stream video games and lo-fi music on Twitch.<br />
        I used to shoot street and fashion photography.<br />
        I&apos;m a bit of an introvert.
      </p>
      <p>
        There&apos;s a ton of stuff I could just list off. Instead, let&apos;s focus
        on the two main passions I have.
      </p>
      <section className={styles.games}>
        <h3>Video Games</h3>
        <p>
          I play a lot of video games. Seriously.
        </p>
        <p>
          Much of the inspiration that got me into code is due to video games.
          Thanks to my Mom and her love for Ms. Pac-Man, my first system was a
          relatively new Atari 7800. Back then, games were low fidelity and
          generally difficult to control. I liked games, but they didn&apos;t
          attract me immediately. That is, until the first time I saw Super Mario
          Bros at my neighbor&apos;s house.
        </p>
        <p>
          Since then, gaming has been a primary point in every facet of my life;
          An avenue for inspiration in development, an escape when the world just
          doesn&apos;t make sense, or a social connection to creative people. I
          make an effort to own every system and experience every game, although I
          gravitate towards PC mostly.
        </p>
        <div className={styles['game-links']}>
          <Button
            type="neon"
            color="purple"
            onClick={() => window.open(
              'https://steamcommunity.com/id/finalprototype',
              '_blank'
            )}
          >
            Steam
          </Button>
          <Button
            type="neon"
            color="purple"
            onClick={() => window.open(
              'https://my.playstation.com/profile/finalprototype__',
              '_blank'
            )}
          >
            PlayStation
          </Button>
          <Button
            type="neon"
            color="purple"
            onClick={() => window.open(
              'https://account.xbox.com/en-us/profile?gamertag=fp9956',
              '_blank'
            )}
          >
            Xbox
          </Button>
          <br />
          <Button
            type="neon"
            color="blue"
            onClick={() => showModal(nintendoModalContent)}
          >
            Nintendo
          </Button>
        </div>
      </section>
      <section>
        <h3>Travel</h3>
        <p>
          As I&apos;ve progressed in my career, I&apos;ve begun to travel a lot
          more and take some healthy breaks away from code. While I&apos;ve been
          fortunate to see a lot of the world, and still have a few places to
          knock off the bucket list, Japan is a rare, beautiful place I keep going
          back to.
        </p>
        <p>
          It&apos;s become a habit to travel to Japan annually, attempting to
          explore every region and see every festival (for some reason, typhoons
          have prevented me from experiencing the fall properly). It&apos;s a
          difficult place to define in only a few words. I&apos;ll just say,
          it&apos;s a culture of comfort and consideration for one&apos;s neighbor
          that I&apos;ve never experienced anywhere else.
        </p>
      </section>
    </section>
  );

  return (
    <article>
      {header}
      {overview}
      {professional}
      {personal}
    </article>
  );
};

export default AboutMeContent;
