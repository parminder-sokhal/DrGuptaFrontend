import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/Cough.jpeg", // You can replace this with a chronic cough-related image
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

const ChronicCough = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      {/* Content Section */}
      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Chronic Cough Treatment
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-bold text-xl mt-4">Overview</h2>
            <p>
              A chronic cough is defined as a cough that persists for eight weeks or longer. It can be a symptom of various underlying conditions, and effective treatment requires identifying the cause.
            </p>

            <h2 className="font-bold text-xl mt-6">Common Causes of Chronic Cough</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Postnasal Drip: Mucus dripping down the back of the throat, often due to allergies or sinusitis.</li>
              <li>Asthma: Inflammation and narrowing of the airways.</li>
              <li>Gastroesophageal Reflux Disease (GERD): Stomach acid irritating the esophagus and throat.</li>
              <li>Chronic Bronchitis: A form of chronic obstructive pulmonary disease (COPD).</li>
              <li>Medications: Such as ACE inhibitors used for hypertension.</li>
              <li>Infections: Such as lingering effects from a respiratory infection.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Treatment Options</h2>
            <h3 className="font-semibold text-lg mt-4">1. Identify and Treat Underlying Causes</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Medical Evaluation: A thorough assessment by a healthcare provider to determine the cause of the cough.</li>
              <li>Allergy Testing: If allergies are suspected, testing may help identify triggers.</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">2. Medications</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Antihistamines: Used for coughs caused by allergies or postnasal drip (e.g., loratadine, cetirizine).</li>
              <li>Cough Suppressants: Such as dextromethorphan, which can help reduce the urge to cough.</li>
              <li>Expectorants: Such as guaifenesin, which help thin mucus, making it easier to expel.</li>
              <li>Bronchodilators: For coughs related to asthma or COPD (e.g., albuterol).</li>
              <li>Proton Pump Inhibitors (PPIs): For managing GERD-related cough.</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">3. Lifestyle and Home Remedies</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Hydration: Drink plenty of fluids to help thin mucus.</li>
              <li>Humidifiers: Using a humidifier can add moisture to the air, which may soothe irritated airways.</li>
              <li>Avoid Irritants: Stay away from smoke, strong odors, and other environmental irritants.</li>
              <li>Elevate Head While Sleeping: This can help reduce nighttime coughing, especially in cases of postnasal drip or GERD.</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">4. Cough Management Strategies</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cough Technique Training: Learning effective coughing techniques to clear mucus.</li>
              <li>Breathing Exercises: Such as those taught in pulmonary rehabilitation programs, can improve lung function and reduce coughing.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Follow-Up and Monitoring</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Regular Check-Ups: Monitoring progress and adjusting treatment as necessary.</li>
              <li>Symptom Diary: Keeping track of cough frequency, triggers, and any associated symptoms can help guide treatment.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Conclusion</h2>
            <p>
              Chronic cough treatment involves identifying and addressing the underlying cause, using medications, and employing lifestyle modifications. A collaborative approach with healthcare providers is essential for effective management.
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

export default ChronicCough;