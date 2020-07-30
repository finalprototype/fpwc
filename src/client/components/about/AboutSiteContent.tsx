import React from 'react';

const AboutSiteContent: React.FunctionComponent = () => {
  const header = (
    <header>
      <h1 id="overview">About This Site</h1>
    </header>
  );

  const overview = (
    <section>
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
        becoming it&apos;s replacement. In the end, it&apos;s built in many of
        the same ways I would build and deploy professionally.
      </p>
    </section>
  );

  const details = (
    <section>
      <h2 id="details">Details</h2>
      <p>
        The client is TypeScript/React/SASS, bundled with Webpack. Dependencies
        are separated into a vendor bundle that allows for a longer term cache.
      </p>
      <p>
        [TBD]
      </p>
    </section>
  );

  const source = (
    <section>
      <h2 id="details">Source</h2>
      <p>
        [TBD]
      </p>
    </section>
  );

  return (
    <article>
      {header}
      {overview}
      {details}
      {source}
    </article>
  );
};

export default AboutSiteContent;
