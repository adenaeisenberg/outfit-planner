// import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Outfit Planner App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/outfits">
                  My Outfits
                </a>
              </li>

              {localStorage.jwt === undefined ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/signup">
                      Signup
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/login">
                      Login
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    My Wardrobe
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="nav-link" href="/tops">
                        Tops
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="/bottoms">
                        Bottoms
                      </a>
                    </li>
                  </ul>
                  <li className="nav-item">
                    <a className="nav-link">
                      <LogoutLink />
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
