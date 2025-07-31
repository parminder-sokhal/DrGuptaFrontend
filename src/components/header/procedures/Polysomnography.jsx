import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/Polysomnography.jpeg", // Update with a relevant image if available
  sidebarLinks: [
    { title: "Allergy Testing & Immunotherapy", link: "/AllergyTestingImmunotherapy" },
    { title: "Bronchoscopy", link: "/Bronchoscopy" },
    { title: "Thoracoscopy", link: "/Thoracoscopy" },
    { title: "Pulmonary Function Testing", link: "/PulmonaryFunction" },
    { title: "Intercostal Drainage Tube Insertion", link: "/IntercostalDrainage" },
    { title: "Lung Biopsy", link: "/LungBiopsy" },
    { title: "Pleural Biopsy", link: "/PleuralBiopsy" },
    { title: "Pleurodesis", link: "/Pleurodesis" },
    { title: "EBUS-TBNA", link: "/EBUSTBNA" },
    { title: "FENO (Breath Test)", link: "/FENO" },
    { title: "Tracheal Stenting", link: "/TrachealStenting" },
    { title: "Bronchial Artery Embolization", link: "/BronchialArtery" },
    { title: "BiPAP & CPAP", link: "/BiPAPCPAP" },
    { title: "Chest Drain Insertion", link: "/ChestDrain" },
    { title: "DLCO", link: "/DLCO" },
    { title: "Forced Oscillometry Technique", link: "/ForcedOscillometry" },
    { title: "Immunotherapy", link: "/Immunotherapy" },
    { title: "Pleural Procedures", link: "/PleuralProcedures" },
    { title: "Respiratory Vaccines", link: "/RespiratoryVaccines" },
    { title: "Polysomnography (Sleep Study)", link: "/Polysomnography" },
  ],
};

const Polysomnography = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          <strong>Polysomnography (Sleep Study)</strong>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 text-gray-700">
          <div className="lg:w-3/4 space-y-6">
            <h2 className="text-xl font-bold">Overview</h2>
            <p>
              Polysomnography is a comprehensive test used to diagnose sleep disorders. It records various physiological parameters while a person sleeps, providing valuable data to help healthcare providers understand sleep patterns and identify any abnormalities.
            </p>

            <h2 className="text-xl font-bold">Purpose</h2>
            <p>Polysomnography is primarily used to diagnose conditions such as:</p>
            <ul className="list-disc pl-6">
              <li><strong>Obstructive Sleep Apnea (OSA):</strong> Repeated interruptions in breathing during sleep.</li>
              <li><strong>Central Sleep Apnea:</strong> Breathing stops due to lack of respiratory effort.</li>
              <li><strong>Hypoventilation Syndromes:</strong> Inadequate ventilation during sleep.</li>
              <li><strong>Periodic Limb Movement Disorder (PLMD):</strong> Involuntary limb movements during sleep.</li>
              <li><strong>Narcolepsy:</strong> Excessive daytime sleepiness and sudden sleep attacks.</li>
              <li><strong>Insomnia:</strong> Difficulty falling or staying asleep.</li>
            </ul>

            <h2 className="text-xl font-bold">Procedure</h2>
            <h3 className="font-semibold">Preparation:</h3>
            <ul className="list-disc pl-6">
              <li>Avoid caffeine and alcohol before the test.</li>
              <li>Maintain a regular sleep schedule in the days leading up to the test.</li>
            </ul>

            <h3 className="font-semibold">Setup:</h3>
            <p>
              The study is typically conducted in a sleep lab or at home using portable monitoring equipment. Patients are connected to various sensors that monitor brain activity, eye movements, heart rate, breathing, and oxygen levels.
            </p>

            <h3 className="font-semibold">Monitoring:</h3>
            <p>During the night, the following parameters are recorded:</p>
            <ul className="list-disc pl-6">
              <li><strong>Electroencephalography (EEG):</strong> Measures brain waves to assess sleep stages.</li>
              <li><strong>Electrooculography (EOG):</strong> Records eye movements.</li>
              <li><strong>Electromyography (EMG):</strong> Monitors chin and leg muscle activity.</li>
              <li><strong>Respiratory Effort:</strong> Measured using belts on the chest and abdomen.</li>
              <li><strong>Oxygen Saturation:</strong> Measured using a finger pulse oximeter.</li>
            </ul>

            <h3 className="font-semibold">Data Analysis:</h3>
            <p>The collected data is analyzed by a sleep specialist to identify sleep patterns and diagnose any sleep disorders.</p>

            <h2 className="text-xl font-bold">Benefits</h2>
            <ul className="list-disc pl-6">
              <li><strong>Comprehensive Diagnosis:</strong> Provides a full assessment of sleep quality and disruptions.</li>
              <li><strong>Guides Treatment:</strong> Helps choose effective treatments based on findings.</li>
              <li><strong>Improves Quality of Life:</strong> Better sleep enhances alertness and overall health.</li>
            </ul>

            <h2 className="text-xl font-bold">Risks and Considerations</h2>
            <ul className="list-disc pl-6">
              <li><strong>Discomfort:</strong> Sensors and wires may be uncomfortable for some.</li>
              <li><strong>Sleep Disruption:</strong> Lab environment may differ from typical home sleep conditions.</li>
              <li><strong>Cost:</strong> Polysomnography may be expensive and insurance coverage varies.</li>
            </ul>

            <h2 className="text-xl font-bold">Conclusion</h2>
            <p>
              Polysomnography is a crucial tool in the diagnosis and management of sleep disorders. By providing detailed information about a patient’s sleep and physiological responses, it enables healthcare providers to create effective treatment plans for better sleep and overall well-being.
            </p>
          </div>

          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Procedures</h2>
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

export default Polysomnography;