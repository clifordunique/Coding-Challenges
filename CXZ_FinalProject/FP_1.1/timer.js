let timer;
let total;
let timeLeft = 4110;
let interval;
let result;

function setup() {
	noCanvas();
	timer = select("#timer");
	total = select("#total");
	result = select("#result");
	total.html(timeLeft);
	interval = setInterval(timeIt, 1000);
}

function timeIt() {
	let hr = floor(timeLeft / 3600);
	if(timeLeft > 3600) {
		mn = floor((timeLeft - 3600) / 60);
	} else {
		mn = floor(timeLeft / 60);
	}
	let sec = timeLeft % 60;

	timeLeft--;
	timer.html(nf(hr, 2) + ":" + nf(mn, 2) + ":" + nf(sec, 2));
	console.log(timeLeft);

	if(timeLeft < 0) {
		console.log("GameOver");
		clearInterval(interval);
		result.html("GAME OVER");
	}
}
