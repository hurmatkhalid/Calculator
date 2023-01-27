// const keys = document.querySelectorAll('[data-number]');
// keys.forEach((key) => {
// 	key.addEventListener('click', () => console.log(key.innerHTML));
// });
const numberButtons = document.querySelectorAll('[data-number');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector(
	'[data-previous-operand]'
);
const currentOperandTextElement = document.querySelector(
	'[data-current-operand]'
);
