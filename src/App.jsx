import "bootstrap/dist/css/bootstrap.min.css";
import Netflixnav from "./components/Netflixnav.jsx";
import Filmslide from "./components/Filmslide.jsx";
import Footer from "./components/Footer.jsx";
import Profile from "./components/Profile.jsx";
function App() {
  return (
    <>
      <Netflixnav />
      <Filmslide title="Trending Now" film="Harry Potter" />
      <Filmslide title="Watch it Again" film="avengers" />
      <Filmslide title="New Releases" film="Fast" />
      {/* PAGINA PROFILO */}
      {/* <Profile/> */}
      <Footer />
    </>
  );
}

export default App;
