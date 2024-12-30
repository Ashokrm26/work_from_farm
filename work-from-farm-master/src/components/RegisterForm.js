import React, { useState } from 'react';
import './RegisterForm.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    email: '',
    contact: '',
    farmName: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Registration Successful!');
  };

  return (
    <div className="register-form">
      <h2>Register Your Farm</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Your Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Farm Name:
          <input type="text" name="farmName" value={formData.farmName} onChange={handleChange} required />
        </label>
        <label>
          Location:
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Contact Number:
          <input type="tel" name="contact" value={formData.contact} onChange={handleChange} required />
        </label>
        <label>
          Farm Description:
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </label>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default RegisterForm;
