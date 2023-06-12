# Etch-a-Sketch

In this exercise i created a kind of canvas on which to draw with the mouse.
The drawing area consists of a certain number of squares that are filled with color
as soon as you move the mouse over it.

function createField creates the field that you draw on. It gets the default size of 16x16 squares.

```
function createField(sizeRaster)

```

function listener listens to the mouse where you hover over, to fill the square up with a random color

```
function listener()
```

removes the color from the squares

```
function removeAllChildren(parent)
```

The button asks you for a number that max can be 100 to create the area. If the number is above 100, you will get an error and get to try again

```
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
```
