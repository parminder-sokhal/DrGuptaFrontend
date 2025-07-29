import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/InterstitialLung.jpeg", // Change if needed
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

const InterstitialLung = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      {/* Content */}
      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Interstitial Lung Disease (ILD) Treatment
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-bold text-xl mt-4">Overview</h2>
            <p>
              Interstitial Lung Disease (ILD) refers to a group of disorders that cause
              scarring (fibrosis) of the lungs. This makes it difficult to breathe and
              affects oxygen transfer into the bloodstream.
            </p>

            <h2 className="font-bold text-xl mt-6">Common Symptoms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Shortness of breath (especially during activity)</li>
              <li>Dry, persistent cough</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Types of ILD</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Idiopathic Pulmonary Fibrosis (IPF)</li>
              <li>Interstitial Pneumonia</li>
              <li>Nonspecific Interstitial Pneumonitis (NSIP)</li>
              <li>Desquamative Interstitial Pneumonitis (DIP)</li>
              <li>Acute Interstitial Pneumonitis (AIP)</li>
              <li>Cryptogenic Organizing Pneumonia (COP)</li>
            </ul>

            <h2 className="font-bold text-xl mt-6">Treatment Options</h2>
            <h3 className="font-bold text-xl mt-4">Medications</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Corticosteroids (e.g., Prednisone) to reduce inflammation</li>
              <li>Immunosuppressants (e.g., Azathioprine, Mycophenolate)</li>
              <li>Antifibrotic Drugs (e.g., Pirfenidone, Nintedanib) for IPF</li>
            </ul>

            <h3 className="font-bold text-xl mt-4">Oxygen Therapy</h3>
            <p>Helps improve breathing and maintain oxygen levels in the blood.</p>

            <h3 className="font-bold text-xl mt-4">Pulmonary Rehabilitation</h3>
            <p>
              A structured program including exercise, education, and support to improve
              lung function and quality of life.
            </p>

            <h3 className="font-bold text-xl mt-4">Lung Transplant</h3>
            <p>May be considered in severe or advanced cases where other treatments fail.</p>

            <h2 className="font-bold text-xl mt-6">Care Tips</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Avoid smoking and exposure to lung irritants</li>
              <li>Treat any underlying or associated health conditions</li>
              <li>Schedule regular follow-ups with a pulmonologist</li>
            </ul>
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

export default InterstitialLung;