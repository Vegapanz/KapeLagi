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


// Validate email function
document.addEventListener('DOMContentLoaded', function() {
    // Accessing the form by its ID
    const form = document.getElementById('contactForm');
    
    // Event listener for form submission
    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting to allow validation
        event.preventDefault();

        // Get the email input and its value
        const emailInput = document.getElementById('email');
        const email = emailInput.value;
        
        // Regular expression for a valid email address
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // Validate the email
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address!');
            emailInput.focus();  // Focus on the email input field for correction
            return false;  // Prevent form submission
        }
        
        // If the email is valid, show success (you can replace this with form submission)
        alert('Form submitted successfully!');
        // Uncomment below to allow actual form submission if needed
        // form.submit();
    });
});


