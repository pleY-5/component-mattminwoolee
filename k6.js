import http from 'k6/http';
import { Trend } from "k6/metrics";
import { sleep } from "k6";

var myTrend = new Trend("duration");

export let options = {
  vus: 400,
  duration: "30s"
};

var getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default function() {
  var res = http.get(`http://localhost:3001/api/photos/${getRandomInt(9000000,10000000)}/restaurants`);
  myTrend.add(res.timings.duration);
  sleep(0.001);
}
