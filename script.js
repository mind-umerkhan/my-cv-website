window.addEventListener('scroll', function () {
    const navbar = document.getElementById('Home');
    
    if (window.scrollY > 0) {
        navbar.classList.add('fixed-navbar');
    } else {
        navbar.classList.remove('fixed-navbar');
    }
});
