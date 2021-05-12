import React, {HTMLProps} from 'react';
import {NavLink} from 'react-router-dom';
import classnames from 'classnames';
import styles from './MenuItem.scss';

type ItemProps = {
  itemIdx: number;
  name: string;
  link: string;
  active: boolean;
  onClick: () => void;
};

const MenuItem: React.FC<ItemProps & HTMLProps<HTMLDivElement>> = ({
  itemIdx,
  name,
  link,
  active = false,
  ...props
}) => {
  const classes = classnames(
    {[props.className || '']: !!props.className},
    styles.menuItem,
    {[styles.active]: active}
  );
  return (
    // <div {...props} className={classes}>
    //   <NavLink to={link}>{name}</NavLink>
    // </div>
    <NavLink className={classes} to={link}>
      {name}
    </NavLink>
  );
};

export default MenuItem;
