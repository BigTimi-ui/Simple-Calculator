// --- 1. Toggle Mobile Navigation Menu ---
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark'); // Change icon to 'X'
    navbar.classList.toggle('active');
};

// --- 2. Scroll Animation (Sticky Header & Active Link) ---
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    // A. Active Section Link Highlighter
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // B. Sticky Header Effect
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // C. Remove toggle icon and navbar when clicking navbar links (scrolls)
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};
document.querySelector("click",e=>{const t=e.target.closest(".hero-gallery img");if(!t)return;openImagePopup(t.src)});
