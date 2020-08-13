import React from 'react';

import { SearchResultObject } from '../../../store/search/types';

import styles from './__styles__/Suggestions.scss';

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
      className={styles.option}
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
    <ul className={styles.container}>
      {renderOptions}
    </ul>
  );
};

export default Suggestions;
