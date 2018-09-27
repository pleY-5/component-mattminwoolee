const fs = require('fs');
const stringify = require('csv-stringify');
const parse = require('csv-parser');
const faker = require('faker');


var isElite = () => {
  return !!Math.floor(Math.random() * 2);
};

var randomizeInt = (int) => {
  return 1 + Math.floor(Math.random() * int);
};

const createMillionEntries = () => {
  var users = [];
  for (var i = 0; i < 1000000; i++) {
    var name = faker.name.findName();
    var space = name.indexOf(' ');
    var str = name.substr(0, space + 2);
    var newName = str.split('');
    newName.push('.');
    newName = newName.join('');
    users.push([newName, isElite(), randomizeInt(1300), randomizeInt(300), faker.image.avatar()]);
  }
  return users;
};

const generateOneMillion = (i = 1) => {
  console.log(i);
  if ( i === 1) {
    stringify(createMillionEntries(), (err, output) => {
      if (err) throw err;
      fs.writeFile('users.csv', output, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
      generateOneMillion(i + 1);
    });
  } else if ( i > 10 ) {
    return;
  } else {
    stringify(createMillionEntries(), (err, output) => {
      if (err) throw err;
      fs.appendFile('users.csv', output, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
      generateOneMillion(i + 1);
    });
  }
};

generateOneMillion();
// const results = [];
// fs.createReadStream('userstest.csv')
//   .pipe(parse())
//   .on('userstest', results.push)
//   .on('end', () => {
//     console.log(results);
//   });


