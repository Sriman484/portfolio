import React from 'react';

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top p-3">
        <div className="container-fluid">
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
            <ul className="navbar-nav d-flex flex-lg-row flex-column align-items-center gap-lg-5 gap-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">About</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link active" href="#">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar;
