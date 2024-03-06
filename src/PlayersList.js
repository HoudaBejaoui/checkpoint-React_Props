import React from "react";
import Player from "./Player";
import players from "./players";
import './App.css'; // Importing the CSS file for styling

const PlayersList = () => {
  return (
    <div className="card-container">
      {players.map((player, index) => (
        <Player key={index} {...player} /> // Mapping through the array of players and rendering a Player component for each
      ))}
    </div>
  );
};

export default PlayersList;
