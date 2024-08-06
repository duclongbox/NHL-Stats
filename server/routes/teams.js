const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
   // const fetch = (await import('node-fetch')).default; // node-fetch 
    const response = await fetch('https://nhl-api5.p.rapidapi.com/nhlstandings?year=2024&group=league', {
    //   params: { year: 2024, month: 5, day: 11 },
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'nhl-api5.p.rapidapi.com',
        'X-RapidAPI-Key': 'eefbd83667msh07bc10831bc5508p1bb942jsn3715de833f51'
      }
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});



module.exports = router;