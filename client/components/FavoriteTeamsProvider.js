import React, { createContext, useState } from 'react';

// Create the context
export const FavoriteTeamsContext = createContext();

// Create a provider component
export const FavoriteTeamsProvider = ({ children }) => {
  const [favoriteTeams, setFavoriteTeams] = useState([]);

  const addTeamToFavorites = (team) => {
    setFavoriteTeams((prevFavorites) => {
      if (!prevFavorites.includes(team)) {
        return [...prevFavorites, team];
      }
      return prevFavorites;
    });
  };

  const removeTeamFromFavorites = (team) => {
    setFavoriteTeams((prevFavorites) =>
      prevFavorites.filter((favTeam) => favTeam !== team)
    );
  };

  return (
    <FavoriteTeamsContext.Provider value={{ favoriteTeams, addTeamToFavorites, removeTeamFromFavorites }}>
      {children}
    </FavoriteTeamsContext.Provider>
  );
};