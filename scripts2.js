// Various time units in seconds
var secondsInAMinute = 60;
var secondsInAnHour = secondsInAMinute * 60;
var secondsInADay = secondsInAnHour * 24;
var secondsInAWeek = secondsInADay * 7;
var secondsInAMonth = secondsInAWeek * 12;

// Various DOM elements in next
var presentTimer = document.getElementById('presentTimer');
// document.getElementsByClassName('weeks-number');
var monthDigit = presentTimer.querySelector('.month-number1');
var dayDigit = presentTimer.querySelector('.day-number1');
var yearDigit = presentTimer.querySelector('.year-number1');
var hourDigit = presentTimer.querySelector('.hour-number1');
var minuteDigit = presentTimer.querySelector('.minute-number1');

function updatePresentTimer(){

	var current = new Date()
	var month = current.getMonth() + 1;
	var day = current.getDate();
	var year = current.getFullYear();
	var hour = current.getHours();
	var minute = current.getMinutes();

	// // Set the HTML of the given unit with the new amount
	monthDigit.innerHTML = month;
	dayDigit.innerHTML = day;
	yearDigit.innerHTML = year;
	hourDigit.innerHTML = hour;
	minuteDigit.innerHTML = minute;
}

// Call the interval method every 1000 milliseconds / 1 second
var pause = setInterval(updatePresentTimer, 1000);

function pausePresent(){
	clearInterval(pause);
}

function unpausePresent(){
	setInterval(updatePresentTimer, 1000);
}