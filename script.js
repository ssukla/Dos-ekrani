$(document).ready(function () {

	var loc = window.location.href+'';
	if (loc.indexOf('http://')==0){
		window.location.href = loc.replace('http://','https://');	// https redirect
	}
	
	$('body').keypress(function(e) {
	
		if (stage == 1) {	//fent a kurzor
			if(e.which == 13) { //enter
				$('#formattingWrap').show();
				timedCount();
				stage = 2;
				$('#typing').removeClass('typing');
				
			} else if(e.which == 8) { //backspace
				//str = str.substring(0, str.length - 1);
				
				$('#typing').html($('#typing').html().substring(0, $('#typing').html().length - 1)); // cut off last character
				
				
			} else if(e.which == 32) { //space
				$('#typing').html($('#typing').html() + '_')
			} else {
				$('#typing').html($('#typing').html() + String.fromCharCode(e.which))
			}
		}
