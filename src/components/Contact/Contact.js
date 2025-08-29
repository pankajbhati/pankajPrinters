// BusinessDetails.js
import React from "react";
import "./Contact.css";
import { AdvancedMarker, APIProvider, Map} from "@vis.gl/react-google-maps";

const Contact = () => {

  const position = {lat: 53.54992, lng: 10.00678};

  return (
    <div className="business-details-container">
      {/* Left: Location */}
      <APIProvider apiKey={'YOUR API KEY HERE'}>
              <div className="business-location">
        <h2>Our Office</h2>
        <p>
          123 Main Street<br />
          Downtown City<br />
          Country 456789
        </p>
        {/* Map placeholder - you could embed a map here */}
        <div className="map-placeholder">
          {/* Replace with Google Maps or similar for real use */}
          <Map defaultCenter={position} defaultZoom={10} mapId="DEMO_MAP_ID">
            <AdvancedMarker position={position} />
          </Map>
        </div>
      </div>
      </APIProvider>
      {/* Right: Contact Form */}
      <div className="business-contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" rows="4" required />
          </div>
          <button type="submit" className="send-btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
