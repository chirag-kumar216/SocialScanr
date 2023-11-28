import React, { useRef, useEffect, useState } from "react";
import "./Home.css";
import review from "../../image/review.jpg";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import userImage1 from "../../image/user1.jpg";
import userImage2 from "../../image/user2.jpg";
import userImage3 from "../../image/user3.jpg";
import userImage4 from "../../image/user4.jpg";
import userImage5 from "../../image/user5.jpg";
import userImage6 from "../../image/user6.jpg";
import userImage7 from "../../image/user7.jpg";
import userImage8 from "../../image/user8.jpg";
import userImage9 from "../../image/user9.jpg";
import userImage10 from "../../image/user10.jpg";
// import userImage5 from '../../image/user5.jpg'

import whatsappImage from "../../image/whatsapp.png";
import youtubeImage from "../../image/youtube.png";
import logoutImage from "../../image/logout.png"; // Import your custom logout image
import profileImage from "../../image/profile.png";
import wanalysisImage from "../../image/wanalysis.png"; // Import the WhatsApp Analyzer image
import yanalysisImage from "../../image/yanalysis.png"; // Import the YouTube Analyzer image
import whiteLogo from "../../image/white.png"; // Import your custom logo image
import Typist from "react-typist"; // Import the Typist component
import "react-typist/dist/Typist.css"; // Import Typist CSS
import Card from "./cards-section/Card";
import Carousel from "./cards-section/Carousel";
import FeedbackForm from "../Feedback/FeedbackForm";
import VerticalTimeline from "./verticalTimeline/VerticalTimeline";

