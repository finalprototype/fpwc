import React from 'react';
import classnames from 'classnames';

import styles from './styles/Logo.scss';

interface Props {
  className?: string;
}

const Logo: React.FunctionComponent<Props> = (props: Props) => {
  const containerClasses = classnames(styles.container, props.className);
  return (
    <div className={containerClasses}>
      <div className={styles.primary}>
        fp
      </div>
      <div className={styles.secondary}>
        <div className="line1">
          <span className="letter">W</span>
          <span className="letter">r</span>
          <span className="letter">i</span>
          <span className="letter">t</span>
          <span className="letter">e</span>
          <span className="letter">s</span>
          <span className="letter">&nbsp;</span>
          <span className="letter">C</span>
          <span className="letter">o</span>
          <span className="letter">d</span>
          <span className="letter">e</span>
        </div>
      </div>
    </div>
  )
};

export default Logo;
