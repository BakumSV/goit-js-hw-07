

const inputEl = document.querySelector('#validation-input');
const maxWordLength = inputEl.getAttribute("data-length");
const inputWordLength = parseInt(maxWordLength, 10);

inputEl.oninput = () => {
  if (inputEl.value.length === inputWordLength) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
  if (inputEl.value.length === 0) {
    inputEl.classList.remove("valid");
    inputEl.classList.remove("invalid");
  }
  if (inputEl.value.length !== inputWordLength && inputEl.value.length !== 0) {
    inputEl.classList.add("invalid");
  }
};
