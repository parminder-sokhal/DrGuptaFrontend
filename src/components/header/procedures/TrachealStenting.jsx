import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import trachealImage from '../../../assets/procedures/tracheal.jpg';

const data = {
  bgImage: trachealImage, // Replace with tracheal stenting image if available
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
  ],
};

const TrachealStenting = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          <strong>Tracheal Stenting</strong>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 text-gray-700">
          <div className="lg:w-3/4 space-y-6">
            <h2 className="text-xl font-bold">Overview</h2>
            <p>
              Tracheal stenting is a minimally invasive procedure used to treat narrowing (stenosis) or obstruction of the trachea (windpipe). It involves placing a stent — a small, expandable tube — within the airway to help maintain patency and improve breathing.
            </p>

            <h2 className="text-xl font-bold">Key Highlights</h2>

            <h3 className="text-lg font-semibold">Procedure</h3>
            <p>
              The stent placement is typically performed using a flexible bronchoscope inserted through the mouth or nose and advanced into the trachea. Once the narrowed segment is visualized, the stent — made of either metal or silicone — is carefully deployed and expanded to support the airway and restore airflow.
            </p>

            <h3 className="text-lg font-semibold">Types of Stents</h3>
            <ul className="list-disc pl-6">
              <li><strong>Self-Expandable Metallic Stents (SEMS):</strong> Often used for malignant or more rigid obstructions.</li>
              <li><strong>Silicone Stents:</strong> Preferred in certain benign conditions due to ease of removal and less tissue reaction.</li>
            </ul>
            <p>
              The selection depends on the patient's anatomy, location and severity of the obstruction, and the underlying condition.
            </p>

            <h2 className="text-xl font-bold">Indications</h2>
            <ul className="list-disc pl-6">
              <li>Tumor-related airway obstruction</li>
              <li>Benign tracheal stenosis</li>
              <li>Tracheomalacia (airway collapse)</li>
              <li>Post-surgical or post-radiation strictures</li>
            </ul>

            <h2 className="text-xl font-bold">Benefits</h2>
            <ul className="list-disc pl-6">
              <li>Rapid relief of breathing difficulties</li>
              <li>Avoidance or delay of more invasive surgery</li>
              <li>Improved quality of life in both palliative and therapeutic scenarios</li>
            </ul>

            <h2 className="text-xl font-bold">Potential Complications</h2>
            <p>While generally safe, tracheal stenting may lead to:</p>
            <ul className="list-disc pl-6">
              <li>Stent migration or displacement</li>
              <li>Stent fracture or granulation tissue formation</li>
              <li>Mucous plugging or infection</li>
              <li>Airway irritation or bleeding</li>
            </ul>
            <p>
              Continuous follow-up and bronchoscopic surveillance are essential to manage these risks effectively.
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

export default TrachealStenting;