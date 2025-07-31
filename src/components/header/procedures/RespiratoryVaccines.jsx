import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/RespiratoryVaccines.jpg", // Update this with a relevant image path if available
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

const RespiratoryVaccines = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          <strong>Respiratory Vaccines</strong>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 text-gray-700">
          <div className="lg:w-3/4 space-y-6">
            <h2 className="text-xl font-bold">Overview</h2>
            <p>
              Respiratory vaccines are designed to protect against infections that affect the respiratory system. These vaccines stimulate the immune system to recognize and fight off pathogens such as viruses and bacteria that can cause diseases like influenza, COVID-19, and pneumonia.
            </p>

            <h2 className="text-xl font-bold">Common Types of Respiratory Vaccines</h2>

            <p><strong>1. Influenza Vaccines</strong></p>
            <p><strong>Purpose:</strong> To protect against seasonal influenza (the flu).</p>
            <p><strong>Types:</strong></p>
            <ul className="list-disc pl-6">
              <li>Inactivated Influenza Vaccine: Contains killed viruses and is administered via injection.</li>
              <li>Live Attenuated Influenza Vaccine: Contains weakened viruses and is administered as a nasal spray.</li>
            </ul>
            <p><strong>Recommended for:</strong> Most people annually, especially those at higher risk such as the elderly, children, and individuals with chronic conditions.</p>

            <p><strong>2. COVID-19 Vaccines</strong></p>
            <p><strong>Purpose:</strong> To prevent COVID-19, caused by the SARS-CoV-2 virus.</p>
            <ul className="list-disc pl-6">
              <li>mRNA Vaccines: e.g., Pfizer-BioNTech and Moderna.</li>
              <li>Viral Vector Vaccines: e.g., Johnson & Johnson.</li>
              <li>Protein Subunit Vaccines: Contain viral proteins to elicit immunity.</li>
            </ul>
            <p><strong>Recommended for:</strong> All eligible individuals to reduce spread and severity.</p>

            <p><strong>3. Pneumococcal Vaccines</strong></p>
            <p><strong>Purpose:</strong> To protect against Streptococcus pneumoniae infections.</p>
            <ul className="list-disc pl-6">
              <li>PCV (Conjugate): For children and certain adults.</li>
              <li>PPSV (Polysaccharide): For adults 65+ and at-risk individuals.</li>
            </ul>

            <p><strong>4. Pertussis Vaccines</strong></p>
            <p><strong>Purpose:</strong> To protect against whooping cough.</p>
            <ul className="list-disc pl-6">
              <li>DTaP: For children (includes diphtheria, tetanus, and pertussis).</li>
              <li>Tdap: Booster for adolescents and adults.</li>
            </ul>
            <p><strong>Recommended for:</strong> All age groups, especially pregnant women and infant caregivers.</p>

            <h2 className="text-xl font-bold">Benefits of Respiratory Vaccines</h2>
            <ul className="list-disc pl-6">
              <li><strong>Prevention of Disease:</strong> Reduces severe respiratory infections.</li>
              <li><strong>Herd Immunity:</strong> Protects those who can't be vaccinated.</li>
              <li><strong>Reduction of Hospitalizations:</strong> Decreases burden on healthcare systems.</li>
              <li><strong>Long-term Protection:</strong> Some vaccines offer lasting immunity.</li>
            </ul>

            <h2 className="text-xl font-bold">Conclusion</h2>
            <p>
              Respiratory vaccines are essential for preventing serious lung infections. Staying updated on vaccinations is vital for both individual and public health. Consult with your healthcare provider for personalized guidance.
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

export default RespiratoryVaccines;