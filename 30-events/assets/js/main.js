// Task 1
document.addEventListener("keypress", (event) => {
  let currElement = document.querySelector(".card-footer").firstElementChild;
  if (event.ctrlKey && event.key === "e" && currElement.nodeName === "DIV") {
    event.preventDefault;
    console.log(event);
    const textObj = document.querySelector(".text");
    const text = textObj.textContent;
    textObj.outerHTML = `<textarea rows='1' class='form-control border-dark' id='textarea' name='textarea'>${text}</textarea>`;
    isDiv = false;
  } else if (
    event.ctrlKey &&
    event.key === "s" &&
    currElement.nodeName === "TEXTAREA"
  ) {
    event.preventDefault();
    console.log(event);
    const textObj = document.querySelector("#textarea");
    const text = textObj.value;
    textObj.outerHTML = ` <div class="text p-2 border border-dark rounded">${text}</div>`;
    isDiv = true;
  }
  console.log(event);
});

// Task 2
const thead = document.querySelectorAll(".table thead th");
thead.forEach((element) => {
  element.addEventListener("click", (event) => {
    let rows = document.querySelectorAll(`.table tbody tr`);
    const rowsArr = Array.from(rows);
    rowsArr.sort((a, b) => {
      const valA = a.children[element.cellIndex].textContent
        .replace("$", "")
        .replace(",", "");
      const valB = b.children[element.cellIndex].textContent
        .replace("$", "")
        .replace(",", "");

      if (!isNaN(valA) && !isNaN(valB) && valA !== "" && valB !== "")
        return +valA - +valB;
      else {
        return valA.localeCompare(valB);
      }
    });
    const parent = rows[0].parentElement;
    const fragment = document.createDocumentFragment();
    rowsArr.forEach((element) => {
      fragment.appendChild(element);
    });
    fragment.querySelectorAll("tr").forEach((element) => {
      parent.append(element);
    });
  });
});

// Task 3
const cornerDiv = document.querySelector(".corner-div");
cornerDiv.addEventListener("mousedown", (event) => {
  // console.log(event);

  function onMouseMove(event) {
    console.log(event);
    console.log([document.querySelector(".resizable-div")]);
  }

  cornerDiv.addEventListener("mousemove", onMouseMove);
  cornerDiv.addEventListener("mouseup", () => {
    cornerDiv.removeEventListener("mousemove", onMouseMove);
  });
});
cornerDiv.ondragstart = function () {
  return false;
};
