import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AboutHeading = () => {
  const location = useLocation();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  useEffect(() => {
    if (location.hash === "#qualifications") {
      const el = document.getElementById("qualifications");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // Delay ensures DOM is rendered
      }
    }
  }, [location]);

  const doctor = {
    name: "Dr. Robin Gupta",
    experience: 12, // in years
  };

  const handleRedirectParas = () => {
    window.open(
      "https://www.parashospitals.com/panchkula/doctor-near-me/pulmonologist/dr-robin-gupta",
      "_blank"
    );
  };

  const handleRedirectClinic = () => {
    window.open(
      "https://book.healthplix.com/dr-robin-gupta-pulmonologist-chest-care-clin",
      "_blank"
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="py-2">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-2">
          Dr. Robin Gupta <br />
        </h1>
        <h2 className="text-2xl sm:text-2xl text-pink-700">
          Senior consultant, Pulmonology, Paras Health Panchkula. <br />
        </h2>
        <h2 className="text-xl text-pink-700">
          MD , FICM, FCCP (USA) More than 12 yrs experience, worked at premium
          hospitals - GMCH-32, Fortis and has immense experience of handling
          difficult respiratory cases
        </h2>
      </div>

      <p className="text-gray-700 text-lg mb-6">
        Dr. Robin Gupta is a highly esteemed pulmonologist with over a decade of
        rich experience in the field, renowned for his expertise and
        compassionate patient care. He completed his pulmonology training at
        GMCH-32 and further honed his skills through stints at prestigious
        institutions such as Fortis Hospitals, Mohali, and Apollo Hospitals. Dr.
        Gupta's commitment to advancing medical knowledge is evidenced by his
        active involvement in various chest societies across India and his
        pivotal role as a founding member of the Critical Care Society in
        Panchkula. His dedication to excellence and patient-centric approach
        have earned him the trust and admiration of countless patients and peers
        alike.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4 ">
        Meet Dr. Robin Gupta – A Leader in Respiratory Medicine
      </h2>

      <p className="text-gray-700 text-lg mb-6">
        With decades of experience in the field of pulmonology, Dr. Robin Gupta
        brings deep expertise and an unwavering commitment to improving the lung
        health of his patients. He is known for his precise diagnosis,
        evidence-based treatments, and patient-first approach. Dr. Gupta’s
        training from prestigious institutions and ongoing participation in
        national and international medical forums ensure that his knowledge is
        always up-to-date with the latest advancements in respiratory medicine.
      </p>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT SIDE – Info Content */}
        <div className="w-full lg:w-3/5 space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Certifications:
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Fellowship of the American College of Chest Physicians (FCCP)
              </li>
              <li>Advanced Training in Intensive Care Medicine</li>
              <li>MD in Pulmonology Medicine</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Awards and Recognitions:
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Excellence in Pulmonology Award</li>
              <li>Outstanding Contribution to Critical Care Medicine</li>
              <li>
                Distinguished Service Award for Advancement in Pulmonology
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Memberships:
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>European Respiratory Society</li>
              <li>ACCP</li>
              <li>American Thoracic Society</li>
              <li>Indian Chest Society</li>
              <li>Association of Physicians of India</li>
              <li>Indian Association for Study of Lung Cancer</li>
              <li>National College of Chest Physicians</li>
              <li>Respiratory Education Society</li>
              <li>Executive Member – SCCM Panchkula</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Services – Comprehensive Respiratory Care
          </h2>

          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-4 text-base">
            <li>
              <strong>Interventional pulmonology:</strong> provides specialized
              care for the diagnosis and management of asthma and allergies,
              focusing on controlling symptoms, improving lung function, and
              enhancing quality of life.
            </li>
            <li>
              <strong>Diagnosis and Management of Asthma and Allergies:</strong>
              Specialized care to control symptoms, improve lung function, and
              enhance quality of life.
            </li>
            <li>
              <strong>
                Chronic Obstructive Pulmonary Disease (COPD) Treatment:
              </strong>
              Comprehensive COPD care including medication, lifestyle guidance,
              and long-term management strategies.
            </li>
            <li>
              <strong>Pulmonary Function Testing (PFT):</strong> Advanced lung
              function tests to accurately diagnose and monitor respiratory
              conditions.
            </li>
            <li>
              <strong>Sleep-Related Breathing Disorders:</strong> Evaluation and
              treatment of sleep apnea and other disorders affecting nighttime
              breathing.
            </li>
            <li>
              <strong>Post-COVID Lung Recovery Programs:</strong> Structured
              recovery plans for patients experiencing lingering lung symptoms
              after COVID-19.
            </li>
            <li>
              <strong>Smoking Cessation Support:</strong> Guidance and support
              to help individuals quit smoking and reduce long-term lung damage.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Dr. Robin Gupta?
          </h2>

          <ul className="list-disc list-inside text-gray-700 space-y-4 text-base">
            <li>
              <strong>✅ Vast Clinical Expertise:</strong> Years of hands-on
              experience in treating both common and complex pulmonary
              disorders.
            </li>
            <li>
              <strong>✅ Patient-Centric Approach:</strong> Every patient is
              treated with empathy, respect, and personalized attention.
            </li>
            <li>
              <strong>✅ Cutting-Edge Technology:</strong> Latest diagnostic and
              therapeutic tools for precision and effectiveness.
            </li>
            <li>
              <strong>✅ Seamless Access to Care:</strong> Easy appointments,
              minimal wait times, and smooth care experience.
            </li>
            <li>
              <strong>✅ Integrated Healthcare Network:</strong> Trusted
              referrals for specialized care under expert supervision.
            </li>
            <li>
              <strong>✅ Holistic Healing Philosophy:</strong> Focused on
              long-term lung health and overall well-being.
            </li>
            <li>
              <strong>✅ Highly Recommended by Patients:</strong> Trusted by
              families across the region for pulmonary care.
            </li>
          </ul>

          <p className="text-pink-700 font-semibold mt-10 text-lg">
            Take a Breath of Relief – You're in Safe Hands
          </p>

          <p className="text-gray-700 text-lg mt-4">
            At Dr. Robin Gupta’s Pulmonology Clinic, we believe that breathing
            well is living well. Whether you're managing a chronic condition,
            seeking expert advice for troubling symptoms, or recovering from a
            respiratory illness, you’ll receive unmatched care and support
            throughout your journey.
          </p>

          <p className="text-gray-700 text-lg mt-4">
            Visit us in Panchkula and experience a new standard in respiratory
            care. Your lungs deserve nothing but the best — and that’s exactly
            what we strive to provide every single day.
          </p>
        </div>

        {/* RIGHT SIDE – Experience, Fees, and Slot Booking */}
        <div className="w-full lg:w-2/5 space-y-6" id="qualifications">
          {/* Experience Badge */}
          <div className="flex justify-start items-center">
            <div className="bg-blue-50 border border-blue-200 px-5 py-3 rounded-md shadow-sm flex flex-col items-center w-2/3 text-center">
              <span className="text-xl flex font-semibold text-blue-700">
                {doctor?.experience}
                <span className="text-md items-center justify-center flex text-blue-700 ml-1">
                  Years
                </span>
              </span>
              <span className="text-sm text-gray-600">Experience</span>
            </div>
          </div>

          {/* Paras Hospital Section */}
          <div className="mb-6">
            <div className="text-base font-bold text-blue-700 mb-2">
              Available Time – Paras Hospital Visit
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-1">
                Morning Timing:{" "}
                <span className="font-normal">9 AM to 12 PM</span>
              </h4>
              <h4 className="font-semibold text-gray-800 mb-1">
                Afternoon Timing:{" "}
                <span className="font-normal">12:30 PM to 4:30 PM</span>
              </h4>
            </div>

            <button
              onClick={handleRedirectParas}
              className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm"
            >
              View Profile & Book on Paras Hospital
            </button>
          </div>

          {/* Clinic Section */}
          <div className="mt-10 pt-6 border-t border-gray-300">
            <div className="text-base font-bold text-blue-700 mb-2">
              Evening Timing – For Clinic Visit (Dr. Robin’s Chest Clinic)
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-1">
                Evening Timing:{" "}
                <span className="font-normal">5:30 PM to 7:30 PM</span>
              </h4>
            </div>

            <button
              onClick={handleRedirectClinic}
              className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm"
            >
              Book Appointment at Clinic
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeading;
