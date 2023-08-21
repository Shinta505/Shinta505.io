function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
      x.className += " responsive";
      x.classList.toggle("change");
    } else {
      x.className = "navbar";
    }
  }