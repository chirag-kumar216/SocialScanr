// import React, { useState } from "react";
// import "./FeedbackForm.css"; // Create a CSS file for styling

// const FeedbackForm = ({ isOpen, onClose }) => {
//   const [feedback, setFeedback] = useState("");

//   const handleFeedbackChange = (e) => {
//     setFeedback(e.target.value);
//   };

//   const handleSubmit = () => {
//     // Handle form submission, e.g., send feedback to the server
//     console.log("Feedback submitted:", feedback);
//     // Close the modal
//     onClose();
//   };

//   const userDataString = localStorage.getItem("user");
//   var userData;
//   if (userDataString) {
//     userData = JSON.parse(userDataString);
//     console.log("User Email:", userData.Email);
//   }

//   return (
//     <div className={`modal ${isOpen ? "open" : ""}`}>
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>&times;</span>
//         <h2>Feedback Form</h2>
//         <textarea
//           placeholder="Your feedback..."
//           value={feedback}
//           onChange={handleFeedbackChange}
//         />
//         <button className="button-feedback " onClick={handleSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// };

// export default FeedbackForm;


import React, { useState } from "react";
import "./FeedbackForm.css";

const FeedbackForm = ({ isOpen, onClose }) => {
  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = async () => {
    // Get user data from localStorage
    const userDataString = localStorage.getItem("user");
    var userData;
    if (userDataString) {
      userData = JSON.parse(userDataString);
    }

    // Make a POST request to the backend API
    try {
      const response = await fetch("http://localhost:3001/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userData.Email,
          feedback: feedback,
        }),
      });

      if (response.status === 201) {
        console.log("Feedback submitted successfully");
        // Close the modal
        onClose();
      } else {
        console.error("Failed to submit feedback");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Feedback Form</h2>
        <textarea
          placeholder="Your feedback..."
          value={feedback}
          onChange={handleFeedbackChange}
        />
        <button className="button-feedback" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default FeedbackForm;
