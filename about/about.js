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
	history.replaceState(null, "", "#" + bid);
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

// the purpose of this function is to allow in-section linking between tabs
// The number guarding is too allow non-section-reference links to work as normal
// sections have numeric ids...anyways its sloppy but i dont care right now.
function activateFromHash() {
	var hash = window.location.hash.replace("#", "");
	if(Number.isInteger(Number(hash))) {
		var target = document.getElementById(hash);
		if(target) {
			buttonFunc({ target: target });
		}
	} 
}

window.addEventListener("hashchange", activateFromHash);
activateFromHash();
