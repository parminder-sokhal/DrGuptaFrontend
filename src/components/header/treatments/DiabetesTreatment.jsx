import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/Diabetes.jpeg", // Change if needed
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

const DiabetesTreatment = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      {/* Content */}
      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Diabetes: Causes, Symptoms, Risk Factors & Treatment
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-bold text-xl mt-4">What is Diabetes?</h2>
            <p>
              Diabetes is a long-term health condition that affects how your body turns
              food into energy. Normally, insulin helps glucose from food enter your cells
              to be used as energy. In diabetes, the body either doesn’t produce enough
              insulin or can’t use it effectively, causing high blood sugar levels.
            </p>
            <p>There are three main types:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Type 1 Diabetes</strong> – An autoimmune condition where the body attacks insulin-producing cells.</li>
              <li><strong>Type 2 Diabetes</strong> – The body becomes resistant to insulin or doesn’t produce enough.</li>
              <li><strong>Gestational Diabetes</strong> – Develops during pregnancy and usually goes away after delivery.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Causes of Diabetes</h2>
            <h3 className="font-bold text-xl mt-4">Type 1 Diabetes</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Autoimmune reaction destroying insulin-producing beta cells.</li>
              <li>Family history and genetic markers increase risk.</li>
            </ul>

            <h3 className="font-bold text-xl mt-4">Type 2 Diabetes</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Insulin resistance in body cells.</li>
              <li>Pancreas fails to produce enough insulin over time.</li>
              <li>Linked to poor lifestyle habits and obesity.</li>
            </ul>

            <h3 className="font-bold text-xl mt-4">Gestational Diabetes</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Hormonal changes during pregnancy lead to insulin resistance.</li>
              <li>Typically diagnosed during the second or third trimester.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Risk Factors</h2>
            <h3 className="font-bold text-xl mt-4">Type 1 Diabetes</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Family history of Type 1 diabetes</li>
              <li>Presence of autoimmune disorders</li>
            </ul>

            <h3 className="font-bold text-xl mt-4">Type 2 Diabetes</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Overweight or obesity</li>
              <li>Physical inactivity</li>
              <li>Age 45 or older</li>
              <li>Family history of diabetes</li>
              <li>Unhealthy eating habits</li>
              <li>Ethnic background (South Asian, African, Hispanic, etc.)</li>
            </ul>

            <h3 className="font-bold text-xl mt-4">Gestational Diabetes</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Overweight during pregnancy</li>
              <li>Age above 25</li>
              <li>Family history of diabetes</li>
              <li>Previous pregnancy with gestational diabetes</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Symptoms of Diabetes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Frequent urination</li>
              <li>Excessive thirst</li>
              <li>Unexplained weight loss</li>
              <li>Blurred vision</li>
              <li>Fatigue</li>
              <li>Slow-healing wounds</li>
              <li>Increased hunger</li>
            </ul>
            <p className="text-sm italic">
              (Note: Symptoms may be mild or absent in early stages of Type 2 diabetes.)
            </p>

            <h2 className="font-bold text-xl mt-6">Treatment and Management</h2>

            <h3 className="font-bold text-xl mt-4">1. Lifestyle Modifications</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Healthy Diet:</strong> Whole grains, fruits, vegetables, lean proteins, healthy fats.
              </li>
              <li>
                <strong>Exercise:</strong> At least 30 minutes of moderate activity most days.
              </li>
              <li>
                <strong>Weight Management:</strong> Helps improve blood sugar control.
              </li>
            </ul>

            <h3 className="font-bold text-xl mt-4">2. Medications</h3>
            <p><strong>Type 1 Diabetes:</strong> Requires insulin therapy (injections or insulin pump).</p>
            <p><strong>Type 2 Diabetes:</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Metformin (improves insulin sensitivity)</li>
              <li>Sulfonylureas (stimulate insulin release)</li>
              <li>Injectables like GLP-1 receptor agonists, insulin</li>
            </ul>
            <p><strong>Gestational Diabetes:</strong> Controlled with diet, exercise; insulin may be needed.</p>

            <h3 className="font-bold text-xl mt-4">3. Monitoring Blood Sugar</h3>
            <p>Use glucometers or CGMs to track sugar levels and avoid complications.</p>

            <h3 className="font-bold text-xl mt-4">4. Education and Self-Care</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Carb counting, meal planning</li>
              <li>Recognize & treat low/high blood sugar</li>
              <li>Stress management, good sleep</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Preventing Complications</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Control sugar, BP, and cholesterol</li>
              <li>Regular eye exams, foot checks</li>
              <li>No smoking, limit alcohol</li>
              <li>Follow prescribed medications</li>
              <li>Maintain regular doctor visits</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Key Takeaways</h2>
            <p>
              Diabetes is manageable with the right care, lifestyle, and support. Early
              diagnosis and consistent management can prevent serious complications. Work
              closely with your healthcare team to stay healthy and informed.
            </p>
          </div>

          {/* Sidebar */}
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

export default DiabetesTreatment;