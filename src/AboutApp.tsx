import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Navbar from "./components/Navbar";

function AboutApp() {
  return (
    <div>
      <Navbar isHome={false} isAbout={true} isProjects={false}></Navbar>
    </div>
  );
}

export default AboutApp;
