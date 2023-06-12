"use strict";

const container = document.querySelector("#drawpad");
const btn = document.querySelector("#reset");
let size = 16;

btn.addEventListener("click", () => {
  removeAllChildren(container);
  const promptInput = parseInt(
    prompt(
      "Bitte geben Sie eine zahl bis maximal 100 ein, um das Raster zu bestimmen!"
    )
  );
  if (promptInput >= 1 && promptInput <= 100) {
    createField(promptInput);
  } else {
    alert("Bitte geben Sie eine Zahl bis maximal 100 ein!");
    createField(size);
  }
});

function createField(sizeRaster) {
  container.style.gridTemplateColumns = `repeat(${sizeRaster}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${sizeRaster}, 1fr)`;

  let raster = sizeRaster * sizeRaster;
  for (let i = 0; i < raster; i++) {
    const box = document.createElement("div");
    container.appendChild(box);
    box.classList.add("box");
  }
  listener();
}
babasdajsd;
function listener() {
  const boxes = document.querySelectorAll(".box");

  for (const box of boxes) {
    const red = parseInt(Math.random() * 255);
    const green = parseInt(Math.random() * 255);
    const blue = parseInt(Math.random() * 255);

    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });
  }
}

function removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

createField(size);
