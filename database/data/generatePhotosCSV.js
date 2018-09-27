const fs = require('fs');
const stringify = require('csv-stringify');
const faker = require('faker');

var randomizeInt = (int) => { return 1 + Math.floor(Math.random() * int)};

const photos = ['https://s3-media1.fl.yelpcdn.com/bphoto/pAOey7YyZocaGibULFVWLg/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/tUZZiBxbpKNJCdOGBY2Wgw/o.jpg', 'https://s3-media3.fl.yelpcdn.com/bphoto/URIuduXlqvAA-h323K3m7A/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/21Q5eRRmpq7mwx-eqy8_UQ/o.jpg','https://s3-media2.fl.yelpcdn.com/bphoto/LH4k7Lv4Puo9UnnqXHqtIQ/o.jpg', 'https://s3-media1.fl.yelpcdn.com/bphoto/ONAm5X6lUjXbzEa082xEPg/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/QRdCVpCECIScWaim-TMT7w/o.jpg', 'https://s3-media2.fl.yelpcdn.com/bphoto/9ruN_kDTPeL4XU0DMpYTGw/o.jpg','https://s3-media3.fl.yelpcdn.com/bphoto/sLdbby1KiN14Ul3a3fMYfA/o.jpg' ,'https://s3-media1.fl.yelpcdn.com/bphoto/UTc0UQEbp_wN1C4guSYG6g/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/XSAK-bulUUsvjTmYoKOCCg/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/2mEAbCyY6PAL9A2yrsRzRA/o.jpg', 'https://s3-media3.fl.yelpcdn.com/bphoto/yxAl0PlNp8471vNqTmfCYw/o.jpg', 'https://s3-media3.fl.yelpcdn.com/bphoto/O0lQDsxZNGRH0pfKbjjhIg/o.jpg' ,'https://s3-media4.fl.yelpcdn.com/bphoto/fAbRBPWQvjbl5iZVgBu7-Q/o.jpg', 'https://s3-media3.fl.yelpcdn.com/bphoto/wTnsap_XlLTsqglyfH-eDg/o.jpg', 'https://s3-media3.fl.yelpcdn.com/bphoto/-kjVIQTGw8EPqt1dri0wgw/o.jpg', 'https://s3-media1.fl.yelpcdn.com/bphoto/ce6LTegzT9cSj03GEkyAmw/o.jpg', 'https://s3-media1.fl.yelpcdn.com/bphoto/7VV7M0UC4fxzp26p5mH3LA/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/9EPJd7aZy14XantZ0zYEBQ/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/SwsWzS-BdWbljOlAzIl-8A/o.jpg', 'https://s3-media2.fl.yelpcdn.com/bphoto/yNnYd_EqX_62GwRz4kQARg/o.jpg', 'https://s3-media2.fl.yelpcdn.com/bphoto/3MvcAuQO9bogVUqXwUfrIA/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/EytB0SwUIwSTdEXyEcfk2A/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/WMGUlf0kZPbavvYmz7xECg/o.jpg', 'https://s3-media3.fl.yelpcdn.com/bphoto/Q_EQF9aKUUMOcq02epl9_Q/o.jpg', 'https://s3-media1.fl.yelpcdn.com/bphoto/xahKZn7d9_LNwsNXpxGGMQ/o.jpg', 'https://s3-media4.fl.yelpcdn.com/bphoto/z6USV3ftaTJXpCfcfYrkow/o.jpg', 'https://s3-media3.fl.yelpcdn.com/bphoto/Z4D44HM1NPk3E8oG0McMbQ/o.jpg', 'https://s3-media1.fl.yelpcdn.com/bphoto/YJiEc4CFzCXd1ACnHOFeKg/o.jpg', 'https://s3-media3.fl.yelpcdn.com/bphoto/v0hYCBvwY40WyDtSAbNgyA/o.jpg'];
const months = {'01': 'January', '02': 'February', '03': 'March', '04': 'April', '05': 'May', '06': 'June', '07': 'July', '08': 'August', '09': 'September', '10': 'October', '11': 'November', '12': 'December'};

const createMillionPhotoSets = () => {
  const photoData = [];
  for (var i = 0; i < 1000; i++) {
    for (var j = 0; j < 6; j++) {
      var date = JSON.stringify(faker.date.between('2010-02-26', '2018-01-04')).substr(1, 10);
      var month = months[date.substring(5,7)];
      var year = date.substring(0,4);
      var day = date.substring(8,10);
      var newDate = month + ' ' + day + ', ' + year; 
      photoData.push([photos[randomizeInt(photos.length - 1)], newDate, faker.random.words(), randomizeInt(1000), i + 1]);		
    }
  }
  return photoData;
};

stringify(createMillionPhotoSets(), (err, output) => {
  if (err) throw err;
  fs.writeFile('photos.csv', output, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
});

