//web mercator
//Formulas : https://en.wikipedia.org/wiki/Web_Mercator
//earthquake : https://www.usgs.gov/
//file : https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv
var mapimg;

var clat = 0;//center lat
var clon = 0;

//shanghai : 31.2304N 121.4737E
var lat = 31.2304;//positive
var lon = 121.4737;//if its west number should be negative
var zoom = 1;

function preload() {
	mapimg = loadImage("https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1IjoiemhleXVhbnpob3UiLCJhIjoiY2prOHVkdjBwMjR2dTNsdGg3ejNuMTF0ciJ9.PpoIVIVPQEM4XvZbu6nM0w");
	earthquakes = loadStrings("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv");
}

//https://en.wikipedia.org/wiki/Web_Mercator
//-=-=-=-=-=-=-=-=-=-=Formulsa-=-=-=-=-=-=-=-=-=-=
function mercX(lon) {//according to the formulas 1
	lon = radians(lon);
	var a = (256 / PI) * pow(2, zoom);
	var b = lon + PI;
	return a * b;
}

function mercY(lat) {
	lat = radians(lat);
	var a = (256 / PI) * pow(2, zoom);
	var b = tan(PI /4 + lat / 2);
	var c = PI - log(b);
	return a * c;
}
//-=-=-=-=-=-=-=-=-=-=Formulsa-=-=-=-=-=-=-=-=-=-=

function setup() {
	createCanvas(1024, 512);
	translate(width / 2, height / 2);
	imageMode(CENTER);//because all points would be relative to the center long and lat
	image(mapimg, 0, 0);

	var cx = mercX(clon);
	var cy = mercY(clat);
	console.log(cx);
	console.log(cy);

	for(let i = 0; i < earthquakes.length; i++) {
		var data = earthquakes[i].split(/,/);
		//console.log(data);
		var lat = data[1];
		var lon = data[2];
		var mag = data[4];

		var x = mercX(lon) - cx;
		var y = mercY(lat) - cy;
		
		mag = pow(10, mag);
		mag = sqrt(mag);

		var magmax = sqrt(pow(10, 10));

		var d = map(mag, 0, magmax, 0, 180);
		fill(255, 0, 255, 100);
		noStroke();
		ellipse(x, y, d, d);

	}

	// var x = mercX(lon) - cx;
	// var y = mercY(lat) - cy;

	// fill(255, 0, 255, 200);
	// ellipse(x, y, 10, 10);

}

