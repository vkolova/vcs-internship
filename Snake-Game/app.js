(function() {

  var Board = function() {

    var canvas = document.querySelector('#render-target')
    var points = new PointsList()

    var level = 1
    var score = 0

    function clearBoard() {
      var ctx = canvas.getContext("2d")
      ctx.clearRect(0, 0, 600, 600)
    }

    function PointsList() {
      this.list = []
    }

    function add( point ) {
      return points.list.push( point )
    }

    function remove(point) {
      return points.slice(indexOf(point), 1)
    }

    function indexOf (obj) {
      return points.list.indexOf( obj )
    }

    function getRandomPosition() {
      return { x: Math.round(Math.floor(1 + Math.random() * (600 - 1)) / 15) * 15,
               y: Math.round(Math.floor(1 + Math.random() * (600 - 1)) / 15) * 15 }
    }

    function render() {
      var ctx = canvas.getContext("2d")
      ctx.fillStyle = "rgba(41, 41, 41, 0.7)"

      points.list.forEach(function(p) {
        ctx.fillRect(p.x, p.y, 15, 15)
      })
    }

    function updateStatistics() {
      document.querySelector('#level').innerHTML = this.level
      document.querySelector('#score').innerHTML = this.score
    }

    return {
      clear: clearBoard,
      add: add,
      render: render,
      random: getRandomPosition,
      indexOf: indexOf,
      remove: remove,
      level: level,
      score: score,
      updateStatistics: updateStatistics
    }
  }

  var Snake = function(board) {
    var head = board.random()
    var length = 3
    var dir = Math.floor(Math.random() * (Math.floor(3) -  Math.ceil(0))) +  Math.ceil(0)
      /*
      0 - up
      1 - right
      2 - down
      3 - left
      */
    document.addEventListener('keydown', function(event) {
      switch(event.keyCode) {
        case 38:
          dir = 2
          break
        case 39:
          dir = 1
          break
        case 40:
          dir = 0
          break
        case 37:
          dir = 3
          break
      }
    }, true)

    function motion() {
      var tail = length + 1
      var body = head

      while (tail-- >= 1) {
        board.add(body)
      }

      switch(dir) {
        case 0:
          head.y += 15
          break
        case 1:
          head.x += 15
          break
        case 2:
          head.y -= 15
          break
        case 3:
          head.x -= 15
          break
      }

      if ( head.x < 0 || head.x > 600 || head.y > 600 || head.y < 0 ) {
        console.log("GAME OVER")
        clearInterval(gameLoop)
      }
    }

    return {
      move: motion,
      }
  }

  var Apple = function(board) {
    var position = board.random()

    function newApple() {
      while (board.indexOf( position ) !== -1 ) {
        position = board.random()
      }
      board.add(position)
    }
    return {
      new: newApple
    }
  }

  var Game = (function() {
    function start() {
        var board = new Board()
        var snake = new Snake(board)
        var apple = new Apple(board).new()
        var timeout = 100
        console.log("Game started!")

        gameLoop = setInterval((function() {
          board.clear()
          snake.move()
          board.updateStatistics()
          board.render()

        }), Math.round(1000/timeout))
    }

    return {
      start: start
    }
  })()

  Game.start()

})()
