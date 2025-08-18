"use strict";

var playList = [{
  author: "LED ZEPPELIN",
  song: "STAIRWAY TO HEAVEN"
}, {
  author: "QUEEN",
  song: "BOHEMIAN RHAPSODY"
}, {
  author: "LYNYRD SKYNYRD",
  song: "FREE BIRD"
}, {
  author: "DEEP PURPLE",
  song: "SMOKE ON THE WATER"
}, {
  author: "JIMI HENDRIX",
  song: "ALL ALONG THE WATCHTOWER"
}, {
  author: "AC/DC",
  song: "BACK IN BLACK"
}, {
  author: "QUEEN",
  song: "WE WILL ROCK YOU"
}, {
  author: "METALLICA",
  song: "ENTER SANDMAN"
}];
var tasks = [{
  index: 1,
  description: "Створити сторінку, що показує нумерований список пісень:",
  "function": function showSongs() {
    var songs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : playList;
    var output = document.getElementById("task_1_output");
    songs.forEach(function (element) {
      output.insertAdjacentHTML("beforeend", "Author: ".concat(element.author, ",<br>Song: ").concat(element.song, ";<br><br>"));
    });
  }
}];

function fillHTML() {
  var wrapper = document.createElement("div");
  wrapper.setAttribute("class", "page-wrapper");
  var main = document.createElement("main");
  wrapper.prepend(main);
  var container = document.createElement("div");
  container.setAttribute("class", "container");
  main.prepend(container);
  document.body.prepend(wrapper);
  tasks.forEach(function (element) {
    createTask(container, element);
  });
}

function createTask(container) {
  var task = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    index: 0,
    description: "task"
  };
  // Create card
  var card = document.createElement("div");
  card.setAttribute("class", "card mb-3 mt-3");
  var cardHeader = document.createElement("div");
  var cardBody = cardHeader.cloneNode();
  var cardFooter = cardHeader.cloneNode(); // Set card atributes

  cardHeader.setAttribute("class", "card-header");
  cardBody.setAttribute("class", "card-body");
  cardFooter.setAttribute("class", "card-footer"); // Add card parts

  card.append(cardHeader);
  card.append(cardBody);
  card.append(cardFooter); // Task description

  var output = document.createElement("output");
  output.setAttribute("id", "task_".concat(task.index, "_output"));
  var cardText = document.createElement("p");
  cardText.setAttribute("class", "card-text");
  cardBody.append(cardText);
  cardFooter.append(output);
  cardText.textContent = task.description;
  cardHeader.textContent = "Task ".concat(task.index);
  var button = document.createElement("button");
  button.setAttribute("class", "btn btn-success");
  button.setAttribute("type", "button");
  button.setAttribute("onclick", "tasks[".concat(task.index - 1, "].function()"));
  button.textContent = "Press me!";
  cardBody.append(button);
  container.append(card);
}

fillHTML(); // Task 2
// function toggleModal() {}