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
               <div className="flex flex-col space-y-2 w-full">
                <h3 className="text-2xl font-semibold">About Hospital</h3>
                <p>Our hospital is dedicated to delivering compassionate, evidence-based respiratory care through state-of-the-art diagnostic and treatment technologies. We strive to make advanced services like bronchoscopy, EBUS, and sleep medicine accessible to everyone. Our mission is to educate and empower patients to confidently manage chronic lung conditions with clarity and support.</p>
              {/*  <Link
                  to="/AllergyTestingImmunotherapy"
                  className="text-md hover:text-[#DB8E00]"
                >
                  Allergy Testing & Immunotherapy
                </Link>

                <Link
                  to="/Bronchoscopy"
                  className="text-sm hover:text-[#DB8E00]"
                >
                  Bronchoscopy
                </Link>

                <Link
                  to="/Thoracoscopy"
                  className="text-md hover:text-[#DB8E00]"
                >
                  Thoracoscopy
                </Link>

                <Link
                  to="/PulmonaryFunction"
                  className="text-md hover:text-[#DB8E00]"
                >
                  Pulmonary Function Testing
                </Link>

                <Link
                  to="/IntercostalDrainage"
                  className="text-md hover:text-[#DB8E00]"
                >
                  Intercostal Drainage Tube Insertion
                </Link>

                <Link
                  to="/LungBiopsy"
                  className="text-md hover:text-[#DB8E00]"
                >
                  Lung Biopsy
                </Link>

                <Link
                  to="/PleuralBiopsy"
                  className="text-md hover:text-[#DB8E00]"
                >
                  Pleural Biopsy
                </Link>

                <Link
                  to="/Pleurodesis"
                  className="text-md hover:text-[#DB8E00]"
                >
                  Pleurodesis
                </Link>

                <Link
                  to="/EBUSTBNA"
                  className="text-md hover:text-[#DB8E00]"
                >
                  EBUS-TBNA
                </Link>
                <Link
                  to="/FENO"
                  className="text-md hover:text-[#DB8E00]"
                >
                  FENO(Breath Test)
                </Link>

                <Link
                  to="/TrachealStenting"
                  className="text-md hover:text-[#DB8E00]"
                >
                  Tracheal Stenting
                </Link>

              </div> */}
              {/* Treatments Links */}
              {/* <div className="flex flex-col space-y-2 w-full">
                <h3 className="text-2xl font-semibold">Treatments</h3>
                <Link to="/psychiat" className="text-md hover:text-[#DB8E00]">
                  Demo
                </Link>
                <Link
                  to="/counselling"
                  className="text-md hover:text-[#DB8E00]"
                >
                  Demo
                </Link>
                <Link
                  to="/mental-health"
                  className="text-md hover:text-[#DB8E00]"
                >
                  Demo
                </Link>
                <Link
                  to="/deaddictio"
                  className="text-md hover:text-[#DB8E00]"
                >
                  Demo
                </Link>
                <Link
                  to="/sexual-wellness"
                  className="text-md hover:text-[#DB8E00]"
                >
                  Demo
                </Link>
                <Link
                  to="/headache"
                  className="text-md hover:text-[#DB8E00]"
                >
                  Demo
                </Link>
                <Link
                  to="/epilepsy"
                  className="text-md hover:text-[#DB8E00]"
                >
                  Demo
                </Link>
                <Link
                  to="/sleep"
                  className="text-md hover:text-[#DB8E00]"
                >
                  Demo
                </Link>*/}
              </div>
            </div>

            {/* <div className="space-y-2 py-5">
                <h3 className="text-xl font-semibold">About Hospital</h3>
                <p className="text-sm w-4/5 hover:text-[#DB8E00]">
                  DrRobinGupta Lorem ipsum, dolor sit amet consectetur adipisicing elit. In veniam illo maxime quod consectetur sapiente quam obcaecati! Sapiente, consequuntur doloremque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias incidunt facere explicabo, fuga ullam, dolorum illo voluptate cumque natus vitae obcaecati facilis tenetur tempore omnis.
                </p>
              </div> */}

            {/* 2nd div - Logo and Contact Information */}
            <div className="flex flex-col items-center space-y-4  sm:w-1/3 transform hover:scale-105 transition duration-300 ease-in-out  lg:border-x-2  py-10 hover:border-x-[#DB8E00]">
              <div className="w-4/5 justify-center">
                <img
                  // src="/logo/loonahospitalwhite.png"
                  alt="DrRobinGupta Logo"
                  className="w-full"
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
                    <FaYoutube className="text-white text-xl hover:text-red-600" />
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
                    <FaInstagram className="text-white text-xl hover:text-red-500" />
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

              {/* <div className="space-y-2 py-5">
                <h3 className="text-xl font-semibold">About Hospital</h3>
                <p className="text-sm w-4/5 hover:text-[#DB8E00]">
                  DrRobinGupta Lorem ipsum, dolor sit amet consectetur adipisicing elit. In veniam illo maxime quod consectetur sapiente quam obcaecati! Sapiente, consequuntur doloremque.
                </p>
              </div> */}
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
