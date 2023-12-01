"use strict";
// const showCountdown = document.getElementById('countdown');
const bgImg = document.getElementById('background-img');

function runCountdown() {
	const today = new Date();
	const currentYear = today.getFullYear();
	const newYear = new Date(currentYear + 1, 0, 1);
	const daysDiff = (newYear.getTime() - today.getTime()) / (1000 * 3600 * 24);
	showCountdown(daysDiff);
	checkCurrentSeason(today, currentYear);
	setTimeout(runCountdown, 1000);
}

function formatTime(x) {
	return ('0' + x).slice(-2);
}

function showCountdown(daysDiff) {
	const countdownTime = [
		Math.floor(daysDiff), /* days */
		formatTime(Math.floor((daysDiff * 24) % 24)), /* hours */
		formatTime(Math.floor((daysDiff * 24 * 60) % 60)), /* minutes */
		formatTime(Math.floor((daysDiff * 24 * 3600) % 60)) /* seconds */
	];

	document.querySelectorAll('.show-timer').forEach((element, i) => element.innerText = countdownTime[i]);
}

/* Change colors and background image according to season */
function checkCurrentSeason(today, currentYear) {
	if (today > new Date(`Aug 22, ${currentYear}`) && today <= new Date(`Dec 21, ${currentYear}`)) {
		/* Spring */
		bgImg.style.backgroundImage = 'url(./images/spring.jpg)';
		document.body.style.backgroundColor = 'rgb(233, 180, 76)';
		document.getElementsByTagName('h1')[1].style.color = 'rgb(255, 206, 108)';

	} else if (today < new Date(`Mar 21, ${currentYear}`)) {
		/* Summer */
		bgImg.style.backgroundImage = 'url(./images/summer.jpg)';
		document.body.style.backgroundColor = 'rgb(252, 158, 79)';
		document.getElementsByTagName('h1')[1].style.color = 'rgb(163, 192, 245)';
	} else if (today <= new Date(`May 22, ${currentYear}`)) {
		/* Fall */
		bgImg.style.backgroundImage = 'url(./images/fall.jpg)';
		document.body.style.backgroundColor = 'rgb(155, 41, 21)';
		document.getElementsByTagName('h1')[1].style.color = 'rgb(241, 157, 127)';

	} else if (today <= new Date(`Aug 22, ${currentYear}`)) {
		/* Winter */
		bgImg.style.backgroundImage = 'url(./images/winter.jpg)';
		document.body.style.backgroundColor = 'rgb(87, 87, 87)';
		document.getElementsByTagName('h1')[1].style.color = 'rgb(190, 187, 187)';
		
	}
}

window.addEventListener('load', runCountdown);