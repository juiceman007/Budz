
		// initializing page number and displaying first page
	var n = 1;
	var page = document.getElementsByClassName("page");
	if (n = 1){
		document.getElementById("prevP").style.display = "none";
		page[n].style.color = "red";
	 }
	if (page[n].innerHTML === n){page[n].style.color = "red";}
	if (n > 1){document.getElementById("prevP").style.display = "block";}
	if (document.getElementById("nextPage") === null){document.getElementById("nextP").style.display = "none"; }
		
	//function for the next button
	function next(){
         document.getElementById("currentPage").id = "prevPage";
		document.getElementById("nextPage").id = "currentPage";
		page[n].style.color = "black";
		n++;
		page[n].style.color = "red";
		if (n > 1){document.getElementById("prevP").style.display = "block";}
		if (document.getElementById("nextPage") === null){document.getElementById("nextP").style.display = "none"; }
		document.documentElement.scrollTop = 590; //go back 590px from top of page
	   }
		
	   //function for the previous button
		function previous(){
		var i;
		document.getElementById("currentPage").id = "nextPage";
	    for (i=0; i < n-1; i++) // loop to turn all previous pages to current pages
		{
			documnet.getElementById("prevPage").id = "currentPage"; 
		}
		for (i=0; i < n-2; i++) // loop to turn all current pages back to previous pages except for the last one
		{
			documnet.getElementById("currentPage").id = "prevPage";
		}
        page[n].style.color = "black"; //turn page number back to black
		n--; // set page number to the previous page
		page[n].style.color = "red"; // turn that page number red to show that the page is active
			
		if (n > 1){document.getElementById("prevP").style.display = "block";}
		if (n = 1){document.getElementById("prevP").style.display = "none";}
		if (document.getElementById("nextPage") === null){document.getElementById("nextP").style.display = "none"; }
		document.documentElement.scrollTop = 590; //go back 590px from top of page
	    }