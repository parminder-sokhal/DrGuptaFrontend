import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";


const data = {
  bgImage: "/img/BronchialArtery.jpg",
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

const BronchialArtery = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          <strong>Bronchial Artery Embolization (BAE)</strong>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 text-gray-700">
          <div className="lg:w-3/4 space-y-6">
            <h2 className="text-xl font-bold">Overview</h2>
            <p>
              Bronchial artery embolization (BAE) is a minimally invasive procedure used to treat conditions involving excessive bleeding (hemoptysis) from the bronchial arteries. It’s a preferred alternative when surgery poses higher risks.
            </p>

            <h2 className="text-xl font-bold">Indications</h2>
            <ul className="list-disc pl-6">
              <li>Hemoptysis due to bronchitis, tuberculosis, or lung cancer</li>
              <li>Pulmonary arteriovenous malformations (AVMs)</li>
              <li>Reducing blood supply to lung tumors</li>
            </ul>

            <h2 className="text-xl font-bold">Procedure</h2>
            <p>
              <strong>Preparation:</strong> Patients are typically advised to fast and will have a consultation with an interventional radiologist beforehand.
            </p>
            <p>
              <strong>Anesthesia:</strong> The procedure is done under local anesthesia with sedation.
            </p>
            <p>
              <strong>Accessing the Arteries:</strong> A catheter is inserted (commonly through the groin or wrist) and guided to the bronchial arteries using fluoroscopy.
            </p>
            <p>
              <strong>Embolization:</strong> Small particles or coils are injected to block the bleeding artery.
            </p>
            <p>
              <strong>Recovery:</strong> Patients are monitored for complications and can often go home the same day or after a short hospital stay.
            </p>

            <h2 className="text-xl font-bold">Benefits</h2>
            <ul className="list-disc pl-6">
              <li>Minimally invasive with faster recovery</li>
              <li>Effective in controlling bleeding</li>
              <li>Preserves surrounding lung function</li>
            </ul>

            <h2 className="text-xl font-bold">Risks and Considerations</h2>
            <ul className="list-disc pl-6">
              <li>Allergic reaction to contrast dye</li>
              <li>Infection at catheter site</li>
              <li>Unintended embolization of healthy tissue</li>
              <li>Temporary chest pain</li>
            </ul>

            <h2 className="text-xl font-bold">Conclusion</h2>
            <p>
              Bronchial artery embolization is a safe and effective treatment for managing life-threatening hemoptysis and other lung conditions. Patients should consult with a specialist to determine the best treatment plan based on their individual needs.
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

export default BronchialArtery;