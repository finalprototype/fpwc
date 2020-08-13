import Types, {
  SearchState,
  SearchAction,
} from './types';

export const getInitialState = (): SearchState => ({
  query: '',
  results: [],
  error: undefined,
});

export const SearchReducer = (
  state: SearchState = getInitialState(),
  action: Partial<SearchAction>,
): SearchState => {
  switch (action.type) {
    case Types.SEARCH_QUERY_CHANGE:
      return {
        ...state,
        query: action.query || '',
      };

    case Types.SEARCH_RESULTS_RECEIVED:
      return {
        ...state,
        results: action.results || [],
        error: undefined,
      };

    case Types.SEARCH_RESULTS_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case Types.SEARCH_RESET:
      return getInitialState();

    default:
      return state;
  }
};

export default SearchReducer;
