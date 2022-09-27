import React from "react";

const Header = (props) => {
  const { data } = props;
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand text-primary fw-bolder" href="#">
            ModGenics
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ImageOne
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ImageTwo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ImageThree
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ImageFour
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
