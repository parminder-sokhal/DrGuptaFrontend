import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/BiPAP.jpg",
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

const BiPAPCPAP = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          <strong>BiPAP and CPAP: Understanding the Differences</strong>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 text-gray-700">
          <div className="lg:w-3/4 space-y-6">
            <h2 className="text-xl font-bold">Overview</h2>
            <p>
              BiPAP (Bilevel Positive Airway Pressure) and CPAP (Continuous Positive Airway Pressure) are both non-invasive ventilation methods used to treat sleep apnea and other respiratory disorders. While they appear similar, their mechanisms and use cases differ significantly.
            </p>

            <h2 className="text-xl font-bold">What is CPAP?</h2>
            <p>
              Continuous Positive Airway Pressure (CPAP) delivers a constant, fixed pressure of air to maintain airway patency during sleep. It’s typically prescribed for obstructive sleep apnea (OSA).
            </p>
            <ul className="list-disc pl-6">
              <li><strong>Single Pressure Setting:</strong> Delivers continuous pressure throughout sleep.</li>
              <li><strong>Usage:</strong> Ideal for uncomplicated OSA cases.</li>
              <li><strong>Benefits:</strong> Improves sleep, reduces snoring, and lowers health risks such as hypertension and heart disease.</li>
            </ul>

            <h2 className="text-xl font-bold">What is BiPAP?</h2>
            <p>
              Bilevel Positive Airway Pressure (BiPAP) offers two pressure levels—higher during inhalation and lower during exhalation. It's typically used in more complex respiratory conditions.
            </p>
            <ul className="list-disc pl-6">
              <li><strong>Dual Pressure Settings:</strong> Supports easier breathing by adjusting air pressure.</li>
              <li><strong>Usage:</strong> Best for central sleep apnea, COPD, or patients uncomfortable with CPAP.</li>
              <li><strong>Benefits:</strong> Eases exhalation, improves oxygen intake, and enhances comfort.</li>
            </ul>

            <h2 className="text-xl font-bold">Comparison of BiPAP and CPAP</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border text-left text-sm text-gray-700">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-2 border">Feature</th>
                    <th className="px-4 py-2 border">CPAP</th>
                    <th className="px-4 py-2 border">BiPAP</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">Pressure Type</td>
                    <td className="px-4 py-2 border">Continuous</td>
                    <td className="px-4 py-2 border">Bilevel (two levels)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Ideal For</td>
                    <td className="px-4 py-2 border">Obstructive sleep apnea</td>
                    <td className="px-4 py-2 border">Central sleep apnea, COPD</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Comfort</td>
                    <td className="px-4 py-2 border">May feel restrictive</td>
                    <td className="px-4 py-2 border">Easier exhalation</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Settings</td>
                    <td className="px-4 py-2 border">One fixed pressure</td>
                    <td className="px-4 py-2 border">Adjustable pressures</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Complexity</td>
                    <td className="px-4 py-2 border">Simpler operation</td>
                    <td className="px-4 py-2 border">More complex settings</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-xl font-bold">Conclusion</h2>
            <p>
              Both CPAP and BiPAP are highly effective, but their application depends on individual patient needs. Consult your healthcare provider to decide which therapy is best suited for your specific condition and comfort.
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

export default BiPAPCPAP;