const Home = ({ handleWhatsAppClick, handleYouTubeClick }) => {
  const navigate = useNavigate();

  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerStyle = {
    position: "fixed", // Set the header to a fixed position
    top: 0, // Position it at the top of the viewport
    backgroundColor: "#4CAF50",
    color: "green",
    padding: "2px",
    textAlign: "center",
    width: "100%", // Make the header full width
    zIndex: 99,
  };

  const headerText = {
    fontSize: "3rem",
    fontWeight: "bold",
  };

  const scrollToSection = (sectionid) => {
    const section = document.getElementById(sectionid);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppAnalysisClick = () => {
    // Define the action to perform when the "WhatsApp Analysis" button is clicked
  };

  const handleChatExportClick = () => {
    // Define the action to perform when the "Chat Export" button is clicked
  };

  const handleYouTubeAnalysisClick = () => {
    // Define the action to perform when the "YouTube Analysis" button is clicked
  };

  const handleReviewsClick = () => {
    // Define the action to perform when the "Reviews" button is clicked
  };

  const topSectionStyle = {
    backgroundImage: `url(${require("../../image/top.png")})`,
    backgroundSize: "cover",
    padding: "300px",
    marginTop: "50px",
  };

  const topSectionTitleStyle = {
    fontSize: "5rem", // Increase the font size for the heading
    fontWeight: "bold", // Make the heading text bold
    color: "white", // Customize the color
    marginTop: "-150px",
    marginLeft: "-220px",
    position: "relative",
  };

  const topSectionParagraphStyle = {
    fontSize: "2rem", // Increase the font size for the paragraph
    color: "white", // Customize the color
    marginTop: "-50px",
    marginLeft: "-220px",
    marginRight: "420px",
  };

  const topSectionParagraphStyle2 = {
    fontSize: "1.5rem", // Increase the font size for the paragraph
    color: "#CFCFCF", // Customize the color
    marginTop: "-20px",
    marginLeft: "-220px",
    marginRight: "420px",
  };

  const servicesButtonStyle = {
    backgroundColor: "white", // Button background color
    color: "black", // Text color
    borderRadius: "25px", // Rounded corners
    padding: "10px 20px", // Padding around text
    fontSize: "1.5rem", // Font size
    marginTop: "20px", // Space between paragraph and button
    marginLeft: "-220px", // Adjust the horizontal position as needed
    border: "none", // Remove border
    cursor: "pointer", // Show a pointer cursor on hover
  };

  // Rest of your styles...

  const profileOption = {
    float: "right",
    padding: "10px",
  };

  const exportChatSection = {
    marginTop: "80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Align text to the left
    padding: "20px",
    height: "500px", // Increase the height as needed
    background: "white", // White background for the new section
  };

  const cardContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "40px", // Adjust the margin-top value as needed
    height: "550px", // Increase the height as needed
  };

  const cardStyle = {
    padding: "20px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "transform 0.2s",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };

  const whatsappCardStyle = {
    ...cardStyle,
    background: "linear-gradient(to bottom right, #25D366, #128C7E)",
    color: "white",
    width: "350px", // Increase the width
    height: "350px", // Increase the height
    marginRight: "100px", // Add margin to separate WhatsApp and YouTube cards
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "20px", // Adjust the radius as needed
    boxShadow: "0px 20px 30px -10px rgba(38, 57, 77, 0.7)", // Add boxShadow
  };

  const youtubeCardStyle = {
    ...cardStyle,
    background: "linear-gradient(to bottom right, #FF0000, #FF5733)",
    color: "white",
    width: "350px", // Increase the width
    height: "350px", // Increase the height
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "20px", // Adjust the radius as needed
    boxShadow: "0px 20px 30px -10px rgba(38, 57, 77, 0.7)", // Add boxShadow
  };

  const cardTextStyles = {
    margin: "20px",
  };

  const whatsappAnalyzerSection = {
    marginTop: "80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Align text to the left
    padding: "20px",
    height: "550px", // Increase the height as needed
    backgroundImage: `url(${require("../../image/wback.jpg")})`, // Updated image URL
    backgroundSize: "cover", // Set the background size to cover
  };

  const youtubeVideoAnalyzerSection = {
    marginTop: "80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Align text to the left
    padding: "20px",
    height: "550px", // Increase the height as needed
    background: "white", // Grey background for YouTube Video Analyzer
  };

  const whatsappAnalyzerImage = {
    width: "400px",
    height: "500px",
    marginBottom: "40px", // Increase the margin to move the image down further
    marginLeft: "40%",
    marginTop: "-15px", // Adjust the margin to move the image down using CSS
  };

  const youtubeVideoAnalyzerImage = {
    width: "525px",
    height: "450px",
    marginBottom: "60px", // Increase the margin to move the image down further
    marginLeft: "150px",
    marginTop: "-1px", // Adjust the margin to move the image down using CSS
  };

  const openStreamlitWebsite = () => {
    // Replace 'http://localhost:8501/' with the actual URL of your Streamlit website.
    const streamlitURL = "http://localhost:8501/";
    window.open(streamlitURL, "_blank");
  };

  const openYoutubeWebsite = () => {
    const youtubeUrl = "http://127.0.0.1:5000";
    window.open(youtubeUrl, "_blank");
  };

  const handleLogo = () => {
    // Implement your logout logic here
    // For example, clear user session and redirect to the login page
    // Example: window.location.href = '/login'; // Redirect to the login page
  };

  // const CARDS = 10;

  const cardDetails = [
    {
      ImageUrl: userImage1,
      UserName: "Prateek Sharma",
      Role: "Website User",
      Content:
        "The insights and analytics provided will significantly improve decision-making process. It's user-friendly and provides valuable data insights.",
    },
    {
      ImageUrl: userImage2,
      UserName: "Somya Gautam",
      Role: "Student",
      Content: "It saves a lot of time in processing and interpreting data.",
    },
    {
      ImageUrl: userImage3,
      UserName: "Keshaw Soni",
      Role: "Student",
      Content:
        "This platform simplifies data analysis. It's a valuable resource. The step-by-step tutorials are a great addition.",
    },
    {
      ImageUrl: userImage4,
      UserName: "Megha Khangarot",
      Role: "Software Developer Intern",
      Content:
        "It's incredibly versatile. It provides a comprehensive set of tools that streamline the work. Highly recommended.",
    },
    {
      ImageUrl: userImage5,
      UserName: "K. Dinesh Reddy",
      Role: "Website User",
      Content:
        "It is going to help the companies or the influencers to uunderstand their audience and their product well.",
    },
    {
      ImageUrl: userImage6,
      UserName: "Risha Sharma",
      Role: "Website User",
      Content:
        "The website analysis tools are intuitive, and the insights are invaluable for optimizing online presence.",
    },
    {
      ImageUrl: userImage7,
      UserName: "Rahul Jain",
      Role: "Website User",
      Content:
        "It helps in understanding user behavior better. The visualizations are a standout feature.",
    },
    {
      ImageUrl: userImage8,
      UserName: "Vineet Mishra",
      Role: "Website User",
      Content:
        "It simplifies data analysis and provides actionable insights for improving user experience.",
    },
    {
      ImageUrl: userImage9,
      UserName: "Mohak Goyal",
      Role: "Website User",
      Content:
        "The data analytics tools are fantastic. It can help in a noticeable improvement in user engagement since using this platform.",
    },
    {
      ImageUrl: userImage10,
      UserName: "Shivangi Shukla",
      Role: "Software Developer Intern",
      Content:
        "I appreciate the simplicity and effectiveness of this platform.",
    },
  ];

  const timelineEvents = [
    {
      step: "Step 1",
      description: "Open WhatsApp on your mobile device.",
    },
    {
      step: "Step 2",
      description: "Navigate to the chat you want to export.",
    },
    {
      step: "Step 3",
      description:
        "Access the chat settings by tapping the contact or group name at the top of the chat.",
    },
    {
      step: "Step 4",
      description: "Select 'More' from the chat options menu.",
    },
    {
      step: "Step 5",
      description: "Choose 'Export chat' from the dropdown menu.",
    },
    {
      step: "Step 6",
      description:
        "Decide whether to include media files (images, videos) in the export.",
    },
    {
      step: "Step 7",
      description:
        "Choose a destination, such as email or cloud storage, to save the chat file.",
    },
    {
      step: "Step 8",
      description:
        "Your WhatsApp chat is now exported and ready for analysis with valuable insights.",
    },
  ];

  const [isFeedbackModalOpen, setFeedbackModalOpen] = useState(false);

  const openFeedbackModal = () => {
    setFeedbackModalOpen(true);
  };

  const closeFeedbackModal = () => {
    setFeedbackModalOpen(false);
  };

  const handleLogout = () => {
    // Clear the user information from localStorage or perform any other necessary logout actions.
    localStorage.removeItem("user");

    // Redirect to the login page after logout.
    navigate("/");
  };
  function openProfileModal() {
    const modal = document.getElementById("profileModal");
    modal.style.display = "block";
  }

  function closeProfileModal() {
    const modal = document.getElementById("profileModal");
    modal.style.display = "none";
  }

  const user = localStorage.getItem("name");
  const data = JSON.parse(user);

  const name = data.FirstName;

  return (
    <>
      <div className="header" style={headerStyle}>
        <button
          className="logo-icon"
          onClick={handleLogo}
          style={{ background: "transparent", border: "none" }}
        >
          <img
            src={whiteLogo}
            alt="Logo"
            style={{ width: "85px", height: "45px" }}
          />
        </button>
        <div className="button-container">
          <button
            className="header-button"
            onClick={() => scrollToSection("services")}
          >
            Services
          </button>
          <button
            className="header-button"
            onClick={() => scrollToSection("whatsapp_chat")}
          >
            WhatsApp Analysis
          </button>
          <button
            className="header-button"
            onClick={() => scrollToSection("export_chats")}
          >
            Chat Export
          </button>
          <button
            className="header-button"
            onClick={() => scrollToSection("youtube_section")}
          >
            YouTube Analysis
          </button>
          <button
            className="header-button"
            onClick={() => scrollToSection("reviews")}
          >
            Reviews
          </button>
        </div>
        {/* <button
          className="logout-icon"
          onClick={handleLogout}
          style={{ background: "transparent", border: "none" }}
        >
          <img
            src={logoutImage}
            alt="Logout"
            style={{ width: "100px", height: "100px" }}
          />
        </button> */}
        <div>
          <button
            className="profile-icon logout-icon"
            onClick={openProfileModal}
            style={{ background: "transparent", border: "none" }}
          >
            <img
            className="profile_img"
              src={profileImage}
              alt="Profile"
              style={{ width: "50px", height: "50px" }}
            />
          </button>

          <div id="profileModal" className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeProfileModal}>
                &times;
              </span>
              <img
                src={profileImage}
                alt="User Profile"
                style={{ width: "100px", height: "100px" }}
              />
              <h3>{name}</h3>
              <button className="logout-button-modal" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style={topSectionStyle} id="hero">
        {/* <h2 style={topSectionTitleStyle}>SOCIAL SCANR</h2> */}
        <div className="title_glow" style={topSectionTitleStyle}>
          <h1>
            <span>SOCIAL</span> <span>ScanR</span>
          </h1>
        </div>

        <p style={topSectionParagraphStyle}>
          Whatsapp and Youtube User Analysis
        </p>
        <p style={topSectionParagraphStyle2}>
          We help you analyze your audience behavior
        </p>
        <button
          style={servicesButtonStyle}
          onClick={() => scrollToSection("services")}
        >
          Services
        </button>
      </div>

      <div style={cardContainer} id="services">
        <div
          style={{ ...whatsappCardStyle }}
          onClick={openStreamlitWebsite}
          className="div-cards-whatsapp"
        >
          <h2 className="text-2xl" style={cardTextStyles}>
            WhatsApp
          </h2>
          <img
            src={whatsappImage}
            alt="WhatsApp Logo"
            style={{ width: "170px", height: "180px" }}
          />
          <p style={cardTextStyles}>Analyze WhatsApp data here.</p>
        </div>

        <div
          style={{ ...youtubeCardStyle }}
          className="div-cards-youtube"
          onClick={openYoutubeWebsite}
        >
          <h2 className="text-2xl" style={cardTextStyles}>
            YouTube
          </h2>
          <img
            src={youtubeImage}
            alt="YouTube Logo"
            style={{ width: "250px", height: "200px", margin: "0.1px 0" }}
          />
          <p style={cardTextStyles}>Analyze YouTube data here.</p>
        </div>
      </div>

      <div style={whatsappAnalyzerSection} id="whatsapp_chat">
        <div
          style={{ display: "flex", alignItems: "flex-start", width: "100%" }}
        >
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: "2rem", color: "#50C878" }}>
              <Typist startDelay={1000}>
                HOW TO ANALYZE WHATSAPP CHAT?
                <Typist.Delay ms={500} />
                <br />
                <ol
                  style={{
                    fontSize: "1.5rem",
                    color: "white",
                    lineHeight: "2.6",
                  }}
                >
                  <li>Export the chat from WhatsApp.</li>
                  <li>Click on the WhatsApp Analyzer.</li>
                  <li>Upload the chat file to WhatsApp Analyzer.</li>
                  <li>See the analysis and gain valuable insights.</li>
                </ol>
              </Typist>
            </h2>
          </div>
          <div style={{ flex: 1 }}>
            <img
              src={wanalysisImage}
              alt="WhatsApp Analyzer"
              style={whatsappAnalyzerImage}
            />
          </div>
        </div>
      </div>

      <div id="export_chats">
        <VerticalTimeline events={timelineEvents} />
      </div>

      <div
        style={{ ...youtubeVideoAnalyzerSection, backgroundColor: "#E6E2C3" }}
        id="youtube_section"
      >
        <div
          style={{ display: "flex", alignItems: "flex-start", width: "100%" }}
        >
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: "2rem", color: "black" }}>
              <Typist startDelay={2000}>
                HOW TO ANALYZE YOUTUBE VIDEO?
                <Typist.Delay ms={500} />
                <br />
                <ol
                  style={{
                    fontSize: "1.5rem",
                    color: "#8B8B8B",
                    lineHeight: "2.6",
                  }}
                >
                  <li>Copy the link of the YouTube video.</li>
                  <li>Open the YouTube Analyzer.</li>
                  <li>Paste the link in the YouTube Analyzer.</li>
                  <li>See the analysis and gain valuable insights.</li>
                </ol>
              </Typist>
            </h2>
          </div>
          <div style={{ flex: 1 }}>
            <img
              src={yanalysisImage}
              alt="YouTube Video Analyzer"
              style={youtubeVideoAnalyzerImage}
            />
          </div>
        </div>
      </div>

      <div className="Carousel-div" id="reviews">
        <div className="Review">
          <h1>Reviews</h1>
        </div>
        <div className="Carousel">
          <Carousel>
            {cardDetails.map((item, i) => (
              <Card
                key={i}
                userImage={item.ImageUrl} // Replace with the actual user image URL
                userName={item.UserName} // Replace with the user's name
                userDesignation={item.Role} // Replace with the user's designation
                content={item.Content}
              />
            ))}
          </Carousel>
        </div>
      </div>

      <div className="scroll-to-top">
        {showScrollButton && (
          <button onClick={scrollToTop} className="scroll-button">
            &#8593; {/* Unicode arrow character (upwards arrow) */}
          </button>
        )}
      </div>

      {/* Footer Section */}
      <div
        className="footer"
        style={{
          background: "black",
          color: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <div className="footer_left_section">
          {" "}
          <h2 style={{ fontSize: "1rem", color: "white" }}>
            <Typist startDelay={1000}>
              Made under mentorship of Dr. Deepika Prakash
              <Typist.Delay ms={500} />
            </Typist>
          </h2>
          <p>&copy; 2023 SOCIAL SCANR</p>
        </div>
        <div className="footer_right_section">
          <Link className="feedback_btn" onClick={openFeedbackModal} to="">
            FEEDBACK
          </Link>
          <FeedbackForm
            isOpen={isFeedbackModalOpen}
            onClose={closeFeedbackModal}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
