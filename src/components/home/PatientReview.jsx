import React, { useEffect } from "react";

const PatientReview = () => {
  useEffect(() => {
    const scriptId = "elfsight-widget";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }

    const blockRedirects = setInterval(() => {
      const widget = document.querySelector(".elfsight-app-e7ea834d-1cd0-4821-b478-4b6fd2445124");
      if (widget) {
        const links = widget.querySelectorAll("a");
        links.forEach((a) => {
          a.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
          });
        });
        clearInterval(blockRedirects);
      }
    }, 1000);
  }, []);

  return (
    <div className="bg-cover bg-blend-soft-light bg-[url(/images/bgour.jpg)] py-10 px-4 sm:px-6 md:px-10 lg:px-20 overflow-x-hidden">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Google Reviews</h2>
      </div>

      {/* Elfsight Widget (Updated) */}
      <div className="flex justify-center overflow-x-auto">
        <div
          className="elfsight-app-e7ea834d-1cd0-4821-b478-4b6fd2445124 max-w-full"
          data-elfsight-app-lazy
        ></div>
      </div>
    </div>
  );
};

export default PatientReview;
