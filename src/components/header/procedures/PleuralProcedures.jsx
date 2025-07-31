import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/PleuralProcedures.jpeg", // Update with a pleural-related image if available
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

const PleuralProcedures = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          <strong>Pleural Procedures</strong>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 text-gray-700">
          <div className="lg:w-3/4 space-y-6">
            <h2 className="text-xl font-bold">Overview</h2>
            <p>
              Pleural procedures are medical interventions performed on the pleura, the thin membrane surrounding the lungs. These procedures are primarily used to diagnose and treat conditions affecting the pleural space, such as pleural effusion, pneumothorax, and pleural infections.
            </p>

            <h2 className="text-xl font-bold">Common Types of Pleural Procedures</h2>
            <h3 className="font-semibold">1. Thoracentesis</h3>
            <p><strong>Purpose:</strong> To remove excess fluid or air from the pleural space.</p>
            <p><strong>Procedure:</strong> A needle is inserted through the chest wall into the pleural space to drain fluid or air. It may also be used diagnostically.</p>

            <h3 className="font-semibold">2. Chest Tube Insertion (Tube Thoracostomy)</h3>
            <p><strong>Purpose:</strong> To continuously drain fluid or air from the pleural space.</p>
            <p><strong>Procedure:</strong> A flexible tube is inserted through the chest wall into the pleural cavity, often used for large effusions or pneumothorax.</p>

            <h3 className="font-semibold">3. Pleurodesis</h3>
            <p><strong>Purpose:</strong> To prevent recurrence of pleural effusion or pneumothorax.</p>
            <p><strong>Procedure:</strong> A sclerosing agent (e.g., talc) is introduced into the pleural space to cause pleural layers to adhere.</p>

            <h3 className="font-semibold">4. Video-Assisted Thoracoscopic Surgery (VATS)</h3>
            <p><strong>Purpose:</strong> To diagnose and treat pleural or lung conditions.</p>
            <p><strong>Procedure:</strong> A minimally invasive surgery using a camera and small instruments inserted through small incisions in the chest.</p>

            <h3 className="font-semibold">5. Decortication</h3>
            <p><strong>Purpose:</strong> To remove fibrous tissue from the pleura, especially in empyema cases.</p>
            <p><strong>Procedure:</strong> Surgical removal of the thickened pleural membrane to restore lung function.</p>

            <h2 className="text-xl font-bold">Indications for Pleural Procedures</h2>
            <ul className="list-disc pl-6">
              <li><strong>Pleural Effusion:</strong> Fluid buildup due to heart failure, pneumonia, or cancer.</li>
              <li><strong>Pneumothorax:</strong> Air in the pleural space causing lung collapse.</li>
              <li><strong>Infections:</strong> Such as empyema needing drainage or surgery.</li>
              <li><strong>Tumors:</strong> For evaluation or treatment of pleural tumors or metastases.</li>
            </ul>

            <h2 className="text-xl font-bold">Risks and Considerations</h2>
            <ul className="list-disc pl-6">
              <li><strong>Infection:</strong> Possible introduction of infection during the procedure.</li>
              <li><strong>Bleeding:</strong> Risk of vessel injury near the pleura.</li>
              <li><strong>Lung Injury:</strong> Possible lung puncture or damage.</li>
              <li><strong>Re-expansion Pulmonary Edema:</strong> Rare but serious complication from rapid drainage.</li>
            </ul>

            <h2 className="text-xl font-bold">Conclusion</h2>
            <p>
              Pleural procedures are crucial for diagnosing and managing pleural space conditions. Proper technique, experience, and monitoring are essential to reduce risks and ensure safe outcomes. Always consult a healthcare professional for guidance tailored to your condition.
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

export default PleuralProcedures;