import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/RespiratoryAllergy.jpeg", // You can replace this with a respiratory allergy-related image
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

const RespiratoryAllergy = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Respiratory Allergy Treatment
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-bold text-xl mt-4">Overview</h2>
            <p>
              Respiratory allergies occur when the immune system reacts to allergens in the air, leading to inflammation of the airways. Common allergens include pollen, dust mites, mold, pet dander, and certain chemicals.
            </p>

            <h2 className="font-bold text-xl mt-6">Symptoms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sneezing</li>
              <li>Nasal congestion</li>
              <li>Runny nose (rhinorrhea)</li>
              <li>Itchy or watery eyes</li>
              <li>Coughing</li>
              <li>Wheezing or shortness of breath</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Causes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Seasonal Allergens: Pollen from trees, grasses, and weeds.</li>
              <li>Perennial Allergens: Dust mites, pet dander, mold, and cockroach droppings.</li>
              <li>Irritants: Tobacco smoke, strong odors, and pollution.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Treatment Options</h2>
            <h3 className="font-semibold text-lg mt-4">1. Avoidance of Allergens</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Identify and minimize exposure to known allergens (e.g., using air purifiers, keeping windows closed during high pollen seasons).</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">2. Medications</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Antihistamines: Help relieve symptoms like sneezing and itching (e.g., cetirizine, loratadine).</li>
              <li>Decongestants: Reduce nasal congestion (e.g., pseudoephedrine).</li>
              <li>Nasal Corticosteroids: Reduce inflammation in the nasal passages (e.g., fluticasone, budesonide).</li>
              <li>Leukotriene Receptor Antagonists: Help manage asthma and allergic rhinitis (e.g., montelukast).</li>
              <li>Mast Cell Stabilizers: Prevent the release of histamine (e.g., cromolyn sodium).</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">3. Immunotherapy</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Allergy Shots: Gradual exposure to increasing amounts of allergens to build tolerance.</li>
              <li>Sublingual Immunotherapy: Tablets or drops containing allergens taken under the tongue.</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">4. Lifestyle Changes</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Regular cleaning to reduce dust and mold.</li>
              <li>Using hypoallergenic bedding and air filters.</li>
              <li>Maintaining a smoke-free environment.</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">5. Emergency Treatments</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Epinephrine Auto-Injectors: For severe allergic reactions (anaphylaxis) that may affect breathing.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Conclusion</h2>
            <p>
              Effective management of respiratory allergies involves a combination of avoiding allergens, using medications to control symptoms, and considering immunotherapy for long-term relief. Consultation with a healthcare provider is essential for personalized treatment plans.
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

export default RespiratoryAllergy;
