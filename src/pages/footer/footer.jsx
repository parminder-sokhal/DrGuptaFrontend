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
      <footer className="bg-blue-500 text-white ">
        <div className="container mx-auto  lg:px-20 px-10 py-15">
          <div className="flex flex-col gap-4 sm:flex-row md:flex-row lg:flex-row justify-center space-y-8 sm:space-y-0 lg:space-y-0 sm:space-x-0 md:space-x-8 lg:space-x-8">
            {/* 1st div - Specialty and Treatments */}
            <div className="flex justify-around gap-15 w-1/3 sm:flex-col md:flex-row lg:flex-row space-y-8 sm:space-y-0 transform hover:scale-105 transition duration-300 ease-in-out">
              {/* Speciality Links */}
              <div className="flex flex-col space-y-2 w-full">
                <h3 className="text-2xl font-semibold">Procedures</h3>
                <Link
                  to="/AllergyTestingImmunotherapy"
                  className="text-md hover:text-black"
                >
                  Allergy Testing & Immunotherapy
                </Link>
                <Link to="/Bronchoscopy" className="text-sm hover:text-black">
                  Bronchoscopy
                </Link>
                <Link to="/Thoracoscopy" className="text-md hover:text-black">
                  Thoracoscopy
                </Link>
                <Link
                  to="/PulmonaryFunction"
                  className="text-md hover:text-black"
                >
                  Pulmonary Function Testing
                </Link>
                <Link to="/IntercostalDrainage" className="text-md hover:text-black">
                  Intercostal Drainage Tube Insertion
                </Link>
                <Link to="/LungBiopsy" className="text-md hover:text-black">
                  Lung Biopsy
                </Link>
                <Link to="/PleuralBiopsy" className="text-md hover:text-black">
                  Pleural Biopsy
                </Link>
              </div>
              {/* Treatments Links */}
              <div className="flex flex-col space-y-2 w-full">
                <h3 className="text-2xl font-semibold">Treatments</h3>
                <Link
                  to="/LungCancer"
                  className="text-md hover:text-black"
                >
                  Lung Cancer Treatment
                </Link>
                <Link to="/PneumoniaTreatment" className="text-md hover:text-black">
                  Pneumonia Treatment
                </Link>
                <Link
                  to="/BronchialAsthma"
                  className="text-md hover:text-black"
                >
                  Bronchial Asthma Treatment
                </Link>
                <Link to="/Tuberculosis" className="text-md hover:text-black">
                  Tuberculosis (TB) Treatment
                </Link>
                <Link to="/InterstitialLung" className="text-md hover:text-black">
                  Interstitial Lung Disease Treatment
                </Link>
                <Link to="/DiabetesTreatment" className="text-md hover:text-black">
                  Diabetes Treatment
                </Link>
              </div>
            </div>

            {/* 2nd div - Logo and Contact Information */}
            <div className="flex flex-col items-center space-y-4  sm:w-1/3 transform hover:scale-105 transition duration-300 ease-in-out  lg:border-x-2  py-10 hover:border-x-black">
              <div className="w-4/5 justify-center">
                <img
                  src="/logo/RobinlogoRemove.png"
                  alt="Hospital Logo"
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Social Media</h3>
                <div className="flex justify-center space-x-4">
                  {/* <Link
                    to="https://www.youtube.com/l"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube className="text-white text-xl hover:text-red-600" />
                  </Link> */}
                  {/* <Link
                    to="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="text-white text-xl hover:text-pink-600 hover:bg-white rounded-3xl" />
                  </Link> */}
                  <Link
                    to="https://www.instagram.com/thepulmodrs?utm_source=ig_web_button_share_sheet&igsh=ZmE2MmYwY3g5bG1j"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-white text-xl hover:text-red-500" />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center mt-4 space-y-1 text-white">
                <span className="text-md font-semibold">Contact us</span>
                <Link
                  to="tel:+919815490081"
                  className="flex items-center space-x-2 hover:text-black"
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
                  to="https://maps.app.goo.gl/AR1WvaZ6PN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-black"
                >
                  <FaMapMarkerAlt className="text-lg" />
                  <span>
                    Dr Robin's Chest Clinic, DSS 272, Sector 20, Panchkula
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
                  to="mailto:blisshospital@gmail.com"
                  className="flex items-center space-x-2 hover:text-black"
                >
                  <FaEnvelope className="text-lg" />
                  <span>drrobingmc@yahoo.com</span>
                </Link>
              </div>

              <div className="space-y-2 py-5">
                <h3 className="text-xl font-semibold">About Hospital</h3>
                <p className="text-sm w-4/5 hover:text-black">
                  To provide compassionate, evidence-based respiratory care using the latest diagnostic and therapeutic technologies. Dr. Robin Gupta envisions making advanced pulmonary services like bronchoscopy, EBUS, and sleep medicine accessible to all, while educating patients and empowering them to manage chronic lung diseases with confidence and clarity.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
        </div>
        <div className="flex w-full text-center justify-center bg-white text-black">
          <p className="sm:text-sm px-4 py-2">
            <Link to="/dashboard" className="hover:text-gray-700">
              Bliss Hospital&nbsp;
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
    </>
  );
};

export default Footer;
