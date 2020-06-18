// dependencies
import moment from "moment-timezone";
// modules
import { weather } from "./modules/fetch.js";
import { forecast } from "./modules/forecast.js";
import { locale } from "./modules/locale.js";

const data = weather("melbourne")
const localeDiv = document.querySelector(".locale");
const forecastDiv = document.querySelector(".forecast");
const localTime = moment
  .tz(`${data.location["timezone_id"]}`)
  .format("LT");


forecast(data, forecastDiv);
locale(data, localeDiv, localTime);

// // DEVELOPMENT
// Object.keys(data).forEach((i) => {
//   console.log(i);
//   Object.entries(data[i]).forEach((keyVal) => {
//     console.log(keyVal);
//   });
// });
