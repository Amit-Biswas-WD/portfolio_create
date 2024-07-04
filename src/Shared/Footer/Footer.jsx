import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-base-300">
      <footer className="footer text-base-content p-10 max-w-[1280px] mx-auto">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact Info</h6>
          <div className="grid grid-flow-col gap-4">
            <div className="flex gap-4">
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
              <a
                target="_blank"
                href="https://www.instagram.com/amitbiswas9282/"
              >
                <p className="p-4 rounded-full bg-slate-900 text-[#56c0f1] hover:bg-[#1877F2] hover:text-white">
                  <FaInstagram className="text-2xl" />
                </p>
              </a>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
