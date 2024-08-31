// scripts.js

// Example: Function to update the scrolling text dynamically
function updateScrollingText(message) {
    document.querySelector('.scrolling-text p').textContent = message;
  }
  
  // Example usage: Update text on page load
  window.addEventListener('load', () => {
    updateScrollingText('New offer: 30% off on selected items! Limited time only!');
  });
  