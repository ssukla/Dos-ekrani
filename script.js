$(document).ready(function () {

	var loc = window.location.href+'';
	if (loc.indexOf('http://')==0){
		window.location.href = loc.replace('http://','https://');	// https redirect
	}
	
		if (stage == 3) {
			if(e.which == 49) { 
				$('#intro').hide();
				$('#formattingWrap').hide();
				window.location.replace("https://ssukla.github.io/windows-xp/xp-simulator.html");

				
			} else if(e.which == 50) {
				$('#intro').hide();
				$('#formattingWrap').hide();
				window.location.replace("www.google.com");
			} else {
				$('#typing2').html(String.fromCharCode(e.which))
			}			
		}

	});
});


var percent = 0;	//max 20
var i;
var stage = 1;
function timedCount(){
	percent++;
    if (percent <= 20) {
		var seg ="";
		for (i = 0; i <= 20; i++) {
			if (i <= percent) {
				seg = seg + '&#9608;';
			} else {
				seg = seg + '&#9617;';
			}
			$('#formatting').html(seg);
		}
		$('#percent').html(percent*5-(Math.floor(Math.random() * 5) + 1) );
		t = setTimeout("timedCount()",(300 + (Math.floor(Math.random() * 800) + 1)));
	} else {
		$('#percent').html('100');
		$('#formatComplete').show();
		stage = 3;
	}
}
