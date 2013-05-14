var keycode = require("keycode");

function System(options) {
  this.keys = [];

  document.addEventListener("keydown", function (e) {
    e.preventDefault();
    e.stopPropagation();

    this.keys[keycode(e.keyCode || e.which)] = true;
  });

  document.addEventListener("keyup", function (e) {
    e.preventDefault();
    e.stopPropagation();

    this.keys[keycode(e.keyCode || e.which)] = false;
  });
}

System.prototype.init = function (engine) {
  var that = this;

  console.log("Keyboard system loaded");
  this.engine = engine;

  this.engine.addComponent('keyboard', function (options) {
    return that.keys;
  });
};

module.exports = System;
