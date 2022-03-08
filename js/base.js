var Pathname = {
	normalize: (x) => {
		return (x === "/" ? x : x.replace(/\/$/, ""))
	},

	basename: (x) => {
		return (x === "/" ? x : x.replace(/^.+\//,""))
	},

	dirname: (x) => {
		return (x === "/" ? x : x.replace(/[^/]+$/,""));
	},
}
