const fs = require('fs');
const stringify = require('csv-stringify');
const faker = require('faker');

var getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var randomizeInt = (int) => Math.floor(Math.random() * int) + 1;

const photos = ['https://s3-media1.fl.yelpcdn.com/bphoto/pAOey7YyZocaGibULFVWLg/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/tUZZiBxbpKNJCdOGBY2Wgw/o.jpg', 'https://s3-media3.fl.yelpcdn.com/bphoto/URIuduXlqvAA-h323K3m7A/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/21Q5eRRmpq7mwx-eqy8_UQ/o.jpg','https://s3-media2.fl.yelpcdn.com/bphoto/LH4k7Lv4Puo9UnnqXHqtIQ/o.jpg', 'https://s3-media1.fl.yelpcdn.com/bphoto/ONAm5X6lUjXbzEa082xEPg/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/QRdCVpCECIScWaim-TMT7w/o.jpg', 'https://s3-media2.fl.yelpcdn.com/bphoto/9ruN_kDTPeL4XU0DMpYTGw/o.jpg','https://s3-media3.fl.yelpcdn.com/bphoto/sLdbby1KiN14Ul3a3fMYfA/o.jpg' ,'https://s3-media1.fl.yelpcdn.com/bphoto/UTc0UQEbp_wN1C4guSYG6g/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/XSAK-bulUUsvjTmYoKOCCg/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/2mEAbCyY6PAL9A2yrsRzRA/o.jpg', 'https://s3-media3.fl.yelpcdn.com/bphoto/yxAl0PlNp8471vNqTmfCYw/o.jpg', 'https://s3-media3.fl.yelpcdn.com/bphoto/O0lQDsxZNGRH0pfKbjjhIg/o.jpg' ,'https://s3-media4.fl.yelpcdn.com/bphoto/fAbRBPWQvjbl5iZVgBu7-Q/o.jpg', 'https://s3-media3.fl.yelpcdn.com/bphoto/wTnsap_XlLTsqglyfH-eDg/o.jpg', 'https://s3-media3.fl.yelpcdn.com/bphoto/-kjVIQTGw8EPqt1dri0wgw/o.jpg', 'https://s3-media1.fl.yelpcdn.com/bphoto/ce6LTegzT9cSj03GEkyAmw/o.jpg', 'https://s3-media1.fl.yelpcdn.com/bphoto/7VV7M0UC4fxzp26p5mH3LA/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/9EPJd7aZy14XantZ0zYEBQ/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/SwsWzS-BdWbljOlAzIl-8A/o.jpg', 'https://s3-media2.fl.yelpcdn.com/bphoto/yNnYd_EqX_62GwRz4kQARg/o.jpg', 'https://s3-media2.fl.yelpcdn.com/bphoto/3MvcAuQO9bogVUqXwUfrIA/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/EytB0SwUIwSTdEXyEcfk2A/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/WMGUlf0kZPbavvYmz7xECg/o.jpg', 'https://s3-media3.fl.yelpcdn.com/bphoto/Q_EQF9aKUUMOcq02epl9_Q/o.jpg', 'https://s3-media1.fl.yelpcdn.com/bphoto/xahKZn7d9_LNwsNXpxGGMQ/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/z6USV3ftaTJXpCfcfYrkow/o.jpg', 'https://s3-media3.fl.yelpcdn.com/bphoto/Z4D44HM1NPk3E8oG0McMbQ/o.jpg', 'https://s3-media1.fl.yelpcdn.com/bphoto/YJiEc4CFzCXd1ACnHOFeKg/o.jpg', 'https://s3-media3.fl.yelpcdn.com/bphoto/v0hYCBvwY40WyDtSAbNgyA/o.jpg'];
const months = {'1': 'January', '2': 'February', '3': 'March', '4': 'April', '5': 'May', '6': 'June', '7': 'July', '8': 'August', '9': 'September', '10': 'October', '11': 'November', '12': 'December'};
const randomWords = [ 'Strategist Libyan Dinar', 'Fresh connect', 'content-based Bosnia and Herzegovina', 'Balboa US Dollar', 'Station secured line', 'global Supervisor', 'Rustic blue multi-tasking', 'Pataca Product', 'Stream Sleek', 'Dynamic', 'Soap', 'Metal', 'seize transform', 'online Investor integrate', 'digital responsive withdrawal',
  'orchestrate Grocery Handmade', 'open system', 'online', 'Avon Tuna Decentralized', 'withdrawal global', 'hardware Berkshire', 'Licensed platforms',
  'metrics', 'Baby', 'Auto Loan Account Comoro Franc', 'override optical parse', 'empower', 'granular budgetary management SDR', 'relationships', 'holistic Home Loan Account', 'Mountains',
  'intuitive Riel Paradigm', 'Gorgeous Plastic asynchronous', 'Phased', 'Configuration bluetooth', 'Quality-focused olive panel', 'Human', 'payment overriding yellow', 'Versatile SQL back up',
  'Nevada Producer Borders', 'Borders Manager', 'application', 'e-markets Auto Loan Account functionalities', 'Outdoors', 'generating Pizza', 'Egyptian Pound Face to face', 'Savings Account', 'Savings Account',
  'Ameliorated Inlet Berkshire', 'Florida connect', 'Function-based', 'Borders Fantastic Granite Chips Regional', 'Product', 'TCP implement multi-byte', 'Factors',
  'strategy', 'Bike', 'Human', 'Indian Rupee', 'Ergonomic back up', 'Sharable next-generation', 'Toys', 'Grass-roots HDD',
  'withdrawal Checking Account', 'parsing Vermont Legacy', 'Sports lime Manager', 'application', 'cross-platform turn-key Streamlined', 'Bedfordshire', 'COM frame Central', 'Illinois Kids', 'strategize web-enabled', 'yellow', 'Salad', 'Auto Loan Account Indiana', 'Cambridgeshire', 'quantifying', 'Pants', 'visionary Automotive Robust', 'transmitter Home', 'Computer New Zealand Dollar', 'Legacy connect Refined', 'COM', 'experiences Planner', 'Home Loan Account', 'Leone Internal Rustic Steel Mouse', 'Sports orchestrate', 'backing up', 'Andorra Hungary', 'Universal Forge Centers', 'COM', 'Station Mouse' ];

