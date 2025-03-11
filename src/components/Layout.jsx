import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="layout">
      <div className="page-container">
        <Header />
        <main className="content">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
