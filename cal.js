const keys = document.querySelectorAll('[data-number]');
keys.forEach((key) => {
	key.addEventListener('click', () => console.log(key.innerHTML));
});
