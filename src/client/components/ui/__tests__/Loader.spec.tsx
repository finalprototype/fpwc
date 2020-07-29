import React from 'react';
import { shallow } from 'enzyme';

import Loader from '../Loader';

describe('Loader', () => {
  it('renders default props', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with custom props', () => {
    const wrapper = shallow(
      <Loader
        size={24}
        color="#336699"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
