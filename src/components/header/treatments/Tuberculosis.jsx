import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/Tuberculosis.jpeg", // You can replace this with a TB-related image if available
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

const Tuberculosis = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      {/* ✅ Content Section */}
      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Tuberculosis (TB) Treatment
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-bold text-xl mt-4">What is TB?</h2>
            <p>
              Tuberculosis (TB) is a serious infectious disease caused by the <strong>Mycobacterium tuberculosis</strong> bacteria.
              It mainly affects the lungs but can also impact other parts of the body. TB spreads through the air when
              an infected person coughs, sneezes, or speaks.
            </p>

            <h2 className="font-bold text-xl mt-6">How TB Spreads</h2>
            <p>
              TB is an airborne disease. When a person with active TB of the lungs or throat coughs or sneezes,
              the bacteria are released into the air. Others can get infected by breathing in these bacteria.
            </p>

            <h2 className="font-bold text-xl mt-6">Symptoms of TB</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Persistent cough (lasting 3 weeks or more)</li>
              <li>Chest pain</li>
              <li>Coughing up blood or mucus</li>
              <li>Fatigue and weakness</li>
              <li>Weight loss</li>
              <li>Loss of appetite</li>
              <li>Fever and chills</li>
              <li>Night sweats</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Treatment for TB</h2>
            <p>TB treatment involves a long course of antibiotics:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Active TB:</strong> Treated with four antibiotics (isoniazid, rifampin, ethambutol, and pyrazinamide)
                for 2 months, followed by 4–7 months of isoniazid and rifampin.
              </li>
              <li>
                <strong>Latent TB:</strong> Usually treated with a single antibiotic for several months.
              </li>
              <li>
                <strong>Drug-resistant TB:</strong> Requires longer treatment with stronger medicines.
              </li>
            </ul>
            <p>
              It’s important to complete the full course of treatment to prevent resistance and ensure a full recovery.
            </p>

            <h2 className="font-bold text-xl mt-6">Risk Factors</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>HIV/AIDS</li>
              <li>Diabetes</li>
              <li>Chronic kidney disease</li>
              <li>Low body weight</li>
              <li>Cancer (especially head and neck)</li>
              <li>Organ transplants</li>
              <li>Silicosis</li>
              <li>Substance abuse</li>
              <li>
                Use of immune-suppressing medicines (e.g., for arthritis or Crohn’s disease)
              </li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Prevention & Monitoring</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Avoid close contact with infected individuals.</li>
              <li>Use protective masks in high-risk areas.</li>
              <li>Get tested if you are at high risk or show symptoms.</li>
              <li>Follow the full treatment plan as advised by your doctor.</li>
              <li>
                Regular medical follow-ups are essential to ensure treatment success and manage side effects.
              </li>
            </ul>
          </div>

          {/* ✅ Sidebar */}
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

export default Tuberculosis;