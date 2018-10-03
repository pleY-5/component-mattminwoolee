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

var users = ['Ms. V.','Aida S.','Hellen B.','Elmer W.','Johnathan Y.','Annabell L.','Reginald H.','Ismael W.','Palma S.','Ms. D.','Raul E.','Keely H.','Robyn H.','Anthony H.','Paxton R.','Charles D.','Sterling C.','Caroline G.','Neva L.','Yessenia B.','Brianne S.','Cruz K.','Newton G.','Greg C.','Heber K.','Augustine B.','Luz W.','Osvaldo K.','Marcus O.','Tristian W.','Ramona J.','Silas S.','Mckayla G.','Maribel H.','Ada B.','Giovanni B.','Cyril S.','Pattie P.','Hilton S.','Vada W.','German K.','Hayley P.','Carlotta H.','Elliot V.','Silas H.','Hilda F.','Krystel L.','Dovie B.','Kade K.','Anita H.','Michaela W.','Noe P.','Stefan L.','Ransom T.','Alysa M.','Corbin F.','Mya C.','Jose F.','Zora H.','Favian W.','Cielo O.','Mavis L.','Rose C.','Elody B.','Enola B.','Edyth C.','Ms. R.','Shyann R.','Kayli C.','Vivien O.','Gino G.','Glenna R.','Maci M.','Elda K.','Mr. C.','Kaylah B.','Mrs. J.','Mr. A.','Kyleigh C.','Cassidy L.','Elmore S.','Zora S.','Amos P.','Maxine L.','Leslie K.','Laurence R.','Graham Z.','Destiney B.','Daren B.','Lenore W.','Sibyl H.','Lilian G.','Harmony J.','Miss M.','Bernie V.','Ryder K.','Kaia R.','Mariano W.','Taryn W.','Favian O.'];
var avatar = ['https://s3.amazonaws.com/uifaces/faces/twitter/dmackerman/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/g3d/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/abdots/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/laasli/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/lewisainslie/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/katiemdaly/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/uxpiper/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/romanbulah/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/bargaorobalo/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/lawlbwoy/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/adamsxu/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/prrstn/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/airskylar/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/strikewan/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/iqbalperkasa/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/areus/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/edkf/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/mylesb/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/boxmodel/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/mr_shiznit/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/nbirckel/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/nicoleglynn/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/ganserene/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/thimo_cz/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/martip07/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/tgormtx/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/andreas_pr/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/mylesb/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/brunodesign1206/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/xravil/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/the_purplebunny/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/r_garcia/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/chrismj83/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/wikiziner/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/teylorfeliz/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/joshaustin/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/muringa/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/kylefrost/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/jacobbennett/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/kennyadr/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/gkaam/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/ah_lice/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/cdharrison/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/strikewan/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/mikemai2awesome/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/kaelifa/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/hellofeverrrr/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/mrjamesnoble/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/geneseleznev/128.jpg','https://s3.amazonaws.com/uifaces/faces/twitter/krystalfister/128.jpg'];

const createNSets = (n, round = 0) => {
  var numUsers = users.length;
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
  } else if ( n === 20 ) {
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