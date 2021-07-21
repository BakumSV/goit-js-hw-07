

const btnInc = document.querySelector("[data-action='increment']");
const btnDec = document.querySelector("[data-action='decrement']");
const btnValue = document.querySelector('#value');

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  btnValue.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  btnValue.textContent = counterValue;
};

btnInc.addEventListener('click', increment);
btnDec.addEventListener('click', decrement);
