import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/ForcedOscillometry.png", // You can update this with a FOT-specific image if available
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

const ForcedOscillometry = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          <strong>Forced Oscillometry Technique (FOT)</strong>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 text-gray-700">
          <div className="lg:w-3/4 space-y-6">
            <h2 className="text-xl font-bold">Overview</h2>
            <p>
              The Forced Oscillometry Technique (FOT) is a non-invasive lung function test used to assess respiratory mechanics and airway responsiveness. It provides valuable information about lung function, particularly in patients with asthma, chronic obstructive pulmonary disease (COPD), and other respiratory disorders.
            </p>

            <h2 className="text-xl font-bold">Importance of FOT</h2>
            <ul className="list-disc pl-6">
              <li><strong>Assessing Airway Resistance:</strong> Measuring how easily air flows through the airways.</li>
              <li><strong>Evaluating Lung Compliance:</strong> Understanding how well the lungs expand and contract.</li>
              <li><strong>Monitoring Disease Progression:</strong> Tracking changes in lung function over time.</li>
              <li><strong>Guiding Treatment Decisions:</strong> Helping clinicians tailor therapies based on individual patient needs.</li>
            </ul>

            <h2 className="text-xl font-bold">How the FOT Works</h2>
            <p><strong>Preparation:</strong> Patients are typically asked to refrain from using bronchodilators or other respiratory medications for a specified period before the test. The test is usually performed in a comfortable, seated position.</p>
            <p><strong>Procedure:</strong> The patient breathes normally through a mouthpiece connected to a device that generates small pressure oscillations (sound waves). These oscillations are applied at different frequencies while the patient breathes in and out. The device measures the pressure and flow of air, allowing for the calculation of airway resistance and reactance.</p>
            <p><strong>Data Interpretation:</strong> The results are presented as a frequency response curve, which helps identify abnormalities in lung function. Key parameters include resistance (R) and reactance (X), which provide insights into the mechanical properties of the airways and lung tissue.</p>

            <h2 className="text-xl font-bold">Advantages of FOT</h2>
            <ul className="list-disc pl-6">
              <li><strong>Non-Invasive:</strong> Unlike traditional spirometry, FOT does not require forced breathing maneuvers, making it easier for patients, including children and those with severe respiratory conditions.</li>
              <li><strong>Sensitive to Changes:</strong> FOT can detect subtle changes in lung mechanics, which may not be evident in other tests.</li>
              <li><strong>Quick and Efficient:</strong> The procedure is relatively fast, often taking only a few minutes to complete.</li>
            </ul>

            <h2 className="text-xl font-bold">Limitations of FOT</h2>
            <ul className="list-disc pl-6">
              <li><strong>Interpretation Complexity:</strong> Results can be influenced by various factors, and interpretation may require specialized training.</li>
              <li><strong>Equipment Availability:</strong> Not all healthcare facilities may have access to FOT devices.</li>
            </ul>

            <h2 className="text-xl font-bold">Conclusion</h2>
            <p>
              The Forced Oscillometry Technique is a valuable tool for assessing lung function and understanding respiratory mechanics. It plays a crucial role in diagnosing and managing various pulmonary conditions. If you have respiratory symptoms, consult a healthcare professional to determine if FOT is appropriate for your evaluation.
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

export default ForcedOscillometry;