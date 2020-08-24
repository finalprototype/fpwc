import React, { useEffect, useState } from 'react';
import classnames from 'classnames';

import styles from './__styles__/Logo.scss';

interface Props {
  className?: string;
}

const Logo: React.FunctionComponent<Props> = (props: Props) => {
  const { className } = props;
  const [isRestarting, restartAnimState] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isRestarting) {
        restartAnimState(false);
      }
    }, 10);
    return () => clearTimeout(timer);
  }, [isRestarting]);

  const containerClasses = classnames(styles.container, className);
  const neonClasses = classnames(
    styles.forgroundline,
    { [styles.neon]: !isRestarting },
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
      <div styleName="primary">
        fp
      </div>
      <button
        onClick={() => restartAnimState(true)}
        styleName="secondary"
        type="button"
      >
        <div styleName="backgroundline">
          {scriptText}
        </div>
        <div className={neonClasses}>
          {scriptText}
        </div>
      </button>
    </div>
  );
};

Logo.defaultProps = {
  className: undefined,
};

export default Logo;
