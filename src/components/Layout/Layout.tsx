import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Layout = () => {
  return (
    <>
      <header className="mb-6 shadow-md">
        <Navigation />
      </header>
      <main className="container mx-auto px-5">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
