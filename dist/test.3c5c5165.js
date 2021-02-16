// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"HdJB":[function(require,module,exports) {
var string = "\n.skin * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  .skin *::before,\n  .skin *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  \n  body {\n    background-color: #ffe600;\n    min-height: 100vh;\n  }\n  \n  .skin {\n    position: relative;\n  }\n  .circle {\n    position: absolute;\n  \n    width: 40px;\n    height: 40px;\n    left: 50%;\n    top: 145px;\n    margin-left: -20px;\n    border-radius: 50%;\n    overflow: hidden;\n    z-index: 10;\n  }\n  .square {\n    width: 20px;\n    height: 20px;\n    position: absolute;\n    bottom: 25px;\n    right: 20px;\n    transform-origin: bottom right;\n    transform: rotate(45deg);\n    background-color: black;\n    z-index: 10;\n  }\n  @keyframes wave {\n    0% {\n      transform: rotate(0deg);\n    }\n    33% {\n      transform: rotate(10deg);\n    }\n    66% {\n      transform: rotate(-10deg);\n    }\n    100% {\n      transform: rotate(0deg);\n    }\n  }\n  .circle:hover {\n    animation: wave 200ms infinite linear;\n  }\n  .eye {\n    border: 3px solid black;\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    left: 50%;\n    margin-left: -32px;\n    top: 100px;\n    border-radius: 50%;\n    background-color: #2e2e2e;\n  }\n  .eye::before {\n    content: \"\";\n    display: block;\n    border: 3px solid black;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    background-color: white;\n    position: relative;\n    left: 4px;\n  }\n  .eye.left {\n    transform: translateX(-120px);\n  }\n  .eye.right {\n    transform: translateX(120px);\n  }\n  .mouth {\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left: 50%;\n    margin-left: -100px;\n    top: 170px;\n  }\n  .mouth .up .lip {\n    border: 3px solid black;\n    width: 100px;\n    height: 30px;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    position: relative;\n    z-index: 3;\n    background-color: #ffe600;\n  }\n  .mouth .up .lip.left {\n    border-radius: 0 0 0 50px;\n    transform: rotate(-20deg);\n  }\n  .mouth .up .lip::before {\n    content: \"\";\n    display: block;\n  \n    width: 7px;\n    height: 30px;\n    position: absolute;\n    bottom: 0;\n    background-color: #ffe600;\n  }\n  .mouth .up .lip.left::before {\n    right: -6px;\n  }\n  .mouth .up .lip.right {\n    border-radius: 0 0 50px 0;\n  \n    transform: rotate(20deg);\n    left: 50%;\n    margin-left: -50px;\n    transform: translateX(51px) rotate(20deg);\n    top: -30px;\n  }\n  .mouth .up .lip.right::before {\n    left: -6px;\n  }\n  .mouth .down {\n    height: 180px;\n    position: absolute;\n    top: 7px;\n    width: 100%;\n    overflow: hidden;\n  }\n  .mouth .down .yuan {\n    border: 2px solid black;\n    width: 150px;\n    height: 500px;\n    position: absolute;\n    left: 50%;\n    margin-left: -75px;\n    bottom: 0;\n    border-radius: 75px/250px;\n    background-color: #9b000a;\n    overflow: hidden;\n  }\n  .mouth .down .yuan .yuan1 {\n    border: 1px solid green;\n    height: 300px;\n    width: 200px;\n    position: absolute;\n    bottom: -155px;\n    left: 50%;\n    margin-left: -100px;\n    background-color: #ff485f;\n    border-radius: 50%;\n  }\n  .face {\n    position: absolute;\n    border: 3px solid black;\n    width: 88px;\n    height: 88px;\n    left: 50%;\n    margin-left: -44px;\n    top: 200px;\n    border-radius: 50%;\n    background-color: #ff0000;\n  }\n  .face.left {\n    transform: translateX(180px);\n  }\n  .face.right {\n    transform: translateX(-180px);\n  }\n";
var n = 1;
demo2.innerHTML = string.substr(0, n);
demo.innerText = string.substr(0, n);
var time = 100;

var run = function run() {
  n += 1;

  if (n > string.length) {
    window.clearInterval(id);
    return;
  }

  demo2.innerHTML = string.substr(0, n);
  demo.innerText = string.substr(0, n);
  demo.scrollTop = 999999; //demo.scrollHeight
};

var play = function play() {
  return setInterval(run, time);
};

var pause = function pause() {
  window.clearInterval(id);
};

var id = play();

btnPause.onclick = function () {
  pause();
};

btnPlay.onclick = function () {
  id = play();
};

btnSlow.onclick = function () {
  pause();
  time = 300;
  id = play();
};

btnNormal.onclick = function () {
  pause();
  time = 100;
  id = play();
};

btnFast.onclick = function () {
  pause();
  time = 0;
  id = play();
};
},{}]},{},["HdJB"], null)
//# sourceMappingURL=test.3c5c5165.js.map