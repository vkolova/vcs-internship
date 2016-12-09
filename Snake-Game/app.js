(function() {

  var Board = function() {

    var canvas = document.querySelector('#render-target')
    var points = new PointsList()
    var apples = new PointsList()

    var level = 1
    var score = 0
    var timeout = 1

    function clearBoard() {
      var ctx = canvas.getContext("2d")
      ctx.clearRect(0, 0, 600, 600)
    }

    function PointsList() {
      this.list = []
    }

    function addApple( point ) {
      return apples.list.push( point )
    }

    function addPoint( point ) {
      return points.list.push( point )
    }

    function removeApple(point) {
      return apples.list.splice(indexOfApple(point), 1)
    }
    function removePoint(point) {
      return points.list.splice(indexOfPoint(point), 1)
    }

    function indexOfPoint (obj) {
      var i = 0
      while(i < points.list.length) {
        if( points.list[i].x === obj.x && points.list[i].y === obj.y ) {
          return i
        }
        i++
      }
      return -1
    }
    function indexOfApple (obj) {
      var i = 0
      while(i < apples.list.length) {
        if( apples.list[i].x === obj.x && apples.list[i].y === obj.y ) {
          return i
        }
        i++
      }
      return -1
    }

    function getRandomPosition() {
      return { x: Math.round(Math.floor(1 + Math.random() * (600 - 1)) / 15) * 15,
               y: Math.round(Math.floor(1 + Math.random() * (600 - 1)) / 15) * 15 }
    }

    function render() {
      var ctx = canvas.getContext("2d")
      ctx.fillStyle = "rgb(41, 41, 41)"

      points.list.forEach(function(p) {
        ctx.fillRect(p.x, p.y, 15, 15)
      })

      ctx.fillStyle = "rgb(245, 37, 0)"
      apples.list.forEach(function(p) {
        ctx.fillRect(p.x, p.y, 15, 15)
      })
    }

    function updateStatistics() {
      document.querySelector('#level').innerHTML = this.level
      document.querySelector('#score').innerHTML = this.score
      // if (this.score%100 === 0) {
      //   this.level += 1
      //   this.timeout += 1
      // }
    }

    function moreApples() {
      return !apples.list.length
    }
    return {
      clear: clearBoard,
      addPoint: addPoint,
      addApple: addApple,
      render: render,
      random: getRandomPosition,
      indexOfApple: indexOfApple,
      indexOfPoint: indexOfPoint,
      removePoint: removePoint,
      removeApple: removeApple,
      level: level,
      score: score,
      updateStatistics: updateStatistics,
      moreApples: moreApples
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

      if (board.indexOfApple(head) > -1) {
        board.score = board.score + 15
        console.log(head)
        board.removeApple(head)
      }

      while (tail-- >= 1) {
        board.addPoint(head)
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
      head: head
      }
  }

  var Apple = function(board) {
    var position

    function newApple() {
      position = board.random()
      while (board.indexOfApple( position ) > -1 ) {
        position = board.random()
      }
      board.addApple(position)
    }
    return {
      new: newApple
    }
  }

  var Game = (function() {
    function start() {
        var board = new Board()
        var snake = new Snake(board)
        var apple = new Apple(board)
        apple.new()

        gameLoop = setInterval((function() {
          board.clear()
          snake.move()
          board.updateStatistics()
          board.render()
          if (board.moreApples()) {
            apple.new()
          }
        }), Math.round(1000/board.timeout))
    }

    return {
      start: start
    }
  })()

  Game.start()

})()
