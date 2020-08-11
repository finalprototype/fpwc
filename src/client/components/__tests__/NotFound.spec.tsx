import React from 'react';
import { shallow, mount } from 'enzyme';

import NotFound from '../NotFound';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

describe('NotFound', () => {
  it('renders', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
  });

  it('dispatches background update', () => {
    expect(mockDispatch).toHaveBeenCalledTimes(0);
    mount(
      <NotFound />
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
