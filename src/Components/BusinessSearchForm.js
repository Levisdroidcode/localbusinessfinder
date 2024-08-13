import React, { useState } from 'react';
import { searchBusinesses } from '../api/businessApi';

const BusinessSearchForm = ({ setBusinessData }) => {
  const [query, setQuery] = useState('');
  
  // Remove the setCoordinates state and setter if not used
  // const [coordinates, setCoordinates] = useState('38.447030, -101.547385'); // Default coordinates

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted'); // Check if this log appears

    try {
      console.log('Calling API with query:', query);
      const data = await searchBusinesses([query]); // Pass the query as an array
      console.log('API response data:', data); // Log the API response data
      setBusinessData(data.data); // Assuming the API returns an array of business data
    } catch (error) {
      console.error('Error during business search:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Search Query:</label>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g., plumbers in Texas"
          required
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default BusinessSearchForm;
