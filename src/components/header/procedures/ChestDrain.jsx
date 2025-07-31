import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/ChestDrain.jpg",
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

const ChestDrain = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          <strong>Chest Drain Insertion (Thoracostomy)</strong>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 text-gray-700">
          <div className="lg:w-3/4 space-y-6">
            <h2 className="text-xl font-bold">Overview</h2>
            <p>
              Chest drain insertion, also known as thoracostomy, is a medical procedure used to remove air, fluid, or pus from the pleural space (the area between the lungs and the chest wall). This procedure is essential in treating conditions such as pneumothorax (collapsed lung), pleural effusion (fluid accumulation), and empyema (infection).
            </p>

            <h2 className="text-xl font-bold">Indications for Chest Drain Insertion</h2>
            <ul className="list-disc pl-6">
              <li><strong>Pneumothorax:</strong> Air accumulation in the pleural space, causing lung collapse.</li>
              <li><strong>Pleural Effusion:</strong> Excess fluid buildup due to heart failure, infections, or malignancy.</li>
              <li><strong>Empyema:</strong> Pus in the pleural space, often from pneumonia or abscess.</li>
              <li><strong>Hemothorax:</strong> Blood in the pleural space, typically due to trauma or surgery.</li>
            </ul>

            <h2 className="text-xl font-bold">Procedure</h2>
            <p><strong>Preparation:</strong> The patient is usually positioned sitting up or at a 30-45° angle. The area is sterilized and local anesthesia is administered.</p>
            <p><strong>Insertion:</strong> A small incision is made between the ribs, typically at the mid-axillary line. A chest tube is inserted into the pleural space and connected to a drainage system.</p>
            <p><strong>Securing the Tube:</strong> The tube is fixed with sutures or adhesive, and a sterile dressing is applied.</p>
            <p><strong>Post-Procedure Monitoring:</strong> Vital signs are monitored, and imaging (like X-rays) is done to verify tube placement and lung condition.</p>

            <h2 className="text-xl font-bold">Risks and Complications</h2>
            <ul className="list-disc pl-6">
              <li><strong>Infection:</strong> At the insertion site or within the pleural cavity.</li>
              <li><strong>Bleeding:</strong> Possible damage to blood vessels during insertion.</li>
              <li><strong>Organ Injury:</strong> Rare but possible injury to the lung or diaphragm.</li>
              <li><strong>Re-expansion Pulmonary Edema:</strong> A rare but serious complication when a lung re-expands too quickly.</li>
            </ul>

            <h2 className="text-xl font-bold">Conclusion</h2>
            <p>
              Chest drain insertion is a critical and often life-saving procedure for managing serious lung and pleural conditions. It relieves symptoms, restores lung function, and prevents further complications. If advised this procedure, consult with your healthcare provider for a thorough understanding and care plan.
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

export default ChestDrain;