import React from 'react';
import { useLocation } from 'react-router-dom';
import BusinessDetails from './BusinessDetails'; // Assuming BusinessDetails is in the same directory

const ResultsPage = () => {
  const location = useLocation();
  const { businessData } = location.state || {}; // Get the data passed from the form

  return (
    <div>
      <h1>Search Results</h1>
      <BusinessDetails businessData={businessData} />
    </div>
  );
};

export default ResultsPage;
