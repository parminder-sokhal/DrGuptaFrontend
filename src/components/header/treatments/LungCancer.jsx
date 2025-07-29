import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import lungcancerImage  from "../../../assets/treatements/lungcancer.png"

const data = {
  bgImage: lungcancerImage, // Replace with actual image path
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

const LungCancer = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      {/* ✅ Content Section */}
      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Lung Cancer Treatment: A Complete Guide
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-bold text-xl mt-4">Lung Cancer Treatment</h2>
            <p>
              Lung cancer treatment depends on several factors, including the type of cancer
              (non-small cell or small cell), its stage, and the overall health of the patient.
              The main treatment options include:
            </p>

            <h3 className="font-bold mt-4">1. Surgery</h3>
            <p>
              Surgery is often recommended for early-stage non-small cell lung cancer. The goal
              is to remove the tumor and surrounding lung tissue. It is most effective when the
              cancer is localized and has not spread.
            </p>

            <h3 className="font-bold mt-4">2. Radiation Therapy</h3>
            <p>
              This treatment uses high-energy rays to kill cancer cells. It may be used alone or
              in combination with chemotherapy, particularly in advanced stages or when surgery
              isn’t an option.
            </p>

            <h3 className="font-bold mt-4">3. Chemotherapy</h3>
            <p>
              Chemotherapy uses drugs to destroy rapidly dividing cancer cells. It is a standard
              treatment for both non-small cell and small cell lung cancer, either as a primary
              treatment or after surgery to prevent recurrence.
            </p>

            <h3 className="font-bold mt-4">4. Targeted Therapy</h3>
            <p>
              This approach targets specific genetic mutations that fuel cancer growth. It is
              more precise and often has fewer side effects than traditional chemotherapy,
              making it a personalized treatment option.
            </p>

            <h3 className="font-bold mt-4">5. Immunotherapy</h3>
            <p>
              Immunotherapy strengthens the body’s own immune system to recognize and attack
              cancer cells. It is particularly effective in some advanced cases and is becoming
              a vital part of modern lung cancer treatment.
            </p>

            <p>
              Each treatment plan is customized based on the patient's unique condition, with
              the aim to extend survival and enhance quality of life.
            </p>

            <h2 className="font-bold text-xl mt-6">
              What Is Extensive-Stage Lung Cancer?
            </h2>
            <p>
              In the extensive stage, lung cancer has spread beyond its origin. It may be found:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Throughout one lung</li>
              <li>In the opposite lung</li>
              <li>In lymph nodes on the opposite side of the chest</li>
              <li>In the fluid surrounding the lungs (pleura)</li>
              <li>In the bone marrow</li>
              <li>In distant organs, such as the liver or brain</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">
              Common Symptoms of Lung Cancer
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Persistent or worsening cough</li>
              <li>Chest pain or discomfort</li>
              <li>Coughing up blood</li>
              <li>Fatigue or weakness</li>
              <li>Loss of appetite</li>
              <li>Unexplained weight loss</li>
              <li>Shortness of breath</li>
              <li>Headaches (in case of spread to the brain)</li>
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

export default LungCancer;