

const fontSizeControl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const fontResize = () => {
  textEl.style.fontSize = fontSizeControl.value + "px";
};

fontSizeControl.addEventListener("input", fontResize);
