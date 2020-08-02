import qs from 'qs';
import { useLocation } from 'react-router-dom';
import { uniq, difference } from 'lodash';

export const useActiveFlags = (): string[] => {
  const initialflags = window.config.flags;
  const { search } = useLocation();
  const {
    ffe = '',
    ffd = '',
  } = qs.parse(search, {
    ignoreQueryPrefix: true,
  });

  const urlFlagsEnabled = ffe.length
    ? (ffe as string).split(',')
    : [];
  const urlFlagsDisabled = ffd && ffd.length
    ? (ffd as string).split(',')
    : [];

  const updatedFlags = difference(
    uniq(initialflags.concat(urlFlagsEnabled)),
    urlFlagsDisabled
  );

  return updatedFlags;
};
