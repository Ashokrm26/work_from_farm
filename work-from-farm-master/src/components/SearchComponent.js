import React, { useState } from 'react';
import './SearchComponent.css';

const SearchComponent = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    location: '',
    amenities: '',
    priceRange: '',
  });

  const [activeSection, setActiveSection] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  const handleSectionClick = (section) => {
    if (activeSection === section) {
      setActiveSection(''); // Toggle off if the same section is clicked again
    } else {
      setActiveSection(section);
    }
  };

  return (
    <div className="search-component">
      <h1 className="title text-center">Find Your Dream Farm</h1>
      
      {/* Menu buttons for each section */}
      <div className="menu">
        <button onClick={() => handleSectionClick('location')} className="btn btn-info">
          Location
        </button>
        <button onClick={() => handleSectionClick('amenities')} className="btn btn-info">
          Amenities
        </button>
        <button onClick={() => handleSectionClick('priceRange')} className="btn btn-info">
          Price Range
        </button>
      </div>

      {/* Location Section */}
      {activeSection === 'location' && (
        <div className="form-group">
          <label>Location</label>
          <p>Survey No.176, KrishnayyanaDoddi, Maralebekuppe, Karnataka 562117</p>
        </div>
      )}

      {/* Amenities Section */}
      {activeSection === 'amenities' && (
        <div className="form-group">
          <label>Amenities</label>
          <input
            type="text"
            name="amenities"
            placeholder="Enter amenities (e.g., swimming pool)"
            value={filters.amenities}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
      )}

      {/* Price Range Section */}
      {activeSection === 'priceRange' && (
        <div className="form-group">
          <label>Price Range</label>
          <input
            type="text"
            name="priceRange"
            placeholder="Enter price range (e.g., 1000-5000)"
            value={filters.priceRange}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
      )}

      <button onClick={handleSearch} className="btn btn-primary mt-3">
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
