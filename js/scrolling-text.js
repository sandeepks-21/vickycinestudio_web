// scripts.js

// Function to update the scrolling text dynamically
function updateScrollingText(message) {
  const scrollingTextElement = document.querySelector('.scrolling-text p');
  
  if (scrollingTextElement) {
      scrollingTextElement.textContent = message;
  } else {
      console.error('Scrolling text element not found');
  }
}

// Example usage: Update text on page load
window.addEventListener('load', () => {
  updateScrollingText('New offer: 60% off on selected items! Limited time only!');
});
