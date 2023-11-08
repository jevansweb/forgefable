// JavaScript code for interactivity
window.addEventListener('load', function () {
    const introSection = document.getElementById('intro');
    const introContent = document.querySelector('.intro-content');

    // Add animation to the intro section
    introSection.classList.add('animate-fade-in');

    // Add a click event to the intro content for interactivity
    introContent.addEventListener('click', function () {
        // Example: Redirect to the resume section when clicking the intro content
        window.location.href = '#resume';
    });
});
