let navbar = document.querySelector('#navbar');
let topButton = document.querySelector('#topButton');

// Function to check scroll position and add/remove class
function checkScroll() {
    let scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        navbar.classList.add('bg-light', 'bg-gradient', 'w-100');
        navbar.classList.remove('bg-transparent', 'w-75');
        topButton.classList.remove('d-none')
    } else {
        navbar.classList.add('bg-transparent', 'w-75');
        navbar.classList.remove('bg-light', 'bg-gradient', 'w-100');
        topButton.classList.add('d-none')
    }
}

// Add event listener for scroll
window.addEventListener('scroll', checkScroll);

// Call checkScroll on page load (in case the page is refreshed while scrolled down)
checkScroll();

topButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})
