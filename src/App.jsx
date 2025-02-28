// React brings in the two most important tools for this app:
// - useState: for storing data and user input
// - useEffect: for fetching data when the app first loads
import { useState, useEffect } from 'react';

// Import the CSS file where styles live (navy box, centered layout, etc.)
import './App.css';

// Main app component - this is what gets rendered to the page
function App() {
  // State for storing the full list of cities fetched from the API
  const [cities, setCities] = useState([]);

  // State to track whether the app is still loading data
  const [loading, setLoading] = useState(true);

  // State to store any error messages (friendly ones for users)
  const [error, setError] = useState(null);

  // State to track what the user types into the search box
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect runs once (when the component first loads)
  // It triggers the fetch to get the city data from the remote URL
  useEffect(() => {
    fetch('https://roots.thecompernolles.com/cities.json')
      .then((response) => {
        // If the response is not successful (like 404 or 500), we throw an error
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Otherwise, we parse the JSON
        return response.json();
      })
      .then((data) => {
        // Store the cities in state, and turn off the loading spinner
        setCities(data);
        setLoading(false);
      })
      .catch((fetchError) => {
        // This is where any network or fetch errors end up
        // Example: server is down, or internet connection is lost

        // Log the full technical error to the console (for debugging)
        console.error("Fetch error:", fetchError);

        // Set a friendly message for the user
        setError("Oops! Something went wrong while loading the cities. Please check your connection or try again later.");

        // Make sure loading is turned off
        setLoading(false);
      });
  }, []);  // Empty dependency array means this only runs once when the app loads

  // This filtered list will only include cities whose name or state
  // contains the text typed into the search box (case insensitive)
  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    city.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // What the app renders to the page
  return (
    <div className="app-container">
      {/* Outer container (centers everything on the page) */}
      <div className="city-box">
        {/* App title */}
        <h1>City List App</h1>

        {/* Search input - users type here to filter cities */}
        <input
          type="text"
          placeholder="Search cities or states..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* While loading, show a loading message */}
        {loading && <p className="loading">Loading cities...</p>}

        {/* If there's an error, show a friendly error message */}
        {error && (
          <p className="error">
            {error}
          </p>
        )}

        {/* When data is ready and no errors, show the filtered city list */}
        {!loading && !error && (
          <ul>
            {filteredCities.map((city, index) => (
              <li key={index}>
                {city.name}, {city.state}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// This makes the App component available for use in other files
// (like main.jsx where React starts the whole app)
export default App;
