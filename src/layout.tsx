import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar bg-dark text- navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            RxSync
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={"link nav-link active"}
                  to="/"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={"link nav-link"}
                  to="/call"
                  aria-current="page"
                >
                  Make Request
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
