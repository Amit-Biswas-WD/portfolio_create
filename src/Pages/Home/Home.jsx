import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import About from "../About/About";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
