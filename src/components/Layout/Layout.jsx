import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Footer, Header, Link } from './Layout.styled';
const Layout = () => {
  return (
    <>
      <Header>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Header>
      <Container>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Layout;
