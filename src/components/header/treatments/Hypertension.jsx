import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/Hypertension.jpeg", // Update this if you have a hypertension-related image
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

const Hypertension = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      {/* ✅ Content Section */}
      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Hypertension Treatment: A Complete Guide
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-bold text-xl mt-4">Hypertension Treatment</h2>
            <p>
              Hypertension, or high blood pressure, is a common but serious condition that increases the risk of heart disease, stroke, and kidney problems. Effective management focuses on reducing blood pressure to safe levels through a combination of lifestyle changes and medication, tailored to individual needs.
            </p>

            <h2 className="font-bold text-xl mt-6">Causes of Hypertension</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Poor Diet:</strong> High intake of sodium, saturated fats, and cholesterol.</li>
              <li><strong>Physical Inactivity:</strong> Sedentary lifestyle contributes to weight gain and elevated blood pressure.</li>
              <li><strong>Chronic Stress:</strong> Long-term stress can raise blood pressure over time.</li>
              <li><strong>Genetics:</strong> A family history of hypertension increases the likelihood of developing the condition.</li>
              <li><strong>Aging:</strong> Blood vessels lose elasticity with age, leading to higher blood pressure.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Risk Factors</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Family History: Genetic predisposition to high blood pressure.</li>
              <li>Age: Higher risk after the age of 65.</li>
              <li>Ethnicity: Some groups, like African Americans, are more prone to hypertension.</li>
              <li>Obesity: Excess weight strains the heart and blood vessels.</li>
              <li>Lifestyle Choices: Smoking, excessive alcohol, and inactivity increase risk.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Treatment Options</h2>

            <h3 className="font-bold text-2xl mt-4">1. Lifestyle Modifications</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Healthy Diet:</strong> Focus on fruits, vegetables, whole grains; limit salt and saturated fats.</li>
              <li><strong>Exercise:</strong> Regular physical activity helps maintain healthy blood pressure.</li>
              <li><strong>Weight Management:</strong> Maintaining a healthy weight reduces strain on the heart.</li>
              <li><strong>Stress Reduction:</strong> Techniques like yoga, meditation, or deep breathing can help.</li>
              <li><strong>Quit Smoking & Limit Alcohol/Caffeine:</strong> Reduces cardiovascular stress.</li>
            </ul>

            <h3 className="font-bold text-xl mt-4">2. Medications</h3>
            <p>Depending on the severity and individual health conditions, doctors may prescribe:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Diuretics</li>
              <li>ACE Inhibitors</li>
              <li>Angiotensin II Receptor Blockers (ARBs)</li>
              <li>Calcium Channel Blockers</li>
              <li>Beta-Blockers</li>
            </ul>

            <h3 className="font-bold text-xl mt-4">3. Monitoring</h3>
            <p>Regular blood pressure checks are essential for managing hypertension effectively. Keeping track helps adjust treatments promptly and avoid complications.</p>

            <h3 className="font-bold text-xl mt-4">4. Complementary Therapies</h3>
            <p>Practices like yoga, meditation, and biofeedback may support medical treatment and improve overall well-being.</p>

            <h2 className="font-bold text-xl mt-6">Conclusion</h2>
            <p>
              Hypertension requires a lifelong commitment to healthy habits and, in many cases, medication. With proper care and monitoring, most people can manage their blood pressure and reduce the risk of serious complications.
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

export default Hypertension;