import React from 'react';
import './FarmDetails.css';

const FarmDetails = () => {
  const amenities = [
    { name: 'Club House', icon: '/assets/icons/club-house.png' },
    { name: 'Waterfall', icon: '/assets/icons/waterfall.png' },
    { name: 'Fishing', icon: '/assets/icons/fishing.png' },
    { name: 'Bird Sanctuary', icon: '/assets/icons/bird-sanctuary.png' },
    { name: 'Indoor Games', icon: '/assets/icons/indoor-games.png' },
    { name: 'Swimming Pool', icon: '/assets/icons/swimming-pool.png' },
    { name: 'Cycling', icon: '/assets/icons/cycling.png' },
    { name: 'Restaurant', icon: '/assets/icons/restaurant.png' },
    { name: 'Church', icon: '/assets/icons/church.png' },
    { name: 'Herbal Plantation', icon: '/assets/icons/herbal-plantation.png' },
    { name: 'Temple', icon: '/assets/icons/temple.png' },
    { name: 'Horse Riding', icon: '/assets/icons/horse-riding.png' },
    { name: 'Outdoor Games', icon: '/assets/icons/outdoor-games.png' },
    { name: 'Ayurvedic Massage Center', icon: '/assets/icons/massage.png' },
    { name: 'Ponds', icon: '/assets/icons/ponds.png' },
    { name: 'Meditation Center', icon: '/assets/icons/meditation-center.png' },
    { name: 'Library', icon: '/assets/icons/library.png' },
  ];

  return (
    <div className="farm-details mt-4">
      <h4>Amenities</h4>
      <div className="amenities-grid">
        {amenities.map((item, index) => (
          <div key={index} className="amenity-item">
            <img src={item.icon} alt={item.name} className="amenity-icon" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmDetails;
