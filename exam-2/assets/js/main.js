let w = 0;
let h = 0;
let defaultDirection = true;
const bgDiv = document.querySelector(".background");
function moveBgGradient(direction) {
  if (w < 50 && defaultDirection) {
    w += 10;
    bgDiv.style.transform = `translate(${-w}%, ${-h}%)`;
    setTimeout(moveBgGradient, 500);
  } else if (h < 50 && defaultDirection) {
    h += 5;
    bgDiv.style.transform = `translate(${-w}%, ${-h}%)`;
    setTimeout(moveBgGradient, 100);
  } else if (w <= 50 && w > 0) {
    defaultDirection = false;
    w -= 5;
    bgDiv.style.transform = `translate(${-w}%, ${-h}%)`;
    setTimeout(moveBgGradient, 500);
  } else if (h <= 50 && h > 0) {
    defaultDirection = false;
    h -= 5;
    bgDiv.style.transform = `translate(${-w}%, ${-h}%)`;
    setTimeout(moveBgGradient, 100);
  } else {
    defaultDirection = true;
    w = 0;
    h = 0;
    bgDiv.style.transform = `translate(${-w}%, ${-h}%)`;
    setTimeout(moveBgGradient, 500);
  }
}

moveBgGradient();
