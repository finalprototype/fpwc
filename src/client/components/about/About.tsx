import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { updateBackground } from '../../actions/background';
import SideNav from '../ui/SideNav';
import NavItem from '../ui/NavItem';
import Footer from '../ui/Footer';
import PageContent from '../ui/PageContent';
import AboutMeContent from './AboutMeContent';
import AboutSiteContent from './AboutSiteContent';

import Video from '../../videos/min/sea.mp4';
import Fallback from '../../images/bkgds/360/sea-min.jpg';

import styles from './__styles__/About.scss';

const getAboutContent = (route: string): React.FunctionComponent => {
  switch (route) {
    case '/about/me':
      return AboutMeContent;
    case '/about/site':
      return AboutSiteContent;
    default:
      return AboutSiteContent;
  }
};

const About: React.FunctionComponent = () => {
  const location = useLocation();
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(updateBackground(
      Fallback,
      Video,
    ));
  }, [dispatch]);

  return (
    <>
      <PageContent
        Sidebar={sidebar}
        className={styles.content}
        flex
      >
        <Content />
      </PageContent>
      <Footer fixed />
    </>
  );
};

export default About;
