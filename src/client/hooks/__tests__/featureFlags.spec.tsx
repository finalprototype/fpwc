import React from 'react';
import qs from 'qs';
import { shallow } from 'enzyme';

import { useActiveFlags } from '../featureFlags';

let mockLocation = '/path';
let paramsObj: { [key: string]: string|number|boolean|undefined } = {};
const setUrlFlags = (enabled: boolean, ...flags: string[]): void => {
  const key = enabled ? 'ffe' : 'ffd';
  paramsObj[key] = flags.join(',');
};
const setLocationReturn = (): { [key: string]: string } => ({
  pathname: mockLocation,
  search: qs.stringify(paramsObj, {
    addQueryPrefix: true,
    format: 'RFC1738',
  }),
});

jest.mock('react-router-dom', () => ({
  // @ts-ignore
  ...jest.requireActual('react-router-dom'),
  useLocation: () => setLocationReturn(),
}));

describe('hooks/featureFlags', () => {
  interface HookWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    hook: () => string[];
  }
  // @ts-ignore
  const HookWrapper = ({ hook }: HookWrapperProps) => <div hook={hook()} />;
  const cleanUp = () => {
    global.window.config = {
      env: 'test',
      version: '0',
      assets_path: '',
      manifest: {},
      flags: [],
    } as Config;
    mockLocation = '/path';
    paramsObj = {
      adummy: true,
      zdummmy: false,
    };
  };

  beforeEach(cleanUp);
  afterEach(cleanUp);

  describe('useActiveFlags', () => {
    const mockInitialFlags = [
      'initial1',
      'initial.2',
      'initial-3',
      'initial_4',
      'initial 5',
    ];
    const mockUrlEnabledFlags = [
      'url1',
      'url.2',
      'url-3',
      'url_4',
      'url 5',
    ];
    const mockSharedFlags = [
      'shared1',
      'shared.2',
      'shared-3',
      'shared_4',
      'shared 5',
    ];

    it('returns empty flags', () => {
      const wrapper = shallow(
        <HookWrapper hook={() => useActiveFlags()} />
      );

      expect(wrapper.props().hook).toMatchSnapshot();
    });

    it('returns only initial flags', () => {
      global.window.config.flags = mockInitialFlags;

      const wrapper = shallow(
        <HookWrapper hook={() => useActiveFlags()} />
      );

      expect(wrapper.props().hook).toMatchSnapshot();
    });

    it('returns only url enabled flags', () => {
      setUrlFlags(
        true,
        ...mockUrlEnabledFlags
      );

      const wrapper = shallow(
        <HookWrapper hook={() => useActiveFlags()} />
      );

      expect(wrapper.props().hook).toMatchSnapshot();
    });

    it('returns unique initial and url enabled flags', () => {
      global.window.config.flags = mockInitialFlags.concat(mockSharedFlags);
      setUrlFlags(
        true,
        ...mockUrlEnabledFlags.concat(mockSharedFlags),
      );

      const wrapper = shallow(
        <HookWrapper hook={() => useActiveFlags()} />
      );

      expect(wrapper.props().hook).toMatchSnapshot();
    });

    it('returns without url disabled flags', () => {
      const disabledFlags = [
        'initial1',
        'shared.2',
        'url-3',
        'initial_4',
        'shared 5',
      ];

      global.window.config.flags = mockInitialFlags.concat(mockSharedFlags);
      setUrlFlags(
        true,
        ...mockUrlEnabledFlags.concat(mockSharedFlags),
      );
      setUrlFlags(
        false,
        ...disabledFlags,
      );

      const wrapper = shallow(
        <HookWrapper hook={() => useActiveFlags()} />
      );

      expect(wrapper.props().hook).toEqual(
        expect.not.arrayContaining(disabledFlags)
      );
      expect(wrapper.props().hook).toMatchSnapshot();
    });

    it('returns empty if all flags disabled', () => {
      global.window.config.flags = mockInitialFlags.concat(mockSharedFlags);
      setUrlFlags(
        true,
        ...mockUrlEnabledFlags.concat(mockSharedFlags),
      );
      setUrlFlags(
        false,
        ...mockInitialFlags,
        ...mockSharedFlags,
        ...mockUrlEnabledFlags,
      );

      const wrapper = shallow(
        <HookWrapper hook={() => useActiveFlags()} />
      );

      expect(wrapper.props().hook.length).toEqual(0);
      expect(wrapper.props().hook).toMatchSnapshot();
    });

    it('returns empty safely if only flags disabled', () => {
      setUrlFlags(
        false,
        ...mockInitialFlags,
        ...mockSharedFlags,
        ...mockUrlEnabledFlags,
      );

      const wrapper = shallow(
        <HookWrapper hook={() => useActiveFlags()} />
      );

      expect(wrapper.props().hook.length).toEqual(0);
      expect(wrapper.props().hook).toMatchSnapshot();
    });
  });
});
