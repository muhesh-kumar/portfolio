import type { FC } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

import { BLUE_COLOR, FONT_COLOR } from '@constants/index';

type BottombarIconProps = {
  navItem: {
    route: string;
    icon: IconProp;
  },
  activePathName: string;
};

const BottombarIcon: FC<BottombarIconProps> = ({ navItem, activePathName }) => {
  const isActive = (pathName: string) => {
    console.log('activePathName: ', activePathName);
    console.log('pathName: ', pathName);

    // FIXME: hacky fix because dev server gives /pathname and the production server gives /pathname/ so cannot say activePathName == pathName
    return (pathName == "/" ? activePathName === pathName : activePathName.includes(pathName));
  }

  return (
    <a href={navItem.route}>
      <motion.div
        className={clsx(
          'bg-bottomBarIconBgColor dark:bg-darkBackground rounded-2xl p-[1rem]',
          isActive(navItem.route) && 'fa-bounce dark:bg-blue'
        )}
      >
        <FontAwesomeIcon
          icon={navItem.icon}
          size={isActive(navItem.route) ? '3x' : '2x'}
          color={isActive(navItem.route) ? BLUE_COLOR : FONT_COLOR}
          className={clsx(
            isActive(navItem.route)
              ? 'text-blue dark:text-white'
              : 'text-fontColor dark:text-slate-400'
          )}
        />
      </motion.div>
    </a>
  )
}

export default BottombarIcon
