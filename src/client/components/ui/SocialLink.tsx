import React from 'react';
import classnames from 'classnames';

import styles from './styles/SocialLink.scss';

interface Props {
  title: string;
  url?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const SocialLink: React.FunctionComponent<Props> = (props: Props) => {
  const {
    url,
    onClick,
    title,
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
      alt={title}
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
