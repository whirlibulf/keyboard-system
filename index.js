var keycode = require("keycode");

function System(config) {
    this.config = config || "keyboard";
    this.keys = [];
}

System.prototype.init = function (engine) {
    var that,
        options;

    that = this;

    console.log("Keyboard system loaded");
    this.engine = engine;

    options = this.engine.config(this.config);
    if (!options.stop) {
        options.stop = [];
    }

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

    this.engine.use('keyboard', function (options) {
        return that.keys;
    });
};

module.exports = System;
