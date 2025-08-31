"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var toast = {
  options: {
    autoclose: true,
    position: "left top",
    timeout: 3000
  },
  style: {
    position: "fixed",
    top: "20px",
    left: "20px",
    border: "1px solid #999",
    borderRadius: "4px",
    backgroundColor: "#eee",
    padding: "15px",
    width: "350px",
    zIndex: 10
  },
  types: {
    success: {
      backgroundColor: "#cbffcb",
      borderColor: "#004600"
    },
    error: {
      backgroundColor: "#ffcbcb",
      borderColor: "#560001"
    },
    warning: {
      backgroundColor: "#fff2cb",
      borderColor: "#b88100"
    },
    info: {
      backgroundColor: "#cbf8ff",
      borderColor: "#006192"
    }
  },
  init: function init() {
    var _this = this;

    Object.keys(this.types).forEach(function (type) {
      _this[type] = function (text) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _this.show(type, text, _objectSpread({}, _this.options, {}, opts));
      };
    });
  },
  show: function show(type, text, options) {
    var _this2 = this;

    var div = document.createElement("div");
    div.id = "my-toast";
    Object.entries(_objectSpread({}, this.style, {}, this.types[type])).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          prop = _ref2[0],
          value = _ref2[1];

      div.style[prop] = value;
    });
    var p = document.createElement("p");
    p.innerText = text;
    div.append(p);

    if (!options.autoclose) {
      var button = document.createElement("button");
      button.type = "button";
      button.innerText = "×";

      button.onclick = function () {
        _this2.hide(0);
      };

      div.append(button);
    }

    if (document.getElementById("my-toast")) {
      this.hide(0);
    }

    document.body.prepend(div); // const html = `<div id="my-toast" class="my-toast ${type}">
    //   <p>${text}</p>
    //   ${!this.options.autoclose ? '<button type="button" onclick="toast.hide(0)">&times;</button>' : ''}
    // </div>`
    // document.body.insertAdjacentHTML('afterbegin', html)

    options.autoclose && this.hide(options.timeout);
  },
  hide: function hide() {
    var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var el = document.getElementById("my-toast");
    if (el === null) return;

    if (timeout === 0) {
      el.remove();
      return;
    }

    setTimeout(function () {
      el.remove();
    }, timeout);
  }
};
toast.init();