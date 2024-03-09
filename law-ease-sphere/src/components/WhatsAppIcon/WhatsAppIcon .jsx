// WhatsAppIcon.js

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import "./WhatsAppIcon.css";

const WhatsAppIcon = () => {
  const handleWhatsAppClick = () => {
    // Replace 'phoneNumber' with your actual WhatsApp phone number

    const phoneNumber = '9521423185';
    const text = 'Hello! I am interested in your services.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="whatsapp-icon" onClick={handleWhatsAppClick}>
      <FaWhatsapp />
    </div>
  );
};

export default WhatsAppIcon;
