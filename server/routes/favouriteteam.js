const express = require('express');
const router = express.Router();
const FavouriteTeams = require('../models/FavouriteTeams');
router.post('/favourites', async (req, res) => {

    const { id, displayName, logos, stats } = req.body; 
    if (!id || !displayName || !logos || !stats) {
        return res.status(400).json({ msg: 'No data send' });
    }
    try{
        const newFavouriteTeam = new FavouriteTeams({ id, displayName, logos, stats });
        await newFavouriteTeam.save();
        res.json({ msg: 'Favourite team added successfully' });
    }
    catch(error){
        res.status(500).json({error: 'Failed to add favourite team'});
    }
});