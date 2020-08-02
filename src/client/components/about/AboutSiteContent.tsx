import React from 'react';

import Button from '../ui/Button';

import styles from './styles/About.scss';

const AboutSiteContent: React.FunctionComponent = () => {
  const header = (
    <header className={styles.header}>
      <h1 id="overview">About This Site</h1>
    </header>
  );

  const overview = (
    <section className={styles.overview}>
      <p>
        In March 2020, the company I helped grow over the last 5+ years, Managed
        by Q, ended with a competitor buyout. Five years is a long time at a
        startup. With the rapid change through each series also came a good
        amount of burn out. I decided it was time for a break; To Unwind,
        reflect, and get that passion back. Five months of pandemic isolation
        later, the spark started to flicker again.
      </p>
      <p>
        This site started as a practice testbed to build an app from scratch,
        and shake out the cobwebs from a long hiatus. Very quickly, deployment
        and best practices became the goal, with advanced server needs. I
        already had a portfolio site with simple hosting. That site and it&apos;s
        infrastructure quickly became obsolete, with this testbed and AWS
        becoming it&apos;s replacement.
      </p>
    </section>
  );

  const details = (
    <section className={styles.details}>
      <h2 id="details">Details</h2>
      <p>
        The site is built more as a web application. The client experience is
        compiled and stored in AWS S3, while a backend-for-frontend node server
        (BFF) provides template rendering and API access. Below are some
        additional details on the stack and infrastructure involved.
      </p>
      <ul>
        <li>
          <h4>Client Language/Framework</h4>
          React, TypeScript, SASS
        </li>
        <li>
          <h4>Client Compilation</h4>
          Webpack, Multi bundle with manifest
        </li>
        <li>
          <h4>BFF Language</h4>
          Node, JavaScript, EJS
        </li>
        <li>
          <h4>Code Sanity</h4>
          TypeScript validation, ESLint on Airbnb recommended configuration.<br />
          Run in wepack-dev-server and in pull requests via Github Actions
        </li>
        <li>
          <h4>Testing</h4>
          Jest/Enzyme with snapshots
        </li>
        <li>
          <h4>Local Environment</h4>
          Docker on Node LTS 12.x
        </li>
        <li>
          <h4>Client Deployment</h4>
          AWS S3 on webpack production build. Served gzipped on an SSL
          Cloudfront layer with an open CORs policy
        </li>
        <li>
          <h4>BFF Deployment</h4>
          AWS Elastic Beanstalk managed, on a t2.micro EC2 instance with load balancing
        </li>
      </ul>
    </section>
  );

  const source = (
    <section className={styles.source}>
      <h2 id="source">Source</h2>
      <p>
        In an effort in transparency and to showcase a baseline of my
        capabilities, I&apos;ve decided to open source the site. While only invited
        collaborators may update and deploy the repo, anyone is welcome to
        peruse, clone, or fork the code.
      </p>
      <div style={{ textAlign: 'center' }}>
        <Button
          type="neon"
          color="purple"
          onClick={() => window.open('https://github.com/finalprototype/fpwc', '_blank')}
        >
          Github: FPWC
        </Button>
      </div>
      <p>
        In addition to the site, the original Super Mario prototype repo has
        been opened up as well. The code is old, and the framework used is
        obsolete, but it may be of some help to someone. Maybe?
      </p>
      <div style={{ textAlign: 'center' }}>
        <Button
          type="neon"
          color="purple"
          onClick={() => window.open('https://github.com/finalprototype/impact-mario', '_blank')}
        >
          Github: Mario
        </Button>
      </div>
    </section>
  );

  return (
    <article className={styles['about-site']}>
      {header}
      {overview}
      {details}
      {source}
    </article>
  );
};

export default AboutSiteContent;
