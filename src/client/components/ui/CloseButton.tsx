import React from 'react';
import classnames from 'classnames';

import styles from './__styles__/CloseButton.scss';

interface Props {
  onClick: () => void;
  className?: string;
}

const CloseButton: React.FunctionComponent<Props> = (props: Props) => {
  const { className, onClick } = props;
  const containerClasses = classnames(
    styles.container,
    className,
  );

  return (
    <button
      className={containerClasses}
      onClick={onClick}
      type="button"
    >
      <span styleName="outer">
        <span styleName="inner" />
      </span>
    </button>
  );
};

CloseButton.defaultProps = {
  className: undefined,
};

export default CloseButton;
