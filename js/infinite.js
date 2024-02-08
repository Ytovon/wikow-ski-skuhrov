const container = document.getElementById('slider');
const images = Array.from(document.querySelectorAll('.slide'));

images.forEach(function(image) {
    const clone = image.cloneNode(true);
    container.appendChild(clone);
});

document.addEventListener('DOMContentLoaded', function () {

    const containerSize = container.scrollWidth / 2;
    const sliderImage = document.getElementById('slider_image');
    let imageSize = sliderImage.offsetWidth;

    let intervalId; // Variable to store the interval ID

    function startInterval() {
        intervalId = setInterval(nextSlide, 3000);
    }

    function nextSlide() {
        if (container.scrollLeft > containerSize) {
            container.style.scrollBehavior = "unset";

            setTimeout(function () {
                container.scrollTo(0, 0);
                container.style.scrollBehavior = "smooth";
            }, 0);

        }else{
            container.scrollLeft += imageSize + 64;
        }   
    }

    function prevSlide() {
        container.scrollLeft -= imageSize + 64;
    }

    startInterval(); // Start the interval initially

    document.getElementById('nextBtn').addEventListener('click', function () {
        clearInterval(intervalId); // Clear the interval
        nextSlide(); // Call nextSlide directly
        startInterval(); // Set a new interval
    });

    document.getElementById('prevBtn').addEventListener('click', function () {
        clearInterval(intervalId); // Clear the interval
        prevSlide(); // Call prevSlide directly
        startInterval(); // Set a new interval
    });

});
