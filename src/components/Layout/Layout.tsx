import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Layout = () => {
  return (
    <>
      <header className="fixed top-0 w-full bg-white shadow-material dark:bg-dark-blue">
        <Navigation />
      </header>
      <main className="min-h-screen dark:bg-very-dark-blue-1">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
