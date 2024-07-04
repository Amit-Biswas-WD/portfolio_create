import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Touch from "../../Shared/Touch/Touch";
import About from "../About/About";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Touch />
      <Footer />
    </div>
  );
};

export default Home;
