import React from 'react';
import { useLocation } from 'react-router-dom';

import SideNav from '../ui/SideNav';
import NavItem from '../ui/NavItem';
import Footer from '../ui/Footer';
import PageContent from '../ui/PageContent';
import FmvBackground from '../ui/FmvBackground';
import AboutMeContent from './AboutMeContent';
import AboutSiteContent from './AboutSiteContent';
import Video from '../../videos/sea.mp4';
import Fallback from '!url-loader!../../images/bkgds/360/sea-min.jpg';

import styles from './styles/About.scss';

const getAboutContent = (route: string): React.FunctionComponent => {
  switch (route) {
    case '/about/me':
      return AboutMeContent;
    case '/about/site':
      return AboutSiteContent;
    default:
      return AboutMeContent;
  }
};

const About: React.FunctionComponent = () => {
  const location = useLocation();
  const sidebar = (
    <SideNav>
      <NavItem
        type="right"
        label="About The Site"
        route="/about/site"
        isActive={location.pathname.includes('/about/site')}
        block
      />
      <NavItem
        type="right"
        label="About Me"
        route="/about/me"
        isActive={location.pathname.includes('/about/me')}
        block
      />
    </SideNav>
  );

  const Content: React.FunctionComponent = getAboutContent(location.pathname);

  return (
    <FmvBackground
      videoSource={Video}
      imageFallback={Fallback}
    >
      <PageContent
        Sidebar={sidebar}
        className={styles.content}
        flex
      >
        <Content />
      </PageContent>
      <Footer fixed />
    </FmvBackground>
  );
};

export default About;
