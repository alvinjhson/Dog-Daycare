import React, { useEffect, useState } from 'react';

const Catalog = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/66ea6857e41b4d34e4325758')
      .then(response => {
        if (!response.ok) {
          throw new Error('Något gick fel vid hämtningen av data');
        }
        return response.json();
      })
      .then(data => {
        setDogs(data.record); // Spara hundarna i state
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Laddar hundar...</p>;
  }

  if (error) {
    return <p>Ett fel uppstod: {error}</p>;
  }
return (
    <div>
    <h1>Katalog</h1>
    <p>Här är en lista över våra hundar:</p>

    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {dogs.map(dog => (
        <div key={dog.chipNumber} style={{ textAlign: 'center' }}>
          <img
            src={dog.img}
            alt={dog.name}
            style={{ width: '150px', height: 'auto', borderRadius: '10px' }}
          />
          <h3>{dog.name}</h3>
        </div>
      ))}
    </div>
  </div>
);
};

export default Catalog;