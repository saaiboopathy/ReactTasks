import React, { useEffect, useState } from 'react';

const Task4 = () => {
  const [data, setData] = useState(null);  
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/3')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })


      .then((data) => {
        setData(data);  
        setLoading(false);
      })


      .catch((error) => {
        setError(error.message); 
        setLoading(false);      
      });
  }, []);  


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Fetched Data</h2>
      <ul>
        <li>ID: {data.id}</li>
        <li>Title: {data.title}</li>
        <li>Completed: {data.completed ? 'Yes' : 'No'}</li>
      </ul>
    </div>
  );
};

export default Task4;