import { useState } from "react";

interface Props {
    isShort: boolean;
}

  const Footer = ({isShort}: Props) => {

    return (
        <footer className={isShort ? "navbar fixed-bottom d-flex flex-wrap justify-content-around align-items-center py-3 border-top" : "navbar d-flex flex-wrap justify-content-around align-items-center py-3 border-top"}>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <a className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <img className="bi" src="../smile.svg" alt="" width="30" height="24"></img>
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">Made by Jack Scott (with React, Vite, and Bootstrap)</span>
        </div>
        <ul className="nav col-md-4 justify-content-center list-unstyled d-flex">
          <li className="ms-3"><a className="text-body-secondary" href="https://www.linkedin.com/in/jack-w-scott/"><img className="bi" src="../public/linkedin.svg" alt="" width="30" height="24"></img></a></li>
          <li className="ms-3"><a className="text-body-secondary" href="https://github.com/scott-jack"><img className="bi" src="../public/github.svg" alt="" width="30" height="24"></img></a></li>
        </ul>
      </footer>
    );
  };
  
  export default Footer;