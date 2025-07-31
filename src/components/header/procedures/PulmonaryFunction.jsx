import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import pftImage from "../../../assets/procedures/pft.png";
const data = {
  bgImage: pftImage, // Change this if you have a specific image for PFT
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

const PulmonaryFunction = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          <strong>Pulmonary Function Testing (PFT)</strong>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Pulmonary Function Testing (PFT) refers to a group of non-invasive tests that evaluate how well your lungs are working. These tests are essential for diagnosing and monitoring a variety of respiratory conditions, including asthma, chronic obstructive pulmonary disease (COPD), and other breathing disorders.
            </p>

            <h2 className="text-xl font-bold">What Are Pulmonary Function Tests?</h2>
            <p>
              Pulmonary Function Tests (PFTs) assess how efficiently your lungs move air in and out and how well they transfer oxygen into your bloodstream. These tests help your doctor understand how your lungs are functioning at rest and, in some cases, during physical activity.
              <br />
              PFTs are completely safe and non-invasive—meaning no tools are inserted into your body.
            </p>

            <h2 className="text-xl font-bold">Types of Pulmonary Function Tests</h2>
            <ul className="list-disc pl-6">
              <li>
                <strong>Spirometry:</strong> Measures how much air you can inhale and exhale, and how quickly you can exhale. It’s commonly used to diagnose asthma and COPD.
              </li>
              <li>
                <strong>Lung Volume Testing (Body Plethysmography):</strong> Measures the total amount of air your lungs can hold and how much remains after you exhale. It helps assess restrictive lung diseases.
              </li>
              <li>
                <strong>Gas Diffusion Test:</strong> Evaluates how well gases like oxygen move from your lungs into your bloodstream. This is crucial for detecting damage in the lung’s air sacs.
              </li>
              <li>
                <strong>Cardiopulmonary Exercise Testing (CPET):</strong> Measures how well your lungs, heart, and muscles perform during physical activity. This helps in assessing unexplained shortness of breath or exercise intolerance.
              </li>
            </ul>

            <h2 className="text-xl font-bold">When Is Pulmonary Function Testing Recommended?</h2>
            <ul className="list-disc pl-6">
              <li>Persistent cough, shortness of breath, or wheezing</li>
              <li>Chest tightness, pain, or difficulty taking a deep breath</li>
              <li>Pre-surgical lung assessment</li>
              <li>History of tobacco use or smoking</li>
              <li>Ongoing monitoring of chronic lung conditions</li>
            </ul>

            <h2 className="text-xl font-bold">Why Pulmonary Function Tests Are Important</h2>
            <ul className="list-disc pl-6">
              <li>Detect early signs of lung disease</li>
              <li>Monitor progression of respiratory conditions</li>
              <li>Evaluate the effectiveness of treatment or medication</li>
              <li>Assess lung health before surgery</li>
              <li>Guide lifestyle changes like smoking cessation</li>
            </ul>

            <h2 className="text-xl font-bold">✅ Summary</h2>
            <p>
              Pulmonary Function Testing is a safe, painless, and vital tool in assessing respiratory health. It enables accurate diagnosis and helps track the effectiveness of treatments for various lung conditions. Always consult your healthcare provider for personalized guidance based on your symptoms and history.
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

export default PulmonaryFunction;