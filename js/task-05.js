

const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

input.oninput = () => {
    input.value === '' ?
        nameOutput.innerHTML = 'незнакомец' :
        nameOutput.innerHTML = input.value;
}