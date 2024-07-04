import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { TbBrandGmail } from "react-icons/tb";
import { FaMapLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-base-300">
      <footer className="footer text-base-content p-10 max-w-[1280px] mx-auto">
        <nav>
          <h6 className="footer-title">Amit,s Portfolio</h6>
          <p>
            Thank you for visiting my personal portfolio website. Connect with
            me over socials.
          </p>
          <p>Keep Rising 🚀. Connect with me over live chat!</p>
        </nav>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Skills</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Skill</h6>
          <a className="link link-hover">HTML</a>
          <a className="link link-hover">CSS</a>
          <a className="link link-hover">JavaScript</a>
          <a className="link link-hover">React</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact Info</h6>
          <div>
            <p className="my-2 flex gap-2 items-center">
              <IoCall />
              01951400346
            </p>

            <p className="flex gap-2 items-center">
              <TbBrandGmail />
              amitbiswas9282@gmail.com
            </p>

            <p className="my-4 flex gap-2 items-center">
              <FaMapLocationDot />
              Mirpur, Dhaka, Bangladesh
            </p>
          </div>
          <div className="grid grid-flow-col gap-4">
            <div className="flex gap-4">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/amit-biswas-8b22992b4/"
              >
                <p className="p-3 rounded-full bg-slate-950 text-[#56c0f1] hover:bg-[#459aee] hover:text-white">
                  <FaLinkedin className="text-2xl " />
                </p>
              </a>
              <a target="_blank" href="https://www.facebook.com/amitbiswas9282">
                <p className="p-3 rounded-full bg-slate-950 text-[#56c0f1] hover:bg-[#1877F2] hover:text-white">
                  <FaFacebookSquare className="text-2xl" />
                </p>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/amitbiswas9282/"
              >
                <p className="p-3 rounded-full bg-slate-950 text-[#56c0f1] hover:bg-[#1877F2] hover:text-white">
                  <FaInstagram className="text-2xl" />
                </p>
              </a>
            </div>
          </div>
        </nav>
      </footer>
      <p className="text-center my-2">Designed With By Amit Biswas</p>
    </div>
  );
};

export default Footer;
