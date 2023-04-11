var buttons = document.querySelectorAll("header.services div.service");
var services = document.querySelectorAll("section.services section.service");

function isMobile() {
	var m = window.matchMedia("only screen and (max-width: 768px)");
	return m.matches;
}

function activateButton(b) {
	var text = b.querySelector("#title")
	text.style.borderBottom = "3px solid #212121";
	text.style.fontWeight = "bold";
}

function deactivateButton(b) {
	var text = b.querySelector("#title")
	text.style.borderBottom = "none";
	text.style.fontWeight = "400";
}

function buttonFunc(e) {
	var bid = e.currentTarget.id;

	for(var i=0; i<buttons.length; i++) {
		var b = buttons.item(i);
		if(b.id == bid)
			activateButton(b);
		else
			deactivateButton(b);
	}
	
	for(var i=0; i<services.length; i++) {
		var c = services.item(i);
		if(c.id == bid)
			c.style.display = "block";
		else
			c.style.display = "none";
	}
}

function showAllContent() {
    for(var i=0; i<buttons.length; i++) {
    	activateButton(buttons.item(i));
    }

    for(var i=0; i<services.length; i++) {
    	services.item(i).display = "block";
    }
}

function hideAllContent() {
    for(var i=0; i<buttons.length; i++) {
    	buttons.item(i).addEventListener("click", buttonFunc);
    }
}

if(services.length == 1) { // when only offering one service, don't hide anything
	showAllContent();
} else {
	hideAllContent();
}

