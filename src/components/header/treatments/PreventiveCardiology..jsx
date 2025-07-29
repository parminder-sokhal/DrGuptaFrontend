import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/Cardiology.jpeg", // Replace with a cardiology-related image if available
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

const PreventiveCardiology = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      {/* ✅ Content Section */}
      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Preventive Cardiology: A Complete Guide
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-bold text-xl mt-4">Overview</h2>
            <p>
              Preventive cardiology focuses on reducing the risk of heart disease and other cardiovascular conditions through early detection, lifestyle changes, and targeted medical interventions. The goal is to prevent heart disease before it begins or to stop it from getting worse. Patients receive a comprehensive evaluation that includes assessing blood pressure, cholesterol levels, blood sugar, body weight, and lifestyle habits.
            </p>
            <p>
              This proactive approach empowers individuals to take control of their heart health through informed decisions, long-term strategies, and professional support.
            </p>

            <h2 className="font-bold text-xl mt-6">Common Causes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Unhealthy Diet:</strong> Foods high in saturated fats, trans fats, cholesterol, and salt contribute to cardiovascular issues.</li>
              <li><strong>Physical Inactivity:</strong> Leads to obesity, hypertension, and poor heart health.</li>
              <li><strong>Smoking:</strong> Damages blood vessels and increases the risk of plaque buildup.</li>
              <li><strong>Chronic Stress:</strong> Triggers unhealthy habits like overeating, smoking, and alcohol use.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Risk Factors</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Family History:</strong> Inherited risk of cardiovascular conditions.</li>
              <li><strong>High Blood Pressure (Hypertension):</strong> Strains the heart and arteries.</li>
              <li><strong>High Cholesterol:</strong> Especially high LDL levels increase plaque buildup.</li>
              <li><strong>Diabetes:</strong> Increases risk of heart complications.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Treatment & Prevention</h2>

            <h3 className="font-bold text-2xl mt-4">Lifestyle Changes</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Adopt a heart-healthy diet rich in fruits, vegetables, whole grains, and healthy fats.</li>
              <li>Engage in regular physical activity (at least 30 minutes on most days).</li>
              <li>Stop smoking and limit alcohol consumption.</li>
              <li>Manage weight and stress effectively.</li>
            </ul>

            <h3 className="font-bold text-xl mt-4">Medications</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Statins:</strong> For cholesterol control.</li>
              <li><strong>Beta-blockers & ACE inhibitors:</strong> To manage blood pressure.</li>
              <li><strong>Antiplatelet agents:</strong> Reduce the risk of blood clots.</li>
            </ul>

            <h3 className="font-bold text-xl mt-4">Cardiac Rehabilitation</h3>
            <p>
              A structured program combining monitored exercise, nutrition advice, and education for patients recovering from cardiac events.
            </p>

            <h3 className="font-bold text-xl mt-4">Medical Interventions</h3>
            <p>
              In advanced cases, procedures such as angioplasty, stenting, or coronary artery bypass grafting (CABG) may be necessary.
            </p>

            <h2 className="font-bold text-xl mt-6">Takeaway</h2>
            <p>
              Preventive cardiology helps reduce the future risk of heart attacks, strokes, and other cardiovascular events. Early action through routine check-ups, healthy living, and, when needed, medical treatment, can dramatically improve long-term heart health.
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

export default PreventiveCardiology;