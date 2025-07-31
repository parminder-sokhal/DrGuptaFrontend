import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/DLCO.jpg",
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

const DLCO = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          <strong>DLCO Test (Diffusing Capacity of the Lungs for Carbon Monoxide)</strong>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 text-gray-700">
          <div className="lg:w-3/4 space-y-6">
            <h2 className="text-xl font-bold">Overview</h2>
            <p>
              DLCO, or Diffusing Capacity of the Lungs for Carbon Monoxide, is a pulmonary function test used to assess how efficiently gases like oxygen and carbon dioxide are exchanged in the lungs. It evaluates the transfer of gas from air sacs to blood vessels in the lungs.
            </p>

            <h2 className="text-xl font-bold">Importance of DLCO Testing</h2>
            <p>This test is essential in diagnosing and managing several lung conditions, including:</p>
            <ul className="list-disc pl-6">
              <li><strong>Interstitial Lung Disease:</strong> Affects the tissue around the lung's air sacs.</li>
              <li><strong>Chronic Obstructive Pulmonary Disease (COPD):</strong> Restricts airflow and makes breathing difficult.</li>
              <li><strong>Pulmonary Hypertension:</strong> Elevated pressure in the lung’s blood vessels.</li>
              <li><strong>Emphysema:</strong> Damage to air sacs causing difficulty in breathing.</li>
            </ul>

            <h2 className="text-xl font-bold">How the DLCO Test Works</h2>
            <p><strong>Preparation:</strong> Patients should avoid smoking and large meals prior to testing. Some medications may be paused as advised by a physician.</p>
            <p><strong>Procedure:</strong> The patient inhales a small amount of carbon monoxide mixed with a tracer gas (like helium), holds the breath briefly, and then exhales. A spirometer measures how much CO remains, indicating the lung's diffusing capacity.</p>
            <p><strong>Results Interpretation:</strong> The DLCO value (in mL/min/mmHg) is compared to normal ranges that vary by age, sex, height, and ethnicity.</p>

            <h2 className="text-xl font-bold">Factors Affecting DLCO Results</h2>
            <ul className="list-disc pl-6">
              <li><strong>Lung Volume:</strong> Lower volumes can decrease DLCO.</li>
              <li><strong>Hemoglobin Levels:</strong> Low hemoglobin (anemia) can reduce binding of CO.</li>
              <li><strong>Smoking:</strong> Can negatively impact gas exchange and DLCO accuracy.</li>
              <li><strong>Altitude:</strong> High altitudes can affect oxygen levels and skew results.</li>
            </ul>

            <h2 className="text-xl font-bold">Conclusion</h2>
            <p>
              DLCO testing is a vital diagnostic tool in respiratory care. It provides key insights into lung function and can guide treatment strategies for various pulmonary diseases. If you're experiencing chronic cough or shortness of breath, speak with your healthcare provider about DLCO testing.
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

export default DLCO;