// Select elements for navigation button and navigation menu
const navBtnEl = document.querySelector('.nav-toggle');
const navEl = document.querySelector('nav');

// Track whether the menu is open
let menuOpen = false;

// Event listener for the navigation toggle button
navBtnEl.addEventListener('click', () => {
  if (!menuOpen) {
    // Open the menu
    navBtnEl.classList.add('open'); // Add class to visually indicate menu is open
    navEl.classList.remove('d-none'); // Make the nav element visible (from display: none)
    setTimeout(() => {
      navEl.classList.remove('hidden'); // Remove additional hidden class after delay
    }, 200); // Delay for smooth transition
    document.body.classList.add('disable-scroll'); // Prevent scrolling on the body
    menuOpen = true; // Update menu state
  } else {
    // Close the menu
    navBtnEl.classList.remove('open'); // Remove visual indicator
    navEl.classList.add('hidden'); // Add class for hiding nav (e.g., opacity: 0 or slide-out)
    setTimeout(() => {
      navEl.classList.add('d-none'); // Fully hide nav after transition
    }, 300); // Delay for transition
    document.body.classList.remove('disable-scroll'); // Re-enable scrolling
    menuOpen = false; // Update menu state
  }
});

// Ensure the navigation menu is always visible on wider screens
const x = screen.width;
if (x > 769) {
  navEl.classList.remove('hidden'); // Remove hidden class for larger screens
  navEl.classList.remove('d-none'); // Ensure the nav is displayed
}
console.log(x); // Log screen width for debugging

// IntersectionObserver for triggering animations when elements are in view
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add animation class when the element is in view
      entry.target.classList.add('add-animation');
    }
  });
});

// Observe specific elements for intersection
observer.observe(document.querySelector('.hero__container')); // Hero section container
observer.observe(document.querySelector('.view-container')); // Features section
observer.observe(document.querySelector('.work__container')); // Work section
