// import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Navbar from "./components/Navbar";

function App() {
  // let items = ["New York", "San Fran", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // }

  const[alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <Navbar isHome={true} isAbout={false} isProjects={false}></Navbar>
      {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} /> */}
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>}
      <Button color="secondary" onClick={() => setAlertVisibility(
        true)}>Hello!!</Button>
    </div>
  );
}

export default App;
