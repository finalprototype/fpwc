import React from 'react';

import { SearchResultObject } from '../../../store/search/types';

import './__styles__/Suggestions.scss';

interface Props {
  options: SearchResultObject[];
  onOptionClick: (result: SearchResultObject) => void;
}

const Suggestions: React.FunctionComponent<Props> = ({
  options,
  onOptionClick,
}: Props) => {
  const renderOptions = options.map((val) => (
    <li
      key={val.label}
      styleName="option"
    >
      <button
        type="button"
        onClick={() => onOptionClick(val)}
      >
        {val.label}
      </button>
    </li>
  ));

  return (
    <ul styleName="container">
      {renderOptions}
    </ul>
  );
};

export default Suggestions;
