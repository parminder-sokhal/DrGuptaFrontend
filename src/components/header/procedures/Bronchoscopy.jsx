import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import bronchoImage from "../../../assets/procedures/bronchoscopy.png";
const data = {
  bgImage: bronchoImage,
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

const Bronchoscopy = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          <strong>Bronchoscopy: Procedure, Types, and Uses</strong>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="text-xl font-bold">What is Bronchoscopy?</h2>
            <p>
              Bronchoscopy is a <strong>minimally invasive diagnostic and therapeutic procedure</strong> that allows doctors to examine the inside of the lungs, including the bronchi—the main airways leading into the lungs. It helps detect and treat conditions affecting the airways, lungs, and surrounding lymph nodes.
            </p>
            <p>
              During the procedure, a doctor uses a thin, flexible or rigid tube called a <strong>bronchoscope</strong> to view the respiratory tract. This tool can also be used to collect tissue samples (biopsies), remove blockages, or deliver treatments directly into the lungs.
            </p>

            <h2 className="text-xl font-bold">Why is Bronchoscopy Performed?</h2>
            <ul className="list-disc pl-6">
              <li>Investigating persistent cough, infections, or abnormal imaging results</li>
              <li>Diagnosing lung diseases, tumors, or infections</li>
              <li>Taking biopsies of abnormal tissues</li>
              <li>Visualizing and evaluating tumors with Endobronchial Ultrasound (EBUS)</li>
              <li>Treating postoperative air leaks, airway obstructions, emphysema, or asthma</li>
            </ul>

            <h2 className="text-xl font-bold">Types of Bronchoscopy</h2>
            <h3 className="text-lg font-bold">1. Flexible Bronchoscopy</h3>
            <ul className="list-disc pl-6">
              <li>The most commonly used type</li>
              <li>Involves a long, thin tube with a light and camera (fiber-optic)</li>
              <li>Allows doctors to examine deep areas of the lungs</li>
              <li>Usually performed under local anesthesia and mild sedation</li>
              <li>Can be used to collect samples, remove blockages, or perform lavage (washing)</li>
            </ul>

            <h3 className="text-lg font-bold">2. Rigid Bronchoscopy</h3>
            <ul className="list-disc pl-6">
              <li>A straight, hollow metal tube used for specialized procedures</li>
              <li>Performed under general anesthesia</li>
              <li>Ideal when there is heavy bleeding or large obstructions</li>
              <li>Used for procedures like airway dilation, foreign body removal, and laser therapy</li>
            </ul>

            <h2 className="text-xl font-bold">Common Treatments Using Bronchoscopy</h2>
            <ul className="list-disc pl-6">
              <li>Removal of mucus, fluid, or foreign objects from airways</li>
              <li>Dilation (widening) of narrowed airways</li>
              <li>Airway lavage to clean out lungs</li>
              <li>Collection of tissue samples (biopsy)</li>
              <li>Visualization and treatment of internal lung abnormalities</li>
            </ul>

            <h2 className="text-xl font-bold">Risks and Complications</h2>
            <ul className="list-disc pl-6">
              <li>Arrhythmia (irregular heartbeat)</li>
              <li>Breathing difficulties or shortness of breath</li>
              <li>Infection or pneumonia</li>
              <li>Fever following the procedure</li>
              <li>Minor bleeding, especially after biopsies</li>
              <li>Low oxygen levels during or shortly after the procedure</li>
            </ul>
            <p>Emergency precautions and monitoring are always in place during bronchoscopy to ensure patient safety.</p>

            <h2 className="text-xl font-bold">✅ Summary</h2>
            <p>
              Bronchoscopy is a valuable and safe tool that helps diagnose and treat various pulmonary conditions. Whether through flexible or rigid instruments, this procedure plays a crucial role in managing complex lung and airway issues with minimal invasiveness.
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

export default Bronchoscopy;