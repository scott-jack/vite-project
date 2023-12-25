import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Navbar from "./components/Navbar";

function ProjectsApp() {
  return (
    <div>
      <Navbar isHome={false} isAbout={false} isProjects={true}></Navbar>
    </div>
  );
}

export default ProjectsApp;
