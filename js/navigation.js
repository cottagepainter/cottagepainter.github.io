class Element {
	constructor(id) {
		this.id = id;
		this.html = document.getElementById(id);
	}
}

class Menu extends Element {
	constructor(id) {
		super(id);
	}

	get location() {
		return Pathname.normalize(window.location.pathname)
	}

	get links() {
		return Array.from(this.html.querySelectorAll("a"))
	}

	get hrefs() {
		return this.links.map(x => { return Pathname.normalize(x.pathname) })
	}

	get position() {
		return this.hrefs.findIndex(x => { return this.location.startsWith(x) })
	}

	get length() {
		return this.links.length
	}

	get currentLink() {
		return this.links[this.position]
	}

	get next() {
		let x = this.links[this.position + 1];
		return (x ? x : this.links[this.length-1])
	}

	get previous() {
		let x = this.links[this.position - 1];
		return (x ? x : Pathname.dirname(this.hrefs[0]))
	}
}

var Link = { 
	activate: (e) => {
		if(Navbar.location != "/free-estimate") {
    		e.style.borderRadius = "4px";
    		e.style.padding = "0 0.6rem";
			e.style.paddingBottom = "0.2rem";
    		e.style.backgroundColor = Theme.bg_color_inverted;
    		e.style.color = Theme.fg_color_inverted;
		} else {
    		e.style.backgroundColor = Theme.bg_color_inverted;
    		e.style.color = Theme.fg_color_inverted;
		}
	}
}

var Navbar = new Menu("nav-links");
if(Navbar.currentLink) {
	Link.activate(Navbar.currentLink);
}

