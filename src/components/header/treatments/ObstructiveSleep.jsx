import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/OSA.jpeg", // Add a relevant image URL if available
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

const ObstructiveSleep = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Obstructive Sleep Apnea (OSA)
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-bold text-xl mt-4">Overview</h2>
            <p>
              Obstructive Sleep Apnea is a common sleep disorder characterized by repeated interruptions in breathing during sleep due to the relaxation of throat muscles, leading to airway obstruction. This condition can result in fragmented sleep and low oxygen levels in the blood.
            </p>

            <h2 className="font-bold text-xl mt-6">Symptoms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Loud Snoring: Often reported by bed partners.</li>
              <li>Choking or Gasping During Sleep: Episodes of airway obstruction.</li>
              <li>Excessive Daytime Sleepiness: Feeling fatigued or drowsy during the day.</li>
              <li>Morning Headaches: Due to poor oxygenation during the night.</li>
              <li>Difficulty Concentrating: Cognitive impairments related to sleep disruption.</li>
              <li>Irritability or Mood Changes: Affecting emotional well-being.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Causes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Obesity: Excess weight can contribute to airway obstruction.</li>
              <li>Anatomical Factors: Enlarged tonsils, a large neck circumference, or a thick neck.</li>
              <li>Age: Risk increases with age.</li>
              <li>Gender: More common in males than females.</li>
              <li>Family History: Genetic predisposition may play a role.</li>
              <li>Smoking and Alcohol Use: Can exacerbate airway obstruction.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Diagnosis</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sleep Study (Polysomnography): The gold standard for diagnosing OSA, conducted in a sleep lab or at home.</li>
              <li>Home Sleep Apnea Testing: Simpler tests that can be done at home to monitor breathing patterns.</li>
              <li>Clinical Evaluation: Assessment of medical history, symptoms, and physical examination.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Treatment Options</h2>
            <h3 className="font-semibold text-lg mt-4">1. Lifestyle Modifications</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Weight Loss: Reducing weight can significantly alleviate symptoms.</li>
              <li>Positional Therapy: Sleeping on the side rather than the back to prevent airway obstruction.</li>
              <li>Avoiding Alcohol and Sedatives: These substances can relax throat muscles and worsen OSA.</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">2. Continuous Positive Airway Pressure (CPAP)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>CPAP Therapy: A machine that delivers constant air pressure through a mask to keep the airway open during sleep. This is the most common and effective treatment for moderate to severe OSA.</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">3. Oral Appliances</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mandibular Advancement Devices (MADs): Dental devices that reposition the lower jaw and tongue to keep the airway open. These are often used for mild to moderate OSA.</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">4. Surgery</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Uvulopalatopharyngoplasty (UPPP)</li>
              <li>Genioglossus advancement</li>
              <li>Maxillomandibular advancement</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">5. Other Therapies</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Positional Therapy Devices: Special devices that encourage side sleeping.</li>
              <li>Medications: Although not commonly used as a primary treatment, certain medications may help manage symptoms in some patients.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Management and Follow-Up</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Regular Follow-Up: Ongoing assessment of treatment effectiveness and adjustment of therapies as needed.</li>
              <li>Monitoring for Comorbidities: Individuals with OSA may be at higher risk for conditions like hypertension, heart disease, and diabetes.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Conclusion</h2>
            <p>
              Obstructive Sleep Apnea is a serious condition that can significantly impact health and quality of life. Effective management includes lifestyle changes, CPAP therapy, oral appliances, and potentially surgery, depending on the severity of the condition.
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

export default ObstructiveSleep;
