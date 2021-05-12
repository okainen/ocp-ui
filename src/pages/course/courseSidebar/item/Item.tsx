import React, {HTMLProps, useState} from 'react';
import {NavLink} from 'react-router-dom';
import MenuItem from '../menuItem';
import classnames from 'classnames';
import styles from './Item.scss';
import {BsChevronDown} from 'react-icons/bs';

export type ItemProps = {
  itemIdx: number;
  name: string;
  link: string;
  // active: number;
  active: boolean;
  menuItemsData: {name: string; link: string}[];
  onMenuItemClick: (activeMenuItem: number) => void;
  activeMenuItem: number;
};

export const Item: React.FC<ItemProps & HTMLProps<HTMLDivElement>> = ({
  itemIdx,
  name,
  link,
  active = false,
  menuItemsData,
  onMenuItemClick,
  activeMenuItem = -1,
  ...props
}) => {
  const rootClasses = classnames(
    {[props.className || '']: !!props.className},
    styles.item
  );
  const nameClasses = classnames(styles.name, {[styles.active]: active});
  return (
    <div {...props} className={rootClasses}>
      <NavLink to={link} className={nameClasses}>
        <span>{name}</span>
        {active && <BsChevronDown className={styles.icon} />}
      </NavLink>
      {active && (
        <div className={styles.menu}>
          {menuItemsData.map((menuItem, i) => {
            return (
              <MenuItem
                className={styles.menuItem}
                itemIdx={i}
                name={menuItem.name}
                link={menuItem.link}
                onClick={() => {
                  onMenuItemClick(i);
                }}
                active={activeMenuItem == i}
                key={i.toString()}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

// export default Item;
