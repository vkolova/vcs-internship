/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Apple = __webpack_require__(1);

	var _Apple2 = _interopRequireDefault(_Apple);

	var _Board = __webpack_require__(2);

	var _Board2 = _interopRequireDefault(_Board);

	var _Snake = __webpack_require__(3);

	var _Snake2 = _interopRequireDefault(_Snake);

	var _Game = __webpack_require__(4);

	var _Game2 = _interopRequireDefault(_Game);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var $gameStatus = document.querySelector('#game-status');

	$gameStatus.querySelector('span').innerHTML = "New Game";
	$gameStatus.querySelector('p').innerHTML = "press any key...";

	document.addEventListener("keypress", function () {
	  $gameStatus.style.display = "none";

	  var board = new _Board2.default();
	  var apple = new _Apple2.default(board);
	  var snake = new _Snake2.default(board);

	  var game = new _Game2.default(board, apple, snake);
	  game.init();
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Apple = function Apple(board) {
	  var apples = [];
	  var fruits = [{ score: 5, color: "#F71850", length: 1, fps: 1 }, { score: 10, color: "#22F253", length: 1, fps: 1 }, { score: 15, color: "#F0D524", length: 1, fps: 3 }, { score: 0, color: "#8CBFD1", length: -1, fps: -1 }, { score: -15, color: "#F0AC24", length: -1, fps: 1 }];
	  var events = {};

	  var on = function on(eventName, callback) {
	    if (events[eventName] === undefined) events[eventName] = [];
	    events[eventName].push(callback);
	  };

	  var remove = function remove(eventName) {
	    delete events[eventName];
	  };

	  var fire = function fire(eventName, data) {
	    events[eventName].forEach(function (e) {
	      return e(data);
	    });
	  };

	  var init = function init() {
	    on("NEW_APPLE", function () {
	      console.log("Apple initialized");

	      var pos = board.getCoordinates();

	      var apple = fruits[Math.floor(Math.random() * fruits.length)];
	      apple.x = pos.x;
	      apple.y = pos.y;

	      apples.push(apple);
	      board.fire("ADD", apple);
	    });

	    fire("NEW_APPLE");
	  };
	  return {
	    init: init, fire: fire
	  };
	};

	exports.default = Apple;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Board = function Board() {

	  var boardW = 1200;
	  var boardH = 600;
	  var pW = 80;
	  var pH = 40;
	  var squareW = boardW / pW;
	  var squareH = boardH / pH;

	  var points = [];
	  var events = {};

	  var $canvas = document.querySelector('#render-target');
	  var ctx = $canvas.getContext("2d");

	  var on = function on(eventName, callback) {
	    if (events[eventName] === undefined) events[eventName] = [];
	    events[eventName].push(callback);
	  };

	  var remove = function remove(eventName) {
	    delete events[eventName];
	  };

	  var fire = function fire(eventName, data) {
	    events[eventName].forEach(function (e) {
	      return e(data);
	    });
	  };

	  var getCoordinates = function getCoordinates() {
	    var pos = {
	      x: Math.round(Math.floor(1 + Math.random() * (pW - 1)) / squareW) * squareW,
	      y: Math.round(Math.floor(1 + Math.random() * (pH - 1)) / squareH) * squareH
	    };

	    while (points.some(function (e) {
	      return e.x === pos.x && e.y === pos.y;
	    })) {
	      pos = {
	        x: Math.round(Math.floor(1 + Math.random() * (pW - 1)) / squareW) * squareW,
	        y: Math.round(Math.floor(1 + Math.random() * (pH - 1)) / squareH) * squareH
	      };
	    }

	    return pos;
	  };

	  var indexOff = function indexOff(obj) {
	    var i = 0;
	    while (i < points.length) {
	      if (points[i].x === obj.x && points[i].y === obj.y) {
	        return i;
	      }
	      i++;
	    }
	    return -1;
	  };

	  var add = function add(point) {
	    return points.push(point);
	  };

	  var remove = function remove(point) {
	    return points.splice(indexOff({ x: point.x, y: point.y }), 1);
	  };

	  var getApples = function getApples() {
	    return points.filter(function (p) {
	      return p.hasOwnProperty("score");
	    });
	  };

	  var init = function init() {

	    on("INIT", function () {
	      console.log("Board initialized");
	    });

	    on("RENDER", function () {
	      points.forEach(function (p) {
	        // console.log(p)
	        ctx.fillStyle = p.color;
	        ctx.fillRect(p.x * squareW, p.y * squareH, squareW, squareH);

	        ctx.fillStyle = "rgba(48,48,48, 0.6)";
	        ctx.fillRect(p.x * squareW + 5, p.y * squareH + 5, squareW - 10, squareH - 10);
	      });
	    });

	    on("CLEAR_BOARD", function () {
	      ctx.clearRect(0, 0, boardW, boardH);
	    });

	    on("ADD", function (point) {
	      return points.push(point);
	    });

	    on("DELETE", function (point) {
	      return points.splice(indexOff(point), 1);
	    });

	    fire("INIT");
	  };

	  return {
	    init: init, fire: fire,
	    getCoordinates: getCoordinates,
	    squareW: squareW, squareH: squareH,
	    boardW: boardW, boardH: boardH, add: add, remove: remove,
	    getApples: getApples
	  };
	};

	exports.default = Board;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Snake = function Snake(board) {
	  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
	  var dir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "right";

	  var events = {};
	  var snake = [];
	  var color = "rgba(0,180,224, 1)";

	  var on = function on(eventName, callback) {
	    if (events[eventName] === undefined) events[eventName] = [];
	    events[eventName].push(callback);
	  };

	  var remove = function remove(eventName) {
	    delete events[eventName];
	  };

	  var fire = function fire(eventName, data) {
	    events[eventName].forEach(function (e) {
	      return e(data);
	    });
	  };

	  var handleDirection = function handleDirection(e) {
	    var key = e.keyCode;

	    if (key == 37 && dir != "right") setTimeout(function () {
	      dir = "left";
	    }, 30);else if (key == 38 && dir != "down") setTimeout(function () {
	      dir = "up";
	    }, 30);else if (key == 39 && dir != "left") setTimeout(function () {
	      dir = "right";
	    }, 30);else if (key == 40 && dir != "up") setTimeout(function () {
	      dir = "down";
	    }, 30);

	    if (key) e.preventDefault();
	  };

	  var move = function move(dir, head) {
	    if (dir == "right") head.x++;else if (dir == "left") head.x--;else if (dir == "up") head.y--;else if (dir == "down") head.y++;

	    return head;
	  };

	  var init = function init() {
	    on("INIT", function () {
	      for (var i = length - 1; i >= 0; i--) {
	        board.fire("ADD", { x: i, y: 0, color: color });
	        snake.push({ x: i, y: 0, color: color });
	      }
	      console.log("Snake initialized");
	    });

	    on("MOVE", function () {
	      var head = { x: snake[0].x, y: snake[0].y, color: color };

	      document.onkeydown = handleDirection;
	      move(dir, head);

	      var tail = snake.pop();
	      board.remove(tail);

	      tail.x = head.x;
	      tail.y = head.y;
	      tail.color = color;

	      snake.unshift(tail);
	      board.add(tail);

	      var head = tail;
	      if (head.x < 0 || head.x * board.squareW > board.boardW || head.y * board.squareH > board.boardH || head.y < 0) {
	        fire("GAME_OVER");
	      }

	      var apples = board.getApples();
	      console.log("apples: " + apples.length);

	      if (apples.length > 0) {
	        apples.forEach(function (a) {
	          if (a.x === head.x && a.y === head.y) {
	            fire("COLLISION", { head: head, apple: a });
	          }
	        });
	      }

	      if (snake.indexOf(head) !== 0) fire("GAME_OVER");
	    });

	    on("SHORTEN", function () {
	      var tail = snake.pop();
	      board.remove(tail);
	    });

	    on("GROW", function (point) {
	      snake.unshift(point);
	    });

	    on("COLLISION", function (data) {
	      console.log("!!");
	      fire("NEW_APPLE");

	      var tail = data.head;
	      var apple = data.apple;
	      board.remove(apple);

	      snake.length += apple.length;
	      if (snake.length === 0) fire("GAME_OVER");

	      if (apple.length === -1) fire("SHORTEN");else fire("GROW", tail);
	      board.fps += apple.fps;

	      board.handleScore();
	    });

	    on("GAME_OVER", function () {
	      console.log("game over");
	      document.querySelector('#game-status').style.display = "block";
	      document.querySelector('#game-status').querySelector('span').innerHTML = "GAME OVER";
	      document.querySelector('#game-status').querySelector('p').innerHTML = "";

	      clearInterval(window.gameLoop);
	    });

	    fire("INIT");
	  };
	  return {
	    init: init, fire: fire, dir: dir, length: length
	  };
	};

	exports.default = Snake;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Game = function Game(board, apple, snake) {

	  var events = {};

	  var score = 0;
	  var fps = 10;
	  var $score = document.querySelector('#score');
	  var $gameStatus = document.querySelector('#game-status');

	  var on = function on(eventName, callback) {
	    if (events[eventName] === undefined) events[eventName] = [];
	    events[eventName].push(callback);
	  };

	  var remove = function remove(eventName) {
	    delete events[eventName];
	  };

	  var fire = function fire(eventName, data) {
	    events[eventName].forEach(function (e) {
	      return e(data);
	    });
	  };

	  var init = function init() {
	    on("INIT", function () {
	      console.log("Game initialized");
	      board.init();
	      apple.init();
	      snake.init();

	      window.gameLoop = setInterval(function () {
	        board.fire("CLEAR_BOARD");
	        board.fire("RENDER");
	        snake.fire("MOVE");
	      }, 1000 / fps);
	    });

	    /*START*/
	    fire("INIT");
	  };
	  return {
	    on: on, init: init, fire: fire,
	    score: score, fps: fps
	  };
	};

	exports.default = Game;

/***/ }
/******/ ]);