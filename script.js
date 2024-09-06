// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Add a simple effect to the container when the page loads
    const container = document.querySelector('.container');
    container.style.opacity = 0;
    container.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        container.style.transition = 'all 1s ease-out';
        container.style.opacity = 1;
        container.style.transform = 'scale(1)';
    }, 100);
});
