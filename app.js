window.addEventListener("load", function() {
    setTimeout(function() {
      document.getElementById("loader").style.display = "none";
      document.getElementById("page-content").classList.remove("hidden");
    }, 2000); // Change 2000 to the number of milliseconds you want the loading animation to display

    // Get references to the button and modal elements
    const button = document.getElementById('play-video-button');
    const modal = document.getElementById('video-modal');

    // Add a click event listener to the button
    button.addEventListener('click', () => {
    // Show the modal
    modal.style.display = 'inline-block';
    content.style.display = 'none';
    hidetitle.style.display = 'none';
    document.cookie = "cookieName=cookieValue; SameSite=None; Secure";
    });

    // Get a reference to the close button
    const closeButton = document.getElementById('close-video-button');

    // Add a click event listener to the close button
    closeButton.addEventListener('click', () => {
    // Hide the modal
    modal.style.display = 'none';
    content.style.display = 'block';
    hidetitle.style.display = 'flex';
    });

    
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Your code goes here
    // Define a function to create a heart element
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * window.innerWidth + "px";
    document.getElementById("heart-container").appendChild(heart);
    // Remove the heart element after it falls offscreen
    setTimeout(() => heart.remove(), 5000);
  }
  
  // Call the createHeart function every 200 milliseconds to create a new heart
  setInterval(createHeart, 50);     
    
  });

  const toggleButton = document.getElementById('toggleButton');
  const content = document.getElementById('content');

  toggleButton.addEventListener('click', function() {
    if (content.style.display === 'none') {
      content.style.display = 'block';
      toggleButton.style.display = 'none';
      hide.style.display = 'none';
      movingButton.style.display = 'none';
    } else {
        content.style.display = 'none';
        toggleButton.textContent = 'Click me';
    }
  });

  const movingButton = document.getElementById('movingButton');

  function moveButton() {
    const newX = Math.floor(Math.random() * window.innerWidth);
    const newY = Math.floor(Math.random() * window.innerHeight);
  
    movingButton.style.top = `${newY}px`;
    movingButton.style.left = `${newX}px`;
  }
  
  movingButton.addEventListener('mousemove', moveButton);


  // Get references to the button and modal elements
  const buttonVideo = document.getElementById('play-video-button1');
  const modalVideo = document.getElementById('video-modal1');

  // Add a click event listener to the button
  buttonVideo.addEventListener('click', () => {
  // Show the modal
  modalVideo.style.display = 'inline-block';
  content.style.display = 'none';
  hidetitle.style.display = 'none';
  document.cookie = "cookieName=cookieValue; SameSite=None; Secure";
  });

  // Get a reference to the close button
  const closeButtonVideo = document.getElementById('close-video-button1');

  // Add a click event listener to the close button
  closeButtonVideo.addEventListener('click', () => {
  // Hide the modal
  modalVideo.style.display = 'none';
  content.style.display = 'block';
  hidetitle.style.display = 'flex';
  });
