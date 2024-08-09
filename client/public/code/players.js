async function fetchPlayers(teamID) {
    const url = `https://nhl-api5.p.rapidapi.com/nhlteamplayers?teamid=${teamID}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'eefbd83667msh07bc10831bc5508p1bb942jsn3715de833f51',
        'X-RapidAPI-Host': 'nhl-api5.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
export default fetchPlayers;
