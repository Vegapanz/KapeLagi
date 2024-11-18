const slides = document.querySelectorAll('.carousel-slide');
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');
const body = document.querySelector('body');  // Target the entire body of the webpage

let currentIndex = 0;

// Array of colors to cycle through for the background color of the whole page
const backgroundColors = [
  "#D5CEA3", // Light beige color
  "#1A120B", // Dark brown color
  "#933333", // Pinkish color
  "#A77C82"  // Beige color
];

// Function to update the background color of the whole page
function updateBackgroundColor() {
  // Get a random color from the array
  const randomColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  body.style.backgroundColor = randomColor;
}

// Function to update the slides
function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentIndex);
  });
}

// Add event listeners to buttons
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;  // Go to next slide
  updateSlides();
  updateBackgroundColor(); // Change background color of the whole page
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;  // Go to previous slide
  updateSlides();
  updateBackgroundColor(); // Change background color of the whole page
});

// Initialize
updateSlides();
updateBackgroundColor(); // Set initial background color of the page
