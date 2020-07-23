import React from 'react';
import classnames from 'classnames';

import styles from './styles/SocialLink.scss';

interface Props {
  title: string;
  url?: string;
  onClick?: Function;
  children: any;
  className?: string;
}

const SocialLink: React.FunctionComponent<Props> = (props: Props) => {
  const {
    url = '#',
    onClick = () => {},
    title,
    children,
    className
  } = props;

  const containerClasses = classnames(
    styles.container,
    className
  );

  return (
    <a
      href={url || '#'}
      target={url ? '_blank' : ''}
      className={containerClasses}
    >
      {children}
    </a>
  );
};

export default SocialLink;
