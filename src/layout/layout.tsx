import { Outlet } from "react-router-dom";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";


export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollToTop />      
      {/* musi być bo inaczej nie działa router dom */}
      <Footer />
    </>
  );
};
