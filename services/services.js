var buttons = document.querySelectorAll("header.services div.service");
var content = document.querySelectorAll("section.services section.service");

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
	
	for(var i=0; i<content.length; i++) {
		var c = content.item(i);
		if(c.id == bid)
			c.style.display = "block";
		else
			c.style.display = "none";
	}
}

for(var i=0; i<buttons.length; i++) {
	buttons.item(i).addEventListener("click", buttonFunc);
}
