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
