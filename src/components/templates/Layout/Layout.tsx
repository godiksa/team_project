import { Outlet } from 'react-router-dom';
import Header from '../../templates/Header';
import Footer from '../../templates/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
