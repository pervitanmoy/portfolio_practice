document.addEventListener('DOMContentLoaded', function () {
    const pagesMenuItem = document.querySelector('.has-hover-menu');
    const hoverMenu = pagesMenuItem.querySelector('.hover-menu');
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const closebtn = document.getElementById('closebtn');

    pagesMenuItem.addEventListener('mouseenter', function () {
        if (window.innerWidth > 768) {
            hoverMenu.style.display = 'block';
        }
    });

    pagesMenuItem.addEventListener('mouseleave', function () {
        if (window.innerWidth > 768) {
            hoverMenu.style.display = 'none';
        }
    });

    hamburger.addEventListener('click', function () {
        sidebar.style.width = '250px';
    });

    closebtn.addEventListener('click', function () {
        sidebar.style.width = '0';
    });
});






let slideIndex = 0;

document.addEventListener('DOMContentLoaded', (event) => {
    showTestimonial(slideIndex);
    createDots();
    updateDots(slideIndex);
});

function nextTestimonial() {
    showTestimonial(slideIndex += 1);
}

function prevTestimonial() {
    showTestimonial(slideIndex -= 1);
}

function currentTestimonial(n) {
    showTestimonial(slideIndex = n);
}

function showTestimonial(n) {
    let slides = document.querySelectorAll('.testimonial-slide');
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    let offset = -slideIndex * 100;
    document.querySelector('.testimonial-container').style.transform = `translateX(${offset}%)`;
    updateDots(slideIndex);
}

function createDots() {
    const dotsContainer = document.querySelector('.testimonial-dots');
    const slides = document.querySelectorAll('.testimonial-slide');
    
    slides.forEach((_, index) => {
        let dot = document.createElement('span');
        dot.addEventListener('click', () => currentTestimonial(index));
        dotsContainer.appendChild(dot);
    });
}

function updateDots(n) {
    let dots = document.querySelectorAll('.testimonial-dots span');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[n].classList.add('active');
}