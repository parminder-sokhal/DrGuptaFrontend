import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/PleuralEffusion.jpeg", // Replace with a pleural-effusion-related image if available
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

const PleuralEffusion = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      {/* ✅ Content Section */}
      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Pleural Effusion: Causes, Symptoms & Treatment
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-bold text-xl mt-4">What is Pleural Effusion?</h2>
            <p>
              Pleural effusion is a medical condition where excess fluid accumulates in the pleural space—the area between the lungs and the chest wall. This buildup of fluid can compress the lungs and impair breathing by limiting their ability to expand properly.
            </p>

            <h2 className="font-bold text-xl mt-6">Causes of Pleural Effusion</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Congestive Heart Failure (CHF):</strong> The most common cause; reduced heart function leads to fluid leakage into the pleural space.</li>
              <li><strong>Pneumonia:</strong> Lung infections can trigger inflammation and fluid accumulation.</li>
              <li><strong>Liver Disease (Cirrhosis):</strong> Reduced protein production and fluid regulation may result in pleural effusion.</li>
              <li><strong>Kidney Disease:</strong> Conditions like nephrotic syndrome cause fluid overload and low albumin levels.</li>
              <li><strong>Pulmonary Embolism:</strong> Blood clots in the lungs can lead to inflammation and fluid buildup.</li>
              <li><strong>Cancer:</strong> Lung cancer, breast cancer, and lymphomas often cause malignant pleural effusions.</li>
              <li><strong>Tuberculosis & Other Infections:</strong> Chronic infections can result in pleural inflammation and effusion.</li>
              <li><strong>Pulmonary Edema:</strong> Fluid from the lungs can seep into the pleural cavity.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Risk Factors</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Heart Conditions: CHF or chronic heart disease</li>
              <li>Liver Disorders: Especially cirrhosis or chronic hepatitis</li>
              <li>Kidney Disease: Long-standing kidney dysfunction</li>
              <li>Respiratory Infections: Recurrent pneumonia or lung infections</li>
              <li>Cancer: Particularly those that spread to the pleura</li>
              <li>Autoimmune Disorders: Lupus, rheumatoid arthritis, etc.</li>
              <li>Chest Trauma or Surgery: Injuries or procedures affecting the chest cavity</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Symptoms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Shortness of breath</li>
              <li>Chest pain, often sharp and worsened by deep breaths (pleuritic pain)</li>
              <li>Dry, persistent cough</li>
              <li>Fever (if infection-related)</li>
              <li>Hiccups</li>
              <li>Rapid or shallow breathing</li>
              <li>Fatigue and general discomfort</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Treatment Options</h2>

            <h3 className="font-bold text-xl mt-4">1. Treating the Underlying Cause</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Heart Failure:</strong> Diuretics and cardiac medications</li>
              <li><strong>Infections:</strong> Antibiotics or antifungal agents</li>
              <li><strong>Cancer:</strong> Chemotherapy, radiotherapy, or surgical intervention</li>
            </ul>

            <h3 className="font-bold text-xl mt-4">2. Therapeutic Thoracentesis</h3>
            <p>A procedure to remove fluid using a needle, offering immediate symptom relief.</p>

            <h3 className="font-bold text-xl mt-4">3. Chest Tube Insertion</h3>
            <p>Used for continuous drainage in cases of large or recurrent effusions.</p>

            <h3 className="font-bold text-xl mt-4">4. Pleurodesis</h3>
            <p>A treatment to adhere the lung to the chest wall, preventing further fluid buildup—often used in cancer-related effusions.</p>

            <h3 className="font-bold text-xl mt-4">5. Surgery</h3>
            <p>Procedures like pleurectomy or decortication may be needed in severe or recurrent cases.</p>

            <h3 className="font-bold text-xl mt-4">6. Medications</h3>
            <p>Diuretics, pain relievers, and anti-inflammatory drugs can help manage symptoms.</p>

            <h2 className="font-bold text-xl mt-6">Conclusion</h2>
            <p>
              Pleural effusion is a potentially serious condition that requires timely diagnosis and appropriate treatment. Managing the root cause, relieving symptoms, and preventing recurrence are the key goals of treatment.
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

export default PleuralEffusion;