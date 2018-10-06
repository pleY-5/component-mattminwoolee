const fs = require('fs');
var csv = require("fast-csv");
const faker = require('faker');

var randomizeInt = (int) => {
  return 1 + Math.floor(Math.random() * int);
};

const createNSets = (n, round = 0) => {
  var dataEntry = '';
  var initial = n * round;
  var index = initial;
  var end = n * (round + 1);
  for (var i = initial; i < end; i++ ) {    
    index++;
    dataEntry = dataEntry + `${index}` + ',' + `${users[randomizeInt(numUsers)]}` + ',' + `${isElite()}` + ',' + `${randomizeInt(1300)}` + ',' + `${randomizeInt(300)}` + ',' + `${avatar[randomizeInt(avatar.length)]}` + '\n';
  }
  return dataEntry;
};

var t0;
var t1;
const generateCSVDataSets = (n = 0) => {
  console.log(n);
  if ( n === 0) {
    t0 = Date.now();
    fs.writeFile(`users${n}.csv`, createNSets(500000, n), (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
      generateCSVDataSets(n + 1);
    });
  } else if ( n === 1 ) {
    t1 = Date.now();
    console.log("Operation took " + (t1 - t0) + " milliseconds.");
    return;
  } else {
    fs.writeFile(`users${n}.csv`, createNSets(500000, n), (err) => {
      if (err) throw err;
      console.log('The file has been appended!');
      generateCSVDataSets(n + 1);
    });
  }
};

generateCSVDataSets();