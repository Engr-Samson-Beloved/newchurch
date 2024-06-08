var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      panel.style.transition = "1s";
    } else {
      panel.style.display = "block";
      panel.style.transition = "1s";
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
    navv.style.height= "97vh";
    menu.style.visibility = "visible";
    nave.innerHTML = "&times;"
    navv.style.transition = ".30s";
  }else{
    navv.style.height= "7vh";
    navv.style.transition = ".30s";
    menu.style.visibility = "hidden";
    nave.innerHTML = "&#9776;";


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
document.addEventListener("DOMContentLoaded", function() {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  // Simulate a loading process (e.g., fetching data)
  setTimeout(() => {
      loader.style.display = "none";
      content.style.display = "block";
  }, 3000); // Adjust the timeout duration as needed
});
