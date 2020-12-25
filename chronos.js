const monthsLong = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const monthsShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const weekDaysLong = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const weekDaysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function TConv24(time24) {
  var ts = time24;
  var H = +ts.substr(0, 2);
  var h = H % 12 || 12;
  h = h < 10 ? "0" + h : h;
  var ampm = H < 12 ? " AM" : " PM";
  if (ts.split(":").length == 2) {
    ts = (h + ts.substr(2, 6)).trim() + ampm;
  } else if (ts.split(":").length == 3) {
    ts = (h + ts.substr(2, 6)).trim() + ampm;
  }
  return ts;
}
function tConv24(time24) {
  var ts = time24;
  var H = +ts.substr(0, 2);
  var h = H % 12 || 12;
  h = h < 10 ? "0" + h : h;
  var ampm = H < 12 ? " am" : " pm";
  if (ts.split(":").length == 2) {
    ts = (h + ts.substr(2, 6)).trim() + ampm;
  } else if (ts.split(":").length == 3) {
    ts = (h + ts.substr(2, 6)).trim() + ampm;
  }
  return ts;
}

const format = (options) => {
  let formatData = options.split("-");
  var date = new Date();
  let chronos = "";
  formatData.forEach((section) => {
    if (section.includes(":")) {
      let chronosTime = [];
      let timeString = "";
      let formatTime = section.split(":");
      if (formatTime[formatTime.length - 1].includes('CC')) {
        formatTime.forEach((timeSec) => {
          switch (timeSec) {
            case "hh":
              chronosTime.push(date.getHours());
              break;
            case "mm":
              chronosTime.push(date.getMinutes());
              break;
            case "ss":
              chronosTime.push(date.getSeconds());
              break;
            default:
          }
        });
        for (i = 0; i < chronosTime.length; i++) {
          if (i === chronosTime.length - 1) {
            timeString += `${chronosTime[i]} `;
          } else {
            timeString += `${chronosTime[i]}:`;
          }
        }
        if(formatTime[formatTime.length - 1].includes(',')){
        chronos += `${TConv24(timeString)}, `;
        }
        else{
          chronos += `${TConv24(timeString)} `;
        }
      } else if (formatTime[formatTime.length - 1].includes('cc')) {
        formatTime.forEach((timeSec) => {
          switch (timeSec) {
            case "hh":
              chronosTime.push(date.getHours());
              break;
            case "mm":
              chronosTime.push(date.getMinutes());
              break;
            case "ss":
              chronosTime.push(date.getSeconds());
              break;
            default:
          }
        });
        for (i = 0; i < chronosTime.length; i++) {
          if (i === chronosTime.length - 1) {
            timeString += `${chronosTime[i]} `;
          } else {
            timeString += `${chronosTime[i]}:`;
          }
        }
        if(formatTime[formatTime.length - 1].includes(',')){
          chronos += `${tConv24(timeString)}, `;
          }
          else{
            chronos += `${tConv24(timeString)} `;
          }
      } else {
        formatTime.forEach((timeSec) => {
          switch (timeSec) {
            case "hh":
              chronosTime.push(date.getHours());
              break;
            case "mm":
              chronosTime.push(date.getMinutes());
              break;
            case "ss":
              chronosTime.push(date.getSeconds());
              break;
            default:
          }
        });
        for (i = 0; i < chronosTime.length; i++) {
          if (i === chronosTime.length - 1) {
            timeString += `${chronosTime[i]} `;
          } else {
            timeString += `${chronosTime[i]}:`;
          }
        }
        chronos += timeString;
      }
    }

    switch (section) {
      case "yyyy":
        chronos += date.getFullYear() + " ";
        break;
      case "yy":
        chronos += (date.getFullYear() % 100) + " ";
        break;
      case "Mmm":
        chronos += monthsLong[date.getMonth()] + " ";
        break;
      case "mmm":
        chronos += monthsLong[date.getMonth()].toLowerCase() + " ";
        break;
      case "MMM":
        chronos += monthsLong[date.getMonth()].toUpperCase() + " ";
        break;
      case "Www":
        chronos += weekDaysLong[date.getDay()] + " ";
        break;
      case "www":
        chronos += weekDaysLong[date.getDay()].toLowerCase() + " ";
        break;
      case "WWW":
        chronos += weekDaysLong[date.getDay()].toUpperCase() + " ";
        break;
      case "Mm":
        chronos += monthsShort[date.getMonth()] + " ";
        break;
      case "mm":
        chronos += monthsShort[date.getMonth()].toLowerCase() + " ";
        break;
      case "MM":
        chronos += monthsShort[date.getMonth()].toUpperCase() + " ";
        break;
      case "Ww":
        chronos += weekDaysShort[date.getDay()] + " ";
        break;
      case "ww":
        chronos += weekDaysShort[date.getDay()].toLowerCase() + " ";
        break;
      case "WW":
        chronos += weekDaysShort[date.getDay()].toUpperCase() + " ";
        break;
      case "dd":
        chronos += date.getDate() + " ";
        break;
      case "ddd":
        let suff = "";
        if (date.getDate() % 10 == 1) {
          suff = "st";
        } else if (date.getDate() % 10 == 2) {
          suff = "nd";
        } else if (date.getDate() % 10 == 3) {
          suff = "rd";
        } else {
          suff = "th";
        }
        chronos += `${date.getDate() + suff} `;
        break;
      case "dddf":
        let sufff = "";
        if (date.getDate() % 10 == 1) {
          sufff = "st";
        } else if (date.getDate() % 10 == 2) {
          sufff = "nd";
        } else if (date.getDate() % 10 == 3) {
          sufff = "rd";
        } else {
          sufff = "th";
        }
        chronos += `${date.getDate() + sufff} of `;
        break;
      case "yyyy,":
        chronos += date.getFullYear() + ", ";
        break;
      case "yy,":
        chronos += (date.getFullYear() % 100) + ", ";
        break;
      case "Mmm,":
        chronos += monthsLong[date.getMonth()] + ", ";
        break;
      case "mmm,":
        chronos += monthsLong[date.getMonth()].toLowerCase() + ", ";
        break;
      case "MMM,":
        chronos += monthsLong[date.getMonth()].toUpperCase() + ", ";
        break;
      case "Www,":
        chronos += weekDaysLong[date.getDay()] + ", ";
        break;
      case "www,":
        chronos += weekDaysLong[date.getDay()].toLowerCase() + ", ";
        break;
      case "WWW,":
        chronos += weekDaysLong[date.getDay()].toUpperCase() + ", ";
        break;
      case "Mm,":
        chronos += monthsShort[date.getMonth()] + ", ";
        break;
      case "mm,":
        chronos += monthsShort[date.getMonth()].toLowerCase() + ", ";
        break;
      case "MM,":
        chronos += monthsShort[date.getMonth()].toUpperCase() + ", ";
        break;
      case "Ww,":
        chronos += weekDaysShort[date.getDay()] + ", ";
        break;
      case "ww,":
        chronos += weekDaysShort[date.getDay()].toLowerCase() + ", ";
        break;
      case "WW,":
        chronos += weekDaysShort[date.getDay()].toUpperCase() + ", ";
        break;
      case "dd,":
        chronos += date.getDate() + " ";
        break;
      case "ddd,":
        let sufF = "";
        if (date.getDate() % 10 == 1) {
          sufF = "st";
        } else if (date.getDate() % 10 == 2) {
          sufF = "nd";
        } else if (date.getDate() % 10 == 3) {
          sufF = "rd";
        } else {
          sufF = "th";
        }
        chronos += `${date.getDate() + sufF}, `;
        break;
      default:
    }
  });
  console.log(chronos.trim());
};

format("hh:mm:ss:cc,-dddf-Mmm,-yyyy");
module.exports.format = format;
