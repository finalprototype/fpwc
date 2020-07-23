import React from 'react';
import classnames from 'classnames';

import SocialLink from './SocialLink';
import IconLinkedin from '../../images/social/svg/linkedin.svg';
import IconGithub from '../../images/social/svg/github.svg';
import IconTwitter from '../../images/social/svg/twitter.svg';
import IconInstagram from '../../images/social/svg/instagram.svg';
import IconTwitch from '../../images/social/svg/twitch.svg';
import IconEmail from '../../images/social/svg/email.svg';

import styles from './styles/Footer.scss';

interface Props {
  fixed?: boolean;
  className?: string;
}

const Footer: React.FunctionComponent<Props> = (props: Props) => {
  const containerClasses = classnames(
    styles.container,
    { [styles.fixed]: props.fixed },
    props.className
  );
  return (
    <div className={containerClasses}>
      <SocialLink
        url="https://www.linkedin.com/in/nickwritescode/"
        title="Linkedin"
      >
        <IconLinkedin />
      </SocialLink>
      <SocialLink
        url="https://github.com/finalprototype"
        title="Github"
      >
        <IconGithub />
      </SocialLink>
      <SocialLink
        url="https://twitter.com/finalprototype"
        title="Twitter"
      >
        <IconTwitter />
      </SocialLink>
      <SocialLink
        url="https://www.instagram.com/fp___x/"
        title="Instagram"
      >
        <IconInstagram />
      </SocialLink>
      <SocialLink
        url="mailto:fpwritescode@gmail.com"
        title="Email"
      >
        <IconEmail />
      </SocialLink>
    </div>
  );
};

export default Footer;
