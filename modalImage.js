		function modal(element){
        // Get the modal
        var modal = document.getElementById('myModal');
         document.getElementById("img01").src = element.src;
        document.getElementById("myModal").style.display = "block";
		document.getElementById("myModal").style.backgroundImage =  element.src;
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

         // When the user clicks on <span> (x), close the modal
        span.onclick = function() { 
        modal.style.display = "none";
        }
		}