const letters = 'abcdefghij'.split('');
// const generateMillionNames = (letter) => {
//   var allPossibilities = [];
//   for (let i = 0; i < 1000000; i++) {
//     allPossibilities.push([('TuLan' + i + letter).split(' ').join('')]);
//   }
//   return allPossibilities;
// };  

const createNTimesSixPhotoSets = (n, round = 0) => {
  var letter = letters[round];
  var photoEntryRow = '';
  var initial = n * round;
  var end = n * (round + 1);
  for (var i = initial; i < end; i++ ) {
    for (var j = 0; j < 6; j++ ) {
      var month = months[Math.floor(Math.random() * 12) + 1];
      var day = Math.floor(Math.random() * 30) + 1;
      var year = '201' + (Math.floor(Math.random() * 8) + 1); 
      var newDate = month + ' ' + day + ' ' + year; 
      photoEntryRow = photoEntryRow + photos[randomizeInt(photos.length - 1)] + ',' + newDate + ',' + randomWords[randomizeInt(randomWords.length - 1)] + ',' + getRandomInt(initial, end) + ',' + `${i + 1}` + ',' + `TuLan${i + 1}${letter}` + '\n';
    }
  }
  return photoEntryRow;
};

var t0;
var t1;
const generateSixtyMillionPhotoSets = (n = 0) => {
  console.log(n);
  if ( n === 0) {
    t0 = Date.now();
    fs.writeFile(`photos${n}.csv`, createNTimesSixPhotoSets(10, 0), (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
      generateSixtyMillionPhotoSets(n + 1);
    });
  } else if ( n === 10 ) {
    t1 = Date.now();
    console.log("Operation took " + (t1 - t0) + " milliseconds.");
    return;
  } else {
    fs.appendFile(`photos${n}.csv`, createNTimesSixPhotoSets(10, n), (err) => {
      if (err) throw err;
      console.log('The file has been appended!');
      generateSixtyMillionPhotoSets(n + 1);
    });
  }
};

generateSixtyMillionPhotoSets();
