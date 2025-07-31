import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/RespiratoryFailure.jpeg", // Add a background image URL if available
  sidebarLinks: [
    { title: "ARDS Treatment", link: "/ArdsTreatment" },
    { title: "Asthma Treatment", link: "/AsthmaTreatment" },
    { title: "Bronchial Asthma Treatment", link: "/BronchialAsthma" },
    { title: "Chronic Cough Treatment", link: "/ChronicCough" },
    { title: "Chronic Obstructive Pulmonary Disease(COPD)", link: "/COPD" },
    { title: "Diabetes Treatment", link: "/DiabetesTreatment" },
    { title: "Fever Treatment", link: "/Fever" },
    { title: "Flu Treatment", link: "/FluTreatment" },
    { title: "General Physician", link: "/GeneralPhysician" },
    { title: "Hypertension Treatment", link: "/Hypertension" },
    { title: "Interstitial Lung Disease Treatment", link: "/InterstitialLung" },
    { title: "Lung Cancer Treatment", link: "/LungCancer" },
    { title: "Obstructive Sleep Apnea (OSA)", link: "/ObstructiveSleep" },
    { title: "Pleural Effusion", link: "/PleuralEffusion" },
    { title: "Pneumonia Treatment", link: "/PneumoniaTreatment" },
    { title: "Preventive Cardiology Treatment", link: "/PreventiveCardiology" },
    { title: "Respiratory Failure Treatment", link: "/RespiratoryFailure" },
    { title: "Respiratory Allergy Treatment", link: "/RespiratoryAllergy" },
    { title: "Sarcoidosis", link: "/Sarcoidosis" },
    { title: "Sleep Disordered Breathing", link: "/SleepDisordered" },
    { title: "Tuberculosis (TB) Treatment", link: "/Tuberculosis" },
  ],
};

const RespiratoryFailure = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Respiratory Failure Treatment
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-bold text-xl mt-4">Overview</h2>
            <p>
              Respiratory failure occurs when the respiratory system fails to maintain adequate gas exchange, leading to insufficient oxygen supply (hypoxemia) or excessive carbon dioxide (hypercapnia) in the blood. It can be classified into two main types:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Type 1 (Hypoxemic):</strong> Characterized by low oxygen levels without an increase in carbon dioxide.</li>
              <li><strong>Type 2 (Hypercapnic):</strong> Characterized by elevated carbon dioxide levels, often accompanied by low oxygen levels.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Causes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acute Causes: Pneumonia, pulmonary embolism, asthma exacerbations, acute respiratory distress syndrome (ARDS), and trauma.</li>
              <li>Chronic Causes: Chronic obstructive pulmonary disease (COPD), neuromuscular disorders, and restrictive lung diseases.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Symptoms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Shortness of breath (dyspnea)</li>
              <li>Rapid breathing (tachypnea)</li>
              <li>Cyanosis (bluish color of lips or face)</li>
              <li>Confusion or altered mental state</li>
              <li>Fatigue and weakness</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Treatment Options</h2>
            <h3 className="font-semibold text-lg mt-4">1. Supportive Care</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Oxygen Therapy: Administer supplemental oxygen to improve oxygen saturation levels.</li>
              <li>Monitoring: Continuous monitoring of vital signs, oxygen saturation, and blood gases.</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">2. Medications</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Bronchodilators: For conditions like asthma or COPD to open airways (e.g., albuterol).</li>
              <li>Corticosteroids: To reduce inflammation in the airways (e.g., prednisone).</li>
              <li>Antibiotics: If a bacterial infection is suspected or confirmed (e.g., pneumonia).</li>
              <li>Diuretics: To reduce fluid overload in cases of heart failure contributing to respiratory failure.</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">3. Mechanical Ventilation</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Non-invasive Ventilation (NIV): Such as CPAP or BiPAP to support breathing without intubation.</li>
              <li>Invasive Mechanical Ventilation: Endotracheal intubation and mechanical ventilation may be necessary for severe cases or if NIV is ineffective.</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">4. Treating Underlying Conditions</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Managing COPD or Asthma: Optimizing treatment plans for chronic respiratory diseases.</li>
              <li>Correcting Electrolyte Imbalances: If contributing to respiratory failure.</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">5. Surgical Interventions</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tracheostomy: In cases of prolonged respiratory failure requiring long-term ventilation support.</li>
              <li>Lung Transplant: Considered for patients with end-stage lung disease who are not responding to other treatments.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Conclusion</h2>
            <p>
              The treatment of respiratory failure focuses on restoring adequate oxygenation and ventilation, addressing underlying causes, and providing supportive care. Timely intervention is crucial to prevent complications and improve outcomes.
            </p>
          </div>

          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Treatments</h2>
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

export default RespiratoryFailure;
