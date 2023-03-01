import { Outlet } from "react-router";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Navbar />
    </>
  )
}

export default Layout;
