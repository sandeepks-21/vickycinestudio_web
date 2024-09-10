$(document).ready(function($){
        "use strict";
    // Initialize Owl Carousel
    $('.owl-carousel').owlCarousel({
        items: 1, // Show one item at a time
        loop: true,
        video: true,
        lazyLoad: true,
        center: true,
        dots: true, // Optional: Show dots for navigation
        nav: true // Optional: Show navigation arrows
    });

    // Play video when play button is clicked
    $('.owl-video-play-btn').on('click', function() {
        // Trigger the play event from Owl Carousel for the clicked item
        $(this).closest('.item').trigger('play.owl.video');
    });
});
