"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Task 1
var Circle =
/*#__PURE__*/
function () {
  function Circle(radius) {
    _classCallCheck(this, Circle);

    this.radius = radius;
  }

  _createClass(Circle, [{
    key: "getRadius",
    value: function getRadius() {
      return this.radius;
    }
  }, {
    key: "setRadius",
    value: function setRadius(radius) {
      this.radius = radius;
    }
  }, {
    key: "calcCircleArea",
    value: function calcCircleArea() {
      var area = Math.PI * this.radius * this.radius;
      return area.toFixed(2);
    }
  }, {
    key: "caclCircleDiametr",
    value: function caclCircleDiametr() {
      var diametr = this.radius * 2;
    }
  }, {
    key: "calcCircleLength",
    value: function calcCircleLength() {
      var length = 2 * Math.PI * this.radius;
      return length.toFixed(2);
    }
  }]);

  return Circle;
}();

var circle = new Circle(0);

function getCircleInfo(select) {
  var input = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  switch (select) {
    case 1:
      return circle.getRadius();

    case 2:
      if (input) return "Enter a number!";
      circle.setRadius(document.getElementById("task_1_input").value);
      return "Circle radius successfully set!";

    case 3:
      return circle.caclCircleDiametr();

    case 4:
      return circle.calcCircleArea();

    case 5:
      return circle.calcCircleLength();

    default:
      return "Select an option!";
  }
} //  Task 2


var Marker =
/*#__PURE__*/
function () {
  function Marker(color, ink) {
    _classCallCheck(this, Marker);

    this.color = color;
    this.ink = ink;
  }

  _createClass(Marker, [{
    key: "inputMarkerText",
    value: function inputMarkerText(text) {
      document.getElementById("task_2_output").style.color = this.color;
      var result = "";

      for (var i = 0; this.ink && i < text.length; i++) {
        if (text[i] === " ") {
          result += " ";
          continue;
        }

        result += text[i];
        this.ink -= 0.5;
      }

      if (!this.ink) {
        result += "<div style='color: black;'>Marker's ink is empty!</div>";
      }

      return result;
    }
  }]);

  return Marker;
}();

var RefillableMarker =
/*#__PURE__*/
function (_Marker) {
  _inherits(RefillableMarker, _Marker);

  function RefillableMarker() {
    _classCallCheck(this, RefillableMarker);

    return _possibleConstructorReturn(this, _getPrototypeOf(RefillableMarker).apply(this, arguments));
  }

  _createClass(RefillableMarker, [{
    key: "refill",
    value: function refill() {
      this.ink = 100;
    }
  }, {
    key: "callRefill",
    value: function callRefill() {
      this.refill();
      return "Marker's ink has been refilled!";
    }
  }]);

  return RefillableMarker;
}(Marker);

window.addEventListener("load", function () {
  var marker = new RefillableMarker("red", 100);
  var output = document.getElementById("task_2_output");
  document.getElementById("task_2_button1").addEventListener("click", function () {
    output.innerHTML = marker.inputMarkerText(document.getElementById("task_2_input").value);
  });
  document.getElementById("task_2_button2").addEventListener("click", function () {
    output.style.color = "black";
    output.innerHTML = marker.callRefill();
  });
}); // Task 3

var Employee = function Employee(name, position) {
  _classCallCheck(this, Employee);

  this.name = name;
  this.position = position;
};

var EmpTalbe =
/*#__PURE__*/
function () {
  function EmpTalbe(emplArr) {
    _classCallCheck(this, EmpTalbe);

    this.emplArr = emplArr;
  }

  _createClass(EmpTalbe, [{
    key: "getHtml",
    value: function getHtml() {
      var html = "<table class=\"table table-striped table-bordered table-hover\">\n        <caption>List of employees</caption>\n        <thead class=\"table-dark\">\n            <tr>\n                <th role=\"button\" tabindex=\"0\" scope=\"col\">#</th>\n                <th role=\"button\" tabindex=\"0\" scope=\"col\">Name</th>\n                <th role=\"button\" tabindex=\"0\" scope=\"col\">Position</th>\n            </tr>\n        </thead>\n        <tbody>";
      this.emplArr.forEach(function (employee, index) {
        html += "\n       <tr>\n          <th scope=\"row\">".concat(index + 1, "</th>\n          <td>").concat(employee.name, "</td>\n          <td>").concat(employee.position, "</td>\n      </tr>\n      ");
      });
      html += "\n        </tbody>\n    </table>\n    ";
      return html;
    }
  }]);

  return EmpTalbe;
}();

var employees = [new Employee("Bob", "Vibe control"), new Employee("Alice", "HR"), new Employee("Travis", "CEO"), new Employee("Michael", "Product Manager"), new Employee("Trevor", "Quality Controll")];
document.getElementById("task_3_button").addEventListener("click", function () {
  var emplTable = new EmpTalbe(employees).getHtml();
  document.getElementById("task_3_output").innerHTML = emplTable;
});