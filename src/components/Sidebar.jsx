import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      {/* Outlet tag lets the content to be projected in the UI */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Sidebar;
