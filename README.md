Data Visualization Dashboard
This project is a data visualization dashboard designed to display and interact with various data points related to intensity, likelihood, relevance, year, country, topics, region, city, and other relevant variables. The dashboard provides filtering options for better data exploration and visualization.

Features
Data Visualization: Utilizes Chart.js and D3.js to visualize data with interactive charts.
Filtering Options: Allows users to filter data by various parameters such as end year, topics, sector, region, PEST, source, SWOT, country, and city.
Responsive Design: Ensures the dashboard is accessible and functional across different devices and screen sizes.
Backend Integration: Retrieves data from a backend server using RESTful API endpoints.
Modular Components: Uses modular React components for easy maintenance and scalability.
Installation
Clone the repository:

bash
Copy code
git clone <repository-url>
Install dependencies:

bash
Copy code
cd frontend
npm install
bash
Copy code
cd backend
npm install
Set up the backend:

Ensure MongoDB is installed and running.

Create a .env file in the backend directory with the following content:

makefile
Copy code
MONGO_URI=<your-mongodb-uri>
Import sample data to MongoDB:

arduino
Copy code
cd backend
npm run import-data
Start the backend server:

bash
Copy code
cd backend
npm start
Start the frontend development server:

bash
Copy code
cd frontend
npm start
Open your browser and visit http://localhost:3000 to view the dashboard.

Usage
Use the filters provided in the dashboard to refine the data displayed in the charts.
Explore different visualizations and insights based on the filtered data.
Interact with the charts to gain a deeper understanding of the dataset.
Technologies Used
Frontend:

React.js
Chart.js
D3.js
Backend:

Node.js
Express.js
MongoDB
Contributing
Contributions are welcome! Feel free to submit issues and pull requests.