// import React from "react";
// import "./VerticalTimeline.css"; // You can create a CSS file for styling

// const VerticalTimeline = ({ events }) => {
//   return (
//     <div className="vertical-timeline">
//       {events.map((event, index) => (
//         <div key={index} className="timeline-event">
//           {/* <div className="timeline-step">{event.step}</div> */}
//           <div className="timeline-content">
//             <h3>{event.step}</h3>
//             <p>{event.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default VerticalTimeline;

// import React, { useEffect } from "react";
// import "./VerticalTimeline.css"; // You can create a CSS file for styling

// const VerticalTimeline = ({ events }) => {
//   useEffect(() => {
//     const timelineEvents = document.querySelectorAll(".timeline-event");
//     timelineEvents.forEach((event, index) => {
//       event.classList.add("fadeIn");
//       event.style.animationDelay = `${index * 0.3}s`;
//     });
//   }, []);

//   return (
//     <div className="vertical-timeline">
//       {events.map((event, index) => (
//         <div
//           key={index}
//           className={`timeline-event ${index % 2 === 0 ? "left" : "right"}`}
//         >
//           <div className="timeline-content">
//             <h3>{event.step}</h3>
//             <p>{event.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// // export default VerticalTimeline;
// import React, { useState } from "react";
// import "./VerticalTimeline.css"; // CSS file for styling

// const VerticalTimeline = ({ events }) => {
//   const [selectedStep, setSelectedStep] = useState(null);

//   const handleStepClick = (step) => {
//     if (selectedStep === step) {
//       setSelectedStep(null); // Unselect if already selected
//     } else {
//       setSelectedStep(step);
//     }
//   };

//   return (
//     <div
//       className="vertical-timeline-container"
//     >
//       <div className="export-title">
//         <h1>How to Export your Whatsapp Chat ?</h1>
//       </div>
//       <div className="vertical-timeline">
//         <div className="timeline-events">
//           {events.map((event, index) => (
//             <div
//               key={index}
//               className={`timeline-event ${
//                 selectedStep === event.step ? "selected" : ""
//               }`}
//             >
//               <div
//                 className={`timeline-step ${
//                   selectedStep === event.step ? "bold" : ""
//                 }`}
//                 onClick={() => handleStepClick(event.step)}
//               >
//                 <div className="step-title">{event.step}</div>
//               </div>
//               <div
//                 className="timeline-content"
//                 style={{
//                   maxHeight: selectedStep === event.step ? "200px" : "0",
//                 }}
//               >
//                 {/* <h3>{event.step}</h3> */}
//                 <p>{event.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerticalTimeline;


import React, { useState } from "react";
import "./VerticalTimeline.css"; // CSS file for styling

const VerticalTimeline = ({ events }) => {
  const [selectedStep, setSelectedStep] = useState(null);

  const handleStepClick = (step) => {
    if (selectedStep === step) {
      setSelectedStep(null); // Unselect if already selected
    } else {
      setSelectedStep(step);
    }
  };

  return (
    <div className="vertical-timeline-container">
      <div className="export-title">
        <h1>How to Export your Whatsapp Chat ?</h1>
      </div>
      <div className="vertical-timeline">
        <div className="timeline-events">
          {events.map((event, index) => (
            <div
              key={index}
              className={`timeline-event ${
                selectedStep === event.step ? "selected" : ""
              }`}
            >
              <div
                className={`timeline-step ${
                  selectedStep === event.step ? "bold" : ""
                }`}
                onClick={() => handleStepClick(event.step)}
                onMouseEnter={() => setSelectedStep(event.step)} // Add hover event handler
                onMouseLeave={() => setSelectedStep(null)} // Add hover event handler
              >
                <div className="step-title">{event.step}</div>
              </div>
              <div
                className="timeline-content"
                style={{
                  maxHeight: selectedStep === event.step ? "200px" : "0",
                }}
              >
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalTimeline;
