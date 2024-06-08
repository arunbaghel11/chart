import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    end_year: '',
    topics: '',
    sector: '',
    region: '',
    pestle: '',
    source: '',
    swot: '',
    country: '',
    city: ''
  });

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/data', { params: filters });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filters]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Data Visualization Dashboard</h1>
      <Dashboard data={data} setFilters={setFilters} filters={filters} />
    </div>
  );
};

export default App;
