document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    console.log("Number of slides:", slides.length); // Log the number of slides

    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? "block" : "none";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        console.log("Next Slide Index:", currentSlide); // Log current slide index
        showSlide(currentSlide);
    }

    function previousSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        console.log("Previous Slide Index:", currentSlide); // Log current slide index
        showSlide(currentSlide);
    }

    // Show the first slide
    showSlide(currentSlide);

    // Automatic slide transition every 3 seconds
    setInterval(nextSlide, 3000);
});
