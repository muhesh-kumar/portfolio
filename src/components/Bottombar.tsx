import ThemeToggle from '@components/ThemeToggle';
import BottombarIcon from '@elements/BottombarIcon';

import navItems from './navItems';

const Bottombar = ({ activePathName }: { activePathName: string }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="fixed bottom-[1.5rem] z-1 flex justify-center items-center gap-[0.7rem] bg-white dark:bg-darkBottomBarBackground border-[1px] border-bottomBarIconBgColor dark:border-slate-700 rounded-3xl p-[0.2rem] px-[1.25rem] shadow-bottomBarShadow dark:shadow-darkBottomBarShadow transform-preserve-3d"
      >
        {navItems.map((navItem) => <BottombarIcon navItem={navItem} activePathName={activePathName} />)}
        <div className="border-l-[1px] border-fontColor h-[3rem]"></div>
        <ThemeToggle />
      </div>
    </div>
  )
};

export default Bottombar;