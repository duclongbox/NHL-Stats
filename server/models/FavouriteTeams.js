const mongoose = require('mongoose');  


const FavouriteTeamsSchema = new mongoose.Schema({
  id: {type: String,
    required: true,
    unique: true},
  displayName: String,
  logos: String,
  stats: Array
})

const FavouriteTeams = mongoose.model('FavouriteTeams', FavouriteTeamsSchema);
module.exports = FavouriteTeams;