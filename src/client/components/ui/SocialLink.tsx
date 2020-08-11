import React from 'react';
import classnames from 'classnames';

import styles from './__styles__/SocialLink.scss';

interface Props {
  url?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const SocialLink: React.FunctionComponent<Props> = (props: Props) => {
  const {
    url,
    onClick,
    children,
    className,
  } = props;

  const containerClasses = classnames(
    styles.container,
    className,
  );

  return (
    <a
      href={url || '#'}
      target={url ? '_blank' : ''}
      onClick={onClick}
      className={containerClasses}
    >
      {children}
    </a>
  );
};

SocialLink.defaultProps = {
  url: '#',
  className: undefined,
  onClick: () => {},
};

export default SocialLink;
