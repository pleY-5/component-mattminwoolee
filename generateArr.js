
var ID = [];
var exportID = [[0,1,2,3,4,5,6,7,8,9],[1000,1001,1002,1003,1004,1005,1006,1007,1008,1009],[2000,2001,2002,2003,2004,2005,2006,2007,2008,2009],[3000,3001,3002,3003,3004,3005,3006,3007,3008,3009],[4000,4001,4002,4003,4004,4005,4006,4007,4008,4009],[5000,5001,5002,5003,5004,5005,5006,5007,5008,5009],[6000,6001,6002,6003,6004,6005,6006,6007,6008,6009],[7000,7001,7002,7003,7004,7005,7006,7007,7008,7009],[8000,8001,8002,8003,8004,8005,8006,8007,8008,8009],[9000,9001,9002,9003,9004,9005,9006,9007,9008,9009],[10000,10001,10002,10003,10004,10005,10006,10007,10008,10009],[11000,11001,11002,11003,11004,11005,11006,11007,11008,11009],[12000,12001,12002,12003,12004,12005,12006,12007,12008,12009],[13000,13001,13002,13003,13004,13005,13006,13007,13008,13009],[14000,14001,14002,14003,14004,14005,14006,14007,14008,14009],[15000,15001,15002,15003,15004,15005,15006,15007,15008,15009],[16000,16001,16002,16003,16004,16005,16006,16007,16008,16009],[17000,17001,17002,17003,17004,17005,17006,17007,17008,17009],[18000,18001,18002,18003,18004,18005,18006,18007,18008,18009],[19000,19001,19002,19003,19004,19005,19006,19007,19008,19009],[20000,20001,20002,20003,20004,20005,20006,20007,20008,20009],[21000,21001,21002,21003,21004,21005,21006,21007,21008,21009],[22000,22001,22002,22003,22004,22005,22006,22007,22008,22009],[23000,23001,23002,23003,23004,23005,23006,23007,23008,23009],[24000,24001,24002,24003,24004,24005,24006,24007,24008,24009],[25000,25001,25002,25003,25004,25005,25006,25007,25008,25009],[26000,26001,26002,26003,26004,26005,26006,26007,26008,26009],[27000,27001,27002,27003,27004,27005,27006,27007,27008,27009],[28000,28001,28002,28003,28004,28005,28006,28007,28008,28009],[29000,29001,29002,29003,29004,29005,29006,29007,29008,29009],[30000,30001,30002,30003,30004,30005,30006,30007,30008,30009],[31000,31001,31002,31003,31004,31005,31006,31007,31008,31009],[32000,32001,32002,32003,32004,32005,32006,32007,32008,32009],[33000,33001,33002,33003,33004,33005,33006,33007,33008,33009],[34000,34001,34002,34003,34004,34005,34006,34007,34008,34009],[35000,35001,35002,35003,35004,35005,35006,35007,35008,35009],[36000,36001,36002,36003,36004,36005,36006,36007,36008,36009],[37000,37001,37002,37003,37004,37005,37006,37007,37008,37009],[38000,38001,38002,38003,38004,38005,38006,38007,38008,38009],[39000,39001,39002,39003,39004,39005,39006,39007,39008,39009],[40000,40001,40002,40003,40004,40005,40006,40007,40008,40009],[41000,41001,41002,41003,41004,41005,41006,41007,41008,41009],[42000,42001,42002,42003,42004,42005,42006,42007,42008,42009],[43000,43001,43002,43003,43004,43005,43006,43007,43008,43009],[44000,44001,44002,44003,44004,44005,44006,44007,44008,44009],[45000,45001,45002,45003,45004,45005,45006,45007,45008,45009],[46000,46001,46002,46003,46004,46005,46006,46007,46008,46009],[47000,47001,47002,47003,47004,47005,47006,47007,47008,47009],[48000,48001,48002,48003,48004,48005,48006,48007,48008,48009],[49000,49001,49002,49003,49004,49005,49006,49007,49008,49009]];

// const generateIdArr = () => {
//   for (var i = 0; i < 50; i++) {
//     var initial = i * 1000;
//     var idRow = [];
//     for (var j = initial; j < initial + 10; j++ ) {
//       idRow.push(j);
//     }
//     ID.push(idRow);
//   }
//   return JSON.stringify(ID);
// };

// console.log(generateIdArr());

module.exports = {
  exportID: exportID,
};