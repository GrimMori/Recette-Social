import { Outlet } from "react-router";
import Header from "./Header";
import Navbar from "./Navbar";

const token = sessionStorage.getItem("access_token")

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Navbar loggedInUser={token} />
    </>
  )
}

export default Layout;
