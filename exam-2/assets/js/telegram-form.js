import { BOT_TOKEN, CHAT_ID } from "../js/keys.js";

const form = document.getElementById("subscribe");
const button = document.getElementById("submit-button");
form.onsubmit = async function (e) {
  // set fake timeout to prevent user from spamming
  let fakeTime = 1000;
  let isValid = true;
  e.preventDefault();
  button.setAttribute("disabled", "");

  const name = document.getElementById("userName");
  const nameVal = name.value.trim();
  const email = document.getElementById("userEmail");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailVal = email.value;
  if (nameVal.length < 2 || !isNaN(nameVal)) {
    name.parentElement.classList.add("invalid");
    isValid = false;
    fakeTime = 0;
  }
  if (!emailRegex.test(emailVal)) {
    email.parentElement.classList.add("invalid");
    isValid = false;
    fakeTime = 0;
  }

  if (!isValid) {
    document.querySelectorAll(".invalid").forEach((element) => {
      element.addEventListener("keydown", function () {
        element.classList.remove("invalid");
        isValid = true;
      });
    });
  }

  const msg = `<b>Name: </b>${nameVal}%0a<b>Email: </b>${emailVal}`;

  const resp = setTimeout(async function () {
    const resp = isValid
      ? await fetch(
          `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${msg}&parse_mode=html`
        )
      : "oops!";
    const answer = isValid ? await resp.json() : "oops indeed!";
    if (isValid && answer.ok) {
      form.reset();
      alert("You successfully contacted us!");
    } else if (isValid) {
      alert("Something went wrong!");
    }
    button.removeAttribute("disabled");
  }, fakeTime);
};

// 7951225413:AAGje8ftyap6ekTfHz-K-oQGLZMyQ9g7__o
// -4965449774
// https://api.telegram.org/bot7951225413:AAGje8ftyap6ekTfHz-K-oQGLZMyQ9g7__o/sendMessage?chat_id=-4965449774&parse_mode=html&text=<b>Enter</b> <i>your</i> text here
