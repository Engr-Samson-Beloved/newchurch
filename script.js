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

// let isToggled = false;
// function show(){
//   isToggled = !isToggled;
//   var menu = document.getElementById('menus');
//   var navv = document.getElementById('Navbar');
//   var nave = document.getElementById('nave');
//   if(isToggled){
//     navv.style.height= "97vh";
//     menu.style.visibility = "visible";
//     nave.innerHTML = "&times;"
//     navv.style.transition = ".30s";
//   }else{
//     navv.style.height= "7vh";
//     navv.style.transition = ".30s";
//     menu.style.visibility = "hidden";
//     nave.innerHTML = "&#9776;";


//   }
// }


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

// backgroung Changer
document.addEventListener('DOMContentLoaded', (event) => {
  const backgroundDiv = document.getElementById('background-div');
  const images = [
    'url(./Revival/Revival2.jpg)',
    'url(./Drama/IMG_20231216_090350_935.jpg)',
    'url(./Revival/Revival1.jpg)',
      // Add more images as needed
  ];
  let currentIndex = 0;

  function changeBackground() {
      // Apply fade-out effect
      backgroundDiv.classList.add('fade-out');

      // Wait for the fade-out effect to complete
      setTimeout(() => {
          // Change the background image
          backgroundDiv.style.backgroundImage = images[currentIndex];
          
          // Apply fade-in effect
          backgroundDiv.classList.remove('fade-out');
          backgroundDiv.classList.add('fade-in');

          // Update the index for the next image
          currentIndex = (currentIndex + 1) % images.length;
      }, 1000); // This timeout should match the CSS transition duration
  }

  // Change background every 5 seconds (5000 milliseconds)
  setInterval(changeBackground, 5000);

  // Initial background
  changeBackground();
});

document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById('modal');
  var modalImg = document.getElementById('modal-img');
  var captionText = document.getElementById('caption');
  var close = document.getElementById('close');

  var galleryItems = document.querySelectorAll('.gallery-item img');

  galleryItems.forEach(function(item) {
      item.addEventListener('click', function() {
          modal.style.display = 'block';
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
      });
  });

  close.addEventListener('click', function() {
      modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  });
});


// popp up ads
document.addEventListener('DOMContentLoaded', function() {
  var announcementPopup = document.getElementById('announcement-popup');
  var closeAnnouncement = document.getElementById('close-announcement');

  setTimeout(function() {
      announcementPopup.style.display = 'block';
  }, 5000);

  closeAnnouncement.addEventListener('click', function() {
      announcementPopup.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
      if (event.target == announcementPopup) {
          announcementPopup.style.display = 'none';
      }
  });
});



document.addEventListener('DOMContentLoaded', function() {
  var givingPopup = document.getElementById('giving-popup');
  var closeGiving = document.getElementById('close-giving');

  setTimeout(function() {
      givingPopup.style.display = 'block';
  }, 10000); // 10 seconds after page load

  closeGiving.addEventListener('click', function() {
      givingPopup.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
      if (event.target == givingPopup) {
          givingPopup.style.display = 'none';
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Announcement Popup
  var announcementPopup = document.getElementById('announcement-popup');
  var closeAnnouncement = document.getElementById('close-announcement');

  setTimeout(function() {
      announcementPopup.style.display = 'block';
  }, 5000);

  closeAnnouncement.addEventListener('click', function() {
      announcementPopup.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
      if (event.target == announcementPopup) {
          announcementPopup.style.display = 'none';
      }
  });

  // Giving Popup
  var givingPopup = document.getElementById('giving-popup');
  var closeGiving = document.getElementById('close-giving');

  setTimeout(function() {
      givingPopup.style.display = 'block';
  }, 10000); // 10 seconds after page load

  closeGiving.addEventListener('click', function() {
      givingPopup.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
      if (event.target == givingPopup) {
          givingPopup.style.display = 'none';
      }
  });
});



// document.addEventListener('DOMContentLoaded', function() {
//   var socialIcons = document.querySelectorAll('.social-icon');

//   socialIcons.forEach(function(icon) {
//       icon.addEventListener('click', function(event) {
//           event.preventDefault();
//           var url = this.href;
//           window.open(url, '_blank');
//           alert('You are now leaving our site to visit our social media page.');
//       });
//   });
// });


// document.addEventListener('DOMContentLoaded', function() {
//   // Announcement Popup
//   var announcementPopup = document.getElementById('announcement-popup');
//   var closeAnnouncement = document.getElementById('close-announcement');

//   setTimeout(function() {
//       announcementPopup.style.display = 'block';
//   }, 5000);

//   closeAnnouncement.addEventListener('click', function() {
//       announcementPopup.style.display = 'none';
//   });

//   window.addEventListener('click', function(event) {
//       if (event.target == announcementPopup) {
//           announcementPopup.style.display = 'none';
//       }
//   });

