import { NavLink, Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
