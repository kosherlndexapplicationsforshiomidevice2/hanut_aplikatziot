/* © All Rights Reserved to Shalom Cohen. You may not Copy or distribute without permission. */

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    
    
    var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    }}
    
    if( !isMobile.Android() )
   {
    
     var y = document.getElementById('idGames');
    y.style.display = 'none';
    
    var z = document.getElementsByClassName("column games");
var g;
for (g = 0; g < z.length; g++) {
    z[g].style.display = 'none';
}
   
   }
   
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

var input = document.getElementById("myInput");
input.addEventListener("input", myFunction);

function myFunction(e) {


  var filter = e.target.value.toUpperCase();

  var list = document.getElementById("list");
  var divs = list.getElementsByTagName("div");
  var g;
  for (var i = 0; i < divs.length; i++) {
    var a = divs[i].getElementsByTagName("h3")[0];
	var b = divs[i].getElementsByTagName("p")[0];
   
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        divs[i].style.display = "";
		
		
      } else {
	  if (b.innerHTML.toUpperCase().indexOf(filter) > -1) {
        divs[i].style.display = "";
	
      }
	  else
	  {
        divs[i].style.display = "none";
      }
	  }
	  
    var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    }}
    
    if( !isMobile.Android() )
   {
    
    var z = document.getElementsByClassName("column games");
var g;
for (g = 0; g < z.length; g++) {
    z[g].style.display = 'none';
}
   
   }
	
  }

}

function updateComment() {
  var x = document.getElementById("upCm");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
