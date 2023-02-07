'use script';

const myButton = document.getElementById('btn-back-to-top'); // Get the button

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
	if (
		document.body.scrollTop > 20 ||
		document.documentElement.scrollTop > 20
	) {
		// Show the button
		myButton.style.display = 'block';
	} else {
		// Hide the button
		myButton.style.display = 'none';
	}
}

// When the user scrolls the page, execute scrollFunction
window.addEventListener('scroll', function () {
	scrollFunction();
});

// When the user clicks on the button, scroll to the top of the document
myButton.addEventListener('click', function () {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
