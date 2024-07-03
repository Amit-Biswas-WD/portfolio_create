import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import image from "../../../assets/image/amit.jpg";

const Banner = () => {
  return (
    <div className="bg-base-200 mt-10 rounded-xl">
      <div className="hero-content max-w-[1280px] mx-auto flex-col lg:flex-row-reverse">
        <img
          src={image}
          className="rounded-lg shadow-2xl lg:my-20 my-10 lg:max-w-[400px] max-w-[220px]"
        />
        <div className=" lg:pl-28">
          <h1 className="lg:text-5xl text-3xl font-bold  mb-4 lg:leading-[68px] leading-[40px] lg:mr-72">
            Hi There, <br />
            I,m Amit Biswas.
          </h1>
          <p className="my-6">I am Font-end Web Developer.</p>
          <div className="flex gap-4 px-8">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/amit-biswas-8b22992b4/"
            >
              <p className="p-4 rounded-full bg-slate-950 text-[#56c0f1] hover:bg-[#459aee] hover:text-white">
                <FaLinkedin className="text-2xl " />
              </p>
            </a>
            <a target="_blank" href="https://www.facebook.com/amitbiswas9282">
              <p className="p-4 rounded-full bg-slate-900 text-[#56c0f1] hover:bg-[#1877F2] hover:text-white">
                <FaFacebookSquare className="text-2xl" />
              </p>
            </a>
            <a target="_blank" href="https://www.instagram.com/amitbiswas9282/">
              <p className="p-4 rounded-full bg-slate-900 text-[#56c0f1] hover:bg-[#1877F2] hover:text-white">
                <FaInstagram className="text-2xl" />
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
