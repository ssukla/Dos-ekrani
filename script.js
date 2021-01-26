$('body').keypress(function(e) {
				if (stage == 3) {
			if(e.which == 13) { 
				$('#intro').hide();
				$('#formattingWrap').hide();
				window.location.replace("https://ssukla.github.io/windows-xp/xp-simulator.html");
			} else if(e.which == 8) { 
			}			
		}

	});
});
