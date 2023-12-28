import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function AboutApp() {
  return (
    <>
      <Navbar isHome={false} isAbout={true} isProjects={false}></Navbar>
      <div className="px-4 py-5 my-5">
        <h1 className="display-5 fw-bold text-body-emphasis text-center">
          About Me
        </h1>
        <div className="container px-5 text-center">
          <img
            src="../public/melol2.jpg"
            className="img-fluid border rounded-3 shadow-lg mb-4"
            alt=""
            width="300"
            height="300"
            loading="lazy"
          ></img>
        </div>
        <div className="col-lg-8 mx-auto">
          <p className="lead mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            elementum porttitor enim, at tristique justo laoreet in. Curabitur
            porta scelerisque neque, eu sodales est lobortis facilisis. Donec ut
            ex at ipsum pellentesque dictum nec pulvinar felis. Aenean ex sem,
            finibus ac tortor a, pretium euismod felis. Morbi quis risus sit
            amet tortor aliquam rhoncus nec quis erat. Nam orci ligula, congue a
            turpis vel, sollicitudin vulputate sapien. Nam sit amet dui ac urna
            cursus eleifend. In aliquet venenatis est a feugiat. Nullam
            malesuada, lorem ut finibus pretium, justo felis dictum neque, nec
            efficitur quam purus nec urna. Sed rutrum odio feugiat semper
            porttitor. Sed viverra id purus non aliquam. In sed tortor et neque
            dignissim pellentesque id mollis nunc. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
            Suspendisse id pulvinar dui.
          </p>
          <p className="lead mb-4">
            Aliquam ac scelerisque dui. Aenean sagittis laoreet suscipit. Aenean
            vulputate risus mi, at vulputate dolor luctus non. Nulla dapibus
            risus nec ultrices tempus. Vestibulum ac hendrerit mauris. Nullam id
            erat porttitor, imperdiet ex eu, pellentesque ligula. Aliquam dui
            augue, tempus in ligula ut, sagittis luctus purus. Donec scelerisque
            dictum sapien euismod porttitor.
          </p>
          <p className="lead mb-4">
            Aenean feugiat mollis augue, vel consectetur turpis iaculis non.
            Vivamus ac sem molestie, dictum lacus ut, facilisis nibh. Aenean
            congue suscipit sapien, et tempor elit rutrum et. Curabitur congue
            sed ante a hendrerit. Aliquam rhoncus placerat venenatis. Duis
            posuere egestas viverra. Curabitur rutrum nisl tellus, imperdiet
            mollis metus venenatis nec. Integer malesuada elit sit amet tellus
            tempus elementum. Etiam lorem nunc, pellentesque eget nisi non,
            facilisis porta eros. Aliquam erat volutpat.
          </p>
        </div>
      </div>
      <Footer isShort={false}></Footer>
    </>
  );
}

export default AboutApp;
