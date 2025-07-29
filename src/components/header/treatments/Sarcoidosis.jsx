import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/Sarcoidosis.jpeg", // Update with a sarcoidosis-related image if available
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

const Sarcoidosis = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      {/* ✅ Content Section */}
      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Sarcoidosis Treatment: A Complete Guide
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-bold text-xl mt-4">Sarcoidosis Overview</h2>
            <p>
              Sarcoidosis is an inflammatory disease that can affect multiple organs in the body, most commonly the lungs and skin. It is characterized by the formation of granulomas—clusters of immune cells—that can interfere with the normal structure and function of affected organs. The exact cause remains unknown, but it may result from an abnormal immune response, possibly triggered by environmental or genetic factors.
            </p>

            <h2 className="font-bold text-xl mt-6">Sarcoidosis vs Tuberculosis</h2>
            <p>
              Sarcoidosis often mimics tuberculosis (TB) in its symptoms and chest imaging findings, leading to frequent misdiagnoses. A thorough evaluation is essential to differentiate between the two conditions.
            </p>

            <h2 className="font-bold text-xl mt-6">Diagnosis</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Medical history</li>
              <li>Physical examination</li>
              <li>Routine blood and urine tests</li>
              <li>Chest X-ray or CT scan</li>
              <li>Biopsy (in some cases, to confirm granulomas)</li>
            </ul>
            <p>Not all patients require treatment. Many individuals with sarcoidosis experience spontaneous remission.</p>

            <h2 className="font-bold text-xl mt-6">Risk Factors</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Environment:</strong> Exposure to dusty or moldy environments.</li>
              <li><strong>Age:</strong> Most common between 20 and 40 years.</li>
              <li><strong>Gender:</strong> Women are more likely to develop sarcoidosis.</li>
              <li><strong>Ethnicity:</strong> More prevalent among African and Scandinavian populations.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Common Symptoms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Persistent cough</li>
              <li>Shortness of breath</li>
              <li>Chest pain</li>
              <li>Wheezing or abnormal breathing</li>
              <li>Fatigue</li>
              <li>Night sweats</li>
              <li>Nasal congestion</li>
              <li>Skin rashes or lesions</li>
              <li>Swollen lymph nodes</li>
              <li>Eye inflammation or vision problems</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Treatment Options</h2>

            <h3 className="font-bold text-xl mt-4">1. Medications</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Corticosteroids:</strong> Prednisone is the first-line treatment to reduce inflammation.</li>
              <li><strong>Immunosuppressive drugs:</strong> Methotrexate, Azathioprine</li>
              <li><strong>Hydroxychloroquine:</strong> Especially for skin symptoms and high calcium levels.</li>
              <li><strong>TNF-alpha inhibitors:</strong> Such as infliximab, for severe cases.</li>
            </ul>

            <h3 className="font-bold text-xl mt-4">2. Monitoring and Follow-Up</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Chest X-rays or CT scans</li>
              <li>Pulmonary function tests</li>
              <li>Blood and urine tests</li>
              <li>Eye exams</li>
              <li>Skin and heart evaluations</li>
            </ul>

            <h3 className="font-bold text-xl mt-4">3. Surgery (in rare cases)</h3>
            <p>
              In cases of severe organ damage (lungs, heart, or liver), organ transplantation may be considered.
            </p>

            <h2 className="font-bold text-xl mt-6">Prognosis</h2>
            <p>
              Many cases resolve spontaneously within 2–5 years. Some individuals may experience chronic or progressive disease. Early diagnosis and proper management improve the long-term outlook.
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

export default Sarcoidosis;