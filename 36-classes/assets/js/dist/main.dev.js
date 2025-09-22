"use strict";

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
}