import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import intercostalImage from '../../../assets/procedures/intercostal2.png';

const data = {
  bgImage: intercostalImage, // Update to specific Intercostal Drainage image if available
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

const IntercostalDrainage = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          <strong>Intercostal Drainage Tube Insertion (Chest Tube Insertion)</strong>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="text-xl font-bold">Overview</h2>
            <p>
              Intercostal drainage tube insertion—commonly known as chest tube insertion—is a life-saving medical procedure used to evacuate air, fluid, or pus from the pleural cavity (the space between the lungs and chest wall). This technique is crucial for treating a variety of conditions that impair normal lung function and cause respiratory distress.
            </p>

            <h2 className="text-xl font-bold">When Is It Needed?</h2>
            <ul className="list-disc pl-6">
              <li>Pneumothorax – Air trapped in the pleural space causing lung collapse</li>
              <li>Pleural Effusion – Build-up of excess fluid around the lungs</li>
              <li>Hemothorax – Accumulation of blood in the pleural space</li>
              <li>Empyema – Infection leading to pus in the pleural cavity</li>
              <li>Post-surgical drainage – After thoracic or cardiac procedures</li>
            </ul>
            <p>
              If left untreated, these conditions can cause severe breathing difficulties, infections, or even be life-threatening.
            </p>

            <h2 className="text-xl font-bold">How the Procedure Works</h2>
            <ul className="list-disc pl-6">
              <li><strong>Preparation:</strong> The patient is typically given local anesthesia. Sedation may be used in some cases.</li>
              <li><strong>Insertion Site:</strong> A small incision is made between the ribs, usually in the mid-axillary line (side of the chest).</li>
              <li><strong>Tube Insertion:</strong> A sterile, flexible tube is inserted through the incision into the pleural space.</li>
              <li><strong>Drainage System:</strong> The chest tube is connected to a sealed drainage system (often water-sealed or suction-assisted), which helps safely remove trapped air, blood, fluid, or pus.</li>
              <li><strong>Imaging Guidance:</strong> Ultrasound or X-ray imaging ensures accurate tube placement.</li>
            </ul>

            <h2 className="text-xl font-bold">Post-Procedure Care</h2>
            <ul className="list-disc pl-6">
              <li>Monitoring drainage quantity and nature</li>
              <li>Confirming lung re-expansion via chest X-ray</li>
              <li>Preventing complications like infection or dislodgement</li>
              <li>Managing pain and ensuring patient comfort</li>
            </ul>
            <p>The duration the tube remains in place depends on the condition and rate of recovery.</p>

            <h2 className="text-xl font-bold">Benefits of Intercostal Drainage</h2>
            <ul className="list-disc pl-6">
              <li>Rapid relief from breathlessness and chest pain</li>
              <li>Facilitates lung re-expansion and better oxygenation</li>
              <li>Prevents infections and complications</li>
              <li>Speeds up recovery post-surgery or trauma</li>
            </ul>

            <h2 className="text-xl font-bold">Risks & Complications (Though Rare)</h2>
            <ul className="list-disc pl-6">
              <li>Bleeding</li>
              <li>Infection at insertion site</li>
              <li>Lung injury or re-expansion pulmonary edema</li>
              <li>Tube displacement or blockage</li>
            </ul>
            <p>
              With proper technique and sterile conditions, these risks are minimal and manageable.
            </p>

            <h2 className="text-xl font-bold">Why Choose Us?</h2>
            <p>
              At <strong>DrRobinGupta</strong>, our expert team of pulmonologists, surgeons, and radiologists perform intercostal drainage using advanced imaging and strict aseptic techniques. We ensure optimal results with 24/7 emergency care, personalized treatment plans, and comprehensive post-procedure support.
            </p>

            <h2 className="text-xl font-bold">✅ Summary</h2>
            <p>
              Intercostal drainage is a critical procedure that provides fast, effective relief from life-threatening chest conditions. With experienced professionals and modern facilities, we ensure a safe and comfortable experience for every patient.
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

export default IntercostalDrainage;