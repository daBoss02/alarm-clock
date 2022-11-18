'use-strict';

/*
  Seth Vandenbos

  Alarm Clock
*/

// Utility Functions
function onEvent(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
  return parent.querySelector(selector);
}

function selectAll(selector, parent = document) {
  return parent.querySelectorAll(selector);
}

const output = select('.current-time');
const input = select('.input');
const alarmTime = select('.alarm-time');
const setAlarm = select('set-alarm');

function currentTime() {
  let current = new Date(); 
  let hour = current.getHours();
  let minute = current.getMinutes();
  let second = current.getSeconds();

  hour = hour.toString().padStart(2, '0');
  minute = minute.toString().padStart(2, '0');
  second = second.toString().padStart(2, '0');

  let time = hour + ":" + minute + ":" + second;

  output.innerText = time; 
  let keepCurrent = setTimeout(function(){ currentTime() }, 1000);
}
currentTime();