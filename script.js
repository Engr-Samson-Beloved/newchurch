
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
};

let isToggled = false;
function show(){
  isToggled = !isToggled;
  var menu = document.getElementById('menus');
  var navv = document.getElementById('Navbar');
  var nave = document.getElementById('nave');
  if(isToggled){
    navv.style.height= "max-content";
    menu.style.visibility = "visible";
    nave.innerHTML = "&times;"
  }else{
    navv.style.height= "10vh";
    menu.style.visibility = "hidden";
    nave.innerHTML = "&#9776;"
  }
}


document.addEventListener('DOMContentLoaded', function() {
  const textElement = document.getElementById('typewriter');
  const textContent = 'World Thunder Revival And Evangelical Ministry WOTREM.';
  let index = 0;

  function typeWriter() {
      if (index < textContent.length) {
          textElement.textContent += textContent.charAt(index);
          index++;
          setTimeout(typeWriter, 100); // Adjust the typing speed (in milliseconds)
      }
  }

  // Start the typewriter effect
  typeWriter();
});
