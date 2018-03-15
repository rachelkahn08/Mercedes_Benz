
let running = false;
let resizing = false;

hamburger.addEventListener("click", function () {

	let open = function() {
		running = true;
		headerNav.classList.remove('hidden');
		TweenMax.staggerTo(".header__nav_items", 
			.5, {
				minHeight: '2rem',
			}, 0, function() { running = false });
	}

	let close = function() {
		running = true;
		function hideNav() {
			headerNav.classList.add('hidden');
			running = false;
		}

		TweenMax.staggerTo(".header__nav_items", 
			.5, {
				minHeight: 0,
			}, 0);

		setTimeout(hideNav, 220);
	}

	return running
		? null 
		: headerNav.classList.contains('hidden')
		? open()
		: close();
	
});

const listSlide = (list) => {
	console.log('wow');
	console.log(list);

	TweenMax.staggerFrom(list, 0.2, {
		left: '+=100vw'
	}, 0.1);
}

$('.news').waypoint(function(direction) {
	console.log('waow');
	listSlide(document.getElementById('news').children); 
},{
	offset: '100%',
});




// $(".teams").waypoint(function () {
// 	console.log("test2");
// 	TweenMax.from(".teams-section__falcons", 2, {right: "-50vw"});
// 	console.log("test3");
// 	TweenMax.from(".teams-section__united", 2, {left: "-50vw", delay:5});
// 	console.log("test4");
// }, {
// 	offset: '10%'
// })



