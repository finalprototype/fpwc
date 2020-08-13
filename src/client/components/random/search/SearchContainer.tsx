import React, { createRef, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import { debounce } from 'lodash';

import { RootState } from '../../../store';
import { updateSearchQuery } from '../../../store/search/actions';
import { SearchResultObject, SearchState } from '../../../store/search/types';
import Suggestions from './Suggestions';

import styles from './__styles__/SearchContainer.scss';

interface Props {
  searchAction: (input: string) => void;
  searchOnType?: boolean;
  hideSuggestions?: boolean;
  className?: string;
}

const SearchContainer: React.FunctionComponent<Props> = ({
  searchAction,
  searchOnType = false,
  hideSuggestions = false,
  className = undefined,
}: Props) => {
  const {
    query,
    results,
    error,
  } = useSelector((state: RootState): SearchState => state.search);
  const dispatch = useDispatch();
  const inputRef = createRef<HTMLInputElement>();

  const debouncedSearchAction = useRef(
    debounce((q: string) => dispatch(searchAction(q)), 250)
  ).current;

  const renderError = Boolean(error) || null;
  const renderSuggestions = (Boolean(query) && !hideSuggestions) || null;

  const containerClasses = classnames(
    styles.container,
    className,
  );

  const handleInput = () => {
    const val = inputRef.current && inputRef.current.value;
    dispatch(updateSearchQuery(val || ''));
    if (searchOnType) {
      debouncedSearchAction(val || '');
    }
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  const handleSuggestionSelect = (result: SearchResultObject) => {
    // TEMP
    window.open(`https://en.wikipedia.org/wiki/?search=${result.label}`, '_blank');
  };

  return (
    <form
      className={containerClasses}
      onSubmit={handleSubmit}
    >
      <input
        placeholder="Search here!"
        ref={inputRef}
        onChange={handleInput}
      />
      {renderError && (
        <div style={{ color: 'red', fontWeight: 'bold' }}>
          {error}
        </div>
      )}
      {renderSuggestions && (
        <Suggestions
          options={results}
          onOptionClick={handleSuggestionSelect}
        />
      )}
    </form>
  );
};

export default SearchContainer;
