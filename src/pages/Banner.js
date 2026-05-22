import React from "react";
import PushButton from '../assets/gif-button.gif'
import { useNavigate } from "react-router-dom";

const BirthdayBanner = () => {
    const navigate = useNavigate()
  return (
    <div className="birthday-banner-container vh-100" data-aos="fade">
      {/* Gradient Overlay */}
      <div className="birthday-overlay"></div>

      {/* Bottom GIF Content */}
      <div className="birthday-content cursor-pointer" onClick={()=>navigate('/surprise')}>
        <img
          src={PushButton}
          alt="Push Button"
          className="push-gif"
        />
      </div>
    </div>
  );
};

export default BirthdayBanner;