import React from 'react';
import classnames from 'classnames';

import { history } from '../app/AppHistory';
import { Props as NavItemProps } from './NavItem';
import styles from './__styles__/SideNav.scss';

interface Props {
  className?: string;
  children: React.ReactElement<NavItemProps>[];
}

const SideNav: React.FunctionComponent<Props> = ({
  children,
  className = undefined,
}: Props) => {
  const containerClasses = classnames(styles.container, className);
  const mobileClasses = classnames(styles.mobile, className);
  const onChangeHandler = (
    { target }: React.ChangeEvent<HTMLSelectElement>
  ): void => history.push(target.value);

  return (
    <>
      <div className={containerClasses}>
        {children}
      </div>
      <select
        className={mobileClasses}
        onChange={onChangeHandler}
      >
        {React.Children.map(
          children,
          (child: React.ReactElement<NavItemProps>) => {
            if (!child) {
              return child;
            }
            const { label, route, isActive } = child.props;
            return (
              <option value={route} selected={isActive}>
                {label}
              </option>
            );
          }
        )}
      </select>
    </>
  );
};

SideNav.defaultProps = {
  className: undefined,
};

export default SideNav;
