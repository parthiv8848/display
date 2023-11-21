import React, { useState } from 'react'
import Sidebar from './Sidebar'

const Form = () => {

 const [formData, setFormData] = useState({
   name: "",
   email: "",
   phone: "",
   message: "",
   gender: "",
   birthDate: "",
   country: "",
   occupation: "",
   website: "",
   interests: "",
 });

 const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData({ ...formData, [name]: value });
 };

const handleSubmit = (e) => {
  e.preventDefault();

  // Get existing data from local storage or initialize an empty array
  const existingData = JSON.parse(localStorage.getItem("formData")) || [];

  // Create a new object with the form data
  const newData = { ...formData };

  // Add the new form data to the existing array
  const updatedData = [...existingData, newData];

  // Store the updated array in local storage
  localStorage.setItem("formData", JSON.stringify(updatedData));

  // Reset form fields after submission
  setFormData({
    name: "",
    email: "",
    phone: "",
    message: "",
    gender: "",
    birthDate: "",
    country: "",
    occupation: "",
    website: "",
    interests: "",
    // Initialize form state as needed
  });
};


  return (
  
      <div className="main-container">
        <Sidebar></Sidebar>
        <div className="container">
          <h2>Contact Form</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                className="form-input"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="email">
                Email:
              </label>
              <input
                className="form-input"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="phone">
                Phone:
              </label>
              <input
                className="form-input"
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="message">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="gender">
                Gender:
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="birthDate">
                Birth Date:
              </label>
              <input
                className="form-input"
                type="date"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="country">
                Country:
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="">Select Country</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
                {/* Add more options */}
              </select>
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="occupation">
                Occupation:
              </label>
              <input
                className="form-input"
                type="text"
                id="occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="website">
                Website:
              </label>
              <input
                className="form-input"
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <label htmlFor="interests" className="form-label">
                Interests:
              </label>
              <input
                className="form-input"
                type="text"
                id="interests"
                name="interests"
                value={formData.interests}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
 
  );
}

export default Form