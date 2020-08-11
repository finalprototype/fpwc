import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import Home from '../Home';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

describe('Home', () => {
  it('renders', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });

  it('dispatches background update', () => {
    expect(mockDispatch).toHaveBeenCalledTimes(0);
    mount(
      <BrowserRouter>
        <Home />
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
