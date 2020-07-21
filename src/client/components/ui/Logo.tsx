import React from 'react';
import classnames from 'classnames';

import styles from './styles/Logo.scss';

interface Props {
  className?: string;
}

const Logo: React.FunctionComponent<Props> = (props: Props) => {
  const containerClasses = classnames(styles.container, props.className);
  const scriptText = (
    <>
      <span>W</span>
      <span>r</span>
      <span>i</span>
      <span>t</span>
      <span>e</span>
      <span>s</span>
      <span>&nbsp;</span>
      <span>C</span>
      <span>o</span>
      <span>d</span>
      <span>e</span>
    </>
  );

  return (
    <div className={containerClasses}>
      <div className={styles.primary}>
        fp
      </div>
      <div className={styles.secondary}>
        <div className={styles.backgroundline}>
          {scriptText}
        </div>
        <div className={styles.forgroundline}>
          {scriptText}
        </div>
      </div>
    </div>
  )
};

export default Logo;
