import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {
  // ROOT,
  // SIGN_UP,
  // SIGN_IN,
  SIGN_OUT,
  PROFILE,
  SETTINGS,
  MY_COURSES
} from '@/config/routes';
import classnames from 'classnames';
import styles from './Dropdown.scss';
import {BsPeopleCircle} from 'react-icons/bs';

type DropdownProps = {};

const Dropdown: React.FC<DropdownProps & React.HTMLProps<HTMLDivElement>> = ({
  ...props
}) => {
  const [active, setActive] = useState(false);
  const classes = classnames(
    {[props.className || '']: !!props.className},
    styles.dropdown,
    {[styles.active]: active}
  );

  return (
    <div
      {...props}
      className={classes}
      onClick={() => setActive((prevState: boolean) => !prevState)}
    >
      {/* <div className={styles.button}> */}
      {/* <span>User Name</span> */}
      {/* <span className={styles.icon}> */}
      {/* <BsPeopleCircle className={styles.icon} /> */}
      {/* </span> */}
      {/* </div> */}
      <div className={styles.button}>
        <div className={styles.username}>Username</div>
        <div className={styles.email}>user_name@email.com</div>
        <BsPeopleCircle className={styles.icon} />
      </div>
      {/* {active && ( */}
      <div className={styles.content}>
        <NavLink to={MY_COURSES} className={styles.item}>
          My Courses
        </NavLink>
        <NavLink to={PROFILE} className={styles.item}>
          Profile
        </NavLink>
        <NavLink to={SETTINGS} className={styles.item}>
          Settings
        </NavLink>
        <NavLink to={SIGN_OUT} className={styles.item}>
          Sign Out
        </NavLink>
      </div>
      {/* )} */}
    </div>
  );
};

export default Dropdown;
