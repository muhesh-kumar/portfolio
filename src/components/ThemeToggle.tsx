import { useEffect, useState } from "react";
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FONT_COLOR } from '@constants/index';

export default () => {
  const [theme, setTheme] = useState<string>(localStorage.getItem("theme") ?? "light");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (

    <>
      {theme == "light" ? (<button className="bg-bottomBarIconBgColor dark:bg-darkBackground rounded-2xl p-[1rem]" onClick={handleClick}>
        <FontAwesomeIcon
          icon={faSun}
          size="2x"
          className="text-fontColor dark:text-slate-400"
        />
      </button>) : (<button className="bg-bottomBarIconBgColor dark:bg-darkBackground rounded-2xl p-[1rem]" onClick={handleClick}>
        <FontAwesomeIcon
          icon={faMoon}
          size="2x"
          className="text-fontColor dark:text-slate-400"
        />
      </button>)}
    </>
  );
}