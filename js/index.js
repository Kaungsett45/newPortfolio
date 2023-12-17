// Add this JavaScript code where appropriate
// setTimeout(function() {
//     document.querySelector('nav').classList.add('show');
// }, 2000); // 5000 milliseconds delay (5 seconds)
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listener to the button
    var scrollToAboutButton = document.getElementById('scrollToAbove');

    scrollToAboutButton.addEventListener('click', function() {
        // Get the target element
        var targetElement = document.getElementById('row');

        // Scroll to the target element
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var floatingButton = document.getElementById('floatingButton');

    // Add a scroll event listener
    window.addEventListener('scroll', function() {
        // Adjust the offset value based on your design
        var offset = 400;

        // Show/hide the floating button based on scroll position
        if (window.scrollY > offset) {
            floatingButton.style.opacity = '1'; // Make the button visible
        } else {
            floatingButton.style.opacity = '0'; // Make the button invisible
        }
    });
});

function scrollToTop() {
    // Scroll to the top smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


document.addEventListener('DOMContentLoaded', function () {
    var dropdownIcon = document.getElementById('dropdown-icon');
    var dropdownContent = document.getElementById('myDropdown');

    dropdownIcon.addEventListener('click', function () {
        dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    });

    window.addEventListener('click', function (event) {
        if (!event.target.matches('#dropdown-icon')) {
            dropdownContent.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Function to calculate brightness
    function getBrightness(rgb) {
        return (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
    }

    // Function to update text color based on background
    function updateTextColor() {
        const movieContent = document.querySelector('.movie-content');
        if (!movieContent) return;

        const computedStyle = getComputedStyle(movieContent);
        const backgroundColor = computedStyle.backgroundColor;

        // Convert background color to RGB
        const rgb = backgroundColor.match(/\d+/g).map(Number);

        // Calculate brightness
        const brightness = getBrightness(rgb);

        // Set text color based on brightness
        movieContent.style.color = brightness > 0.5 ? 'black' : 'white';
    }

    // Update text color on load and resize
    window.addEventListener('resize', updateTextColor);
    window.addEventListener('load', updateTextColor);
});


document.addEventListener('DOMContentLoaded', function() {
    // Function to calculate brightness
    function getBrightness(rgb) {
        return (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
    }

    // Function to update text color based on background
    function updateTextColor() {
        const contact = document.querySelector('.contact');
        const movieContent = document.querySelector('.movie-content');
        if (!contact || !movieContent) return;

        const computedStyle = getComputedStyle(contact);
        const backgroundColor = computedStyle.backgroundColor;

        // Convert background color to RGB
        const rgb = backgroundColor.match(/\d+/g).map(Number);

        // Calculate brightness
        const brightness = getBrightness(rgb);

        // Set text color based on brightness
        movieContent.style.color = brightness > 0.5 ? 'black' : 'white';
    }

    // Update text color on load and resize
    window.addEventListener('resize', updateTextColor);
    window.addEventListener('load', updateTextColor);
});