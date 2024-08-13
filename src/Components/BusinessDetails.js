import React from 'react';

const BusinessDetails = ({ businessData }) => {
  // Check if businessData is an array and not empty
  if (!Array.isArray(businessData) || businessData.length === 0) {
    return <p>No business data available. Please search for a business.</p>;
  }

  return (
    <div>
      {businessData.map((data, index) => (
        <div key={index}>
          <h2>{data.name || 'No Name Available'}</h2>
          <p>Address: {data.full_address || 'No Address Available'}</p>
          <p>Phone: {data.phone_number || 'No Phone Number Available'}</p>
          <p>Website: 
            {data.website ? (
              <a href={data.website} target="_blank" rel="noopener noreferrer">{data.website}</a>
            ) : 'No Website Available'}
          </p>
          <p>Social Media: 
            {data.facebook && <a href={data.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>}
            {data.instagram && <a href={data.instagram} target="_blank" rel="noopener noreferrer"> | Instagram</a>}
            {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer"> | LinkedIn</a>}
          </p>
          <p>Emails: 
            {data.emails_and_contacts?.emails?.length > 0 ? 
              data.emails_and_contacts.emails.join(', ') : 'N/A'}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default BusinessDetails;
