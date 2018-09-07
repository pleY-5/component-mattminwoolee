var mongoose = require('mongoose');
var data = require('../YelpData.js');
mongoose.connect('mongodb://localhost/yelpreactor');

var restaurantSchema = new mongoose.Schema({
  name: String,
  photos: Array
});

var Restaurant = mongoose.model('Restaurant', restaurantSchema);

for(var i = 0; i < data.businessNames.length; i++) {
  var random = Math.floor(Math.random() * data.photos.length); 
  var each = new Restaurant({ name: data.businessNames[i], photos: data.photos[random] });
  each.save();
}


var userSchema = new mongoose.Schema({
  name: String,
  elite: Boolean,
  friends: Number,
  reviews: Number
});

var User = mongoose.model('User', userSchema);

for(var i = 0; i < data.users.length; i++) {
	var eachUser = new User({ name: data.users[i].name, elite: data.users[i].elite, friends: data.users[i].friends, reviews: data.users[i].reviews})
  eachUser.save();
}

