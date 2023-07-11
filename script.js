// Code that will take the focus time,
// the relaxing time and the big relaxing time.
// And spit out the total time and the total focus time
const focustime = 25;
const relaxtime = 5;
const loopunit = 4;
const relaxunit = 3;
const bigrelaxtime = 15;
const bigloopunit = 1;

function totaltime() {
  return (
    (focustime * loopunit + relaxtime * relaxunit + bigrelaxtime) * bigloopunit
  );
}

function realfocustime() {
  return focustime * loopunit * bigloopunit;
}

function timeconverter(num) {
  let hours = Math.floor(num / 60);
  let minutes = num % 60;
  return hours + ":" + minutes + "0";
}

const totaltimeresult = timeconverter(totaltime());
const totalfocustime = timeconverter(realfocustime());

if (realfocustime() > 200) {
  console.log("You have reached your goal!");
  console.log(totalfocustime);
  console.log(totaltimeresult);
} else {
  console.log("You haven't reached your goal!");
  console.log(totaltimeresult);
  console.log(totalfocustime);
  console.log(realfocustime());
}

const weekgoal = timeconverter(totaltime() * 6);
console.log(weekgoal);

const monthgoal = timeconverter(totaltime() * 6 * 4);
console.log(monthgoal);

const yeargoal = timeconverter(totaltime() * 6 * 4 * 12);
console.log(yeargoal);
console.log(totaltime() * 6 * 4 * 12);
