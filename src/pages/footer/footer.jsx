import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-blue-600 text-white ">
        <div className="container mx-auto  lg:px-20 px-10 py-15">
          <div className="flex flex-col gap-4 sm:flex-row md:flex-row lg:flex-row justify-center space-y-8 sm:space-y-0 lg:space-y-0 sm:space-x-0 md:space-x-8 lg:space-x-8">
            {/* 1st div - Specialty and Treatments */}
            <div className="flex justify-around gap-15 w-1/3 sm:flex-col md:flex-row lg:flex-row space-y-8 sm:space-y-0 transform hover:scale-105 transition duration-300 ease-in-out">
              {/* Speciality Links */}
               <div className="flex flex-col space-y-4 py-10 w-full">
                <h3 className="text-2xl font-semibold">About Hospital</h3>
                <p>Our hospital is dedicated to delivering compassionate, evidence-based respiratory care through state-of-the-art diagnostic and treatment technologies. We strive to make advanced services like bronchoscopy, EBUS, and sleep medicine accessible to everyone. Our mission is to educate and empower patients to confidently manage chronic lung conditions with clarity and support.</p>
              </div>
            </div>

            {/* 2nd div - Logo and Contact Information */}
            <div className="flex flex-col items-center space-y-4 sm:w-1/3 transform hover:scale-105 transition duration-300 ease-in-out  lg:border-x-2  py-10 hover:border-x-[#DB8E00]">
              <div className="w-4/5 justify-center">
                <img
                  src="/logo/RobinlogoRemoveBG.png"
                  alt="DrRobinGupta Logo"
                  className="w-20 mx-auto mt-4"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Social Media</h3>
                <div className="flex justify-center space-x-4">
                  <Link
                    to="http://www.youtube.com/@pulmonologychandigarh4634"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube className="text-white text-xl hover:text-blue-600" />
                  </Link>
                  <Link
                    to="https://www.facebook.com/p/Dr-Robin-Gupta-Consultant-Pulmonologist-Paras-hospital-Panchkula-100063594323141/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="text-white text-xl hover:text-blue-600 hover:bg-white rounded-3xl" />
                  </Link>
                  <Link
                    to="https://www.instagram.com/thepulmodrs?utm_source=ig_web_button_share_sheet&igsh=ZmE2MmYwY3g5bG1j"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-white text-xl hover:text-blue-500" />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center mt-4 space-y-1 text-white">
                <span className="text-md font-semibold">
                  Contact us
                </span>
                <Link
                  to="tel:+919888505080"
                  className="flex items-center space-x-2 hover:text-[#DB8E00]"
                >
                  <FaPhoneAlt className="text-lg" />
                  <span>+91 9888505080</span>
                </Link>
              </div>
            </div>

            {/* 3rd div - Contact Info */}
            <div className="flex flex-col justify-center space-y-4 sm:w-1/3 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="flex flex-col space-y-2 gap-4">
                <h3 className="text-2xl font-semibold">Contact Info</h3>
                <Link
                  to="https://maps.app.goo.gl/VGXqSRZAQTNdRBZ86"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-[#DB8E00]"
                >
                  <FaMapMarkerAlt className="text-lg" />
                  <span>
                    Dr Robin's Chest Clinic,  , <br />
                    DSS 272, Sector 20, <br />
                    Panchkula, India
                  </span>
                </Link>

                <Link
                  to="tel:+919888505080"
                  className="flex items-center space-x-2 hover:text-[#DB8E00]"
                >
                  <FaPhoneAlt className="text-lg" />
                  <span>+91 9888505080</span>
                </Link>
                <Link
                  to="mailto:Loonahospital@gmail.com"
                  className="flex items-center space-x-2 hover:text-[#DB8E00]"
                >
                  <FaEnvelope className="text-lg" />
                  <span>drrobingmc@yahoo.com</span>
                </Link>
              </div>
              
            </div>
          </div>

          {/* Footer Bottom */}
        </div>
        <div className="flex w-full text-center justify-center bg-white text-black">
          <p className="sm:text-sm px-4 py-2">
            <Link to="/dashboard">DrRobinGupta</Link>© 2025 All Rights
            Reserved. | Designed & Developed by:&nbsp;
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
    </>
  );
};

export default Footer;
