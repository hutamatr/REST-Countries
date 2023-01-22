import SwitcherTheme from './SwitcherTheme';

const Navigation = () => {
  return (
    <nav className='mx-auto flex max-w-6xl items-center justify-between px-4 py-6 '>
      <h1 className='font-bold dark:text-white'>Where in the world ?</h1>

      <div className='flex flex-row items-center justify-center gap-x-3 text-sm font-bold dark:text-white'>
        <SwitcherTheme />
      </div>
    </nav>
  );
};

export default Navigation;
