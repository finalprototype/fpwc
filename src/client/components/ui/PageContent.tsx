import React from "react";
import cx from "classnames";

import styles from "./styles/PageContent.scss";

interface Props {
  centered?: boolean;
  flex?: boolean;
  full?: boolean;
  children?: React.ReactNode;
  Sidebar?: React.ReactNode;
  className?: string;
}

const PageContent: React.FunctionComponent<Props> = (props: Props) => {
  const containerClasses = cx(
    styles.container,
    { [styles.flex]: props.flex },
    { [styles.centered]: props.centered },
    { [styles.full]: props.full },
    props.className,
  );

  const content = !props.Sidebar
    ? props.children
    : (<>
      <div className={styles.sidebar}>
        {props.Sidebar}
      </div>
      <div className={styles.content}>
        {props.children}
      </div>
    </>);

  return (
    <div className={containerClasses}>
      {content}
    </div>
  );
}

export default PageContent;
