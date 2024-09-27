import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Catalog = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRace, setSelectedRace] = useState('');
  const [selectedAge, setSelectedAge] = useState('');

  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/66ea6857e41b4d34e4325758')
      .then(response => {
        if (!response.ok) {
          throw new Error('fel hämta data');
        }
        return response.json();
      })
      .then(data => {
        setDogs(data.record);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const filteredDogs = dogs.filter(dog => {
    return (
      dog.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedRace === '' || dog.breed === selectedRace) &&
      (selectedAge === '' || dog.age === parseInt(selectedAge))
    );
  });

  if (loading) {
    return <p>Laddar hundar</p>;
  }

  if (error) {
    return <p>fel uppstod {error}</p>;
  }

  const uniqueRaces = [...new Set(dogs.map(dog => dog.breed))];

  return (
    <div>
      <h1>Catalog</h1>

    
      <input
        type="text"
        placeholder="Search after name"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        style={{ marginBottom: '10px', padding: '5px' }}
      />

     
      <select
        value={selectedRace}
        onChange={e => setSelectedRace(e.target.value)}
        style={{ marginLeft: '10px', padding: '5px' }}
      >
        <option value="">All dogtypes</option>
        {uniqueRaces.map(race => (
          <option key={race} value={race}>
            {race}
          </option>
        ))}
      </select>

      
      <select
        value={selectedAge}
        onChange={e => setSelectedAge(e.target.value)}
        style={{ marginLeft: '10px', padding: '5px' }}
      >
        <option value="">All years</option>
        <option value="1">1 year</option>
        <option value="2">2 year</option>
        <option value="3">3 year</option>
        <option value="4">4 year</option>
        <option value="5">5 year</option>
      </select>

      <div className="dog-list">
  {filteredDogs.length > 0 ? (
    filteredDogs.map(dog => (
      <div key={dog.chipNumber} className="dog-item">
        <Link to={`/information/${dog.chipNumber}`}>
          <img src={dog.img} alt={dog.name} />
          <h3>{dog.name}</h3>
        </Link>
      </div>
    ))
  ) : (
    <p>Inga hundar matchar din sökning.</p>
  )}
</div>
    </div>
  );
};

export default Catalog;
