import LayoutStyled from "./LayoutStyled";
import { Link, Outlet } from "react-router-dom";

const Layout = (): JSX.Element => {
  return (
    <>
      <LayoutStyled className="main-header">
        <h1 className="main-header__title">Antisocial club</h1>
        <nav className="header__nav-bar nav-bar">
          <div className="nav-bar__element">
            <Link to="/sign-in" className="nav-bar__icon">
              <span className="nav-bar__text">Sign in</span>
            </Link>
          </div>
          <div className="nav-bar__element">
            <Link to="/login" className="nav-bar__icon">
              <span className="nav-bar__text">Login</span>
            </Link>
          </div>
        </nav>
      </LayoutStyled>
      <Outlet />
    </>
  );
};

export default Layout;
