const fs = require('fs');
const stringify = require('csv-stringify');
var csv = require("fast-csv");
const faker = require('faker');


var isElite = () => {
  return Math.random() > 0.5 ? 1 : 0; // returns a boolean of truthy or falsy values
};

var randomizeInt = (int) => {
  return 1 + Math.floor(Math.random() * int);
};

const createMillionEntries = () => {
  var users = [];
  for (var i = 0; i < 10; i++) {
    var name = faker.name.findName().replace(',', '');
    var space = name.indexOf(' ');
    var str = name.substr(0, space + 2);
    var newName = str.split('');
    newName.push('.');
    newName = newName.join('');
    users.push([newName, isElite(), randomizeInt(1300), randomizeInt(300), faker.image.avatar()]);
  }
  return users;
};

const generateTenMillion = (i = 1) => {
  console.log(i);
  if ( i === 1) {
    stringify(createMillionEntries(), (err, output) => {
      if (err) throw err;
      fs.writeFile('userstest.csv', output, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
      generateTenMillion(i + 1);
    });
  } else if ( i > 10 ) {
    return;
  } else {
    stringify(createMillionEntries(), (err, output) => {
      if (err) throw err;
      fs.appendFile('userstest.csv', output, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
      generateTenMillion(i + 1);
    });
  }
};

generateTenMillion();

// var stream = fs.createReadStream('userstest.csv');
 
// var csvStream = csv()
//   .on("data", function(data){
//         console.log(data);
//   })
//   .on("end", function(){
//         console.log("done");
//   });
 
// stream.pipe(csvStream);


