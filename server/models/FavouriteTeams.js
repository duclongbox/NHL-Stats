const mongoose = require('mongoose');  


const FavouriteTeamsSchema = new mongoose.Schema({
  id: String,
  displayName: String,
  logos: Array,
  stats: Array
})

const FavouriteTeams = mongoose.model('FavouriteTeams', FavouriteTeamsSchema);
module.exports = FavouriteTeams;