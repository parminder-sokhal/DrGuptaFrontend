import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white">
      <div className="container mx-auto px-6 py-12 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* About Hospital */}
          <div className="lg:w-1/3 transform hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold mb-4">About Hospital</h3>
            <p className="text-sm text-justify">
              To provide compassionate, evidence-based respiratory care using
              the latest diagnostic and therapeutic technologies. Dr. Robin
              Gupta envisions making advanced pulmonary services like
              bronchoscopy, EBUS, and sleep medicine accessible to all, while
              educating patients and empowering them to manage chronic lung
              diseases with confidence and clarity.
            </p>
          </div>

          {/* Logo and Social Media */}
          <div className="lg:w-1/3 text-center border-y lg:border-y-0 lg:border-x-2 py-8 lg:py-0 transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex justify-center mb-4">
              <img
                src="/logo/RobinlogoRemoveBG.png"
                alt="Hospital Logo"
                className="w-32 h-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Social Media</h3>
            <div className="flex justify-center space-x-4 mb-4">
              <Link
                to="https://www.instagram.com/thepulmodrs?utm_source=ig_web_button_share_sheet&igsh=ZmE2MmYwY3g5bG1j"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-white text-xl hover:text-red-500" />
              </Link>
            </div>
            <div>
              <p className="text-md font-semibold mb-1">Contact Us</p>
              <Link
                to="tel:+919815490081"
                className="flex justify-center items-center space-x-2 hover:text-black"
              >
                <FaPhoneAlt className="text-lg" />
                <span>+91 9888505080</span>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:w-1/3 transform hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <Link
                to="https://maps.app.goo.gl/fXcS6u2SSWCmME3e6"
                target="_blank"
                className="flex items-center space-x-2 hover:text-black"
              >
                <FaMapMarkerAlt className="text-lg" />
                <span>
                  Dr Robin's Chest Clinic, DSS 272, Sector 20, Panchkula
                </span>
              </Link>
              <Link
                to="https://maps.app.goo.gl/ehutqjqNhS6fcEWj7"
                target="_blank"
                className="flex items-center space-x-2 hover:text-black"
              >
                <FaMapMarkerAlt className="text-lg" />
                <span>
                 Dr. Robin Gupta | Paras Hospital - Panchkula
                </span>
              </Link>

              <Link
                to="tel:+919872334233"
                className="flex items-center space-x-2 hover:text-black"
              >
                <FaPhoneAlt className="text-lg" />
                <span>+91 9888505080</span>
              </Link>

              <Link
                to="mailto:drrobingmc@yahoo.com"
                className="flex items-center space-x-2 hover:text-black"
              >
                <FaEnvelope className="text-lg" />
                <span>drrobingmc@yahoo.com</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

        {/* Footer Bottom */}
        <div className=" text-center bg-white text-black py-4">
          <p className="text-sm px-4">
            <Link to="/dashboard" className="hover:text-gray-700">
              DR. Robin Gupta&nbsp;
            </Link>
            © 2025 All Rights Reserved. | Designed & Developed by:&nbsp;
            <a
              href="https://quantivisiontech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700"
            >
              Quantivision Tech
            </a>
          </p>
        </div>
    </footer>
  );
};

export default Footer;
