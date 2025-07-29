import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/Pneumonia.jpeg", // You can change this to a pneumonia-related image if needed
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

const PneumoniaTreatment = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      {/* ✅ Content Section */}
      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Pneumonia Treatment: A Complete Guide
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-bold text-xl mt-4">Pneumonia Treatment</h2>
            <p>
              Pneumonia is a lung infection that can range from mild to life-threatening.
              Treatment focuses on eliminating the infection and managing symptoms, and it
              varies based on the cause (bacterial, viral, or fungal), the severity, and
              the patient’s overall health.
            </p>

            <h3 className="font-bold text-xl mt-4">1. Bacterial Pneumonia</h3>
            <p>This is typically treated with antibiotics such as:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Amoxicillin</li>
              <li>Azithromycin</li>
              <li>Clarithromycin</li>
            </ul>
            <p>
              The choice of antibiotic depends on the suspected pathogen and
              patient-specific factors such as age, existing conditions, and drug allergies.
            </p>

            <h3 className="font-bold text-xl mt-4">2. Viral Pneumonia</h3>
            <p>
              In viral cases, antiviral medications like oseltamivir may be prescribed,
              especially if caused by influenza. Most cases require supportive care, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Rest</li>
              <li>Hydration</li>
              <li>Fever reducers and pain relievers (e.g., paracetamol or ibuprofen)</li>
            </ul>

            <h3 className="font-bold text-xl mt-4">3. Fungal Pneumonia</h3>
            <p>
              Treated with antifungal medications. It is more common in people with weakened
              immune systems and may require longer treatment durations.
            </p>

            <h2 className="font-bold text-xl mt-6">Hospitalization & Advanced Care</h2>
            <p>Hospital admission may be required in severe cases, especially for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Older adults</li>
              <li>Infants</li>
              <li>People with chronic illnesses (like diabetes, COPD, or heart disease)</li>
            </ul>
            <p>In-hospital treatments may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Oxygen therapy for breathing support</li>
              <li>Intravenous antibiotics or antivirals</li>
              <li>IV fluids to prevent dehydration</li>
              <li>Mechanical ventilation in critical cases</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Prevention</h2>
            <p>Preventive measures are key to reducing pneumonia risk:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Vaccination:</strong> Influenza vaccine (yearly), Pneumococcal vaccine
                (especially for older adults and high-risk groups)
              </li>
              <li>
                <strong>Good hygiene:</strong> Frequent handwashing and respiratory etiquette
              </li>
              <li>
                <strong>Healthy lifestyle:</strong> Avoid smoking and maintain strong immunity
                through proper nutrition
              </li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Causes of Pneumonia</h2>
            <p>
              Pneumonia occurs when infectious agents (bacteria, viruses, or fungi) enter the
              lungs, leading to inflammation in the air sacs (alveoli). These sacs may fill with
              pus or fluid, making breathing difficult. If untreated, the infection can spread
              to the bloodstream or other organs.
            </p>

            <h2 className="font-bold text-xl mt-6">Signs & Symptoms of Pneumonia</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Persistent cough (producing green, yellow, or bloody mucus)</li>
              <li>Fever, sweating, and chills</li>
              <li>Shortness of breath or rapid breathing</li>
              <li>Chest pain that worsens with deep breaths or coughing</li>
              <li>Fatigue and general weakness</li>
              <li>Loss of appetite</li>
              <li>Nausea or vomiting (more common in children)</li>
              <li>Confusion or delirium (especially in older adults)</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Risk Factors</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Malnutrition</li>
              <li>Older age (especially 65+)</li>
              <li>Smoking</li>
              <li>Excessive alcohol or drug use</li>
              <li>Chronic illnesses (e.g., asthma, diabetes, heart disease)</li>
              <li>Exposure to pollutants, chemicals, or animals</li>
              <li>
                Weakened immune system due to conditions like cancer, HIV, or chemotherapy
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

export default PneumoniaTreatment;