var keycode = require("keycode");

function System(options) {
  this.keys = [];

  document.addEventListener("keydown", function (e) {
    this.keys[keycode(e.keyCode)] = true;
  });

  document.addEventListener("keyup", function (e) {
    this.keys[keycode(e.keyCode)] = false;
  });
}

System.prototype.init = function (engine) {
  var that;
  that = this;

  console.log("Keyboard system loaded");
  this.engine = engine;

  this.engine.addComponent('keyboard', function (options) {
    return that.createComponent(options);
  });
};

System.prototype.createComponent = function (options) {
  return this.keys;
};
