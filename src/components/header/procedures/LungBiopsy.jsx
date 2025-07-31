import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/Lung.jpeg", // Update this if you have a specific Lung Biopsy image
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

const LungBiopsy = () => {
  return (
     <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          <strong>Lung Biopsy</strong>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="text-xl font-bold">Overview</h2>
            <p>
              A lung biopsy is a diagnostic medical procedure in which a small sample of lung tissue is removed for examination under a microscope. It plays a crucial role in diagnosing various lung conditions such as infections, inflammatory diseases, autoimmune disorders, and cancers.
            </p>

            <h2 className="text-xl font-bold">Why Is It Done?</h2>
            <ul className="list-disc pl-6">
              <li>Confirm or rule out diseases like lung cancer, pulmonary fibrosis, or sarcoidosis</li>
              <li>Diagnose infections (e.g., tuberculosis, fungal infections)</li>
              <li>Identify autoimmune conditions affecting the lungs (e.g., lupus, rheumatoid arthritis)</li>
              <li>Monitor disease progression or response to treatment</li>
            </ul>

            <h2 className="text-xl font-bold">Types of Lung Biopsy Procedures</h2>
            <ul className="list-disc pl-6">
              <li><strong>Transbronchial Biopsy:</strong> Performed using a bronchoscope (a thin flexible tube passed through the mouth or nose). Common for centrally located abnormalities.</li>
              <li><strong>Percutaneous Needle Biopsy:</strong> A needle is inserted through the chest wall, usually with CT or ultrasound guidance. Suitable for peripheral lung lesions.</li>
              <li><strong>Surgical Biopsy:</strong> Used when less invasive methods are inconclusive:
                <ul className="list-disc ml-6">
                  <li>Video-Assisted Thoracoscopic Surgery (VATS)</li>
                  <li>Open Surgery (Thoracotomy)</li>
                </ul>
              </li>
            </ul>

            <h2 className="text-xl font-bold">Procedure & Safety</h2>
            <ul className="list-disc pl-6">
              <li>Performed under local anesthesia with sedation</li>
              <li>Tissue is collected and sent to a pathology lab for microscopic analysis</li>
              <li>Generally safe with a low risk of complications</li>
            </ul>

            <h2 className="text-xl font-bold">Risk Factors</h2>
            <ul className="list-disc pl-6">
              <li><strong>Bleeding:</strong> May occur at the biopsy site; usually controlled easily</li>
              <li><strong>Pneumothorax:</strong> Air leakage into the chest may cause lung collapse, especially with needle biopsies</li>
              <li><strong>Infection:</strong> Minor infection risk; may need antibiotics</li>
              <li><strong>Pain or Discomfort:</strong> Soreness at the site; usually managed with medication</li>
              <li><strong>Allergic Reactions:</strong> To sedatives or contrast agents used during imaging</li>
            </ul>

            <h2 className="text-xl font-bold">Aftercare & Follow-Up</h2>

            <h3 className="font-semibold">Tissue Analysis</h3>
            <p>
              The collected tissue is examined microscopically to determine the exact nature of the lung condition. Results guide further treatment.
            </p>

            <h3 className="font-semibold">Treatment Based on Results</h3>
            <ul className="list-disc pl-6">
              <li><strong>Infections:</strong> Treated with antibiotics or antifungals</li>
              <li><strong>Inflammatory/Autoimmune Diseases:</strong> Managed with corticosteroids or immunosuppressants</li>
              <li><strong>Cancer:</strong> Treatment may include chemotherapy, radiation, or surgery</li>
            </ul>

            <h3 className="font-semibold">Managing Complications</h3>
            <ul className="list-disc pl-6">
              <li><strong>Pneumothorax:</strong> May require chest tube insertion</li>
              <li><strong>Bleeding or infection:</strong> Treated promptly as needed</li>
            </ul>

            <h3 className="font-semibold">Regular Monitoring</h3>
            <p>
              Follow-up visits ensure proper recovery, monitor treatment response, and detect any changes in lung condition.
            </p>

            <h2 className="text-xl font-bold">✅ Conclusion</h2>
            <p>
              A lung biopsy is a vital tool for accurately diagnosing and managing various lung conditions. While minor risks exist, the benefits of precise diagnosis and timely treatment far outweigh potential complications.
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

export default LungBiopsy;