// treatment.jsx
import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from "react-router-dom";


// Treatments
import LungCancer from '../../components/header/treatments/LungCancer.jsx';
import PneumoniaTreatment from '../../components/header/treatments/PneumoniaTreatment.jsx';
import BronchialAsthma from '../../components/header/treatments/BronchialAsthma.jsx';
import Tuberculosis from '../../components/header/treatments/Tuberculosis.jsx';
import InterstitialLung from '../../components/header/treatments/InterstitialLung.jsx';
import DiabetesTreatment from '../../components/header/treatments/DiabetesTreatment.jsx';
import Hypertension from '../../components/header/treatments/Hypertension.jsx';
import PreventiveCardiology from '../../components/header/treatments/PreventiveCardiology..jsx';
import SleepDisordered from '../../components/header/treatments/SleepDisordered.jsx';
import PleuralEffusion from '../../components/header/treatments/PleuralEffusion.jsx';
import Fever from '../../components/header/treatments/Fever.jsx';
import COPD from '../../components/header/treatments/COPD.jsx';
import Sarcoidosis from '../../components/header/treatments/Sarcoidosis.jsx';
import GeneralPhysician from '../../components/header/treatments/GeneralPhysician.jsx';



// Procedures
import AllergyTestingImmunotherapy from '../../components/header/procedures/AllergyTestingImmunotherapy.jsx';
import Bronchoscopy from '../../components/header/procedures/Bronchoscopy.jsx';
import Thoracoscopy from '../../components/header/procedures/Thoracoscopy.jsx';
import PulmonaryFunction from '../../components/header/procedures/PulmonaryFunction.jsx';
import IntercostalDrainage from '../../components/header/procedures/IntercostalDrainage.jsx';
import LungBiopsy from '../../components/header/procedures/LungBiopsy.jsx';
import PleuralBiopsy from '../../components/header/procedures/PleuralBiopsy.jsx';
import Pleurodesis from '../../components/header/procedures/Pleurodesis.jsx';
import EBUSTBNA from '../../components/header/procedures/EBUSTBNA.jsx';
import FENO from '../../components/header/procedures/FENO.jsx';
import TrachealStenting from '../../components/header/procedures/TrachealStenting.jsx';




const TreatmentRoutes = (
  <>

    {/* Procedures */}

    <Route path="/AllergyTestingImmunotherapy" element={<AllergyTestingImmunotherapy />} />
    <Route path="/Bronchoscopy" element={<Bronchoscopy />} />
    <Route path="/Thoracoscopy" element={<Thoracoscopy />} />
    <Route path="/PulmonaryFunction" element={<PulmonaryFunction />} />
    <Route path="/IntercostalDrainage" element={<IntercostalDrainage />} />
    <Route path="/LungBiopsy" element={<LungBiopsy />} />
    <Route path="/PleuralBiopsy" element={<PleuralBiopsy />} />
    <Route path="/Pleurodesis" element={<Pleurodesis />} />
    <Route path="/EBUSTBNA" element={<EBUSTBNA />} />
    <Route path="/FENO" element={<FENO />} />
    <Route path="/TrachealStenting" element={<TrachealStenting />} />
  
    {/* Treatements */}
    <Route path="/LungCancer" element={<LungCancer />} />
    <Route path="/PneumoniaTreatment" element={<PneumoniaTreatment />} />
    <Route path="/BronchialAsthma" element={<BronchialAsthma />} />
    <Route path="/Tuberculosis" element={<Tuberculosis />} />
    <Route path="/InterstitialLung" element={<InterstitialLung />} />
    <Route path="/DiabetesTreatment" element={<DiabetesTreatment />} />
    <Route path="/Hypertension" element={<Hypertension />} />
    <Route path="/PreventiveCardiology" element={<PreventiveCardiology />} />
    <Route path="/SleepDisordered" element={<SleepDisordered />} />
    <Route path="/PleuralEffusion" element={<PleuralEffusion />} />
    <Route path="/Fever" element={<Fever />} />
    <Route path="/COPD" element={<COPD />} />
    <Route path="/Sarcoidosis" element={<Sarcoidosis />} />
    <Route path="/GeneralPhysician" element={<GeneralPhysician />} />
  

  </>
);

export default TreatmentRoutes;
