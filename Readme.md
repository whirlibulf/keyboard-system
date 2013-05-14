
# keyboard-system

Keyboard input system for the whirlibulf game engine.

## Installation

    $ component install whirlibulf/keyboard-system

## Usage

This system automatically adds a `keyboard` component to the game engine.

Register the system:

    var Keyboard = require('keyboard-system');
    game.addSystem(new Keyboard());

The system does not take any options.

Currently the system automatically prevents propagation of all keyboard events.

The component is a map of key names to boolean pressed statuses.

    game.addComponentToObject('object id', 'keyboard');

    var keyboard = game.getComponentInstance('object id', 'keyboard');

    //if space bar is pressed, then keyboard['space'] === true
    //if the letter 'a' is pressed, then keyboard['a'] === true
    //if the number 6 is pressed, then keyboard['6'] === true

**IMPORTANT**: If a key is not pressed, then `keyboard['key']` can be either `false` OR `undefined`.

If you want to check for `shift + a` (capital A), then you need to make sure both
`keyboard['shift']` and `keyboard['a']` are `true`.

List of special key names:

* backspace
* tab
* enter
* shift
* ctrl
* alt
* caps lock
* esc
* space
* page up
* page down
* end
* home
* left
* up
* right
* down
* insert
* delete
* windows
* num lock
* scroll lock
* ;
* =
* ,
* -
* .
* /
* `
* [
* \
* ]
* '
* numpad [0-9]
* f[1-12]


## License

  MIT
