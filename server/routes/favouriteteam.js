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

const express = require('express');
const router = express.Router();
const FavouriteTeams = require('../models/FavouriteTeams');


router.post('/', async (req, res) => {

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

router.get('/', async (req, res) => {
    try {
                
        const favouriteTeams = await FavouriteTeams.find();
        res.json(favouriteTeams);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get favourite teams' });
    }
}); 

router.delete('/:id', async (req, res) => {
    try {
        const teamId = req.params.id;
        
        const deletedTeam = await FavouriteTeams.findOneAndDelete({ id: teamId });
        
        if (!deletedTeam) {
            return res.status(404).json({ message: 'Team not found' });
        }
        res.status(200).json({ message: 'Team deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete favourite team' });
    }
});

module.exports = router;