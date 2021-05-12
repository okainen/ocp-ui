import React from 'react';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import styles from './LectureItem.scss';
import {BsPlay} from 'react-icons/bs';
import {State} from '@/redux/store';
import {Parents} from '@/enums';

type LectureItemProps = {
  lectureId: string;
  baseUrl: string;
  parent: Parents;
};

const LectureItem: React.FC<LectureItemProps> = ({
  lectureId,
  baseUrl,
  parent
}) => {
  const video = useSelector(
    (state: State) => state.entities.weekSteps.lectures.byId[lectureId]
  );
  return (
    <NavLink to={`${baseUrl}/lecture/${lectureId}`}>
      <div
        className={
          parent == Parents.WEEK_ITEM
            ? styles.weekStepItem
            : styles.sidebarWeekStepItem
        }
      >
        <BsPlay className={styles.icon} />
        <div className={styles.name}>
          <strong>Video: </strong>
          <span>{video.name}</span>
        </div>
        <div className={styles.effort}>13 min</div>
      </div>
    </NavLink>
  );
};

export default LectureItem;
