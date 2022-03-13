
$(document).ready(function(){
	$("#logojs").hover(function(){
        $("#logojs").css("height", "100px");
		$("#logojs").css("width", "100px");
		}, function(){
			$("#logojs").css("width", "80px");
            $("#logojs").css("height", "80px");
		});
});

$(document).ready(function(){
	$("#rejs").hover(function(){
        $("#rejs").css("font-size", "25px");
		}, function(){
			$("#rejs").css("font-size", "");
		});
});

$(document).ready(function(){
	$("#injs").hover(function(){
        $("#injs").css("font-size", "20px");
		}, function(){
			$("#injs").css("font-size", "");
		});
});

$(document).ready(function(){
	$("#conjs").hover(function(){
        $("#conjs").css("font-size", "25px");
		}, function(){
			$("#conjs").css("font-size", "");
		});
});

$(document).ready(function(){
	$("#carjs").hover(function(){
        $("#carjs").css("font-size", "25px");
		}, function(){
			$("#carjs").css("font-size", "");
		});
});


$(document).ready(function(){
	$("#video").hover(function(){
		$("#video").css("border-style", "solid");
        $("#video").css("border-color", "black");
		$("#video").css("background-color", "black");
		}, function(){
			$("#video").css("border-style", "");
			$("#video").css("border-color", "");
			$("#video").css("background-color", "");
		});
});