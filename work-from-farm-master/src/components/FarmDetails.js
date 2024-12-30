import React from 'react';
import './FarmDetails.css';

// Importing icons
import clubHouseIcon from '../assets/icons/club-house.png';
import waterfallIcon from '../assets/icons/waterfall.png';
// Add more imports for other icons as needed
import fishingIcon from '../assets/icons/fishing.png';
import golfIcon from '../assets/icons/golf.png';
import badmintonIcon from '../assets/icons/badminton.png';

const FarmDetails = () => {
  const amenities = [
    { name: 'Club House', icon: clubHouseIcon },
    { name: 'Waterfall', icon: waterfallIcon },
    { name: 'Fishing', icon: fishingIcon },
    // Add other amenities here...
  ];

  const upcomingAmenities = [
    { name: 'Mini Golf Ground', icon: golfIcon },
    { name: 'Badminton Court', icon: badmintonIcon },
    // Add upcoming amenities here...
  ];

  const priceRange = '₹5000 - ₹20000';

  return (
    <div className="farm-details mt-4">
      <h2>Divine Euphoria</h2>
      <p><strong>Address:</strong> Survey No.176, KrishnayyanaDoddi, Maralebekuppe, Karnataka 562117</p>
      <a
        href="https://www.google.com/maps/dir/?api=1&destination=Survey+No.176,+KrishnayyanaDoddi,+Maralebekuppe,+Karnataka+562117"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-success mb-3"
      >
        Get Directions
      </a>

      <h4>Amenities</h4>
      <div className="amenities-grid">
        {amenities.map((item, index) => (
          <div key={index} className="amenity-item">
            <img src={item.icon} alt={item.name} className="amenity-icon" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      <h4>Upcoming Amenities</h4>
      <div className="amenities-grid">
        {upcomingAmenities.map((item, index) => (
          <div key={index} className="amenity-item">
            <img src={item.icon} alt={item.name} className="amenity-icon" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      <h4>Price Range</h4>
      <p>{priceRange}</p>
    </div>
  );
};

export default FarmDetails;
