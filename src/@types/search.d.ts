export interface SearchResultObject {
  [key:string]: string|number|boolean
}

export interface SearchReducerState {
  currentInput: string;
  results: SearchResultObject[] | string[];
  error?: string|undefined;
}

export interface SearchReducerAction {
  type: string;
  input?: string;
  results?: SearchResultObject[] | string[];
  error?: string;
}
