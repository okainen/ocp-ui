import React from 'react';
import {useHistory} from 'react-router';
import {SEARCH} from '@/config/routes';
import TextField from '@/components/textField';
import classnames from 'classnames';
import styles from './SearchBar.scss';
import {BsSearch} from 'react-icons/bs';

type SearchBarProps = {};

const SearchBar: React.FC<
  SearchBarProps & React.HTMLProps<HTMLDivElement>
> = ({className, ...props}) => {
  const classes = classnames({[className || '']: !!className}, styles.searchBar);

  const history = useHistory();

  const onSearchClick = () => {
    history.push(SEARCH);
  };

  return (
    <span {...props} className={classes}>
      {/* <span></span> */}
      <TextField />
      <BsSearch className={styles.icon} onClick={onSearchClick} />
    </span>
  );
};

export default SearchBar;
