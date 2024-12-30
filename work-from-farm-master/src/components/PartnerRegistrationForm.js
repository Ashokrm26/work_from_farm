import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const PartnerRegistrationForm = ({ addFarm }) => {
  const [formData, setFormData] = useState({
    farmName: '',
    location: '',
    ownerName: '',
    email: '',
    phone: '',
    description: '',
    image: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFarm = {
      id: Math.random(),  // Generate a random ID for the new farm
      name: formData.farmName,
      location: formData.location,
      image: formData.image || '',  // Optional image URL
      price: 1500,  // You can modify this logic to get a price input as well
    };

    addFarm(newFarm); // Add the farm using the addFarm function passed as a prop

    // Redirect to home page (or to a farms listing page)
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center">
              <h2>Register Your Farm</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="farmName" className="form-label">Farm Name:</label>
                  <input
                    type="text"
                    id="farmName"
                    name="farmName"
                    className="form-control"
                    value={formData.farmName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="location" className="form-label">Location:</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className="form-control"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="ownerName" className="form-label">Owner Name:</label>
                  <input
                    type="text"
                    id="ownerName"
                    name="ownerName"
                    className="form-control"
                    value={formData.ownerName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone:</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description:</label>
                  <textarea
                    id="description"
                    name="description"
                    className="form-control"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">Farm Image URL:</label>
                  <input
                    type="text"
                    id="image"
                    name="image"
                    className="form-control"
                    value={formData.image}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Register Farm</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerRegistrationForm;
