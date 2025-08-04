import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HeaderMain() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownNavbarOpen, setIsDropdownNavbarOpen] = useState(false);
  const [isDropdownNavbarOpenservices, setIsDropdownNavbarOpenservices] =
    useState(false);
  const [isDropdownNavbarOpenservicestwo, setIsDropdownNavbarOpenservicestwo] =
    useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsDropdownNavbarOpen(false);
    setIsDropdownNavbarOpenservices(false);
    setIsDropdownNavbarOpenservicestwo(false);
  };

  const toggleNavbarDropdown = () => {
    setIsDropdownNavbarOpen(!isDropdownNavbarOpen);
    setIsDropdownOpen(false);
    setIsDropdownNavbarOpenservices(false);
    setIsDropdownNavbarOpenservicestwo(false);
  };

  const toggleNavbarDropdownservices = () => {
    setIsDropdownNavbarOpenservices(!isDropdownNavbarOpenservices);
    setIsDropdownOpen(false);
    setIsDropdownNavbarOpen(false);
    setIsDropdownNavbarOpenservicestwo(false);
  };
  const toggleNavbarDropdownservicestwo = () => {
    setIsDropdownNavbarOpenservicestwo(!isDropdownNavbarOpenservicestwo);
    setIsDropdownOpen(false);
    setIsDropdownNavbarOpen(false);
    setIsDropdownNavbarOpenservices(false);
  };

  const handleNavbarDropdownHoverservicestwo = () => {
    setIsDropdownNavbarOpenservicestwo(true);
    setIsDropdownOpen(false);
    setIsDropdownNavbarOpen(false);
    setIsDropdownNavbarOpenservices(false);
  };

  const handleNavbarDropdownLeaveservicestwo = () => {
    setIsDropdownNavbarOpenservicestwo(false);
  };

  // const handleDropdownHover = () => {
  //   setIsDropdownOpen(true);
  //   setIsDropdownNavbarOpen(false);
  //   setIsDropdownNavbarOpenservices(false);
  //   setIsDropdownNavbarOpenservicestwo(false);
  // };

  const handleNavbarDropdownHover = () => {
    setIsDropdownNavbarOpen(true);
    setIsDropdownOpen(false);
    setIsDropdownNavbarOpenservices(false);
    setIsDropdownNavbarOpenservicestwo(false);
  };

  const handleNavbarDropdownHoverservices = () => {
    setIsDropdownNavbarOpenservices(true);
    setIsDropdownOpen(false);
    setIsDropdownNavbarOpen(false);
    setIsDropdownNavbarOpenservicestwo(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsDropdownOpen(false);
  };

  // Manage body scroll locking
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest("nav") === null) {
        setIsDropdownOpen(false);
        setIsDropdownNavbarOpen(false);
        setIsDropdownNavbarOpenservices(false);
        setIsDropdownNavbarOpenservicestwo(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleNavbarDropdownLeave = () => {
    setIsDropdownNavbarOpen(false);
  };
  const handleNavbarDropdownLeaveservices = () => {
    setIsDropdownNavbarOpenservices(false);
  };

  return (
    <nav className="bg-white border-black top-10 fixed w-full z-50 shadow-sm">
      <div className="mx-auto max-w-screen-xl p-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/logo/RobinlogoRemoveBG.png"
              className="h-16"
              alt="Dr.RobinGupta Logo"
            />
          </Link>

          {/* Desktop Navbar */}
          <div className="hidden lg:flex text-lg flex-grow justify-center">
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-800 md:p-0"
                >
                  About
                </Link>
              </li>
              {/* <li onMouseEnter={handleDropdownHover}>
                <button
                  onClick={toggleDropdown}
                  className="flex items-center justify-between w-full py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:p-0"
                >
                  Treatment
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </li> */}

              {/* <li onMouseEnter={handleNavbarDropdownHoverservices}>
                <button
                  onClick={toggleNavbarDropdownservices}
                  className="flex items-center justify-between w-full py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:p-0"
                >
                  Treatments
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-200 ${isDropdownNavbarOpenservices ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  onMouseLeave={handleNavbarDropdownLeaveservices}
                  onClick={handleNavbarDropdownLeaveservices}
                  className={`z-50 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-auto px-2 absolute mt-2 ${isDropdownNavbarOpenservices ? "block" : "hidden"}`}
                >
                  <ul className="py-2 text-sm text-black">
                    <li>
                      <Link
                        to="/LungCancer"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Lung Cancer
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/PneumoniaTreatment"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Pneumonia Treatment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ArdsTreatment"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        ARDS Treatment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ChronicCough"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Chronic Cough Treatment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/AsthmaTreatment"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Asthma Treatment
                      </Link>
                    </li>

                    

                    <li>
                      <Link
                        to="/BronchialAsthma"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Bronchial Asthma Treatment
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/Tuberculosis"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Tuberculosis (TB) Treatment
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/InterstitialLung "
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Interstitial Lung Disease Treatment
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/DiabetesTreatment"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Diabetes Treatment
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/Hypertension"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Hypertension Treatment
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/PreventiveCardiology"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Preventive Cardiology Treatment
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/SleepDisordered"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Sleep Disordered Breathing
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/PleuralEffusion"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Pleural Effusion
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/Fever"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Fever Treatment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/COPD"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        COPD
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Sarcoidosis"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Sarcoidosis
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/GeneralPhysician"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        General Physician
                      </Link>
                    </li>
                  </ul>
                </div>
              </li> */}

              {/* above is your code for drop down below is my code done by avikam ..you can remove it if you dont like 
              
              also you have to add routes for the phone 
              */}

              <li onMouseEnter={handleNavbarDropdownHoverservices}>
                <button
                  onClick={toggleNavbarDropdownservices}
                  className="flex items-center justify-between w-full py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:p-0"
                >
                  Treatments
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-200 ${isDropdownNavbarOpenservices ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  onMouseLeave={handleNavbarDropdownLeaveservices}
                  onClick={handleNavbarDropdownLeaveservices}
                  className={`z-50 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-auto absolute mt-2 transition-all duration-300 ease-in-out transform ${
                    isDropdownNavbarOpenservices
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <ul
                    className="
      py-2 text-sm text-black 
      max-h-[300px] overflow-y-auto 
      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-1 
      px-2 w-full"
                  >
                    <li>
                      <Link
                        to="/ArdsTreatment"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        ARDS Treatment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/AsthmaTreatment"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Asthma Treatment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/BronchialAsthma"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Bronchial Asthma Treatment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ChronicCough"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Chronic Cough Treatment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/COPD"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        COPD
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/DiabetesTreatment"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Diabetes Treatment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Fever"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Fever Treatment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/FluTreatment"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Flu Treatment
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/GeneralPhysician"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        General Physician
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Hypertension"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Hypertension Treatment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/InterstitialLung"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Interstitial Lung Disease Treatment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/LungCancer"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Lung Cancer
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ObstructiveSleep"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Obstructive Sleep Apnea (OSA)
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/PleuralEffusion"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Pleural Effusion
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/PneumoniaTreatment"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Pneumonia Treatment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/PreventiveCardiology"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Preventive Cardiology Treatment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/RespiratoryFailure"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Respiratory Failure Treatment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/RespiratoryAllergy"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Respiratory Allergy Treatment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Sarcoidosis"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Sarcoidosis
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/SleepDisordered"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Sleep Disordered Breathing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Tuberculosis"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Tuberculosis (TB) Treatment
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li onMouseEnter={handleNavbarDropdownHoverservicestwo}>
                <button
                  onClick={toggleNavbarDropdownservicestwo}
                  className="flex items-center justify-between w-full py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:p-0"
                >
                  Procedures
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-200 ${isDropdownNavbarOpenservicestwo ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  onMouseLeave={handleNavbarDropdownLeaveservicestwo}
                  onClick={handleNavbarDropdownLeaveservicestwo}
                  className={`z-50 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-auto absolute mt-2 transition-all duration-300 ease-in-out transform ${
                    isDropdownNavbarOpenservicestwo
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <ul
                    className="
      py-2 text-sm text-black 
      max-h-[300px] overflow-y-auto 
      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-1 
      px-2 w-full"
                  >
                    <li>
                      <Link
                        to="/AllergyTestingImmunotherapy"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Allergy Testing & Immunotherapy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Bronchoscopy"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Bronchoscopy
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/Thoracoscopy"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Thoracoscopy
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/PulmonaryFunction"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Pulmonary Function Testing
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/IntercostalDrainage "
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Intercostal Drainage Tube Insertion
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/LungBiopsy"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Lung Biopsy
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/PleuralBiopsy"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Pleural Biopsy
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/Pleurodesis"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Pleurodesis
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/EBUSTBNA"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        EBUS-TBNA
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/FENO"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        FENO(Breath Test)
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/TrachealStenting"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Tracheal Stenting
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/BronchialArtery"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Bronchial Artery Embolization
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/BiPAPCPAP"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        BiPAP & CPAP
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/ChestDrain"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Chest Drain Insertion
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/DLCO"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        DLCO
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/ForcedOscillometry"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Forced Oscillometry Technique
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/Immunotherapy"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Immunotherapy
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/PleuralProcedures"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Pleural Procedures
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/RespiratoryVaccines"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Respiratory Vaccines
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/Polysomnography"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Polysomnography (Sleep Study)
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* <li onMouseEnter={handleNavbarDropdownHoverservicestwo}>
                <button
                  onClick={toggleNavbarDropdownservicestwo}
                  className="flex items-center justify-between w-full py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:p-0"
                >
                  Procedures
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-200 ${isDropdownNavbarOpenservicestwo ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  onMouseLeave={handleNavbarDropdownLeaveservicestwo}
                  onClick={handleNavbarDropdownLeaveservicestwo}
                  className={`z-50 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-auto px-2 absolute mt-2 ${isDropdownNavbarOpenservicestwo ? "block" : "hidden"}`}
                >
                  <ul className="py-2 text-sm text-black">
                    <li>
                      <Link
                        to="/AllergyTestingImmunotherapy"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Allergy Testing & Immunotherapy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Bronchoscopy"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Bronchoscopy
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/Thoracoscopy"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Thoracoscopy
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/PulmonaryFunction"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Pulmonary Function Testing
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/IntercostalDrainage "
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Intercostal Drainage Tube Insertion
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/LungBiopsy"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Lung Biopsy
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/PleuralBiopsy"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Pleural Biopsy
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/Pleurodesis"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Pleurodesis
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/EBUSTBNA"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        EBUS-TBNA
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/FENO"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        FENO(Breath Test)
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/TrachealStenting"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Tracheal Stenting
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/BronchialArtery"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Bronchial Artery Embolization
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/BiPAPCPAP"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        BiPAP & CPAP
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/ChestDrain"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Chest Drain Insertion
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/DLCO"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        DLCO
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/ForcedOscillometry"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Forced Oscillometry Technique
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/Immunotherapy"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Immunotherapy
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/PleuralProcedures"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Pleural Procedures
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/RespiratoryVaccines"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Respiratory Vaccines
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/Polysomnography"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Polysomnography (Sleep Study)
                      </Link>
                    </li>
                  </ul>
                </div>
              </li> */}

              <li onMouseEnter={handleNavbarDropdownHover}>
                <button
                  onClick={toggleNavbarDropdown}
                  className="flex items-center justify-between w-full py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:p-0"
                >
                  Media
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-200 ${isDropdownNavbarOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  onMouseLeave={handleNavbarDropdownLeave}
                  onClick={handleNavbarDropdownLeave}
                  className={`z-50 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-auto px-4 absolute mt-2 ${isDropdownNavbarOpen ? "block" : "hidden"}`}
                >
                  <ul className="py-2 text-sm text-black">
                    <li>
                      <Link
                        to="/Pictures"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Pictures Gallery
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        to="/Youtube"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Video Gallery
                      </Link>
                    </li> */}

                    {/* <li>
                      <Link
                        to="/Instagram"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Instagram
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </li>
              <Link
                to="/blogs"
                className="block py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-800 md:p-0"
              >
                Blogs
              </Link>
              {/* <li>
                <Link
                  to="/management"
                  className="block py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-800 md:p-0"
                >
                  Management
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block text-xl">
            <Link
              to="/about#qualifications"
              className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Book Appointment
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="block lg:hidden text-black"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* ✅ Desktop Mega Menu */}
        <div
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
          onClick={() => setIsDropdownOpen(false)}
        >
          {isDropdownOpen && (
            <div className="hidden md:block mt-2 absolute left-0 w-full bg-white z-40">
              <div className="grid px-40 py-5 mx-auto text-gray-900 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ">
                <ul>
                  <li>
                    <Link
                      to="/Lung"
                      className="font-semibold text-md  hover:text-blue-700"
                    >
                      Treatments
                    </Link>
                    <Link
                      to="/LungCancer"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Lung Cancer Treatment
                    </Link>
                    <Link
                      to="/PneumoniaTreatment"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Pneumonia Treatment
                    </Link>
                    <Link
                      to="/BronchialAsthma"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Bronchial Asthma Treatment
                    </Link>
                    <Link
                      to="/Tuberculosis"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Tuberculosis (TB) Treatment
                    </Link>
                    <Link
                      to="/InterstitialLung"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Interstitial Lung Disease Treatment
                    </Link>
                    <Link
                      to="/DiabetesTreatment"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Diabetes Treatment
                    </Link>
                    <Link
                      to="/Hypertension"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Hypertension Treatment
                    </Link>
                    <Link
                      to="/PreventiveCardiology"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Preventive Cardiology Treatment
                    </Link>
                    <Link
                      to="/SleepDisordered"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Sleep Disordered Breathing
                    </Link>
                    <Link
                      to="/PleuralEffusion"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Pleural Effusion
                    </Link>
                    <Link
                      to="/Fever"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Fever Treatment
                    </Link>
                    <Link
                      to="/COPD"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Chronic Obstructive Pulmonary Disease(COPD)
                    </Link>
                    <Link
                      to="/Sarcoidosis"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Sarcoidosis
                    </Link>
                    <Link
                      to="/GeneralPhysician"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      General Physician
                    </Link>
                  </li>
                </ul>

                {/* Counselling and Therapy */}
                {/* <ul>
                  <li>
                    <Link
                      to="/counselling-and-therapy"
                      className="font-semibold text-md  hover:text-blue-700"
                    >
                      Demo Heading
                    </Link>
                    <Link
                      to="/ct"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      D1
                    </Link>
                    <Link
                      to="/dt"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      D2
                    </Link>
                    <Link
                      to="/individual"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      D3
                    </Link>
                    <Link
                      to="/stress"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      D4
                    </Link>
                    <Link
                      to="/therapy"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      D5
                    </Link>
                    <Link
                      to="/relaxation"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      D6
                    </Link>
                    <Link
                      to="/social-skillsining"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      D7
                    </Link>
                  </li>
                </ul> */}

                {/* Children Mental Health */}
                {/* <ul>
                  <li>
                    <Link
                      to="/mental-health"
                      className="font-semibold text-md  hover:text-blue-700"
                    >
                      Demo Heading
                    </Link>
                    <Link
                      to="/add"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Demo
                    </Link> */}
                {/* <Link
                      to="/autism"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Autism
                    </Link>
                    <Link
                      to="/incontinence"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Incontinence
                    </Link>
                    <Link
                      to="/behaviour-issues"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Behaviour Issues
                    </Link>
                    <Link
                      to="/conduct-disorder"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Conduct Disorder
                    </Link>
                    <Link
                      to="/learning-disability"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Learning Disability
                    </Link> */}
                {/* </li> */}
                {/* </ul> */}

                {/* De-addiction Programme */}
                {/* <ul>
                  <li>
                    <Link
                      to="/De-addictionProgr"
                      className="font-semibold text-md  hover:text-blue-700"
                    >
                      Demo Heading
                    </Link>
                    <Link
                      to="/motivation"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      De12
                    </Link> */}
                {/* <Link
                      to="/relapse-prevention"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Relapse Prevention Therapy
                    </Link>
                    <Link
                      to="/individual-counselling"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Individual Counselling
                    </Link>
                    <Link
                      to="/motivation-by-hypnosis"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Motivation Enhancement By Hypnosis
                    </Link> */}
                {/* </li>
                </ul> */}

                {/* Sexual Wellness */}
                {/* <ul>
                  <li>
                    <Link
                      to="/sexual-wellness"
                      className="font-semibold text-md  hover:text-blue-700"
                    >
                      Demo Heading
                    </Link>
                    <Link
                      to="/premature"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Dee334
                    </Link> */}
                {/* <Link
                      to="/erectile-dysfunction"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Erectile Dysfunction
                    </Link>
                    <Link
                      to="/reduced-high-libido"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Reduced Or High Libido
                    </Link>
                    <Link
                      to="/anorgasmia"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Anorgasmia
                    </Link>
                    <Link
                      to="/dhat-syndrome"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      DHAT Syndrome
                    </Link> */}
                {/* </li>
                </ul> */}

                {/* Sleep Clinic */}
                {/* <ul>
                  <li>
                    <Link
                      to="/sleep"
                      className="font-semibold text-md  hover:text-blue-700"
                    >
                      Demo Heading
                    </Link>
                    <Link
                      to="/insoia"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      test1
                    </Link> */}
                {/* <Link
                      to="/disturbed-sleep"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Disturbed Sleep
                    </Link>
                    <Link
                      to="/non-refreshing-sleep"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Non-Refreshing Sleep
                    </Link>
                    <Link
                      to="/sleep-talking"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Sleep Talking
                    </Link>
                    <Link
                      to="/sleep-walking"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Sleep Walking
                    </Link>
                    <Link
                      to="/nightmares"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Nightmares
                    </Link> */}
                {/* </li>
                </ul> */}

                {/* Headache Clinic */}
                {/* <ul>
                  <li>
                    <Link
                      to="/headache"
                      className="font-semibold text-md  hover:text-blue-700"
                    >
                      Demo Heading
                    </Link>
                    <Link
                      to="/migrai"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Demmoooo
                    </Link> */}
                {/* <Link
                      to="/tension-headache"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Tension Headache
                    </Link> */}
                {/* </li>
                </ul> */}

                {/* Epilepsy Clinic */}
                {/* <ul>
                  <li>
                    <Link
                      to="/epilepsy"
                      className="font-semibold text-md  hover:text-blue-700"
                    >
                      Demoooooooo
                    </Link>
                    <Link
                      to="/seize"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Demo
                    </Link>
                  </li>
                </ul> */}
              </div>
            </div>
          )}
        </div>

        {/* ✅ Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 top-30 z-50 bg-white overflow-y-auto transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "block" : "hidden"}`}
        >
          <div className="overflow-y-auto  py-10 px-10">
            <ul className="flex flex-col text-lg space-y-4">
              <li>
                <Link
                  to="/"
                  onClick={toggleMobileMenu}
                  className="block py-2 px-3 text-black hover:bg-gray-100"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleMobileMenu}
                  to="/about"
                  className="block py-2 px-3 text-black hover:bg-gray-100"
                >
                  About
                </Link>
              </li>
              {/* <li>
                <button
                  onClick={toggleDropdown}
                  className="flex justify-between w-full py-2 px-3 text-black hover:bg-gray-100"
                >
                  Treatment
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </li> */}

              <li>
                <button
                  onClick={toggleNavbarDropdownservicestwo}
                  className="flex justify-between w-full py-2 px-3 text-black hover:bg-gray-100"
                >
                  Treatments
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-200 ${isDropdownNavbarOpenservicestwo ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  onClick={toggleMobileMenu}
                  className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm  mt-2 ${isDropdownNavbarOpenservicestwo ? "block" : "hidden"}`}
                >
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <Link
                        to="/ArdsTreatment"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        ARDS Treatment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/AsthmaTreatment"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Asthma Treatment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/BronchialAsthma"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Bronchial Asthma Treatment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ChronicCough"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Chronic Cough Treatment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/COPD"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        COPD
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/DiabetesTreatment"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Diabetes Treatment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Fever"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Fever Treatment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/FluTreatment"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Flu Treatment
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/GeneralPhysician"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        General Physician
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Hypertension"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Hypertension Treatment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/InterstitialLung"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Interstitial Lung Disease Treatment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/LungCancer"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Lung Cancer
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ObstructiveSleep"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Obstructive Sleep Apnea (OSA)
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/PleuralEffusion"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Pleural Effusion
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/PneumoniaTreatment"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Pneumonia Treatment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/PreventiveCardiology"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Preventive Cardiology Treatment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/RespiratoryFailure"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Respiratory Failure Treatment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/RespiratoryAllergy"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Respiratory Allergy Treatment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Sarcoidosis"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Sarcoidosis
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/SleepDisordered"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Sleep Disordered Breathing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Tuberculosis"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Tuberculosis (TB) Treatment
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <button
                  onClick={toggleNavbarDropdownservices}
                  className="flex justify-between w-full py-2 px-3 text-black hover:bg-gray-100"
                >
                  Procedures
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-200 ${isDropdownNavbarOpenservices ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  onClick={toggleMobileMenu}
                  className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm  mt-2 ${isDropdownNavbarOpenservices ? "block" : "hidden"}`}
                >
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <Link
                        to="/AllergyTestingImmunotherapy"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Allergy Testing & Immunotherapy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Bronchoscopy"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Bronchoscopy
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/Thoracoscopy"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Thoracoscopy
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/PulmonaryFunction"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Pulmonary Function Testing
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/IntercostalDrainage "
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Intercostal Drainage Tube Insertion
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/LungBiopsy"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Lung Biopsy
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/PleuralBiopsy"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Pleural Biopsy
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/Pleurodesis"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Pleurodesis
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/EBUSTBNA"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        EBUS-TBNA
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/FENO"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        FENO(Breath Test)
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/TrachealStenting"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Tracheal Stenting
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/BronchialArtery"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Bronchial Artery Embolization
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/BiPAPCPAP"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        BiPAP & CPAP
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/ChestDrain"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Chest Drain Insertion
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/DLCO"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        DLCO
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/ForcedOscillometry"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Forced Oscillometry Technique
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/Immunotherapy"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Immunotherapy
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/PleuralProcedures"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Pleural Procedures
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/RespiratoryVaccines"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Respiratory Vaccines
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/Polysomnography"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Polysomnography (Sleep Study)
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <button
                  onClick={toggleNavbarDropdown}
                  className="flex justify-between w-full py-2 px-3 text-black hover:bg-gray-100"
                >
                  Media
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-200 ${isDropdownNavbarOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  onClick={toggleMobileMenu}
                  className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 mt-2 ${isDropdownNavbarOpen ? "block" : "hidden"}`}
                >
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <Link
                        to="/Pictures"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Pictures Gallery
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        to="/youtube"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Video Gallery
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Instagram"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Instagram
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  to="/blogs"
                  onClick={toggleMobileMenu}
                  className="block py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-800 md:p-0"
                >
                  Blogs
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/management"
                   onClick={toggleMobileMenu}
                  className="block py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-800 md:p-0"
                >
                  Management
                </Link>
              </li> */}
            </ul>

            <div onClick={toggleMobileMenu}>
              {isDropdownOpen && (
                <div className=" overflow-y-auto pt-10 bg-white ">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <ul>
                      <li>
                        <Link
                          to="/psychiatry"
                          className="font-semibold text-md  hover:text-blue-700"
                        >
                          Psychiatry treatment
                        </Link>
                        <Link
                          to="/depression"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Depression
                        </Link>
                        <Link
                          to="/anxiety"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Anxiety
                        </Link>
                        <Link
                          to="/bipolar-disorder"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Bipolar disorder
                        </Link>
                        <Link
                          to="/schizophrenia"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Schizophrenia
                        </Link>
                        <Link
                          to="/ocd"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          OCD
                        </Link>
                      </li>
                    </ul>

                    {/* Counselling and Therapy */}
                    <ul>
                      <li>
                        <Link
                          to="/counselling-and-therapy"
                          className="font-semibold text-md  hover:text-blue-700"
                        >
                          Counselling and Therapy
                        </Link>
                        <Link
                          to="/cbt"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          CBT
                        </Link>
                        <Link
                          to="/dbt"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          DBT
                        </Link>
                        <Link
                          to="/individual-counselling"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Individual Counselling
                        </Link>
                        <Link
                          to="/stress-management"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Stress Management
                        </Link>
                        <Link
                          to="/behaviour-therapy"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Behaviour Therapy
                        </Link>
                        <Link
                          to="/relaxation-therapy"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Relaxation Therapy
                        </Link>
                        <Link
                          to="/social-skills-training"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Social Skills Training
                        </Link>
                      </li>
                    </ul>

                    {/* Children Mental Health */}
                    <ul>
                      <li>
                        <Link
                          to="/mental-health-children"
                          className="font-semibold text-md  hover:text-blue-700"
                        >
                          Mental Health Issues and Children
                        </Link>
                        <Link
                          to="/adhd"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          ADHD
                        </Link>
                        <Link
                          to="/autism"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Autism
                        </Link>
                        <Link
                          to="/incontinence"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Incontinence
                        </Link>
                        <Link
                          to="/behaviour-issues"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Behaviour Issues
                        </Link>
                        <Link
                          to="/conduct-disorder"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Conduct Disorder
                        </Link>
                        <Link
                          to="/learning-disability"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Learning Disability
                        </Link>
                      </li>
                    </ul>

                    {/* De-addiction Programme */}
                    <ul>
                      <li>
                        <Link
                          to="/De-addictionProgramme"
                          className="font-semibold text-md  hover:text-blue-700"
                        >
                          De-addiction Programme
                        </Link>
                        <Link
                          to="/motivation-enhancement"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Motivation Enhancement Therapy
                        </Link>
                        <Link
                          to="/relapse-prevention"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Relapse Prevention Therapy
                        </Link>
                        <Link
                          to="/individual-counselling"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Individual Counselling
                        </Link>
                        <Link
                          to="/motivation-by-hypnosis"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Motivation Enhancement By Hypnosis
                        </Link>
                      </li>
                    </ul>

                    {/* Sexual Wellness */}
                    <ul>
                      <li>
                        <Link
                          to="/sexual-wellness-program"
                          className="font-semibold text-md  hover:text-blue-700"
                        >
                          Sexual Wellness Program
                        </Link>
                        <Link
                          to="/premature-ejaculation"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Premature Ejaculation
                        </Link>
                        <Link
                          to="/erectile-dysfunction"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Erectile Dysfunction
                        </Link>
                        <Link
                          to="/reduced-high-libido"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Reduced Or High Libido
                        </Link>
                        <Link
                          to="/anorgasmia"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Anorgasmia
                        </Link>
                        <Link
                          to="/dhat-syndrome"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          DHAT Syndrome
                        </Link>
                      </li>
                    </ul>

                    {/* Sleep Clinic */}
                    <ul>
                      <li>
                        <Link
                          to="/sleep-clinic"
                          className="font-semibold text-md  hover:text-blue-700"
                        >
                          Sleep Clinic
                        </Link>
                        <Link
                          to="/insomnia"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Insomnia
                        </Link>
                        <Link
                          to="/disturbed-sleep"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Disturbed Sleep
                        </Link>
                        <Link
                          to="/non-refreshing-sleep"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Non-refreshing Sleep
                        </Link>
                        <Link
                          to="/sleep-talking"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Sleep Talking
                        </Link>
                        <Link
                          to="/sleep-walking"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Sleep Walking
                        </Link>
                        <Link
                          to="/nightmares"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Nightmares
                        </Link>
                      </li>
                    </ul>

                    {/* Headache Clinic */}
                    <ul>
                      <li>
                        <Link
                          to="/headache-clinic"
                          className="font-semibold text-md  hover:text-blue-700"
                        >
                          Headache Clinic
                        </Link>
                        <Link
                          to="/migraine"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Migraine
                        </Link>
                        <Link
                          to="/tension-headache"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Tension Headache
                        </Link>
                      </li>
                    </ul>

                    {/* Epilepsy Clinic */}
                    <ul>
                      <li>
                        <Link
                          to="/epilepsy-clinic"
                          className="font-semibold text-md  hover:text-blue-700"
                        >
                          Epilepsy Clinic
                        </Link>
                        <Link
                          to="/seizure"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Seizure
                        </Link>
                      </li>
                    </ul>
                    {/* Add other mega menu sections here for mobile if needed */}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderMain;
