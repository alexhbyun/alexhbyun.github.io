$(document).ready(function() {
	$("#scores-icon").mouseenter(function() {
		$("#scores-icon img").css("left", "calc(25% - (250px / 2) - 25px)");
		$("#scores-icon img").css("top", "340px");
		$("#scores-icon img").css("width", "300px");
	});
	$("#scores-icon").mouseleave(function() {
		$("#scores-icon img").css("left", "calc(25% - (250px / 2))");
		$("#scores-icon img").css("top", "350px");
		$("#scores-icon img").css("width", "250px");
	});
	$("#bracket-icon").mouseenter(function() {
		$("#bracket-icon img").css("left", "calc(50% - (250px / 2) - 25px)");
		$("#bracket-icon img").css("top", "340px");
		$("#bracket-icon img").css("width", "300px");
	});
	$("#bracket-icon").mouseleave(function() {
		$("#bracket-icon img").css("left", "calc(50% - (250px / 2))");
		$("#bracket-icon img").css("top", "350px");
		$("#bracket-icon img").css("width", "250px");
	});
	$("#schedule-icon").hover(function() {
		$("#upcoming img").show();
		setTimeout(function() {
        $("#upcoming img").css("top", "250px");
        }, 100);
	});
});