import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Navbar from "./components/Navbar";

function AboutApp() {
  // let items = ["New York", "San Fran", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // }

  const[alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <Navbar isHome={false} isAbout={true} isProjects={false}></Navbar>
    </div>
  );
}

export default AboutApp;
