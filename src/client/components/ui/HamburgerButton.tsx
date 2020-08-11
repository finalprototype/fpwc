import React from 'react';
import classnames from 'classnames';

import styles from './__styles__/HamburgerButton.scss';

interface Props {
  active: boolean;
  onClick: () => void;
  className?: string;
}

const HamburgerButton: React.FunctionComponent<Props> = (props: Props) => {
  const { active, className, onClick } = props;
  const containerClasses = classnames(
    styles.container,
    { [styles.active]: active },
    className,
  );

  return (
    <button
      className={containerClasses}
      onClick={onClick}
      type="button"
    >
      <span className={styles.outer}>
        <span className={styles.inner} />
      </span>
    </button>
  );
};

HamburgerButton.defaultProps = {
  className: undefined,
};

export default HamburgerButton;
