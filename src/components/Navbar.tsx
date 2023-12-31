import { useState } from "react";

interface Props {
    isHome: boolean;
    isAbout: boolean;
    isProjects: boolean;
}
  
  const Navbar = ({isHome, isAbout, isProjects}: Props) => {
    return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Jack Scott</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className={isHome ? 'nav-link active' : 'nav-link'} aria-current={isHome} href="index.html">Home</a>
              <a className={isAbout ? 'nav-link active' : 'nav-link'} aria-current={isAbout} href="about.html">About</a>
              <a className={isProjects ? 'nav-link active' : 'nav-link'} aria-current={isProjects} href="projects.html">Projects</a>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;