"use strict";

// Task 1
document.addEventListener("keypress", function (event) {
  var currElement = document.querySelector(".card-footer").firstElementChild;

  if (event.ctrlKey && event.key === "e" && currElement.nodeName === "DIV") {
    event.preventDefault;
    console.log(event);
    var textObj = document.querySelector(".text");
    var text = textObj.textContent;
    textObj.outerHTML = "<textarea rows='1' class='form-control border-dark' id='textarea' name='textarea'>".concat(text, "</textarea>");
    isDiv = false;
  } else if (event.ctrlKey && event.key === "s" && currElement.nodeName === "TEXTAREA") {
    event.preventDefault();
    console.log(event);

    var _textObj = document.querySelector("#textarea");

    var _text = _textObj.value;
    _textObj.outerHTML = " <div class=\"text p-2 border border-dark rounded\">".concat(_text, "</div>");
    isDiv = true;
  }

  console.log(event);
}); // Task 2

var thead = document.querySelectorAll(".table thead th");
thead.forEach(function (element) {
  element.addEventListener("click", function (event) {
    var rows = document.querySelectorAll(".table tbody tr");
    var rowsArr = Array.from(rows);
    rowsArr.sort(function (a, b) {
      var valA = a.children[element.cellIndex].textContent.replace("$", "").replace(",", "");
      var valB = b.children[element.cellIndex].textContent.replace("$", "").replace(",", "");
      if (!isNaN(valA) && !isNaN(valB) && valA !== "" && valB !== "") return +valA - +valB;else {
        return valA.localeCompare(valB);
      }
    });
    var parent = rows[0].parentElement;
    var fragment = document.createDocumentFragment();
    rowsArr.forEach(function (element) {
      fragment.appendChild(element);
    });
    fragment.querySelectorAll("tr").forEach(function (element) {
      parent.append(element);
    });
  });
}); // Task 3

var cornerDiv = document.querySelector(".corner-div");
cornerDiv.addEventListener("mousedown", function (event) {
  // console.log(event);
  function onMouseMove(event) {
    console.log(event);
    console.log([document.querySelector(".resizable-div")]);
  }

  cornerDiv.addEventListener("mousemove", onMouseMove);
  cornerDiv.addEventListener("mouseup", function () {
    cornerDiv.removeEventListener("mousemove", onMouseMove);
  });
});

cornerDiv.ondragstart = function () {
  return false;
};