import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {itemSetActive, menuItemSetActive} from '@/redux/ui/courseSidebar/slice';
import MenuItem from './menuItem';
import {Item, ItemProps} from './item';
import styles from './CourseSidebar.scss';
import _ from 'lodash';
import {State} from '@/redux/store';
import {stepRoute} from '@/helpers/routes';

type CourseSidebarProps = {
  baseUrl: string;
  courseId: string;
};

const CourseSidebar: React.FC<CourseSidebarProps> = ({baseUrl, courseId}) => {
  const {activeItem, activeMenuItem} = useSelector(
    (state: State) => state.ui.courseSidebar
  );
  const nWeeks = useSelector(
    (state: State) => state.entities.courses.byId[courseId].weeks.length
  );
  const dispatch = useDispatch();
  const setActiveItem = (itemIdx: number) => {
    dispatch(itemSetActive(itemIdx));
  };
  const setActiveMenuItem = (itemIdx: number) => {
    dispatch(menuItemSetActive(itemIdx));
  };
  const sidebarItemsData = [
    {
      name: 'Overview',
      link: `${baseUrl}/overview`,
      menuItemsData: _.range(nWeeks).map((weekIdx: number) => {
        const weekId = useSelector(
          (state: State) => state.entities.courses.byId[courseId].weeks[weekIdx]
        );
        const firstStep = useSelector(
          (state: State) => state.entities.weeks.byId[weekId].steps[0]
        );
        return {
          name: `Week ${weekIdx + 1}`,
          // link: `${baseUrl}/week/${weekIdx + 1}/${firstStep.type.toLowerCase()}/${1}`
          link: stepRoute(courseId, weekIdx, '1', firstStep.type)
        };
      })
    },
    {name: 'Grades', link: `${baseUrl}/grades`},
    {name: 'Calendar', link: `${baseUrl}/calendar`},
    {name: 'Resources', link: `${baseUrl}/resources`},
    {name: 'Info', link: `${baseUrl}/info`}
  ];

  const onMenuItemClick = (parentIdx: number, childIdx: number) => {
    setActiveItem(parentIdx);
    setActiveMenuItem(childIdx);
  };
  return (
    <div className={styles.courseSidebar}>
      {sidebarItemsData.map((sidebarItemData, itemIdx) => {
        const props = {
          itemIdx,
          onClick: () => setActiveItem(itemIdx),
          active: activeItem === itemIdx,
          key: itemIdx.toString()
        };
        return sidebarItemData.menuItemsData ? (
          <Item
            {...({
              ...sidebarItemData,
              onMenuItemClick: (activeMenuItem: number) =>
                onMenuItemClick(itemIdx, activeMenuItem),
              activeMenuItem
            } as ItemProps)}
            {...props}
          />
        ) : (
          <MenuItem {...sidebarItemData} {...props} />
        );
      })}
    </div>
  );
};

export default CourseSidebar;
