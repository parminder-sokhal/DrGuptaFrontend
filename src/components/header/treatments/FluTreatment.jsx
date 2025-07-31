import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/Flu.jpeg", // You can replace this with a flu-related image
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

const FluTreatment = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      {/* Content Section */}
      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Flu Treatment (Influenza)
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-bold text-xl mt-4">Overview</h2>
            <p>
              Influenza, commonly known as the flu, is a viral infection that affects the respiratory system. It can cause mild to severe illness and can lead to complications, especially in high-risk populations.
            </p>

            <h2 className="font-bold text-xl mt-6">Goals of Flu Treatment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Relieve Symptoms: Manage fever, aches, and other discomforts.</li>
              <li>Shorten Duration: Reduce the length of the illness with antiviral medications.</li>
              <li>Prevent Complications: Minimize the risk of secondary infections or severe outcomes.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Treatment Options</h2>
            <h3 className="font-semibold text-lg mt-4">1. Antiviral Medications</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Oseltamivir (Tamiflu): Taken orally, effective if started within 48 hours of symptom onset.</li>
              <li>Zanamivir (Relenza): An inhaled antiviral medication.</li>
              <li>Peramivir (Rapivab): An intravenous antiviral option for severe cases.</li>
              <li>Baloxavir marboxil (Xofluza): A newer antiviral that can be taken as a single dose.</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">2. Symptomatic Relief</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fever and Pain Relief:
                <ul className="list-disc pl-6">
                  <li>Acetaminophen (Tylenol): Reduces fever and relieves pain.</li>
                  <li>Ibuprofen (Advil, Motrin): Also reduces fever and alleviates aches.</li>
                </ul>
              </li>
              <li>Cough Suppressants: Such as dextromethorphan for cough relief.</li>
              <li>Decongestants: Help relieve nasal congestion (e.g., pseudoephedrine).</li>
              <li>Antihistamines: Can help with runny nose and sneezing.</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">3. Home Care and Supportive Measures</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Rest: Adequate rest is crucial for recovery.</li>
              <li>Hydration: Drink plenty of fluids to prevent dehydration.</li>
              <li>Humidifiers: Adding moisture to the air can help ease breathing and soothe irritated nasal passages.</li>
              <li>Warm Salt Water Gargles: Can relieve a sore throat.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Prevention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Vaccination: Annual flu vaccine is the most effective way to prevent influenza.</li>
              <li>Good Hygiene Practices:
                <ul className="list-disc pl-6">
                  <li>Frequent Handwashing: Use soap and water or hand sanitizer.</li>
                  <li>Avoid Close Contact: Stay away from sick individuals and avoid crowded places during flu season.</li>
                  <li>Cover Coughs and Sneezes: Use a tissue or your elbow to prevent spreading the virus.</li>
                </ul>
              </li>
            </ul>

            <h2 className="font-bold text-xl mt-6">When to Seek Medical Attention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Difficulty breathing or shortness of breath.</li>
              <li>Chest pain or pressure.</li>
              <li>Persistent high fever or severe symptoms.</li>
              <li>Symptoms that improve but then worsen.</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Conclusion</h2>
            <p>
              Flu treatment focuses on symptom relief, antiviral medications, and supportive care. Prevention through vaccination and good hygiene practices is essential to reduce the risk of infection.
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

export default FluTreatment;
