var buttons = document.querySelectorAll("#about-header button");
var content = document.querySelectorAll("#about-content section");

function activateButton(b) {
	b.style.borderBottom = "5px solid #212121";
	b.style.fontWeight = "bold";
}

function deactivateButton(b) {
	b.style.borderBottom = "none";
	b.style.fontWeight = "normal";
}

function buttonFunc(e) {
	var bid = e.target.id;
	if(!bid) return

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
