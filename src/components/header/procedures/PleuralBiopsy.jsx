import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/PleuralBiopsy.jpeg", // Update this to a specific pleural biopsy image if available
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

const PleuralBiopsy = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          <strong>Pleural Biopsy</strong>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="text-xl font-bold">Overview</h2>
            <p>
              A pleural biopsy is a diagnostic procedure used to obtain a small tissue sample from the pleura—the thin membranes lining the lungs and chest cavity. It plays a vital role in diagnosing pleural conditions such as infections, inflammations, and cancers like mesothelioma or metastatic lung cancer.
            </p>

            <h2 className="text-xl font-bold">Why Is It Done?</h2>
            <ul className="list-disc pl-6">
              <li>Imaging or fluid analysis is inconclusive</li>
              <li>Suspected diseases like tuberculosis, inflammation, or cancer</li>
              <li>Need for histological confirmation to plan treatment</li>
            </ul>

            <h2 className="text-xl font-bold">Types of Pleural Biopsy Methods</h2>
            <ul className="list-disc pl-6">
              <li>
                <strong>Needle Biopsy:</strong> A fine needle is inserted through the chest wall, often guided by ultrasound or CT.
              </li>
              <li>
                <strong>Thoracoscopic (VATS) Biopsy:</strong> A thoracoscope is inserted via a small incision between ribs to visualize and sample tissue.
              </li>
            </ul>

            <h2 className="text-xl font-bold">Procedure Details</h2>
            <ul className="list-disc pl-6">
              <li>Usually under local anesthesia with sedation</li>
              <li>Minimally invasive, often a day-care procedure</li>
              <li>Tissue sent for histopathological analysis</li>
            </ul>

            <h2 className="text-xl font-bold">Causes for Recommending a Pleural Biopsy</h2>
            <ul className="list-disc pl-6">
              <li><strong>Diagnostic Uncertainty:</strong> When imaging or fluid testing is inconclusive</li>
              <li><strong>Suspected Diseases:</strong> 
                <ul className="list-disc ml-6">
                  <li>Tuberculosis</li>
                  <li>Mesothelioma</li>
                  <li>Metastatic Cancer</li>
                  <li>Autoimmune diseases (e.g., lupus, rheumatoid arthritis)</li>
                </ul>
              </li>
            </ul>

            <h2 className="text-xl font-bold">Risk Factors</h2>
            <ul className="list-disc pl-6">
              <li>Lung or pleural disease history</li>
              <li>Bleeding disorders or blood thinners</li>
              <li>Pleural adhesions</li>
              <li>Pulmonary hypertension</li>
              <li>Advanced age</li>
            </ul>

            <h2 className="text-xl font-bold">Treatment & Benefits</h2>

            <h3 className="font-bold">1. Diagnostic Clarity</h3>
            <p>Helps confirm the cause of pleural abnormalities and differentiate between benign and malignant conditions.</p>

            <h3 className="font-bold">2. Guides Treatment</h3>
            <ul className="list-disc pl-6">
              <li>Chemotherapy</li>
              <li>Radiation therapy</li>
              <li>Anti-tubercular treatment</li>
              <li>Immunosuppressive therapy</li>
            </ul>

            <h3 className="font-bold">3. Complication Management</h3>
            <p>
              Complications are rare and manageable:
            </p>
            <ul className="list-disc pl-6">
              <li>Bleeding</li>
              <li>Pneumothorax (collapsed lung)</li>
              <li>Supportive care like chest tube insertion or blood transfusion may be needed</li>
            </ul>

            <h3 className="font-bold">4. Pain Relief & Recovery</h3>
            <p>
              Minor discomfort may occur post-procedure and can be managed with medication, rest, and proper positioning.
            </p>

            <h2 className="text-xl font-bold">✅ Conclusion</h2>
            <p>
              Pleural biopsy is an essential procedure for diagnosing pleural diseases. It offers clarity, guides treatment decisions, and is generally safe with low risk of complications.
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

export default PleuralBiopsy;