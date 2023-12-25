// import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/ProjectInfo";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  // let items = ["New York", "San Fran", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // }

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      {/* <div>
        <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
        {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>}
        <Button color="secondary" onClick={() => setAlertVisibility(
          true)}>Hello!!</Button>
      </div> */}
      <Navbar isHome={true} isAbout={false} isProjects={false}></Navbar>
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block my-5 mx-auto mb-4"
          src="../public/smile2.svg"
          alt=""
          width="72"
          height="57"
        ></img>
        <h1 className="display-5 fw-bold text-body-emphasis">Welcome!</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            This website is currently under construction, but feel free to
            explore
          </p>
          <p className="lead mb-4">
            <strong>Contact me at:</strong>
            <br></br>scottjack2004@gmail.com<br></br>jscott26@uw.edu
          </p>
        </div>
      </div>
      <Footer isShort={true}></Footer>
    </>
  );
}

export default App;
