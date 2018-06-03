window.addEventListener("load", function() {

	var nodes = document.querySelectorAll("[data-picture] > *");

	for(var i = 0; i < nodes.length; i++) {
	
		nodes[i].addEventListener("click", function() {
			
			var search = this.parentNode.querySelectorAll("[data-picture] > *");
	
			for(var n = 0; n < search.length; n++) {

				if(this != search[n]) {
					search[n].setAttribute("data-status","");
				}
			}
	
			if(this.getAttribute("data-status") == "active") {
				this.setAttribute("data-status", "");
			} else {
				this.setAttribute("data-status", "active");
			}
		});
	}
});