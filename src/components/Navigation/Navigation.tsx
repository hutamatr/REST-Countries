import SwitcherTheme from './SwitcherTheme';

// import { MdOutlineDarkMode } from 'react-icons/md';

const Navigation = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between px-4 py-6 ">
      <h1 className="font-bold dark:text-white">Where in the world ?</h1>

      <div className="flex flex-row items-center justify-center gap-x-3 text-sm font-bold dark:text-white">
        <SwitcherTheme />
      </div>
    </nav>
  );
};

export default Navigation;
