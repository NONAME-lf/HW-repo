let playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

const tasks = [
  {
    index: 1,
    description: "Створити сторінку, що показує нумерований список пісень:",
    function: function showSongs(songs = playList) {
      const output = document.getElementById("task_1_output");
      songs.forEach((element) => {
        output.insertAdjacentHTML(
          "beforeend",
          `Author: ${element.author},<br>Song: ${element.song};<br><br>`
        );
      });
    },
  },
];

function fillHTML() {
  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "page-wrapper");
  const main = document.createElement("main");
  wrapper.prepend(main);
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  main.prepend(container);
  document.body.prepend(wrapper);

  tasks.forEach((element) => {
    createTask(container, element);
  });
}

function createTask(container, task = { index: 0, description: "task" }) {
  // Create card
  const card = document.createElement("div");
  card.setAttribute("class", "card mb-3 mt-3");
  const cardHeader = document.createElement("div");
  const cardBody = cardHeader.cloneNode();
  const cardFooter = cardHeader.cloneNode();
  // Set card atributes
  cardHeader.setAttribute("class", "card-header");
  cardBody.setAttribute("class", "card-body");
  cardFooter.setAttribute("class", "card-footer");
  // Add card parts
  card.append(cardHeader);
  card.append(cardBody);
  card.append(cardFooter);
  // Task description
  let output = document.createElement("output");
  output.setAttribute("id", `task_${task.index}_output`);
  const cardText = document.createElement("p");
  cardText.setAttribute("class", "card-text");
  cardBody.append(cardText);
  cardFooter.append(output);
  cardText.textContent = task.description;
  cardHeader.textContent = `Task ${task.index}`;
  const button = document.createElement("button");
  button.setAttribute("class", "btn btn-success");
  button.setAttribute("type", "button");
  button.setAttribute("onclick", `tasks[${task.index - 1}].function()`);
  button.textContent = "Press me!";
  cardBody.append(button);

  container.append(card);
}

fillHTML();

// Task 2
// function toggleModal() {}
