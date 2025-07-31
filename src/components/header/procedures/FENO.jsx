import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import fenoImage from "../../../assets/procedures/feno.jpg";

const data = {
  bgImage: fenoImage, // Replace with actual FeNO image if available
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

const FENO = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          <strong>FeNO Test (Fractional Exhaled Nitric Oxide Test)</strong>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 text-gray-700">
          <div className="lg:w-3/4 space-y-6">
            <h2 className="text-xl font-bold">Overview</h2>
            <p>
              The FeNO test, or exhaled nitric oxide test, is a simple and non-invasive way to measure inflammation in the lungs — particularly in patients with allergic or eosinophilic asthma. It helps determine how well the inflammation is being controlled, especially by inhaled corticosteroids.
            </p>

            <h2 className="text-xl font-bold">Key Highlights</h2>

            <h3 className="text-lg font-semibold">Purpose of the Test</h3>
            <p>
              The FeNO test measures the level of nitric oxide (NO) in the breath. Elevated NO levels indicate ongoing airway inflammation, even if a patient feels their breathing is under control. This makes it a valuable tool for asthma management and treatment adjustments.
            </p>

            <h3 className="text-lg font-semibold">How It Works</h3>
            <p>
              Patients breathe into a handheld device that analyzes the amount of nitric oxide exhaled. The test is quick, painless, and provides immediate results.
            </p>

            <h2 className="text-xl font-bold">Why It’s Important</h2>
            <ul className="list-disc pl-6">
              <li>Detects hidden inflammation not always evident through symptoms</li>
              <li>Helps determine if inhaled steroid treatment is sufficient</li>
              <li>Guides physicians in adjusting medication to prevent flare-ups</li>
              <li>Assists in diagnosing eosinophilic or allergic asthma</li>
            </ul>

            <h2 className="text-xl font-bold">Clinical Insight</h2>
            <p>
              In some cases, patients may not notice any breathing difficulty, yet still have high levels of airway inflammation. The FeNO test helps detect this “silent inflammation,” indicating a need to increase or optimize steroid dosage for long-term control and lung protection.
            </p>

            <h2 className="text-xl font-bold">Benefits</h2>
            <ul className="list-disc pl-6">
              <li>Personalized asthma treatment plans</li>
              <li>Early detection of inflammation before symptoms worsen</li>
              <li>Reduced risk of future asthma attacks through better disease management</li>
            </ul>
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

export default FENO;