var faker = require('faker');

const businessNames = ["Minhas Micro Brewery", "CK'S BBQ & Catering", "La Bastringue", "The Coffee Bean & Tea Leaf", "Bnc Cake House", "Thai One On", "Filiberto's Mexican Food", "Sushi 8", "Southern Accent Restaurant", "Original Hamburger Works", "Mysore Indian Cuisine", "Safeway Food & Drug", "Harlow", "CakesbyToi", "Rally's Hamburgers", "Rib Shop", "Mabel's Bakery", "Salsitas", "Los Toros Numero 2", "The Coffee Mill Restaurant", "Teresas Pizzeria", "Chicken Lips", "Subway", "Omelet House Summerlin", "Crossroads Country Cafe'", "Strickland's Ice Cream", "John John's Seafood", "Little Caesars Pizza", "Dunkin Donuts", "Kim Phat Inc", "Manuel's Mexican Restaurant & Cantina - Bell Rd", "La Rosa Chilena", "Junior's Pizzeria", "Subway", "Baja Fresh Mexican Grill", "China Palace", "Allwyn's Bakery", "Fornetti", "Provence Bakery", "Ice Cream Patio", "Hub Coffee House & Locavorium", "Pizza Bellagio", "Regino's Pizza", "Avenue Deli", "More Than Pies Baking", "Indian Street Food Company", "Jack's Liquor", "Tipsy Ryde", "Wendy's", "McDonalds", "Fat Ox", "Tang Dynasty Restaurant And Bar", "Sammy's Beach Bar & Grill", "Harvey's Restaurants", "Honey's Beestro", "The Nest", "Applebee's Grill + Bar", "Anchor Bar", "I Wings", "Frite Alors", "Vocé Ristorante and Lounge", "Whiskey Rose Bar & Grill", "Popeyes Louisiana Kitchen", "Wing's Express", "Pizza Hut", "Sansei Japan", "Burrito Boyz", "L2 Lounge", "Chan Yang", "Long John Silver's", "Sunny Foodmart", "Weinkontor", "Loblaws", "Seasonal Adventures Pumpkin Patch", "Carte Blanche", "Schlotzsky's", "A & A International Food", "Arby's", "Higley Hot Dog Hut", "Pho 198", "Sweet Mahal", "La Cabana", "Hooters", "Boston Market", "Sauter's Inn Restaurant", "El Pollo Loco", "Ave Maria Latin Café", "Dave's Surf & Turf", "Popeyes Louisiana Kitchen", "Chicago Deep Dish Pizza", "Quesada Mexican Grill", "Great Wall", "Ten Feet Tall", "Velvet Sunrise Coffee Roasters", "Caspian Cafe & Catering", "Giulietta", "Sea Hut", "Chicago Brewing Company", "Port of Subs", "Chef's Cafe"];
businessNames.forEach((ele, i, arr) => {arr[i] = [ele]});

const photos = ['https://s3-media3.fl.yelpcdn.com/bphoto/sLdbby1KiN14Ul3a3fMYfA/o.jpg' ,'https://s3-media1.fl.yelpcdn.com/bphoto/UTc0UQEbp_wN1C4guSYG6g/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/XSAK-bulUUsvjTmYoKOCCg/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/2mEAbCyY6PAL9A2yrsRzRA/o.jpg', 'https://s3-media3.fl.yelpcdn.com/bphoto/yxAl0PlNp8471vNqTmfCYw/o.jpg', 'https://s3-media3.fl.yelpcdn.com/bphoto/O0lQDsxZNGRH0pfKbjjhIg/o.jpg' ,'https://s3-media4.fl.yelpcdn.com/bphoto/fAbRBPWQvjbl5iZVgBu7-Q/o.jpg', 'https://s3-media3.fl.yelpcdn.com/bphoto/wTnsap_XlLTsqglyfH-eDg/o.jpg', 'https://s3-media3.fl.yelpcdn.com/bphoto/-kjVIQTGw8EPqt1dri0wgw/o.jpg', 'https://s3-media1.fl.yelpcdn.com/bphoto/ce6LTegzT9cSj03GEkyAmw/o.jpg', 'https://s3-media1.fl.yelpcdn.com/bphoto/7VV7M0UC4fxzp26p5mH3LA/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/9EPJd7aZy14XantZ0zYEBQ/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/SwsWzS-BdWbljOlAzIl-8A/o.jpg', 'https://s3-media2.fl.yelpcdn.com/bphoto/yNnYd_EqX_62GwRz4kQARg/o.jpg', 'https://s3-media2.fl.yelpcdn.com/bphoto/3MvcAuQO9bogVUqXwUfrIA/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/EytB0SwUIwSTdEXyEcfk2A/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/WMGUlf0kZPbavvYmz7xECg/o.jpg', 'https://s3-media3.fl.yelpcdn.com/bphoto/Q_EQF9aKUUMOcq02epl9_Q/o.jpg', 'https://s3-media1.fl.yelpcdn.com/bphoto/xahKZn7d9_LNwsNXpxGGMQ/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/z6USV3ftaTJXpCfcfYrkow/o.jpg', 'https://s3-media3.fl.yelpcdn.com/bphoto/Z4D44HM1NPk3E8oG0McMbQ/o.jpg', 'https://s3-media1.fl.yelpcdn.com/bphoto/YJiEc4CFzCXd1ACnHOFeKg/o.jpg', 'https://s3-media3.fl.yelpcdn.com/bphoto/v0hYCBvwY40WyDtSAbNgyA/o.jpg']
const users = [];
const photoData = [];

