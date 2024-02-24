import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../app/components/Footer/Footer";
import Sidebar from "../app/components/Sidebar/Sidebar";
import ScrollToTop from "../app/ScrollToTop";

const Layout: React.FC = () => {
  return (
    <section>
      <Sidebar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </section>
  );
};

export default Layout;
