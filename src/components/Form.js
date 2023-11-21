import React, { useState } from 'react'
import Sidebar from './Sidebar'

const Form = () => {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    message: "",
    gender: "",
    birthDate: "",
    country: "",
    occupation: "",
    website: "",
    interests: [],
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

     if (!formData.phone.trim()) {
       newErrors.phone = "Phone number is required";
       valid = false;
     } else if (!/^[0-9]{10}$/.test(formData.phone)) {
       newErrors.phone = "Please enter a valid 10-digit phone number";
       valid = false;
     }

    // Add more validations for other fields as needed

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updatedInterests = checked
        ? [...formData.interests, value]
        : formData.interests.filter((interest) => interest !== value);

      setFormData({ ...formData, interests: updatedInterests });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form submission logic when form is valid
      const existingData = JSON.parse(localStorage.getItem("formData")) || [];
      const newData = { ...formData };
      const updatedData = [...existingData, newData];
      localStorage.setItem("formData", JSON.stringify(updatedData));
      setFormData(initialFormData);
      setErrors({});
    } else {
      // Form has validation errors, handle accordingly
      // For example, display an error message or prevent submission
      console.log("Form has validation errors.");
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
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
            
            />
            {errors.name && (
              <span className="error-message" >{errors.name}</span>
            )}
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
          
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
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
           
            />
            {errors.phone && (
              <span className="error-message">{errors.phone}</span>
            )}
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
            <label className="form-label">Gender:</label>
            <div>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={handleChange}
                checked={formData.gender === "male"}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className="gender">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={handleChange}
                checked={formData.gender === "female"}
              />
              <label htmlFor="female">Female</label>
            </div>
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
            <label className="form-label" htmlFor="interests">
              Interests:
            </label>
            <div>
              <input
                type="checkbox"
                id="sports"
                name="interests"
                value="sports"
                onChange={handleChange}
                checked={formData.interests.includes("sports")}
              />
              <label htmlFor="sports">Sports</label>
            </div>
            <div className="sports">
              <input
                type="checkbox"
                id="music"
                name="interests"
                value="music"
                onChange={handleChange}
                checked={formData.interests.includes("music")}
              />
              <label htmlFor="music">Music</label>
            </div>
          </div>
          <div className="form-row">
            <button type="submit" className="submit-button">
              Submit
            </button>
            <button
              type="button"
              className="reset-button"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form