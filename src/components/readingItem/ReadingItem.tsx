import React from 'react';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import styles from './ReadingItem.scss';
import {BsBook} from 'react-icons/bs';
import {State} from '@/redux/store';
import {Parents} from '@/enums';

type ReadingItemProps = {
  readingId: string;
  baseUrl: string;
  parent: Parents;
};

const ReadingItem: React.FC<ReadingItemProps> = ({
  readingId,
  baseUrl,
  parent
}) => {
  const reading = useSelector(
    (state: State) => state.entities.weekSteps.readings.byId[readingId]
  );
  return (
    <NavLink to={`${baseUrl}/reading/${readingId}`}>
      <div
        className={
          parent == Parents.WEEK_ITEM
            ? styles.weekStepItem
            : styles.sidebarWeekStepItem
        }
      >
        <BsBook className={styles.icon} />
        <div className={styles.name}>
          <strong>Reading: </strong>
          <span>{reading.name}</span>
        </div>
        <div className={styles.effort}>1 min</div>
      </div>
    </NavLink>
  );
};

export default ReadingItem;
