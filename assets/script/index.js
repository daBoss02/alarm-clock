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
const setAlarm = select('.set-alarm');
const audio = new Audio('./assets/audio/alarm.wav');
const clock = select('.clock')
let time;
let alarm;
let second;

function currentTime() {
  let current = new Date(); 
  let hour = current.getHours();
  let minute = current.getMinutes();
  second = current.getSeconds();

  hour = hour.toString().padStart(2, '0');
  minute = minute.toString().padStart(2, '0');
  second = second.toString().padStart(2, '0');

  let t = hour + ":" + minute + ":" + second;
  time = hour.toString() + minute.toString();

  output.innerText = t; 
  let keepCurrent = setTimeout(function(){ currentTime() }, 1000);
  
}
currentTime();

function isTime(time) {
  if (time.length == 4 && time >= 0 && time < 2400 && input.value.includes(':')) {
    alarmTime.innerHTML = ` ${input.value}`;
    alarmTime.style.marginLeft = '6px';
  } else {
    alert('Please input a time (00:00)')
  }
}

onEvent('click', setAlarm, () => {
  inputArray = input.value.split(':');
  alarm = inputArray.join('');
  isTime(alarm)
  input.value = '';
})
function threeAlarm() {
  audio.play();

  setTimeout(function() {
    audio.play();
    console.log('one');
  }, 2000);

  setTimeout(function() {
    audio.play()
    console.log('two')
  }, 4000);

  clock.style.backgroundColor = 'var(--app-red-hover)';
  setTimeout(function() {
    clock.style.backgroundColor = '#050036';
  }, 1000);
  setTimeout(function() {
    clock.style.backgroundColor = 'var(--app-red-hover)';
  }, 2000);
  setTimeout(function() {
    clock.style.backgroundColor = '#050036';
  }, 3000);
  setTimeout(function() {
    clock.style.backgroundColor = 'var(--app-red-hover)';
  }, 4000);
  setTimeout(function() {
    clock.style.backgroundColor = '#050036';
  }, 5000);
  
}
function alarmOn() {
  if (alarm == time && second == 0) {
    threeAlarm()
  }
  let keepCurrent = setTimeout(function(){ alarmOn() }, 1000);
}
alarmOn()