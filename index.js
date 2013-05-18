var keycode = require("keycode");

function System(options) {
  var that = this;
  this.keys = [];

  options = options || {};
  options.stop = options.stop || [];

  document.addEventListener("keydown", function (e) {
    var key = keycode(e.keyCode || e.which);

    if (options.stop.indexOf(key) !== -1) {
      e.preventDefault();
      e.stopPropagation();
    }

    that.keys[key] = true;
  });

  document.addEventListener("keyup", function (e) {
    var key = keycode(e.keyCode || e.which);

    if (options.stop.indexOf(key) !== -1) {
      e.preventDefault();
      e.stopPropagation();
    }

    that.keys[key] = false;
  });
}

System.prototype.init = function (engine) {
  var that = this;

  console.log("Keyboard system loaded");
  this.engine = engine;

  this.engine.use('keyboard', function (options) {
    return that.keys;
  });
};

module.exports = System;
