import React, { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  BarController
} from 'chart.js';

// Register the necessary components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  BarController
);

const Chart = ({ data }) => {
  const chartContainerRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const chartData = {
      labels: data.map(d => d.topic),
      datasets: [
        {
          label: 'Intensity',
          data: data.map(d => d.intensity),
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1
        }
      ]
    };

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const newChartInstance = new ChartJS(chartContainerRef.current, {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart'
          }
        }
      }
    });

    chartInstanceRef.current = newChartInstance;
  }, [data]);

  return <canvas ref={chartContainerRef}></canvas>;
};

export default Chart;
