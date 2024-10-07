import { Link } from "react-router-dom";
import Search from "./Search";
import User from "./User";
import { useEffect, useState } from "react";

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            className="logo"
            src="../assets/myntra-logo.png"
            alt="Myntra Logo"
          />
        </Link>

        {isMobile && (
          <>
            <Search isMobile={isMobile} />
            <User isMobile={isMobile} />
          </>
        )}

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarSupportedContent"
        >
          <ul
            className={`${
              isMobile ? "navbar-nav" : "not-navbar-nav"
            } me-auto mb-2 mb-lg-0`}
          >
            <li className="nav-item">
              <Link className="nav-link active" to="/men">
                MEN
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/women">
                WOMEN
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/kids">
                KIDS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/homeandlive">
                HOME & LIVING
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/beauty">
                BEAUTY
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/studio">
                STUDIO
              </Link>
            </li>
          </ul>

          {!isMobile && (
            <>
              <Search />
              <div className="d-flex">
                <User />
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
