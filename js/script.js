var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1500);
}

function showPage() {
  var element = document.getElementById("body");
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
  document.getElementById("myDiv").style.display = "block";
  element.classList.remove("blackbg");
}