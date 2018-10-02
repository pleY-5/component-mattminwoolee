const faker = require('faker');
const stringify = require('csv-stringify');
const fs = require('fs');

var randomizeInt = (int) => Math.floor(Math.random() * int) + 1;

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
const createNSets = (n, round = 0) => {
  var NumberOfPhotos = 60000000; 
  var letter = letters[round];
  var dataEntry = '';
  var initial = n * round;
  var end = n * (round + 1);
  for (var i = initial; i < end; i++ ) {    
    var photoArr = [randomizeInt(NumberOfPhotos), randomizeInt(NumberOfPhotos), randomizeInt(NumberOfPhotos), randomizeInt(NumberOfPhotos), randomizeInt(NumberOfPhotos), randomizeInt(NumberOfPhotos)];
    dataEntry = dataEntry + `TuLan${i + 1}${letter}` + ',' + `"[${photoArr}]"` + '\n';
  }
  return dataEntry;
};

var t0;
var t1;
const generateCSVDataSets = (n = 0) => {
  console.log(n);
  if ( n === 0) {
    t0 = Date.now();
    fs.writeFile(`restaurants${n}.csv`, createNSets(500000, 0), (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
      generateCSVDataSets(n + 1);
    });
  } else if ( n === 20 ) {
    t1 = Date.now();
    console.log("Operation took " + (t1 - t0) + " milliseconds.");
    return;
  } else {
    fs.writeFile(`restaurants${n}.csv`, createNSets(500000, n), (err) => {
      if (err) throw err;
      console.log('The file has been appended!');
      generateCSVDataSets(n + 1);
    });
  }
};

generateCSVDataSets();
