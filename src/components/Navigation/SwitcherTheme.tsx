import { useState } from 'react';
import useDarkMode from '../../hooks/useDarkMode';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const SwitcherTheme = () => {
  const { colorTheme, setTheme } = useDarkMode();
  const [darkTheme, setDarkTheme] = useState<boolean>(
    colorTheme === 'light' ? true : false
  );

  const toggleThemeHandler = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkTheme(checked);
  };

  return (
    <>
      <DarkModeSwitch
        checked={darkTheme}
        onChange={toggleThemeHandler}
        size={22}
      />
      <span>{colorTheme === 'light' ? 'Dark' : 'Light'}</span>
    </>
  );
};

export default SwitcherTheme;
