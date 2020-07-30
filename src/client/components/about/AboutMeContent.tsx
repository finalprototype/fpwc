import React from 'react';

const AboutMeContent: React.FunctionComponent = () => {
  const header = (
    <header>
      <h1 id="overview">About Me</h1>
    </header>
  );

  const overview = (
    <section>
      <p>
        My name is Nick (&quot;fp&quot;).
        <br />
        Hello 👋
      </p>
    </section>
  );

  const professional = (
    <section>
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
        cultivate an adapable attitude towards growth and change. Considering
        the rapid pace JavaScript has experienced in the last 10 years alone,
        being malleable to experiment with change has been an important factor.
        While it hasn&apos;t always been an easy path, it&apos;s definitely been a
        gratifying one. To see developed code come alive and not only be used,
        but be useful, is a driving force behind wanting to learn more and
        consistently grow.
      </p>
    </section>
  );

  const personal = (
    <section>
      <h2 id="personal">Personally</h2>
      <p>
        [TBD]
      </p>
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
