import React from "react";
 // Import DisplayPage.css for styling

const DisplayPage = () => {
  // Fetch data from local storage or use a sample array for demonstration
  const storedData = JSON.parse(localStorage.getItem("formData")) || [];

  return (
    <div className="display-container">
      <h2>Stored Data</h2>
      <div className="data-list">
        {storedData.map((data, index) => (
          <div className="data-item" key={index}>
            <div className="field">
              <span className="field-name">Name:</span> {data.name}
            </div>
            <div className="field">
              <span className="field-name">Email:</span> {data.email}
            </div>
            <div className="field">
              <span className="field-name">Phone:</span> {data.phone}
            </div>
            <div className="field">
              <span className="field-name">Message:</span> {data.message}
            </div>
            <div className="field">
              <span className="field-name">Gender:</span> {data.gender}
            </div>
            <div className="field">
              <span className="field-name">Birth Date:</span> {data.birthDate}
            </div>
            <div className="field">
              <span className="field-name">Country:</span> {data.country}
            </div>
            <div className="field">
              <span className="field-name">Occupation:</span> {data.occupation}
            </div>
            <div className="field">
              <span className="field-name">Website:</span> {data.website}
            </div>
            <div className="field">
              <span className="field-name">Interests:</span> {data.interests}
            </div>
            {/* Add other fields similarly */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayPage;
