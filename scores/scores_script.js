$(document).ready(function() {
	$("#west").hover(function() {
		$("#east-scores img").css("right", "-2000px");
		$("#east-scores img").hide();
		$("#west").css("width", "80%");
		$("#west-title img").css("left", "calc(40% - (250px / 2)");
		$("#east-title img").css("left", "calc(90% - (250px / 2)");
		$("#east").css("width", "20%");
		$("#east-list img").css("left", "calc(89% - (250px / 2)");
		$("#west-list img").css("left", "calc(65% - (250px / 2)");
		$("#west-scores img").show();
		setTimeout(function() {
		$("#west-scores img").css("left", "calc(30% - (850px / 2)");
        }, 500);
	});
	$("#west-list").hover(function() {
		$("#east-scores img").css("right", "-2000px");
		$("#east-scores img").hide();
		$("#west").css("width", "80%");
		$("#west-title img").css("left", "calc(40% - (250px / 2)");
		$("#east-title img").css("left", "calc(90% - (250px / 2)");
		$("#east").css("width", "20%");
		$("#east-list img").css("left", "calc(89% - (250px / 2)");
		$("#west-list img").css("left", "calc(65% - (250px / 2)");
		$("#west-scores img").show();
		setTimeout(function() {
		$("#west-scores img").css("left", "calc(30% - (850px / 2)");
        }, 500);
	});
	$("#east").hover(function() {
		$("#west-scores img").css("left", "-2000px");
		$("#west-scores img").hide();
		$("#east").css("width", "80%");
		$("#east-title img").css("left", "calc(60% - (250px / 2)");
		$("#west-title img").css("left", "calc(10% - (250px / 2)");
		$("#west").css("width", "20%");
		$("#west-list img").css("left", "calc(10% - (250px / 2)");
		$("#east-list img").css("left", "calc(30% - (250px / 2)");
		$("#east-scores img").show();
		setTimeout(function() {
		$("#east-scores img").css("left", "calc(70% - (800px / 2)");
        }, 500);
	});
	$("#east-list").hover(function() {
		$("#west-scores img").css("left", "-2000px");
		$("#west-scores img").hide();
		$("#east").css("width", "80%");
		$("#east-title img").css("left", "calc(60% - (250px / 2)");
		$("#west-title img").css("left", "calc(10% - (250px / 2)");
		$("#west").css("width", "20%");
		$("#west-list img").css("left", "calc(10% - (250px / 2)");
		$("#east-list img").css("left", "calc(30% - (250px / 2)");
		$("#east-scores img").show();
		setTimeout(function() {
		$("#east-scores img").css("left", "calc(70% - (800px / 2)");
        }, 500);
	});
});