import { useEffect, useState } from "react";
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
  const [isMounted, setIsMounted] = useState(false);

  const handleClick = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
    setIsMounted(true);
  }, [theme]);

  // TODO: return a fallback UI which looks like the bottom bar but the default behaviour is also good
  if (!isMounted) return <></>;

  return (
    <button className="bg-bottomBarIconBgColor dark:bg-darkBackground rounded-2xl p-3 md:p-4" onClick={handleClick}>
      {theme == "light" ? (
        <>
          <FontAwesomeIcon
            icon={faSun}
            size="2x"
            className="text-fontColor dark:text-slate-400 hidden md:block"
          />

          <FontAwesomeIcon
            icon={faSun}
            size='lg'
            className="text-fontColor dark:text-slate-400 md:hidden"
          />
        </>
      ) : (
        <>
          <FontAwesomeIcon
            icon={faMoon}
            size="2x"
            className="text-fontColor dark:text-slate-400 hidden md:block"
          />

          <FontAwesomeIcon
            icon={faMoon}
            size="lg"
            className="text-fontColor dark:text-slate-400 md:hidden"
          />
        </>
      )}
    </button>
  );
}

export default ThemeToggle;