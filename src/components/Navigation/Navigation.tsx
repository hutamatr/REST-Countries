import { MdOutlineDarkMode } from 'react-icons/md';

const Navigation = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between px-4 py-6 ">
      <h1 className="font-bold">Where in the world ?</h1>

      <div className="flex flex-row items-center gap-x-2 text-sm font-bold">
        <MdOutlineDarkMode className="text-lg" />
        <span>Dark Mode</span>
      </div>
    </nav>
  );
};

export default Navigation;
