# Doctor Management System

The system using mern stack developing simple crud operation 

# Prerequisites
Before you begin, ensure you have the following installed:

Node.js
MongoDB
Installation
Clone the repository:


git clone https://github.com/your-username/doctor-management-system.git
Change to the project directory:


cd doctor-management-system
Install server dependencies:


npm install
Change to the client directory:


cd client
Install client dependencies:


npm install
Return to the main project directory:


cd ..
Create a .env file in the project root and set your MongoDB connection string. Example:


MONGODB_URI=mongodb://localhost:27017/doctorDB
Replace localhost:27017 with your MongoDB server address and port.

# Usage
Start the server:


npm start
Start the client:


cd client
npm start
Open your browser and go to http://localhost:3000 to access the application.

# API Endpoints
GET /api/doctors: Get a list of all doctors.
GET /api/doctors/:id: Get details of a specific doctor.
POST /api/doctors: Add a new doctor.
PUT /api/doctors/:id: Update details of a specific doctor.
DELETE /api/doctors/:id: Delete a specific doctor.
Technologies Used
MongoDB: Database
Express.js: Backend framework
React.js: Frontend framework
Node.js: Server environment
Contributing
Feel free to contribute by opening issues or creating pull requests.

# License
This project is licensed under the MIT License - see the LICENSE file for details.
