import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { updateBackground } from '../../store/background/actions';
import Footer from '../ui/Footer';
import PageContent from '../ui/PageContent';
import SMB2Badge from '../../images/smb2je-logo-300.png';

import Video from '../../videos/min/smb2.mp4';
import Fallback from '../../images/bkgds/360/smb2-min.jpg';

import './__styles__/Home.scss';

const Home: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateBackground(
      Fallback,
      Video,
    ));
  }, [dispatch]);

  return (
    <>
      <PageContent flex centered>
        <img
          styleName="smb2badge"
          src={SMB2Badge}
          alt="Super Mario Bros. 2 - Javascript Edition"
        />
        Currently in development.
        <br />
        In the meantime, checkout the <Link to="/smb">SMB1 prototype</Link>
      </PageContent>
      <Footer fixed />
    </>
  );
};

export default Home;
