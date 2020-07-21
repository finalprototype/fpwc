import React, { useEffect, useState } from 'react';
import classnames from 'classnames';

import styles from './styles/Logo.scss';

interface Props {
  isRestarting?: boolean;
  className?: string;
}

const Logo: React.FunctionComponent<Props> = (props: Props) => {
  const [isRestarting, restartAnimState] = useState(props.isRestarting);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isRestarting) {
        restartAnimState(false);
      }
    }, 10);
    return () => clearTimeout(timer);
  }, [isRestarting]);

  const containerClasses = classnames(styles.container, props.className);
  const neonClasses = classnames(
    styles.forgroundline,
    { [styles.neon]: !isRestarting }
   );

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
      <button
        onClick={() => restartAnimState(true)}
        className={styles.secondary}
      >
        <div className={styles.backgroundline}>
          {scriptText}
        </div>
        <div className={neonClasses}>
          {scriptText}
        </div>
      </button>
    </div>
  );
};

export default Logo;
