import axios from 'axios';

export const searchBusinesses = async (queries, coordinates) => {
  const options = {
    method: 'POST',
    url: 'https://local-business-data.p.rapidapi.com/search',
    headers: {
      'x-rapidapi-key': '4d3a0f2e98msh560b84884f11bc3p1d4649jsn5b9f2ff7a827',
      'x-rapidapi-host': 'local-business-data.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    data: {
      queries: queries,
      limit: 1000,
      region: 'us',
      language: 'en',
      coordinates: coordinates,
      zoom: 13,
      dedup: true
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
};
