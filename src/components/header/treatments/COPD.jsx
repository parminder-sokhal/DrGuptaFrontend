import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/COPD.jpeg", // Replace with a COPD-related image if available
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

const COPD = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      {/* ✅ Content Section */}
      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Understanding COPD (Chronic Obstructive Pulmonary Disease)
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Chronic Obstructive Pulmonary Disease (COPD) is a progressive lung condition that many people are still unaware of. It involves chronic inflammation of the lungs, which obstructs airflow and causes breathing difficulties. Early diagnosis and proper treatment can significantly improve the quality of life, but unfortunately, misinformation and myths often delay the right medical intervention.
            </p>

            <p>
              This article aims to bust common myths and shed light on the facts about COPD to promote awareness and understanding.
            </p>

            <h2 className="font-bold text-xl mt-6">What is COPD?</h2>
            <p>
              COPD refers to a group of progressive lung diseases, including chronic bronchitis and emphysema, that make it increasingly difficult to breathe. In the early stages, symptoms such as mild coughing and shortness of breath may go unnoticed. Over time, these symptoms worsen and can severely impact day-to-day activities.
            </p>

            <h2 className="font-bold text-xl mt-6">Common Symptoms of COPD</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Shortness of breath (initially on exertion, later even at rest)</li>
              <li>Persistent cough with mucus</li>
              <li>Frequent need to clear the throat</li>
              <li>Wheezing or noisy breathing</li>
              <li>Chest tightness or heaviness</li>
              <li>Low energy or fatigue</li>
              <li>Swelling in ankles, legs, or feet</li>
              <li>Recurring respiratory infections</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Myths and Facts about COPD</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Myth:</strong> Only smokers get COPD.<br /><strong>Fact:</strong> While smoking is the leading cause, non-smokers can develop COPD due to environmental exposures, genetics, or workplace hazards.</li>
              <li><strong>Myth:</strong> COPD is curable.<br /><strong>Fact:</strong> COPD is not curable, but it is manageable. Early treatment, lifestyle changes, and medications can help control symptoms and slow disease progression.</li>
              <li><strong>Myth:</strong> People with COPD shouldn’t exercise.<br /><strong>Fact:</strong> Physical activity, under supervision, can actually improve breathing capacity and overall health in COPD patients.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Major Risk Factors</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Tobacco Smoke:</strong> Primary cause; includes smoking and secondhand smoke.</li>
              <li><strong>Asthma + Smoking:</strong> High risk due to combined lung damage.</li>
              <li><strong>Occupational Hazards:</strong> Long-term exposure to dust, fumes, and chemicals.</li>
              <li><strong>Indoor Air Pollution:</strong> Biomass fuel smoke in poorly ventilated homes.</li>
              <li><strong>Age:</strong> Symptoms typically appear after age 40.</li>
              <li><strong>Genetics:</strong> Conditions like Alpha-1 Antitrypsin Deficiency increase risk.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Conclusion</h2>
            <p>
              COPD is a serious yet manageable condition. Spreading awareness, busting myths, and encouraging early diagnosis are essential steps in combating this disease. If you or someone you know is experiencing symptoms, seek medical advice early and explore available treatment options.
            </p>
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

export default COPD;