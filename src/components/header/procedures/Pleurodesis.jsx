import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import pludeImage from '../../../assets/procedures/pleurodesis.png';

const data = {
  bgImage: pludeImage, // Replace with actual pleurodesis image if available
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

const Pleurodesis = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          <strong>Pleurodesis</strong>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="text-xl font-bold">Overview</h2>
            <p>
              Pleurodesis is a medical procedure used to prevent the recurrence of pleural effusion (fluid around the lungs) or pneumothorax (collapsed lung). It involves the introduction of a sclerosing agent—such as talc, doxycycline, or bleomycin—into the pleural space. This agent causes inflammation, which leads the pleural layers to stick together, effectively sealing the space to prevent further fluid or air buildup.
            </p>

            <h2 className="text-xl font-bold">When is Pleurodesis Performed?</h2>
            <ul className="list-disc pl-6">
              <li><strong>Recurrent Pleural Effusion:</strong> When fluid buildup returns despite repeated drainage (e.g., thoracentesis).</li>
              <li><strong>Malignant Pleural Effusion:</strong> Often due to cancer; pleurodesis can relieve symptoms like breathlessness and chest discomfort.</li>
              <li><strong>Benign Conditions:</strong> May be used in non-cancerous cases such as:
                <ul className="list-disc ml-6">
                  <li>Recurrent pneumonia</li>
                  <li>Congestive heart failure</li>
                  <li>Autoimmune diseases (e.g., rheumatoid arthritis, lupus)</li>
                </ul>
              </li>
            </ul>

            <h2 className="text-xl font-bold">How is the Procedure Done?</h2>
            <ul className="list-disc pl-6">
              <li><strong>Chemical Pleurodesis:</strong> A sclerosing agent is inserted via a chest tube to cause the pleural layers to adhere.</li>
              <li><strong>Thoracoscopic Pleurodesis (VATS):</strong> Performed under thoracoscopy, this minimally invasive approach allows direct visualization of the pleura for more precise and effective treatment.</li>
            </ul>
            <p>
              Both methods are generally done under local anesthesia with sedation. A chest tube is often placed beforehand to drain existing fluid and improve lung expansion.
            </p>

            <h2 className="text-xl font-bold">Risk Factors</h2>
            <ul className="list-disc pl-6">
              <li><strong>Underlying Condition:</strong> Cancer-related effusions may be harder to manage.</li>
              <li><strong>Pleural Adhesions:</strong> Scarring or pre-existing adhesions can reduce the effectiveness.</li>
              <li><strong>General Health:</strong> Age, overall health, and comorbidities impact recovery and success.</li>
              <li><strong>Bleeding Risks:</strong> Patients with bleeding disorders or on anticoagulants are at higher risk for complications.</li>
            </ul>

            <h2 className="text-xl font-bold">Benefits of Pleurodesis</h2>
            <ul className="list-disc pl-6">
              <li>Prevents recurrent fluid or air buildup</li>
              <li>Improves breathing and comfort</li>
              <li>Reduces the need for repeated procedures</li>
              <li>Enhances overall quality of life</li>
            </ul>
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

export default Pleurodesis;