// SearchFilter.js
import React, { useState, useEffect } from 'react';

const SearchFilter = ({ farms, onFilter }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    amenities: '',
    price: '',
  });

  useEffect(() => {
    const filteredFarms = farms.filter((farm) => {
      const matchesSearchQuery =
        farm.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        farm.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLocation =
        !filters.location || farm.location.toLowerCase().includes(filters.location.toLowerCase());
      const matchesAmenities =
        !filters.amenities || farm.amenities.some((amenity) => amenity.toLowerCase().includes(filters.amenities.toLowerCase()));
      const matchesPrice =
        !filters.price || farm.price <= parseInt(filters.price, 10);

      return matchesSearchQuery && matchesLocation && matchesAmenities && matchesPrice;
    });

    onFilter(filteredFarms);
  }, [searchQuery, filters, farms, onFilter]);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="search-filter">
      <h2>Search and Filter Farms</h2>
      <input
        type="text"
        placeholder="Search by location or name..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div className="filters">
        <label>
          Location:
          <input
            type="text"
            name="location"
            placeholder="Filter by location..."
            value={filters.location}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Amenities:
          <input
            type="text"
            name="amenities"
            placeholder="Filter by amenities..."
            value={filters.amenities}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Price (max):
          <input
            type="number"
            name="price"
            placeholder="Filter by price..."
            value={filters.price}
            onChange={handleFilterChange}
          />
        </label>
      </div>
    </div>
  );
};

export default SearchFilter;
