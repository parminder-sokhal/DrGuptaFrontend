import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import allergyImage from "../../../assets/procedures/allergy.jpg";

const data = {
  bgImage: allergyImage,
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

const AllergyTestingImmunotherapy = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          <strong>Allergy Testing and Immunotherapy Treatment</strong>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              We specialize in identifying and managing allergies through
              comprehensive allergy testing and personalized immunotherapy
              treatments. Whether you're dealing with seasonal allergies, food
              sensitivities, or chronic allergic conditions, our approach
              ensures accurate diagnosis and effective, long-term relief.
            </p>

            <h2 className="text-xl font-bold">What is Allergy Testing?</h2>
            <p>
              Allergy testing helps identify specific allergens responsible for
              triggering your symptoms. It provides valuable insights into
              sensitivities to substances such as:
            </p>
            <ul className="list-disc pl-6">
              <li>Pollen</li>
              <li>Dust mites</li>
              <li>Pet dander</li>
              <li>Mold</li>
              <li>Certain foods</li>
              <li>Insect stings</li>
              <li>Medications</li>
            </ul>
            <p>
              By determining the exact cause of your allergic reactions,
              healthcare providers can recommend appropriate treatments and
              preventive strategies.
            </p>

            <h2 className="text-xl font-bold">
              Common Allergy Testing Methods
            </h2>
            <ul className="list-disc pl-6">
              <li>
                <strong>Skin Prick Test (SPT):</strong> Small amounts of
                potential allergens are introduced into the skin using tiny
                pricks. A raised bump or redness may indicate an allergic
                reaction.
              </li>
              <li>
                <strong>Blood Tests (Specific IgE Testing):</strong> Measures
                the level of allergen-specific antibodies (IgE) in your blood.
                This is especially useful when skin tests are not advisable.
              </li>
              <li>
                <strong>Patch Tests:</strong> Used primarily to diagnose contact
                dermatitis. Allergens are applied to patches placed on the skin
                for 48–72 hours.
              </li>
            </ul>

            <h2 className="text-xl font-bold">
              Who Should Consider Allergy Testing?
            </h2>
            <ul className="list-disc pl-6">
              <li>
                <strong>Persistent Symptoms:</strong> Chronic sneezing, runny
                nose, itchy eyes, skin rashes, or digestive issues without a
                known cause.
              </li>
              <li>
                <strong>Chronic Conditions:</strong> Asthma, eczema, allergic
                rhinitis, or chronic sinusitis that may be worsened by
                unidentified allergens.
              </li>
              <li>
                <strong>Family History:</strong> Close relatives with allergies,
                asthma, or related conditions.
              </li>
              <li>
                <strong>Unexplained Reactions:</strong> When symptoms do not
                improve with medication or lifestyle changes.
              </li>
              <li>
                <strong>Suspected Food Allergies:</strong> Symptoms like nausea,
                hives, or even anaphylaxis after eating certain foods.
              </li>
              <li>
                <strong>Insect Sting Allergies:</strong> Swelling, hives, or
                serious reactions after insect bites or stings.
              </li>
            </ul>

            <h2 className="text-xl font-bold">
              Allergy Testing – Risk Factors and Considerations
            </h2>
            <ul className="list-disc pl-6">
              <li>
                <strong>Severity of Previous Allergic Reactions:</strong>{" "}
                Individuals with a history of anaphylaxis may require special
                precautions.
              </li>
              <li>
                <strong>Medications:</strong> Drugs like antihistamines and
                antidepressants can interfere with test results. Inform your
                doctor about all medications you're taking.
              </li>
              <li>
                <strong>Skin Conditions:</strong> Severe eczema or psoriasis may
                limit the use of skin tests.
              </li>
              <li>
                <strong>Age:</strong> Skin prick testing is less reliable in
                infants under 6 months.
              </li>
              <li>
                <strong>Pregnancy:</strong> Allergy testing is typically safe
                but may be postponed unless necessary.
              </li>
            </ul>

            <h2 className="text-xl font-bold">
              Immunotherapy: A Long-Term Solution for Allergies
            </h2>
            <p>
              Allergy immunotherapy is a preventive treatment designed to reduce
              the body’s sensitivity to allergens. It is highly effective in
              managing:
            </p>
            <ul className="list-disc pl-6">
              <li>Allergic rhinitis (hay fever)</li>
              <li>Asthma related to allergens</li>
              <li>Insect sting allergies</li>
            </ul>
            <p>
              Immunotherapy can reduce the severity of symptoms, minimize
              medication use, and improve quality of life.
            </p>

            <h3 className="text-lg font-bold">Why Choose Immunotherapy?</h3>
            <ul className="list-disc pl-6">
              <li>
                <strong>Allergic Sensitization:</strong> Helps treat underlying
                immune hypersensitivity.
              </li>
              <li>
                <strong>Poor Response to Medication:</strong> When symptoms are
                not managed by standard treatments.
              </li>
              <li>
                <strong>Desire for Long-Term Relief:</strong> Immunotherapy
                targets the root cause of allergies.
              </li>
            </ul>

            <h3 className="text-lg font-bold">Types of Immunotherapy</h3>
            <ul className="list-disc pl-6">
              <li>
                <strong>Subcutaneous Immunotherapy (SCIT):</strong> Allergy
                shots given under the skin weekly, then monthly for maintenance.
              </li>
              <li>
                <strong>Sublingual Immunotherapy (SLIT):</strong> Allergen
                tablets or drops placed under the tongue—convenient for home use
                under supervision.
              </li>
            </ul>

            <h3 className="text-lg font-bold">How Immunotherapy Works</h3>
            <p>
              Immunotherapy introduces small, controlled amounts of allergens
              into the body to retrain the immune system. Over time, the immune
              response becomes less sensitive, leading to:
            </p>
            <ul className="list-disc pl-6">
              <li>Reduced allergy symptoms</li>
              <li>Lower risk of severe allergic reactions</li>
              <li>Improved tolerance to allergens</li>
            </ul>

            <h3 className="text-lg font-bold">
              Risk Factors and Safety Considerations
            </h3>
            <ul className="list-disc pl-6">
              <li>
                <strong>Severe Allergic History:</strong> Prior anaphylactic
                reactions require careful monitoring.
              </li>
              <li>
                <strong>Age:</strong> Suitable for all ages, but young children
                may require special consideration.
              </li>
              <li>
                <strong>Medical Conditions:</strong> Heart disease or
                uncontrolled asthma may increase risks.
              </li>
              <li>
                <strong>Medication Interactions:</strong> Beta-blockers and ACE
                inhibitors may interfere with treatment.
              </li>
              <li>
                <strong>Immune System Disorders:</strong> Not recommended for
                those with significant immune deficiencies.
              </li>
            </ul>
            <p>
              All immunotherapy sessions are supervised by experienced
              healthcare professionals to ensure maximum safety.
            </p>

            <h2 className="text-xl font-bold">
              Ready to Take Control of Your Allergies?
            </h2>
            <p>
              Our clinic provides comprehensive allergy testing and customized
              immunotherapy plans designed to help you breathe easier, feel
              better, and enjoy life without the constant burden of allergic
              symptoms.
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

export default AllergyTestingImmunotherapy;
