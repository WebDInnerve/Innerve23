const cards = document.querySelectorAll('.card');
const images = document.querySelectorAll('.image');
// const circleButtons = document.querySelectorAll('.circle-button');

var image1 = document.getElementById("myImage1");
var image2 = document.getElementById("myImage2");
var image3 = document.getElementById("myImage3");
var image4 = document.getElementById("myImage4");
var image5 = document.getElementById("myImage5");
var image6 = document.getElementById("myImage6");
var image7 = document.getElementById("myImage7");
var image8 = document.getElementById("myImage8");
var image9 = document.getElementById("myImage9");
var image10 = document.getElementById("myImage10");
var image11 = document.getElementById("myImage11");
var image12 = document.getElementById("myImage12");
var image13 = document.getElementById("myImage13");
var image14 = document.getElementById("myImage14");


  // Set an initial state to track the size
var isLarge = false;

cards.forEach((button, index) => {
  button.addEventListener('mouseover', () => {
    cards.forEach(card => card.classList.add('hide-holo'));
    images.forEach(image => image.style.opacity = 1);
    
    cards[index].classList.remove('hide-holo');
    images[index].style.opacity = 1;
  });

  button.addEventListener('mouseleave', () => {
    cards[index].classList.add('hide-holo');
    images[index].style.opacity = 1;
  });
});



  // Add a click event listener to toggle the image size
image1.addEventListener("click", function() {
  if (isLarge) {
    // If the image is currently large, make it small
    image1.style.width ="33%"; // Set your desired small width
    image1.style.height ="25%"; 
    image1.style.marginLeft="0px";
  } else {
    // If the image is currently small, make it large
    image1.style.width = "54%"; // Set your desired large width
    image1.style.height = "35%";
    image1.style.marginLeft="-30px";
  }

  // Toggle the state
  isLarge = !isLarge;
});

image2.addEventListener("click", function() {
  if (isLarge) {
    // If the image is currently large, make it small
    image2.style.width ="33%"; // Set your desired small width
    image2.style.height ="25%"; 
    image2.style.marginLeft="0px";
  } else {
    // If the image is currently small, make it large
    image2.style.width = "54%"; // Set your desired large width
    image2.style.height = "35%";
    image2.style.marginLeft="-30px";
  }

  // Toggle the state
  isLarge = !isLarge;
});


image3.addEventListener("click", function() {
  if (isLarge) {
    // If the image is currently large, make it small
    image3.style.width ="33%"; // Set your desired small width
    image3.style.height ="25%"; 
    image3.style.marginLeft="0px";
  } else {
    // If the image is currently small, make it large
    image3.style.width = "54%"; // Set your desired large width
    image3.style.height = "35%";
    image3.style.marginLeft="-30px";
  }

  // Toggle the state
  isLarge = !isLarge;
});

image4.addEventListener("click", function() {
  if (isLarge) {
    // If the image is currently large, make it small
    image4.style.width ="33%"; // Set your desired small width
    image4.style.height ="25%"; 
    image4.style.marginLeft="0px";
  } else {
    // If the image is currently small, make it large
    image4.style.width = "54%"; // Set your desired large width
    image4.style.height = "35%";
    image4.style.marginLeft="-30px";
  }

  // Toggle the state
  isLarge = !isLarge;
});

image5.addEventListener("click", function() {
  if (isLarge) {
    // If the image is currently large, make it small
    image5.style.width ="33%"; // Set your desired small width
    image5.style.height ="25%"; 
    image5.style.marginLeft="0px";
  } else {
    // If the image is currently small, make it large
    image5.style.width = "54%"; // Set your desired large width
    image5.style.height = "35%";
    image5.style.marginLeft="-30px";
  }

  // Toggle the state
  isLarge = !isLarge;
});

image6.addEventListener("click", function() {
  if (isLarge) {
    // If the image is currently large, make it small
    image6.style.width ="33%"; // Set your desired small width
    image6.style.height ="25%"; 
    image6.style.marginLeft="0px";
  } else {
    // If the image is currently small, make it large
    image6.style.width = "54%"; // Set your desired large width
    image6.style.height = "35%";
    image6.style.marginLeft="-30px";
  }

  // Toggle the state
  isLarge = !isLarge;
});

