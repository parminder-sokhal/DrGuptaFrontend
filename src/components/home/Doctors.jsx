import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorPage = () => {
  const navigate = useNavigate();

  // Hardcoded doctor data — replace with props or API call later
  const doctor = {
    name: "Dr. Robin Gupta",
    designation: "Managing Director",
    hospital: "Dr. Robin Chest Clinic",
    image: "/img/image.png", // put actual image path here
    about:
      "Dr. Robin Gupta is a highly esteemed pulmonologist with over a decade of rich experience in the field, renowned for his expertise and compassionate patient care. He completed his pulmonology training at GMCH-32 and further honed his skills through stints at prestigious institutions such as Fortis Hospitals, Mohali, and Apollo Hospitals. Dr. Gupta's commitment to advancing medical knowledge is evidenced by his active involvement in various chest societies across India and his pivotal role as a founding member of the Critical Care Society in Panchkula. His dedication to excellence and patient-centric approach have earned him the trust and admiration of countless patients and peers alike. ",
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row items-start gap-8 bg-white rounded-xl p-6">
        {/* Left: Doctor Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="rounded-xl w-[300px] h-[350px] object-cover"
            loading="lazy"
          />
        </div>

        {/* Right: Doctor Info */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            {doctor.name}
          </h2>
          <p className="text-lg font-semibold text-gray-700 mb-2">
            {doctor.designation} | {doctor.hospital}
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">{doctor.about}</p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/about#qualifications")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md sm:text-lg"
            >
              View Profile
            </button>
            <button
              onClick={() => navigate("/about#qualifications")}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md sm:text-lg"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorPage;

// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAvailableDoctors } from "../../redux/actions/doctorAction";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useSwipeCarousel } from "../hook/useSwipeCarousel"; // Adjust path if needed

// const Doctors = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { availableDoctors, loading, error } = useSelector(
//     (state) => state.doctor
//   );

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [slidesPerScreen, setSlidesPerScreen] = useState(4);

//   useEffect(() => {
//     dispatch(getAvailableDoctors());
//   }, [dispatch]);

//   useEffect(() => {
//     const updateSlidesPerScreen = () => {
//       if (window.innerWidth >= 1024) {
//         setSlidesPerScreen(4);
//       } else {
//         setSlidesPerScreen(1);
//       }
//     };

//     updateSlidesPerScreen();
//     window.addEventListener("resize", updateSlidesPerScreen);
//     return () => window.removeEventListener("resize", updateSlidesPerScreen);
//   }, []);

//   const filteredDoctors =
//     availableDoctors?.filter((doc) => !doc.isdeleted && doc.isActive) || [];

//   const totalSlides = filteredDoctors.length;

//   const updateSlidePosition = (newIndex) => {
//     if (newIndex < 0) {
//       setCurrentIndex(totalSlides - slidesPerScreen);
//     } else if (newIndex >= totalSlides) {
//       setCurrentIndex(0);
//     } else {
//       setCurrentIndex(newIndex);
//     }
//   };

//   const handleNext = () => updateSlidePosition(currentIndex + slidesPerScreen);
//   const handlePrev = () => updateSlidePosition(currentIndex - slidesPerScreen);
//   const handlers = useSwipeCarousel({
//     onNext: handleNext,
//     onPrev: handlePrev,
//   });

//   return (
//     <div className="container mx-auto my-10 lg:px-30 sm:px-14 md:px-18">
//       <div className="flex justify-between items-center mb-4 px-5">
//         <h2 className="sm:text-3xl text-2xl">Doctors</h2>
//         <Link to="/doctors">
//           <h3 className="hover:underline underline-offset-10 hover:text-blue-600 decoration-2 decoration-yellow-600">
//             View all
//           </h3>
//         </Link>
//       </div>

//       {loading ? (
//         <p className="text-center">Loading doctors...</p>
//       ) : error ? (
//         <p className="text-center text-blue-500">{error}</p>
//       ) : (
//         <>
//           <div className="relative w-full">
//             <div className="carousel h-auto  overflow-hidden">
//               <div
//                 className="carousel-body flex transition-transform duration-500 ease-in-out"
//                 style={{
//                   transform: `translateX(-${(currentIndex * 100) / slidesPerScreen}%)`,
//                 }}
//                 {...handlers}
//               >
//                 {filteredDoctors.map((doctor, index) => (
//                   <div
//                     key={doctor._id || index}
//                     className="carousel-slide flex-shrink-0 px-2"
//                     style={{ width: `${100 / slidesPerScreen}%` }}
//                   >
//                     <div className="flex flex-col justify-between items-center bg-white rounded-lg  overflow-hidden h-auto w-full">
//                       {/* Image Section */}
//                       <div className="w-full h-[400px] overflow-hidden">
//                         <img
//                           src={doctor.image?.url || "/images/doctor1.jpeg"}
//                           alt={doctor.name}
//                           className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
//                           loading="lazy"
//                         />
//                       </div>

//                       {/* Doctor Info */}
//                       <div className="flex flex-col items-start justify-start px-4 py-3 w-full">
//                         <p className="font-semibold text-lg truncate w-full">
//                           {doctor?.name}
//                         </p>
//                         <p className="text-sm text-black truncate w-full">
//                           {doctor.specialization}
//                         </p>
//                         <p className="text-sm text-gray-600 truncate w-full">
//                           {doctor.hospital}
//                         </p>
//                       </div>

//                       {/* Action Buttons */}
//                       <div className="flex w-full gap-1 pb-4 ">
//                         <button
//                           onClick={() => navigate(`/doctor/${doctor._id}`)}
//                           className="flex-grow text-sm text-center bg-blue-500 text-white "
//                         >
//                           View Full Profile
//                         </button>

//                         <button
//                           onClick={() => navigate(`/doctor/${doctor._id}`)}
//                           className="w-1/2 text-sm text-center py-2 bg-green-600 text-white  hover:bg-green-700 transition-all"
//                         >
//                           Book Appointment
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="relative w-full flex justify-center gap-4 mt-4">
//             <button
//               onClick={handlePrev}
//               className="bg-white text-black hover:text-blue-700 p-2 rounded-full shadow-md"
//             >
//               <FaChevronLeft size={24} />
//               <span className="sr-only">Previous</span>
//             </button>
//             <button
//               onClick={handleNext}
//               className="bg-white text-black hover:text-blue-700 p-2 rounded-full shadow-md"
//             >
//               <FaChevronRight size={24} />
//               <span className="sr-only">Next</span>
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Doctors;
