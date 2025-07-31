import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/ARDS.jpeg", // Add a relevant image URL if available
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

const ArdsTreatment = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      {/* Content Section */}
      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          ARDS Treatment (Acute Respiratory Distress Syndrome)
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-bold text-xl mt-4">Overview</h2>
            <p>
              Acute Respiratory Distress Syndrome (ARDS) is a severe lung condition characterized by rapid onset of widespread inflammation in the lungs, leading to impaired gas exchange and respiratory failure. It often occurs in critically ill patients and requires immediate medical intervention.
            </p>

            <h2 className="font-bold text-xl mt-6">Goals of ARDS Treatment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Improve Oxygenation:</strong> Enhance the supply of oxygen to the lungs and body.</li>
              <li><strong>Support Ventilation:</strong> Facilitate effective breathing and reduce the work of breathing.</li>
              <li><strong>Address Underlying Causes:</strong> Treat the underlying condition that led to ARDS (e.g., pneumonia, sepsis).</li>
              <li><strong>Prevent Complications:</strong> Minimize the risk of further lung injury and other complications.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Treatment Options</h2>
            <h3 className="font-semibold text-lg mt-4">1. Supportive Care</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Oxygen Therapy:</strong> Administer supplemental oxygen to maintain adequate oxygen levels in the blood.</li>
              <li><strong>Mechanical Ventilation:</strong> Most patients with ARDS require mechanical ventilation to support breathing. Strategies include:
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>Low Tidal Volume Ventilation: Using smaller volumes of air to reduce lung injury.</li>
                  <li>Positive End-Expiratory Pressure (PEEP): Helps keep alveoli open and improve oxygenation.</li>
                </ul>
              </li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">2. Pharmacological Interventions</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Corticosteroids: Medications like dexamethasone are used to reduce inflammation in the lungs.</li>
              <li>Neuromuscular Blocking Agents: May be used to facilitate mechanical ventilation and improve oxygenation.</li>
              <li>Antibiotics: Administered if an underlying infection, such as pneumonia, is present.</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">3. Prone Positioning</h3>
            <p>Placing patients on their stomachs can improve lung function and oxygenation by redistributing blood flow and reducing pressure on the lungs.</p>

            <h3 className="font-semibold text-lg mt-4">4. Extracorporeal Membrane Oxygenation (ECMO)</h3>
            <p>In severe cases where conventional ventilation fails, ECMO may be used. This technique involves circulating blood through an artificial lung to oxygenate it before returning it to the body.</p>

            <h2 className="font-bold text-xl mt-6">Management of Underlying Causes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Identify and Treat Underlying Conditions: Address factors such as infections, trauma, or pancreatitis that may have precipitated ARDS.</li>
              <li>Fluid Management: Careful management of fluid intake to prevent fluid overload, which can worsen pulmonary edema.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Monitoring and Follow-Up</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Continuous Monitoring: Regular assessment of vital signs, oxygen saturation, and lung function.</li>
              <li>Multidisciplinary Approach: Involvement of a team including intensivists, nurses, respiratory therapists, and other specialists to provide comprehensive care.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Conclusion</h2>
            <p>
              The treatment of ARDS focuses on supportive care, addressing underlying causes, and employing advanced techniques like mechanical ventilation and ECMO when necessary. Early recognition and intervention are critical for improving outcomes in patients with ARDS.
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

export default ArdsTreatment;