image7.addEventListener("click", function() {
  if (isLarge) {
    // If the image is currently large, make it small
    image7.style.width ="33%"; // Set your desired small width
    image7.style.height ="25%"; 
    image7.style.marginLeft="0px";
  } else {
    // If the image is currently small, make it large
    image7.style.width = "54%"; // Set your desired large width
    image7.style.height = "35%";
    image7.style.marginLeft="-30px";
  }

  // Toggle the state
  isLarge = !isLarge;
});

image8.addEventListener("click", function() {
  if (isLarge) {
    // If the image is currently large, make it small
    image8.style.width ="33%"; // Set your desired small width
    image8.style.height ="25%"; 
    image8.style.marginLeft="0px";
  } else {
    // If the image is currently small, make it large
    image8.style.width = "54%"; // Set your desired large width
    image8.style.height = "35%";
    image8.style.marginLeft="-30px";
  }

  // Toggle the state
  isLarge = !isLarge;
});

image9.addEventListener("click", function() {
  if (isLarge) {
    // If the image is currently large, make it small
    image9.style.width ="33%"; // Set your desired small width
    image9.style.height ="25%"; 
    image9.style.marginLeft="0px";
  } else {
    // If the image is currently small, make it large
    image9.style.width = "54%"; // Set your desired large width
    image9.style.height = "35%";
    image9.style.marginLeft="-30px";
  }

  // Toggle the state
  isLarge = !isLarge;
});

image10.addEventListener("click", function() {
  if (isLarge) {
    // If the image is currently large, make it small
    image10.style.width ="33%"; // Set your desired small width
    image10.style.height ="25%"; 
    image10.style.marginLeft="0px";
  } else {
    // If the image is currently small, make it large
    image10.style.width = "54%"; // Set your desired large width
    image10.style.height = "35%";
    image10.style.marginLeft="-30px";
  }

  // Toggle the state
  isLarge = !isLarge;
});

image11.addEventListener("click", function() {
  if (isLarge) {
    // If the image is currently large, make it small
    image11.style.width ="33%"; // Set your desired small width
    image11.style.height ="25%"; 
    image11.style.marginLeft="0px";
  } else {
    // If the image is currently small, make it large
    image11.style.width = "54%"; // Set your desired large width
    image11.style.height = "35%";
    image11.style.marginLeft="-30px";
  }

  // Toggle the state
  isLarge = !isLarge;
});

image12.addEventListener("click", function() {
  if (isLarge) {
    // If the image is currently large, make it small
    image12.style.width ="33%"; // Set your desired small width
    image12.style.height ="25%"; 
    image12.style.marginLeft="0px";
  } else {
    // If the image is currently small, make it large
    image12.style.width = "54%"; // Set your desired large width
    image12.style.height = "35%";
    image12.style.marginLeft="-30px";
  }

  // Toggle the state
  isLarge = !isLarge;
});

image13.addEventListener("click", function() {
  if (isLarge) {
    // If the image is currently large, make it small
    image13.style.width ="33%"; // Set your desired small width
    image13.style.height ="25%"; 
    image13.style.marginLeft="0px";
  } else {
    // If the image is currently small, make it large
    image13.style.width = "54%"; // Set your desired large width
    image13.style.height = "35%";
    image13.style.marginLeft="-30px";
  }

  // Toggle the state
  isLarge = !isLarge;
});

image14.addEventListener("click", function() {
  if (isLarge) {
    // If the image is currently large, make it small
    image14.style.width ="33%"; // Set your desired small width
    image14.style.height ="25%"; 
    image14.style.marginLeft="0px";
  } else {
    // If the image is currently small, make it large
    image14.style.width = "54%"; // Set your desired large width
    image14.style.height = "35%";
    image14.style.marginLeft="-30px";
  }

  // Toggle the state
  isLarge = !isLarge;
});











 