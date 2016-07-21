
// Various time units in seconds
var secondsInAMinute = 60;
var secondsInAnHour = secondsInAMinute * 60;
var secondsInADay = secondsInAnHour * 24;
var secondsInAWeek = secondsInADay * 7;

// Various DOM elements in next
var countdownTimer = document.getElementById('countdown-timer');
// document.getElementsByClassName('weeks-number');
var secondsDigit = countdownTimer.querySelector('.seconds-number');
var minutesDigit = countdownTimer.querySelector('.minutes-number');
var hoursDigit = countdownTimer.querySelector('.hours-number');
var daysDigit = countdownTimer.querySelector('.days-number');
var weeksDigit = countdownTimer.querySelector('.weeks-number');

console.log(weeksDigit);
// weeksDigit.style.display = "none";

function updateCounter(){

	// Get the current time in milliseconds since 1970 (UNIX epoch)
	var now = Date.now();
	// var rioStart = Date.parse('August 5, 2016 19:00:00');
	var rioStart = new Date('August 5, 2016 19:00').getTime();
	// Time in seconds between current moment and start of Rio 2016
	var getTimeTillRio = (rioStart - now) / 1000;

	var seconds = Math.floor(getTimeTillRio % 60);
	var minutes = Math.floor((getTimeTillRio / secondsInAMinute) % 60);
	var hours = Math.floor((getTimeTillRio / secondsInAnHour) % 24);
	var days = Math.floor((getTimeTillRio / secondsInADay) % 7);
	var weeks = Math.floor((getTimeTillRio / secondsInAWeek) % 52);

	// Set the HTML of the given unit with the new amount
	secondsDigit.innerHTML = seconds;
	minutesDigit.innerHTML = minutes;
	hoursDigit.innerHTML = hours;
	daysDigit.innerHTML = days;
	weeksDigit.innerHTML = weeks;
}

// Call the interval method every 1000 milliseconds / 1 second
var rio_ent = setInterval(updateCounter, 1000);

// For US election timer
var countdownTimer1 = document.getElementById('countdown-timer2');
var secondsDigit1 = countdownTimer1.querySelector('.seconds-number1');
var minutesDigit1 = countdownTimer1.querySelector('.minutes-number1');
var hoursDigit1 = countdownTimer1.querySelector('.hours-number1');
var daysDigit1 = countdownTimer1.querySelector('.days-number1');
var weeksDigit1 = countdownTimer1.querySelector('.weeks-number1');

function updateCounter2(){
	var now = Date.now();
	var electionStart = new Date('November 8, 2016 12:00').getTime();
	var getTimeTillElection = (electionStart - now) / 1000;

	var seconds = Math.floor(getTimeTillElection % 60);
	var minutes = Math.floor((getTimeTillElection / secondsInAMinute) % 60);
	var hours = Math.floor((getTimeTillElection / secondsInAnHour) % 24);
	var days = Math.floor((getTimeTillElection / secondsInADay) % 7);
	var weeks = Math.floor((getTimeTillElection / secondsInAWeek) % 52);

	// Set the HTML of the given unit with the new amount
	secondsDigit1.innerHTML = seconds;
	minutesDigit1.innerHTML = minutes;
	hoursDigit1.innerHTML = hours;
	daysDigit1.innerHTML = days;
	weeksDigit1.innerHTML = weeks;

}

var canada_ent = setInterval(updateCounter2, 1000);

function pauseRio(){
	clearInterval(rio_ent);
}

function pauseCanada(){
	clearInterval(canada_ent);
}


var toggle = 1;

function showRio(){
	if(toggle == 1){	
		toggle = 0;
		countdownTimer.style.display = "none";
		countdownTimer1.style.display = "block";
	}else{
		toggle = 1;
		countdownTimer.style.display = "block";
		countdownTimer1.style.display = "none";
	}
}

var toggle1 = 0

function showElection(){
if(toggle == 1){	
		toggle = 0;
		countdownTimer1.style.display = "none";
		countdownTimer.style.display = "block";
	}else{
		toggle = 1;
		countdownTimer1.style.display = "block";
		countdownTimer.style.display = "none";
	}
}

