import React from 'react';
import cx from 'classnames';

import styles from './__styles__/PageContent.scss';

interface Props {
  centered?: boolean;
  flex?: boolean;
  full?: boolean;
  children?: React.ReactNode;
  Sidebar?: React.ReactNode;
  className?: string;
}

const PageContent: React.FunctionComponent<Props> = (props: Props) => {
  const {
    centered,
    flex,
    full,
    children,
    Sidebar,
    className,
  } = props;

  const containerClasses = cx(
    styles.container,
    { [styles.flex]: flex },
    { [styles.centered]: centered },
    { [styles.full]: full },
    className,
  );

  const content = !Sidebar
    ? children
    : (
      <>
        <div styleName="sidebar">
          {Sidebar}
        </div>
        <div styleName="content">
          {children}
        </div>
      </>
    );

  return (
    <div className={containerClasses}>
      {content}
    </div>
  );
};

PageContent.defaultProps = {
  centered: false,
  flex: false,
  full: false,
  children: undefined,
  className: undefined,
  Sidebar: undefined,
};

export default PageContent;
