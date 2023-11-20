import React, { useEffect, useState } from "react";
 // Import CSS file for styling

const Display = () => {
  const [storedData, setStoredData] = useState([]);

  useEffect(() => {
    // Retrieve data from local storage
    const retrievedData = JSON.parse(localStorage.getItem("formData")) || [];
    setStoredData(retrievedData);
  }, []);

  return (
    <div className="display-container">
      <h2>Stored Form Data</h2>
      <div className="data-list">
        {storedData.map((data, index) => (
          <div key={index} className="data-item">
            {/* Render each piece of stored data */}
            <p>
              <span className="field-name">Name:</span> {data.name}
            </p>
            <p>
              <span className="field-name">Email:</span> {data.email}
            </p>
            <p>
              <span className="field-name">Phone:</span> {data.phone}
            </p>
            <p>
              <span className="field-name">Message:</span> {data.message}
            </p>
            <p>
              <span className="field-name">Gender:</span> {data.gender}
            </p>
            <p>
              <span className="field-name">Birth Date:</span> {data.birthDate}
            </p>
            <p>
              <span className="field-name">Country:</span> {data.country}
            </p>
            <p>
              <span className="field-name">Occupation:</span> {data.occupation}
            </p>
            <p>
              <span className="field-name">Website:</span> {data.website}
            </p>
            <p>
              <span className="field-name">Interests:</span> {data.interests}
            </p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
