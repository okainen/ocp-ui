import React from 'react';
import {NavLink} from 'react-router-dom';
import {
  ROOT,
  SIGN_UP,
  SIGN_IN,
  SIGN_OUT,
  PROFILE,
  SETTINGS,
  MY_COURSES
} from '@/config/routes';
import SearchBar from './SearchBar';
import Dropdown from './Dropdown';
import classnames from 'classnames';
import styles from './Navbar.scss';

const Navbar: React.FC = () => {
  const isLoggedIn: boolean = true;
  const homeLinkClasses = classnames(styles.item, styles.homeLink);

  return (
    // <nav className={styles.navbar} {...props}>
    <nav className={styles.navbar}>
      <NavLink className={homeLinkClasses} to={ROOT}>
        Home
      </NavLink>
      <SearchBar className={styles.item} />
      {!isLoggedIn && (
        <div>
          <NavLink
            style={{marginRight: '10px'}}
            className={styles.item}
            to={SIGN_IN}
          >
            Sign In
          </NavLink>
          <NavLink className={styles.item} to={SIGN_UP}>
            Sign Up
          </NavLink>
        </div>
      )}
      {isLoggedIn && <Dropdown />}
    </nav>
  );
};

export default Navbar;
