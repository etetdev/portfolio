'use script';

const btnBack = document.querySelector('.btn-back'); // Get the button

// When the user scroll down 20px from the top of the page, show the button
function scrollFunction() {
	if (
		document.body.scrollTop > 20 ||
		document.documentElement.scrollTop > 20
	) {
		// Show the button
		btnBack.style.display = 'block';
	} else {
		// Hide the button
		btnBack.style.display = 'none';
	}
}

// When the user scroll the page, execute scrollFunction
window.addEventListener('scroll', function () {
	scrollFunction();
});

// When the user click on the button, scroll to the top of the document
btnBack.addEventListener('click', function () {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
