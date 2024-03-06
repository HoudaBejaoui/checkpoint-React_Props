import React from "react"; // Import the React library to create React components
import PlayersList from "./PlayersList"; // Import the PlayersList component
import './App.css'; // Import the 'App.css' file for additional styling

// Define the App component, which is a functional component
function App() {
  return (
    <div>
      <h1>FIFA Player Cards</h1>
      <PlayersList />
    </div>
  );
}

export default App;
