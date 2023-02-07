// select the icons
const lightIcon = document.querySelector('.light');
const darkIcon = document.querySelector('.dark');

// get the user's theme choice from the local storage
const userTheme = localStorage.getItem('theme');

// check if the user has a dark theme preference
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

// toggle the visibility of the icons
const iconToggle = () => {
	darkIcon.classList.toggle('display-none');
	lightIcon.classList.toggle('display-none');
};

// check the user's theme choice and apply it
const themeCheck = () => {
	// if the user has a dark theme preference, apply it
	if (userTheme === 'dark' || (!userTheme && systemTheme)) {
		document.documentElement.classList.add('dark');
		darkIcon.classList.add('display-none');
		return;
	}
	// if the user has a light theme preference, apply it
	lightIcon.classList.add('display-none');
};

// toggle the theme and save the user's choice
const themeSwitch = () => {
	// if the user has a dark theme, change to light
	if (document.documentElement.classList.contains('dark')) {
		document.documentElement.classList.remove('dark');
		localStorage.setItem('theme', 'light');
		iconToggle();
		return;
	}
	// if the user has a light theme, change to dark
	document.documentElement.classList.add('dark');
	localStorage.setItem('theme', 'dark');
	iconToggle();
};

// apply the user's theme choice on page load
themeCheck();

// add click event listeners to the icons
lightIcon.addEventListener('click', () => {
	themeSwitch();
});

darkIcon.addEventListener('click', () => {
	themeSwitch();
});