//photo categories
const hipsterBeer = ['https://s3-media3.fl.yelpcdn.com/bphoto/sLdbby1KiN14Ul3a3fMYfA/o.jpg' ,'https://s3-media1.fl.yelpcdn.com/bphoto/UTc0UQEbp_wN1C4guSYG6g/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/XSAK-bulUUsvjTmYoKOCCg/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/2mEAbCyY6PAL9A2yrsRzRA/o.jpg', 'https://s3-media3.fl.yelpcdn.com/bphoto/yxAl0PlNp8471vNqTmfCYw/o.jpg', 'https://s3-media3.fl.yelpcdn.com/bphoto/O0lQDsxZNGRH0pfKbjjhIg/o.jpg' ,'https://s3-media4.fl.yelpcdn.com/bphoto/fAbRBPWQvjbl5iZVgBu7-Q/o.jpg', 'https://s3-media3.fl.yelpcdn.com/bphoto/wTnsap_XlLTsqglyfH-eDg/o.jpg', 'https://s3-media3.fl.yelpcdn.com/bphoto/-kjVIQTGw8EPqt1dri0wgw/o.jpg', 'https://s3-media1.fl.yelpcdn.com/bphoto/ce6LTegzT9cSj03GEkyAmw/o.jpg', 'https://s3-media1.fl.yelpcdn.com/bphoto/7VV7M0UC4fxzp26p5mH3LA/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/9EPJd7aZy14XantZ0zYEBQ/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/SwsWzS-BdWbljOlAzIl-8A/o.jpg', 'https://s3-media2.fl.yelpcdn.com/bphoto/yNnYd_EqX_62GwRz4kQARg/o.jpg', 'https://s3-media2.fl.yelpcdn.com/bphoto/3MvcAuQO9bogVUqXwUfrIA/o.jpg']
const korean = ['https://s3-media4.fl.yelpcdn.com/bphoto/EytB0SwUIwSTdEXyEcfk2A/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/WMGUlf0kZPbavvYmz7xECg/o.jpg', 'https://s3-media3.fl.yelpcdn.com/bphoto/Q_EQF9aKUUMOcq02epl9_Q/o.jpg' ]
const mexican = ['https://s3-media1.fl.yelpcdn.com/bphoto/xahKZn7d9_LNwsNXpxGGMQ/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/z6USV3ftaTJXpCfcfYrkow/o.jpg', 'https://s3-media3.fl.yelpcdn.com/bphoto/Z4D44HM1NPk3E8oG0McMbQ/o.jpg' ] 
const dessert = ['https://s3-media1.fl.yelpcdn.com/bphoto/YJiEc4CFzCXd1ACnHOFeKg/o.jpg', 'https://s3-media3.fl.yelpcdn.com/bphoto/v0hYCBvwY40WyDtSAbNgyA/o.jpg']

var isElite = () => {
  return !!Math.floor(Math.random() * 2);
}

var randomizeInt = (int) => {
  return 1+Math.floor(Math.random() * int);
}

for(var i = 0; i < 100; i++) {
  users.push([faker.name.findName(), isElite(), randomizeInt(1300), randomizeInt(300), faker.image.avatar()]);
}

for(var i = 0; i < businessNames.length; i++) {
	for(var j = 0; j < 5; j++) {
	  photoData.push([photos[randomizeInt(photos.length-1)], JSON.stringify(faker.date.between('2010-02-26', '2018-01-04')).substr(1,10), faker.random.words(), randomizeInt(users.length), i+1]);		
	}
}



module.exports.photoData = photoData;
module.exports.users = users;
module.exports.businessNames = businessNames;
