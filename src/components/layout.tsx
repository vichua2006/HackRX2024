import { Outlet, Link } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";
import { useState } from "react";

const Layout = () => {
  const [activeLink, setActiveLink] = useState("home");
  return (
    <>
      <nav className="navbar  navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            RxSync
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={
                    "link nav-link " + (activeLink === "home" ? "active" : "")
                  }
                  to="/"
                  aria-current="page"
                  onClick={() => setActiveLink("home")}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    "link nav-link " + (activeLink === "call" ? "active" : "")
                  }
                  to="/call"
                  aria-current="page"
                  onClick={() => setActiveLink("call")}
                >
                  Make Request
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <ThemeSwitch />
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
