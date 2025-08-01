"use strict";

function ask(question, yes, no) {
  if (confirm(question)) yes();else no();
}

ask("Do you agree?", function () {
  return alert("You agreed.");
}, function () {
  return alert("You canceled the execution of the function");
});