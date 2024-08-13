/*****************************************************************************
* WEB422 – Project
* I declare that this assignment is my own work in accordance with SenecaAcademic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Group member Name: Amir Mullagaliev, Duc Long Hoang
* Student IDs: 128102225, 122702228
* Date: 08/13/2024
*****************************************************************************/

async function fetchPlayerStats(playerID) {
    const url = `https://nhl-api5.p.rapidapi.com/player-statistic?playerId=${playerID}`;
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
};
export default fetchPlayerStats;
