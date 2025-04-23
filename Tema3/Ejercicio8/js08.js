const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operatorPressed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      currentInput = '';
      display.value = '';
      return;
    }

    if (value === '=') {
      try {
        display.value = eval(currentInput);
        currentInput = display.value;
      } catch {
        display.value = 'Error';
        currentInput = '';
      }
      return;
    }

    currentInput += value;
    display.value = currentInput;
  });
});
