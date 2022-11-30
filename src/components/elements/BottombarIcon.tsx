import type { FC } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

import { useBottombarStore } from '@/utils/store';

import { BLUE_COLOR, FONT_COLOR } from '@constants/index';

type BottombarIconProps = {
  navItem: {
    route: string;
    icon: IconProp;
  }
};

const BottombarIcon: FC<BottombarIconProps> = ({ navItem }) => {
  const activePathName = useBottombarStore((state) => state.activePathName);
  const setActivePathName = useBottombarStore((state) => state.setActivePathName);

  const isActive = (pathName: string) => pathName == activePathName;
  const handleClick = (currentPathName: string) =>
    setActivePathName(currentPathName);

  return (
    <a href={navItem.route}>
      <motion.div
        className={clsx(
          'bg-bottomBarIconBgColor dark:bg-darkBackground rounded-2xl p-[1rem]',
          isActive(navItem.route) && 'fa-bounce dark:bg-blue'
        )}
        onClick={() => handleClick(navItem.route)}
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
