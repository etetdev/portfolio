'use script';

// Get the button
const mybutton = document.getElementById('btn-back-to-top');

// When the user scrolls down 20px from the top of the page, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (scroll.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = 'block';
    } else {
        mybutton.style.display = 'none';
    }
}

// When the user clicks on the button, scroll back to the top of the page
mybutton.addEventListener('click', backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
