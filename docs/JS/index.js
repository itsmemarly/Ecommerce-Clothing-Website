document.addEventListener("DOMContentLoaded", function() {
    var hamburger = document.querySelector('.hamburger');
    var navBar = document.querySelector('.nav-bar');

    if (hamburger && navBar) {
        hamburger.addEventListener('click', function() {
            navBar.classList.toggle('active');
        });
    }
});
