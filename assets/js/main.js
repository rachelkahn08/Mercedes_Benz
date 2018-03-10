console.log("Hello World from main.js!");


//Infowindows swipping in from sides
// $(".explore").waypoint(function () {
// 	var myVideo = document.getElementById("explore__video");
// 	myVideo.play();
// }, {
// 	offset: '40%',
// 	triggerOnce: true,
// })

// function getvals(per) {
// 	vals = [1.35, 1.45, 1.55, 1.65, 1.75, 1.85, 1.95, 2.05, 2.15];
// 	bleh = [];
// 	for (var i = 0; i < vals.length; i++) {
// 		val = vals[i]*per;
// 		val = val.toFixed(2);
// 		val = parseFloat(val);
// 		bleh.push(val);
// 	}

// 	console.log(bleh);
// }

var hamburgerMenu = document.querySelector(".hamburger__button");
hamburgerMenu.addEventListener("click", function () {
	console.log("clicked");
	let hiddenNav = document.querySelector(".header__nav");
	hiddenNav.classList.toggle("hidden");
	TweenMax.staggerFromTo(".header__nav_items", .5, {height: 0}, {height: "5vh"});
})




$(".teams").waypoint(function () {
	console.log("test2");
	TweenMax.from(".teams-section__falcons", 2, {right: "-50vw"});
	console.log("test3");
	TweenMax.from(".teams-section__united", 2, {left: "-50vw", delay:5});
	console.log("test4");
}, {
	offset: '10%'
})



