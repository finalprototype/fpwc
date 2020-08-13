import fetch from 'cross-fetch';
import qs from 'qs';

import { AppDispatch } from '..';
import Types, {
  SearchAction,
  SearchResultObject,
} from './types';

export const updateSearchQuery = (query: string): SearchAction => ({
  type: Types.SEARCH_QUERY_CHANGE,
  query,
});

export const setSearchResults = (results: SearchResultObject[]): SearchAction => ({
  type: Types.SEARCH_RESULTS_RECEIVED,
  results,
});

export const setSearchError = (error: string): SearchAction => ({
  type: Types.SEARCH_RESULTS_ERROR,
  error,
});

export const resetSearch = (): SearchAction => ({
  type: Types.SEARCH_RESET,
});

export const searchLanguages = (query: string) => (dispatch: AppDispatch): void => {
  const params = qs.stringify({ q: query }, { addQueryPrefix: true });
  fetch(`/api/search-languages${params}`)
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      dispatch(setSearchResults(data));
    })
    .catch((error) => {
      dispatch(setSearchError(error.message));
    });
};
