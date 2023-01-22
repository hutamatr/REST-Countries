import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState<string>(localStorage?.theme);
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const rootElm = window.document.documentElement as HTMLElement;
    rootElm.classList.remove(colorTheme);
    rootElm.classList.add(theme);

    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return { colorTheme, setTheme };
};

export default useDarkMode;
