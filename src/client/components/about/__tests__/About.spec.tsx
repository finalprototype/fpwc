import React from 'react';
import { shallow, mount } from 'enzyme';
import routeData from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import About from '../About';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

const mockLocation = {
  pathname: '/about',
  hash: '',
  search: '',
  state: '',
};

beforeEach(() => {
  jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation);
});

afterEach(() => {
  (routeData.useLocation as jest.Mock).mockRestore();
});

describe('About', () => {
  it('renders site content by default', () => {
    const wrapper = shallow(
      <About />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders me content', () => {
    (routeData.useLocation as jest.Mock).mockReturnValueOnce({
      ...mockLocation,
      pathname: '/about/me',
    });
    const wrapper = shallow(
      <About />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders site content', () => {
    (routeData.useLocation as jest.Mock).mockReturnValueOnce({
      ...mockLocation,
      pathname: '/about/site',
    });
    const wrapper = shallow(
      <About />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('dispatches background update', () => {
    expect(mockDispatch).toHaveBeenCalledTimes(0);
    mount(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: 'BACKGROUND_CHANGE',
      payload: {
        imageSource: 'mock-file',
        videoSource: 'mock-file',
      },
    });
  });
});
