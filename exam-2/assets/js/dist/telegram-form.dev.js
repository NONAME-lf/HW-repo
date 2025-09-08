"use strict";

var _keys = require("../js/keys.js");

var form = document.getElementById("subscribe");
var button = document.getElementById("submit-button");

form.onsubmit = function _callee2(e) {
  var fakeTime, isValid, name, nameVal, email, emailRegex, emailVal, msg, resp;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          // set fake timeout to prevent user from spamming
          fakeTime = 1000;
          isValid = true;
          e.preventDefault();
          button.setAttribute("disabled", "");
          name = document.getElementById("userName");
          nameVal = name.value.trim();
          email = document.getElementById("userEmail");
          emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          emailVal = email.value;

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
            document.querySelectorAll(".invalid").forEach(function (element) {
              element.addEventListener("keydown", function () {
                element.classList.remove("invalid");
                isValid = true;
              });
            });
          }

          msg = "<b>Name: </b>".concat(nameVal, "%0a<b>Email: </b>").concat(emailVal);
          resp = setTimeout(function _callee() {
            var resp, answer;
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!isValid) {
                      _context.next = 6;
                      break;
                    }

                    _context.next = 3;
                    return regeneratorRuntime.awrap(fetch("https://api.telegram.org/bot".concat(_keys.BOT_TOKEN, "/sendMessage?chat_id=").concat(_keys.CHAT_ID, "&text=").concat(msg, "&parse_mode=html")));

                  case 3:
                    _context.t0 = _context.sent;
                    _context.next = 7;
                    break;

                  case 6:
                    _context.t0 = "oops!";

                  case 7:
                    resp = _context.t0;

                    if (!isValid) {
                      _context.next = 14;
                      break;
                    }

                    _context.next = 11;
                    return regeneratorRuntime.awrap(resp.json());

                  case 11:
                    _context.t1 = _context.sent;
                    _context.next = 15;
                    break;

                  case 14:
                    _context.t1 = "oops indeed!";

                  case 15:
                    answer = _context.t1;

                    if (isValid && answer.ok) {
                      form.reset();
                      alert("You successfully contacted us!");
                    } else if (isValid) {
                      alert("Something went wrong!");
                    }

                    button.removeAttribute("disabled");

                  case 18:
                  case "end":
                    return _context.stop();
                }
              }
            });
          }, fakeTime);

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  });
}; // 7951225413:AAGje8ftyap6ekTfHz-K-oQGLZMyQ9g7__o
// -4965449774
// https://api.telegram.org/bot7951225413:AAGje8ftyap6ekTfHz-K-oQGLZMyQ9g7__o/sendMessage?chat_id=-4965449774&parse_mode=html&text=<b>Enter</b> <i>your</i> text here