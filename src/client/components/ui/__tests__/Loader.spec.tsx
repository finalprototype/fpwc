import React, { CSSProperties } from 'react';
import { shallow } from 'enzyme';

import Loader from '../Loader';

describe('Loader', () => {
  it('renders default props', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with custom sizes', () => {
    const sizes = [16, 32, 64, 128, 192, 256];
    const wrapper = shallow(<Loader />);

    sizes.forEach((size) => {
      wrapper.setProps({ size });

      const sampleBorderWidth = (
        wrapper.find('.inner div').first().prop('style') as React.CSSProperties
      ).borderWidth;

      expect(sampleBorderWidth).toBeGreaterThanOrEqual(0.5);
      expect(sampleBorderWidth).toBeLessThanOrEqual(4);
      expect(wrapper).toMatchSnapshot(`${size}`);
    });
  });

  it('renders with custom color', () => {
    const wrapper = shallow(
      <Loader colors={['blue']} />
    );

    expect(wrapper).toMatchSnapshot('one color');

    wrapper.setProps({ colors: ['gray', 'black'] });
    expect(wrapper).toMatchSnapshot('two colors');

    wrapper.setProps({ colors: ['blue', 'gray', 'black'] });
    expect(wrapper).toMatchSnapshot('three colors');
  });

  it('renders inline', () => {
    const wrapper = shallow(
      <Loader inline />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with provided className', () => {
    const wrapper = shallow(
      <Loader className="test-1 test-2" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
