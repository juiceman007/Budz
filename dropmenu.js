		function dropDown() {
    document.getElementById("menu").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var items = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < items.length; i++) {
      var openDropdown = items[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}