import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import thoracoscopyImage from "../../../assets/procedures/thora2.png";

const data = {
  bgImage: thoracoscopyImage,
  sidebarLinks: [
    { title: "Allergy Testing & Immunotherapy", link: "/AllergyTestingImmunotherapy" },
    { title: "Bronchoscopy", link: "/Bronchoscopy" },
    { title: "Thoracoscopy", link: "/Thoracoscopy" },
    { title: "Pulmonary Function Testing", link: "/PulmonaryFunction" },
    { title: "Intercostal Drainage Tube Insertion", link: "/IntercostalDrainage" },
    { title: "Lung Biopsy", link: "/LungBiopsy" },
    { title: "Pleural Biopsy", link: "/PleuralBiopsy" },
    { title: "Pleurodesis", link: "/Pleurodesis" },
    { title: "EBUS-TBNA", link: "/EBUSTBNA" },
    { title: "FENO (Breath Test)", link: "/FENO" },
    { title: "Tracheal Stenting", link: "/TrachealStenting" },
    { title: "Bronchial Artery Embolization", link: "/BronchialArtery" },
    { title: "BiPAP & CPAP", link: "/BiPAPCPAP" },
    { title: "Chest Drain Insertion", link: "/ChestDrain" },
    { title: "DLCO", link: "/DLCO" },
    { title: "Forced Oscillometry Technique", link: "/ForcedOscillometry" },
    { title: "Immunotherapy", link: "/Immunotherapy" },
    { title: "Pleural Procedures", link: "/PleuralProcedures" },
    { title: "Respiratory Vaccines", link: "/RespiratoryVaccines" },
    { title: "Polysomnography (Sleep Study)", link: "/Polysomnography" },
  ],
};

const Thoracoscopy = () => {
  return (
     <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          <strong>Thoracoscopy: Minimally Invasive Chest Procedure</strong>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="text-xl font-bold">What is Thoracoscopy?</h2>
            <p>
              Thoracoscopy is a <strong>minimally invasive surgical procedure</strong> used to diagnose and treat conditions inside the chest cavity, especially within the pleural space around the lungs. It involves inserting a thin, flexible instrument called a <strong>thoracoscope</strong>—equipped with a camera and light—through a small incision between the ribs. This allows doctors to visualize the lungs and chest structures on a monitor.
            </p>

            <h2 className="text-xl font-bold">When is Thoracoscopy Recommended?</h2>
            <ul className="list-disc pl-6">
              <li>Diagnosing and treating pleural effusions</li>
              <li>Assessing pleural thickening</li>
              <li>Investigating or managing lung infections</li>
              <li>Performing pleural biopsies</li>
              <li>Managing or removing lung tumors</li>
              <li>Conducting pleurodesis to prevent fluid buildup</li>
            </ul>

            <h2 className="text-xl font-bold">Procedure Overview</h2>
            <ul className="list-disc pl-6">
              <li>Performed under general anesthesia in a hospital operating room</li>
              <li>1 to 3 small incisions are made between the ribs</li>
              <li>The thoracoscope is inserted to examine the chest cavity</li>
              <li>Additional tools may be inserted for biopsies or treatment</li>
              <li>One lung may be deflated to improve visibility</li>
              <li>Air may be introduced into the pleural space for better access</li>
            </ul>

            <h2 className="text-xl font-bold">Recovery & Hospital Stay</h2>
            <ul className="list-disc pl-6">
              <li>Hospital stay typically ranges from 1 to 4 days</li>
              <li>Minimally invasive approach leads to less pain and quicker recovery</li>
              <li>Lower risk of complications compared to open chest surgery</li>
            </ul>

            <h2 className="text-xl font-bold">Why Choose Thoracoscopy?</h2>
            <ul className="list-disc pl-6">
              <li>Enables precise diagnosis and targeted treatment</li>
              <li>Smaller incisions lead to quicker healing</li>
              <li>Reduced risk of infection and other complications</li>
              <li>More comfortable recovery and shorter hospital stays</li>
            </ul>

            <h2 className="text-xl font-bold">✅ Summary</h2>
            <p>
              Thoracoscopy is a safe, effective, and minimally invasive procedure for diagnosing and treating various chest conditions. It allows direct access to the pleural cavity with less discomfort and faster recovery, making it an essential tool in modern thoracic medicine.
            </p>
          </div>

          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Procedures</h2>
            <ul className="space-y-4">
              {data.sidebarLinks.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-blue-600 hover:text-blue-800 cursor-pointer"
                >
                  <FaAngleRight className="mr-2" />
                  <Link to={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thoracoscopy;