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

const mongoose = require('mongoose');  


const FavouriteTeamsSchema = new mongoose.Schema({
  id: {type: String,
    required: true,
    unique: true},
  displayName: String,
  logos: Array,
  stats: Array
})

const FavouriteTeams = mongoose.model('FavouriteTeams', FavouriteTeamsSchema);
module.exports = FavouriteTeams;