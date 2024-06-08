import React from 'react';
import Chart from './Chart';
import D3Chart from './D3Chart';

const Dashboard = ({ data, setFilters, filters }) => {

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
  };

  return (
    <div>
      <div className="filters">
        <label>
          End Year:
          <input type="number" name="end_year" value={filters.end_year} onChange={handleInputChange} />
        </label>
        <label>
          Topics:
          <input type="text" name="topics" value={filters.topics} onChange={handleInputChange} />
        </label>
        <label>
          Sector:
          <input type="text" name="sector" value={filters.sector} onChange={handleInputChange} />
        </label>
        <label>
          Region:
          <input type="text" name="region" value={filters.region} onChange={handleInputChange} />
        </label>
        <label>
          PEST:
          <input type="text" name="pestle" value={filters.pestle} onChange={handleInputChange} />
        </label>
        <label>
          Source:
          <input type="text" name="source" value={filters.source} onChange={handleInputChange} />
        </label>
        <label>
          SWOT:
          <input type="text" name="swot" value={filters.swot} onChange={handleInputChange} />
        </label>
        <label>
          Country:
          <input type="text" name="country" value={filters.country} onChange={handleInputChange} />
        </label>
        <label>
          City:
          <input type="text" name="city" value={filters.city} onChange={handleInputChange} />
        </label>
      </div>
      <div className="charts">
        <Chart data={data} />
        <D3Chart data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
