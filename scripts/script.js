$(function(){
	var end = new Date('09/11/2015 07:00 PM');
	var second = 1000;
	var minute = second * 60;
	var hour = minute * 60;
	var day = hour * 24;
	var week = day * 7;
	var timer;

	function countdown(){
		var now = new Date();
		var distance = end - now;

		// if(distance < 0){
		// 	clearInterval(timer);
		// }
		var weeks = Math.floor(distance / week);
		var days = Math.floor((distance % week) / day);
		var hours = Math.floor((distance % day) / 	hour);
		var minutes = Math.floor((distance % hour) / 	minute);
		var seconds = Math.floor((distance % minute) / second);
		$('.weeks').html(weeks);
		$('.days').html(days);
		$('.hours').html(hours);
		$('.minutes').html(minutes);
	}

	timer = setInterval(countdown, 1000);

});