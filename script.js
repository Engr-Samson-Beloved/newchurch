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
// JavaScript to handle modal opening and closing
// JavaScript to handle modal opening and closing
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('planVisitModal');
    var btn = document.getElementById('planVisitBtn');
    var span = document.getElementsByClassName('close-button')[0];

    btn.onclick = function() {
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});



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
  }, 1000); // Adjust the timeout duration as needed
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

document.addEventListener('DOMContentLoaded', function() {
    var planVisitModal = document.getElementById('planVisitModal');
    var preRegisterModal = document.getElementById('preRegisterModal');
    var planVisitBtn = document.getElementById('planVisitBtn');
    var registerVisitBtn = document.getElementById('registerVisitBtn');
    var closeButtons = document.getElementsByClassName('close-button');
    // var signup = document.getElementById('join-choir');
    var allforms = document.querySelectorAll("#join-choir");

    allforms.onclick = function(){
        preRegisterModal.style.display = 'block';
    }
    // Open the Plan Visit modal
    planVisitBtn.onclick = function() {
        planVisitModal.style.display = 'block';
    }

    // Open the Pre-Register modal
    registerVisitBtn.onclick = function() {
        preRegisterModal.style.display = 'block';
    }

    // Close modals when the close button is clicked
    Array.prototype.forEach.call(closeButtons, function(button) {
        button.onclick = function() {
            planVisitModal.style.display = 'none';
            preRegisterModal.style.display = 'none';
        }
    });

    // Close modals when clicking outside of the modal content
    window.onclick = function(event) {
        if (event.target == planVisitModal) {
            planVisitModal.style.display = 'none';
        }
        if (event.target == preRegisterModal) {
            preRegisterModal.style.display = 'none';
        }
    }

    // Handle form submission
    var preRegisterForm = document.getElementById('preRegisterForm');
    preRegisterForm.onsubmit = function(event) {
        // event.preventDefault();
        sendForm();
    };

    function sendForm() {
        emailjs.sendForm('service_tc6xe87', 'template_sf5cxny', '#preRegisterForm', 'IGQy_WJa9jI-CYMqu')
            .then(function(response) {
                alert('Your message has been sent successfully!');
                preRegisterModal.style.display = 'none';
                preRegisterForm.reset();
            }, function(error) {
                alert('Failed to send the message. Please try again later.');
            });
    }
});

var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('youtubeVideo', {
            events: {
                'onReady': onPlayerReady
            }
        });
    }

    function onPlayerReady(event) {
        var playButton = document.getElementById('playButton');
        var pauseButton = document.getElementById('pauseButton');

        playButton.addEventListener('click', function() {
            player.playVideo();
        });

        pauseButton.addEventListener('click', function() {
            player.pauseVideo();
        });
    }


    function saveScrollPos() {
        const scrollPos = window.scrollY;
        document.querySelectorAll('.post-item').forEach(item => {
            item.href = `${item.href}&scrollPos=${scrollPos}`;
        });
    }