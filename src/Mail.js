import React from 'react';
import './Mail.css';
import { FaEnvelope } from "react-icons/fa";

function Mail() {
  return (
    <div id="messages">
      <div id ="message">
        <div id="photo"></div>
        <div id="text">
          <h5>Title</h5>
          <p>Text</p>
        </div>
        <FaEnvelope id="mail"/>
      </div>
    </div>
  );
}

export default Mail;