
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/Asthma.jpeg", // Add a relevant image URL if available
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


const Asthma = () => {
  return (
      <div className="w-full min-h-screen bg-white font-sans">
        <div
          className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${data.bgImage})` }}
        ></div>
  
        {/* ✅ Content Section */}
        <div className="px-10 lg:px-40 py-10">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">
            Asthma Treatment
          </h1>
  
          <div className="flex flex-col lg:flex-row gap-8">
            {/* ✅ Main Content */}
            <div className="lg:w-3/4 space-y-6 text-gray-700">
              <h2 className="font-bold text-xl mt-4">Overview</h2>
              <p>
                Asthma is a chronic respiratory condition characterized by inflammation and narrowing of the airways, leading to difficulty in breathing. Effective asthma management involves a combination of medication, lifestyle changes, and avoidance of triggers.
              </p>
  
              <h2 className="font-bold text-xl mt-6">Goals of Asthma Treatment</h2>
              <ul className="list-disc pl-6 space-y-2">
                 <li>
                <strong>Control Symptoms:</strong> Reduce frequency and severity of asthma attacks.
              </li>
              <li>
                <strong>Latent TB:</strong> Usually treated with a single antibiotic for several months.
              </li>
              <li>
                <strong>Drug-resistant TB:</strong> Requires longer treatment with stronger medicines.
              </li>
              </ul>
  
              <h2 className="font-bold text-xl mt-6">Symptoms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Shortness of breath</li>
                <li>Chest tightness or pain</li>
                <li>Wheezing (especially when exhaling)</li>
                <li>Coughing, especially at night or early morning</li>
                <li>Difficulty sleeping due to coughing or breathing issues</li>
              </ul>
  
              <h2 className="font-bold text-xl mt-6">Signs of Worsening Asthma</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Needing a rescue inhaler more often</li>
                <li>Symptoms becoming more frequent or severe</li>
                <li>Decreased peak flow (lung function)</li>
              </ul>
  
              <h2 className="font-bold text-xl mt-6">Risk Factors</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Family history of asthma or allergies</li>
                <li>Conditions like eczema or hay fever</li>
                <li>Being overweight or smoking</li>
                <li>Exposure to secondhand smoke or air pollution</li>
                <li>Working around strong chemicals (farming, salons, etc.)</li>
              </ul>
  
              <h2 className="font-bold text-xl mt-6">Treatment Options</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Inhaled corticosteroids:</strong> Reduce airway inflammation (main
                  long-term control)
                </li>
                <li>
                  <strong>Bronchodilators:</strong>
                  <ul className="list-disc pl-6 mt-1">
                    <li>SABAs – Quick relief (e.g., salbutamol)</li>
                    <li>LABAs – Long-acting, used with steroids</li>
                  </ul>
                </li>
                <li>Leukotriene modifiers – Reduce inflammation</li>
                <li>Biologics – For severe asthma (e.g., dupilumab, mepolizumab)</li>
                <li>Immunotherapy – For allergy-related asthma</li>
                <li>
                  SMART therapy – Uses ICS-formoterol for both daily and rescue use (as per GINA
                  2025)
                </li>
              </ul>
  
              <h2 className="font-bold text-xl mt-6">Management Tips</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Avoid known triggers</li>
                <li>Follow your asthma action plan</li>
                <li>Use inhalers properly</li>
                <li>Monitor symptoms and lung function</li>
                <li>Stay updated with vaccinations (flu, COVID-19)</li>
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
}

export default Asthma