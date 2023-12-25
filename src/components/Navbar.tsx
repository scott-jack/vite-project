import { useState } from "react";

interface Props {
    isHome: boolean;
    isAbout: boolean;
    isProjects: boolean;
  }
  
  const Navbar = ({isHome, isAbout, isProjects}: Props) => {
    const [selectedPage, setSelected] = useState(-1);

    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Jack Scott</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className={isHome ? 'nav-link active' : 'nav-link'} aria-current={isHome} href="/vite-project/">Home</a>
              <a className={isAbout ? 'nav-link active' : 'nav-link'} aria-current={isAbout} href="/vite-project/about/">About</a>
              <a className={isProjects ? 'nav-link active' : 'nav-link'} aria-current={isProjects} href="/vite-project/projects/">Projects</a>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;