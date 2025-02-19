React
React Router
Axios
SWAPI
The Movie Search App is a React-based application that allows users to log in as a Star Wars character and search for planets from the Star Wars universe. The app fetches data from the SWAPI (Star Wars API) and displays planets with dynamic sizing based on their population.

Features
Login Screen:

Users can log in using a Star Wars character's name as the username and their birth year as the password.

Example:

Username: Luke Skywalker

Password: 19BBY

Search Screen:

A type-along search bar that fetches and displays planets from the SWAPI on every keystroke.

Planets are displayed in components sized relative to their population (e.g., larger font size for planets with higher populations).

Clicking on a planet displays its detailed information.

Advanced Features:

Rate limiting: Only the user Luke Skywalker can perform more than 15 searches per minute.

Responsive Design:

The app is fully responsive and works seamlessly on desktop, tablet, and mobile devices.

Technologies Used
Frontend:

React

React Router (for navigation)

Axios (for API calls)

Styling:

CSS (with dynamic styling for planet components)

API:

SWAPI (Star Wars API)

Setup and Installation
Follow these steps to set up and run the application locally:

Clone the Repository:


Copy
git clone https://github.com/your-username/movie-search-app.git
cd movie-search-app
Install Dependencies:


Copy
npm install
Run the Application:


Copy
npm start
The app will start running on http://localhost:3000.

Run Tests (Optional):

-
Copy
npm test

Usage
Login:

Enter a valid Star Wars character's name and birth year to log in.

Example:

Username: Luke Skywalker

Password: 19BBY

Search for Planets:

On the Search screen, type in the search bar to fetch planets.

Planets will be displayed with sizes proportional to their population.

View Planet Details:

Click on a planet to view its detailed information.

Logout:

Click the "Logout" button to return to the Login screen.

API Usage
The app uses the following SWAPI endpoints:

Characters:

https://swapi.dev/api/people/?search={name}

Planets:

https://swapi.dev/api/planets/?search={name}

Screenshots
Login Screen
Login Screen

Search Screen
Search Screen

Planet Details
Planet Details

 Thank You.