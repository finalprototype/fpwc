import React from "react";
import cx from "classnames";

import styles from "./styles/PageContent.scss";

interface Props {
  flex?: boolean;
  centered?: boolean;
  children?: React.ReactNode;
  full?: boolean;
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

  return (
    <div className={containerClasses}>
      {props.children}
    </div>
  );
}

export default PageContent;
