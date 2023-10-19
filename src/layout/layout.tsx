import { Outlet } from "react-router-dom";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* musi być bo inaczej nie działa router dom */}
      <Footer />
    </>
  );
};
