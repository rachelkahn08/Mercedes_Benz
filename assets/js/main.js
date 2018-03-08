//console.log("Hello World from main.js!");


//Infowindows swipping in from sides
$(".explore").waypoint(function () {
	var myVideo = document.getElementById("explore__video");
	myVideo.play();
}, {
	offset: '40%',
	triggerOnce: true,
})

function getvals(per) {
	vals = [1.35, 1.45, 1.55, 1.65, 1.75, 1.85, 1.95, 2.05, 2.15];
	bleh = [];
	for (var i = 0; i < vals.length; i++) {
		val = vals[i]*per;
		val = val.toFixed(2);
		val = parseFloat(val);
		bleh.push(val);
	}

	console.log(bleh);
}