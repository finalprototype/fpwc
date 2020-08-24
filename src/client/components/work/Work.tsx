import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { updateBackground } from '../../store/background/actions';
import { searchLanguages } from '../../store/search/actions';
import SearchContainer from '../random/search/SearchContainer';
import Footer from '../ui/Footer';
import PageContent from '../ui/PageContent';

import Video from '../../videos/min/synthwave.mp4';
import Fallback from '../../images/bkgds/360/synthwave-min.jpg';

const Work: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateBackground(
      Fallback,
      Video,
    ));
  }, [dispatch]);

  return (
    <>
      <PageContent flex>
        <div>
          <SearchContainer
            searchAction={searchLanguages}
            searchOnType
          />
        </div>
      </PageContent>
      <Footer fixed />
    </>
  );
};

export default Work;
