function showMe() {
	var i;
	for (i = 0; i < 4; i++) {
		document.getElementById("hidden").id = "home-article";
		if (document.getElementById("hidden") === null) {
			document.getElementById("showMore").style.display = "none";
		}
	}
}
