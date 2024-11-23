import { Outlet, Link } from "react-router-dom";
import './Layout.css';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link className={"link"} to="/">Table</Link>
          </li>
          <li >
            <Link className={"link"} to="/call">Call</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;