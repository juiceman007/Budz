	var autoIndex = 0;
autoShow();

function autoShow() {
		var j;
		var auto = document.getElementsByClassName("image-slide");
		var autoDots = document.getElementsByClassName("dot");
		for (j=0; j < auto.length; j++){
			auto[j].style.display = "none";
		}
		autoIndex++;
		if (autoIndex > auto.length) {autoIndex = 1}
		for (j=0; j < autoDots.length; j++){
			autoDots[j].className.replace = (" active", "");
		}
		auto[autoIndex-1].style.display = "block";
		autoDots[autoIndex-1].className += " active;"
		setTimeout(autoShow, 3000); // change slide every 3 seconds
	}