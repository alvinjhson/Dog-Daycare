import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 

const Information = () => {
  const { chipNumber } = useParams(); 
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    fetch('https://api.jsonbin.io/v3/b/66ea6857e41b4d34e4325758')
      .then(response => {
        if (!response.ok) {
          throw new Error('Fel');
        }
        return response.json();
      })
      .then(data => {
        const selectedDog = data.record.find(d => d.chipNumber === chipNumber); 
        if (selectedDog) {
          setDog(selectedDog); 
        } else {
          setError('hittade inte hund.');
        }
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [chipNumber]);

  if (loading) {
    return <p>Laddar information</p>;
  }

  if (error) {
    return <p>fel uppstod {error}</p>;
  }

  if (!dog) {
    return <p>Hitta ingen hund</p>;
  }

  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={dog.img} alt={dog.name} style={{ width: '300px', height: 'auto', borderRadius: '10px' }} />
      <p>Breed: {dog.breed}</p>
      <p>Sex: {dog.sex}</p>
      <p>Age: {dog.age} år</p>
      <p>Chipnumber: {dog.chipNumber}</p>
      <h3>Ägarinformation</h3>
      <p>Owner: {dog.owner.name} {dog.owner.lastName}</p>
      <p>Phonenumber: {dog.owner.phoneNumber}</p>
      <p>{dog.present ? 'present' : 'not present'}</p>
    </div>
  );
};

export default Information;
