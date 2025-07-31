import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/Immunotherapy.jpeg", // Replace with an Immunotherapy-related image if available
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

const Immunotherapy = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          <strong>Immunotherapy</strong>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 text-gray-700">
          <div className="lg:w-3/4 space-y-6">
            <h2 className="text-xl font-bold">Overview</h2>
            <p>
              Immunotherapy is a type of medical treatment that harnesses the body’s immune system to fight diseases, particularly cancer and allergies. By enhancing or restoring the immune response, immunotherapy can help the body recognize and eliminate harmful cells more effectively.
            </p>

            <h2 className="text-xl font-bold">Types of Immunotherapy</h2>
            <h3 className="font-semibold">Cancer Immunotherapy:</h3>
            <ul className="list-disc pl-6">
              <li><strong>Monoclonal Antibodies:</strong> Lab-made molecules that bind to specific targets on cancer cells, marking them for destruction.</li>
              <li><strong>Checkpoint Inhibitors:</strong> Drugs that remove brakes on the immune system, allowing it to better attack cancer cells (e.g., pembrolizumab, nivolumab).</li>
              <li><strong>Cancer Vaccines:</strong> Stimulate the immune system to recognize and attack cancer cells (e.g., HPV vaccine).</li>
              <li><strong>Adoptive Cell Transfer:</strong> Uses a patient’s own immune cells, enhanced in a lab (e.g., CAR T-cell therapy), to fight cancer.</li>
            </ul>

            <h3 className="font-semibold">Allergy Immunotherapy:</h3>
            <p>
              Allergen Immunotherapy gradually exposes patients to allergens (e.g., pollen, dust mites) to reduce allergic responses. It is administered via:
            </p>
            <ul className="list-disc pl-6">
              <li>Subcutaneous injections (allergy shots)</li>
              <li>Sublingual tablets or drops</li>
            </ul>

            <h3 className="font-semibold">Autoimmune Disease Treatment:</h3>
            <p>
              Immunotherapy is also used to regulate immune responses in autoimmune diseases, minimizing harm caused by an overactive immune system.
            </p>

            <h2 className="text-xl font-bold">How Immunotherapy Works</h2>
            <ul className="list-disc pl-6">
              <li><strong>Stimulating Immune Response:</strong> Enhances the immune system's ability to recognize and destroy threats.</li>
              <li><strong>Targeting Specific Cells:</strong> Focuses immune activity on diseased cells while sparing healthy ones.</li>
              <li><strong>Training the Immune System:</strong> Some therapies help the immune system remember harmful cells, offering lasting protection.</li>
            </ul>

            <h2 className="text-xl font-bold">Benefits of Immunotherapy</h2>
            <ul className="list-disc pl-6">
              <li><strong>Targeted Treatment:</strong> More specific than conventional therapies, often with fewer side effects.</li>
              <li><strong>Durable Response:</strong> Some patients have long-term benefits even after stopping treatment.</li>
              <li><strong>Combination Potential:</strong> Can be paired with chemotherapy, radiation, or other therapies.</li>
            </ul>

            <h2 className="text-xl font-bold">Limitations and Side Effects</h2>
            <ul className="list-disc pl-6">
              <li><strong>Not Suitable for Everyone:</strong> May not work for all patients or cancer types.</li>
              <li><strong>Immune-Related Side Effects:</strong> Can cause inflammation in healthy organs (e.g., colitis, dermatitis).</li>
              <li><strong>Cost and Accessibility:</strong> May be expensive and not available in all locations or hospitals.</li>
            </ul>

            <h2 className="text-xl font-bold">Conclusion</h2>
            <p>
              Immunotherapy represents a promising frontier in the treatment of cancer, allergies, and autoimmune diseases. It offers targeted, long-lasting treatment options. Always consult with a healthcare provider to understand whether immunotherapy is appropriate for your specific condition.
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

export default Immunotherapy;