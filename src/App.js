import React, { useState } from 'react';
import BusinessSearchForm from './Components/BusinessSearchForm';
import BusinessDetails from './Components/BusinessDetails';

function App() {
  const [businessData, setBusinessData] = useState([]);

  return (
    <div className="App">
      <h1>Business Search</h1>
      <BusinessSearchForm setBusinessData={setBusinessData} />
      <BusinessDetails businessData={businessData} />
    </div>
  );
}

export default App;
