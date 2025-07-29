import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/Fever.jpeg", // You can change this to a fever-related image if available
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

const Fever = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      {/* ✅ Content Section */}
      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Fever Treatment: A Complete Guide
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-bold text-xl mt-4">Fever Treatment Overview</h2>
            <p>
              Fever is a natural response of the body to infection or illness.
              Treatment focuses on reducing discomfort, lowering body temperature,
              and addressing the root cause. While many cases resolve on their own,
              proper care ensures faster recovery and prevents complications.
            </p>

            <h2 className="font-bold text-xl mt-6">Common Causes of Fever</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Infections:</strong> Bacterial (e.g., pneumonia, UTI), viral (e.g., influenza), or fungal.</li>
              <li><strong>Inflammatory Diseases:</strong> Rheumatoid arthritis, lupus, IBD.</li>
              <li><strong>Medications:</strong> Drug-induced fever from antibiotics, antihistamines, etc.</li>
              <li><strong>Heat-Related Illnesses:</strong> Heat exhaustion, heatstroke from prolonged heat exposure.</li>
              <li><strong>Cancer:</strong> Especially leukemia or lymphoma.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Risk Factors</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Age:</strong> Infants and older adults are more vulnerable.</li>
              <li><strong>Chronic Illnesses:</strong> Diabetes, HIV/AIDS, autoimmune diseases.</li>
              <li><strong>Immunocompromised Individuals:</strong> People on chemotherapy, steroids, or post-transplant.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Treatment Options</h2>

            <h3 className="font-bold text-xl mt-4">1. Medications</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Acetaminophen</strong> (Tylenol) and <strong>Ibuprofen</strong> (Advil, Motrin) reduce fever and symptoms.</li>
              <li><strong>Avoid aspirin</strong> in children due to risk of Reye’s syndrome.</li>
            </ul>

            <h3 className="font-bold text-xl mt-4">2. Hydration</h3>
            <p>Drink water, oral rehydration solutions, or clear fluids to prevent dehydration and support immune response.</p>

            <h3 className="font-bold text-xl mt-4">3. Rest</h3>
            <p>Adequate sleep and reduced physical activity help the body recover faster.</p>

            <h3 className="font-bold text-xl mt-4">4. Cooling Techniques</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cool, damp washcloth on forehead.</li>
              <li>Lukewarm (not cold) baths.</li>
              <li>Light clothing and a comfortable room temperature.</li>
            </ul>

            <h3 className="font-bold text-xl mt-4">5. Treat the Underlying Cause</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Bacterial Infections:</strong> Need antibiotics.</li>
              <li><strong>Viral Infections:</strong> Usually self-limited, treated supportively.</li>
              <li><strong>Chronic/Autoimmune:</strong> May require targeted therapy from specialists.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">When to Seek Medical Attention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fever lasting more than 3 days.</li>
              <li>Temperature above 103°F (39.4°C).</li>
              <li>Accompanied by severe headache, rash, vomiting, confusion, or stiff neck.</li>
              <li>Infants under 3 months with any fever.</li>
              <li>Immunocompromised individuals with fever.</li>
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

export default Fever;