var rgb = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
};

var wb = {
    white: "#FFFFFF",
    black: "#000000"
};

var colors = Object.assign(rgb, wb);


/***********************************/
// Test 1.1
// Al finalizar la ejecución las variables tendrían estos valores.
// rgb > { red: "#FF0000", green: "#00FF00", blue: "#0000FF", white: "#FFFFFF", black: "#000000" }
// wb >  { white: "#FFFFFF", black: "#000000" }
// colors > { red: "#FF0000", green: "#00FF00", blue: "#0000FF", white: "#FFFFFF", black: "#000000" }
/***********************************/

/***********************************/
// Test 1.2

//Cambiaríamos los parámetros de la función assign de esta manera.
var colors = Object.assign({},rgb, wb);

/***********************************/

/***********************************/
// Test 1.3
// Para Internet Explorer utilizaríamos este Polyfill para solucionar que no funcione assign en este navegador. El código quedaría así.


if (typeof Object.assign != 'function') {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, "assign", {
      value: function assign(target, varArgs) { // .length of function is 2
        'use strict';
        if (target == null) { // TypeError if undefined or null
          throw new TypeError('Cannot convert undefined or null to object');
        }
  
        var to = Object(target);
  
        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];
  
          if (nextSource != null) { // Skip over if undefined or null
            for (var nextKey in nextSource) {
              // Avoid bugs when hasOwnProperty is shadowed
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
        return to;
      },
      writable: true,
      configurable: true
    });
}

var rgb = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
};

var wb = {
    white: "#FFFFFF",
    black: "#000000"
};

var colors = Object.assign(rgb, wb);

/***********************************/
