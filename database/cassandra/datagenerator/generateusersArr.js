const faker = require('faker');

var userArr = [];
var avatarArr = [];
const run = () => {
  for (var i = 0; i < 50; i ++ ) {
    var name = faker.name.findName().replace(',', '');
    var space = name.indexOf(' ');
    var str = name.substr(0, space + 2);
    var newName = str.split('');
    newName.push('.');
    newName = newName.join('');
    userArr.push(`'${newName}'`);
    avatarArr.push(`'${faker.image.avatar()}'`);
  }
};

run();

console.log(`[${avatarArr}]`);
