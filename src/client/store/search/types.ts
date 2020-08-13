import keyMirror from '../../utils/keyMirror';

export default keyMirror([
  'SEARCH_RESET',
  'SEARCH_QUERY_CHANGE',
  'SEARCH_RESULTS_RECEIVED',
  'SEARCH_RESULTS_ERROR',
]);

// Interfaces
export interface SearchResultObject {
  label: string;
  [key:string]: string|number|boolean|undefined;
}

export interface SearchState {
  query: string;
  results: SearchResultObject[];
  error?: string|undefined;
}

export interface SearchAction {
  type: string;
  query?: string;
  results?: SearchResultObject[];
  error?: string;
}
