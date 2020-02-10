window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("bg-light").style.backgroundColor = "#000000";
    document.getElementById("navbrand").style.width="80px";
    document.getElementById("navbrand").style.height="60px";
  } else {
    document.getElementById("bg-light").style.backgroundColor = "#0b0c0c7a";
    document.getElementById("navbrand").style.width="100px";
    document.getElementById("navbrand").style.height="80px";
  }
}