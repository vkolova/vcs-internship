(function() {

  var Board = function() {

    var canvas = document.querySelector('#render-target')
    var snake = new PointsList()
    var apples = new PointsList()

    var score = 0
    var timeout = 5
    var $score = document.querySelector('#score')
    var $game = document.querySelector('#game')

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
      return snake.list.push( point )
    }

    function removeApple(point) {
      return apples.list.splice(indexOfApple(point), 1)
    }

    function removePoint(point) {
      return snake.list.splice(indexOfPoint(point), 1)
    }

    function popPoint() {
      return snake.list.pop()
    }

    function unshiftPoint ( point ) {
      return snake.list.unshift( point )
    }

    function indexOfPoint (obj) {
      var i = 1
      while(i < snake.list.length) {
        if( snake.list[i].x === obj.x && snake.list[i].y === obj.y ) {
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

    function getSnakeHead() {
      return  Object.assign({}, snake.list[0])
    }

    function getApple( obj ) {
      var i = 0
      while(i < apples.list.length) {
        if( apples.list[i].x === obj.x && apples.list[i].y === obj.y ) {
          return apples.list[i]
        }
        i++
      }
    }

    function getRandomPosition() {
      return { x: Math.round(Math.floor(1 + Math.random() * (600 - 1)) / 15) * 15,
               y: Math.round(Math.floor(1 + Math.random() * (600 - 1)) / 15) * 15}
    }

    function render() {
      var ctx = canvas.getContext("2d")

      ctx.fillStyle = "rgb(41, 41, 41)"
      snake.list.forEach(function(p) {
        ctx.fillRect(p.x, p.y, 15, 15)
      })

      ctx.fillStyle = "rgb(245, 37, 0)"
      apples.list.forEach(function(p) {
        ctx.fillRect(p.x, p.y, 15, 15)
      })
    }

    function moreApples() {
      return !apples.list.length
    }

    function gameOver() {
      clearInterval(gameLoop)
      $game.innerHTML = "GAME OVER"
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
      score: score,
      timeout: timeout,
      moreApples: moreApples,
      getSnakeHead: getSnakeHead,
      popPoint: popPoint,
      unshiftPoint: unshiftPoint,
      getApple: getApple,
      gameOver: gameOver,
      $score: $score,
      $game: $game
    }
  }

  var Snake = function(board) {
    var length = 5
    var dir = "right"

    //Init snake
    for (var i = length - 1; i >= 0; i--) {
      board.addPoint( {x: i*15, y: 0} )
    }

    function motion() {
      //Update the position of the snake
      var head = board.getSnakeHead()

      //Get the directions
      document.onkeydown = function(e) {
        var key = e.keyCode

        if(key == 37 && dir != "right") setTimeout(function() {dir = "left" }, 30)
        else if(key == 38 && dir != "down") setTimeout(function() {dir = "up" }, 30)
        else if(key == 39 && dir != "left") setTimeout(function() {dir = "right" }, 30)
        else if(key == 40 && dir != "up") setTimeout(function() {dir = "down" }, 30)

        if(key) e.preventDefault()
      }

      if (dir == "right") head.x += 15
      else if (dir == "left") head.x -= 15
      else if (dir == "up") head.y -= 15
      else if (dir == "down") head.y += 15

      //Move snake
      board.popPoint()
      board.unshiftPoint(head)

      //Wall Collision
      if ( head.x < 0 || head.x > 600 || head.y > 600 || head.y < 0 ) {
        board.gameOver()
      }

      //Apple collision
      if (board.indexOfApple(head) > -1) {
        var tail = head
        var apple = board.getApple(head)
        if (apple.e == 0) {
          length++
          board.unshiftPoint(tail)
                  }
        else if (apple.e == 1) {
          length--
          board.popPoint()
          if (length == 0) board.gameOver()
        } else if (apple.e == 2 && board.timeout <= 45) {
          board.timeout++
        } else if (apple.e == 3 && board.timeout > 1) {
          board.timeout--
        }

        board.score += 10
        board.$score.innerHTML = board.score
        board.removeApple(head)
      } else if (board.indexOfPoint(head) > -1) {
        board.gameOver()
      }
    }

    return {
      move: motion
      }
  }

  var Apple = function(board) {
    var position

    function newApple() {
      var pos = board.random()
      while (board.indexOfApple( pos ) > -1 ) {
        pos = board.random()
      }

      var energy = Math.floor(Math.random() * 3)
      board.addApple( {x: pos.x, y: pos.y, e: energy} )

      if (energy === 1 && !board.moreApples()) newApple()
    }
    return {
      new: newApple
    }
  }

  var Game = (function() {
    function start() {
        var board = new Board()
        board.$score.innerHTML = board.score
        var snake = new Snake(board)
        var apple = new Apple(board)
        apple.new()

        gameLoop = setInterval(game, 1000/board.timeout)

        function game() {
          board.clear()
          snake.move()
          board.render()

          if (board.moreApples()) {
            clearInterval(gameLoop)
            gameLoop = setInterval(game, 1000/board.timeout)
            apple.new()
          }
        }
    }

    return {
      start: start,
      game: start.game
    }
  })()

  Game.start()

})()
