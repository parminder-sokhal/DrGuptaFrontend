import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ebusImage from '../../../assets/procedures/ebus.jpg';


const data = {
  bgImage: ebusImage, // Replace with actual EBUS image if available
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

const EBUSTBNA = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          <strong>Endobronchial Ultrasound-Guided Transbronchial Needle Aspiration (EBUS-TBNA)</strong>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 text-gray-700">
          <div className="lg:w-3/4 space-y-6">
            <h2 className="text-xl font-bold">Overview</h2>
            <p>
              Endobronchial ultrasound-guided transbronchial needle aspiration (EBUS-TBNA) is a minimally invasive yet highly effective procedure used to visualize and biopsy structures within and adjacent to the tracheobronchial tree. It allows pulmonologists to access mediastinal, hilar, and central thoracic lesions, providing both diagnostic and staging information in real time without the need for open surgery.
            </p>

            <h2 className="text-xl font-bold">Procedure Details</h2>
            <p>
              EBUS-TBNA involves the insertion of a bronchoscope equipped with an ultrasound probe into the trachea or esophagus. The ultrasound enables real-time visualization of structures beyond the airway walls. Once the target lymph nodes or lesions are identified, a fine needle is guided through the bronchoscope channel to obtain tissue samples.
            </p>

            <h2 className="text-xl font-bold">Key Capabilities</h2>
            <ul className="list-disc pl-6">
              <li>Real-time imaging for precise needle placement</li>
              <li>Targeted biopsy of lymph nodes or lesions</li>
              <li>Ability to stage lung cancer accurately</li>
              <li>Diagnose infectious or inflammatory conditions</li>
            </ul>

            <h2 className="text-xl font-bold">Clinical Indications</h2>
            <ul className="list-disc pl-6">
              <li>Staging of lung cancer</li>
              <li>Diagnosing sarcoidosis</li>
              <li>Evaluating unexplained lymphadenopathy</li>
              <li>Diagnosing tuberculosis or fungal infections</li>
              <li>Assessment of mediastinal or hilar masses</li>
            </ul>

            <h2 className="text-xl font-bold">Types of EBUS Techniques</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Radial Probe EBUS (RP-EBUS):</strong> Utilizes a rotating ultrasound probe. Ideal for visualizing and sampling peripheral pulmonary lesions (e.g., small nodules, masses). Safer alternative to CT-guided biopsies, especially for lesions distant from the chest wall.
              </li>
              <li>
                <strong>Convex Probe EBUS (CP-EBUS) or Linear EBUS:</strong> Most commonly used for real-time guided needle aspiration. Suitable for mediastinal and hilar lymph nodes. Integrated needle channel allows simultaneous ultrasound and biopsy.
              </li>
            </ol>

            <h2 className="text-xl font-bold">Benefits of EBUS-TBNA</h2>
            <ul className="list-disc pl-6">
              <li>Minimally invasive: Avoids the need for surgical mediastinoscopy</li>
              <li>Accurate diagnosis and staging: High sensitivity and specificity</li>
              <li>Real-time guidance: Reduces sampling errors</li>
              <li>Outpatient procedure: Typically performed under moderate sedation or general anesthesia with same-day discharge</li>
              <li>Fewer complications compared to traditional diagnostic methods</li>
            </ul>

            <h2 className="text-xl font-bold">Recovery & Risks</h2>
            <p><strong>Recovery:</strong> Most patients tolerate the procedure well and can return to normal activities within 24 hours.</p>
            <p><strong>Risks (Rare):</strong></p>
            <ul className="list-disc pl-6">
              <li>Mild bleeding</li>
              <li>Temporary sore throat or hoarseness</li>
              <li>Rarely, infection or pneumothorax</li>
            </ul>

            <h2 className="text-xl font-bold">Conclusion</h2>
            <p>
              EBUS-TBNA is a cornerstone technique in modern pulmonary medicine, offering a safe, accurate, and efficient means of diagnosing and staging thoracic diseases. With its ability to access hard-to-reach areas using real-time imaging, EBUS has significantly improved outcomes for patients with lung cancer, infectious diseases, and other mediastinal conditions.
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

export default EBUSTBNA;