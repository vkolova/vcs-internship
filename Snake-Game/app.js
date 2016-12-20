(function() {

  var Board = function(width, heigh) {
    boardW = width
    boardH = heigh
    squareW = boardW / 40
    squareH = boardH / 40

    var canvas = document.querySelector('#render-target')
    var snake = new PointsList()
    var apples = new PointsList()

    var score = 0
    var timeout = 5
    var $score = document.querySelector('#score')
    var $game = document.querySelector('#game')

    function clearBoard() {
      var ctx = canvas.getContext("2d")
      ctx.clearRect(0, 0, boardW, boardH)
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
      return { x: Math.round(Math.floor(1 + Math.random() * (boardW - 1)) / squareW) * squareW,
               y: Math.round(Math.floor(1 + Math.random() * (boardH - 1)) / squareH) * squareH}
    }

    function render() {
      var ctx = canvas.getContext("2d")

      ctx.fillStyle = "rgb(41, 41, 41)"
      snake.list.forEach(function(p) {
        ctx.fillRect(p.x, p.y, squareW, squareH)
      })

      apples.list.forEach(function(p) {
        ctx.fillStyle = p.color
        ctx.fillRect(p.x, p.y, squareW, squareH)
      })
    }

    function moreApples() {
      return !apples.list.length
    }

    function gameOver() {
      clearInterval(gameLoop)
      $game.innerHTML = "GAME OVER"
    }

    function handleScore(sc) {
      score += sc || 0
      if (score < 0) console.log("!!!")
      $score.innerHTML = score

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
      $game: $game,
      handleScore: handleScore
    }
  }

  var Snake = function(board, length) {
    var length = length || 5
    var dir = "right"

    //Init snake
    for (var i = length - 1; i >= 0; i--) {
      board.addPoint( {x: i*squareW, y: 0} )
    }

    function motion() {
      //Update the position of the snake
      var head = board.getSnakeHead()

      //Get the directions
      document.onkeydown = handleDirection
      move(head, dir)
      //Move snake
      board.popPoint()
      board.unshiftPoint(head)

      //Wall Collision
      if ( head.x < 0 || head.x > boardW || head.y > boardH || head.y < 0 ) {
        board.gameOver()
      }

      apple.collide(head)

    }

    function handleDirection(e) {
      var key = e.keyCode

      if(key == 37 && dir != "right") setTimeout(function() {dir = "left" }, 30)
      else if(key == 38 && dir != "down") setTimeout(function() {dir = "up" }, 30)
      else if(key == 39 && dir != "left") setTimeout(function() {dir = "right" }, 30)
      else if(key == 40 && dir != "up") setTimeout(function() {dir = "down" }, 30)

      if(key) e.preventDefault()
    }

    function move(head, dir) {
      if (dir == "right") head.x += squareW
      else if (dir == "left") head.x -= squareW
      else if (dir == "up") head.y -= squareH
      else if (dir == "down") head.y += squareH
    }

    return {
        move: motion,
        length: length,
      }
  }

  var Apple = function(board) {
    var position

    var apples = [
      { score: 5, color: "#F71850" , length: 1, timeout: 1 },
      { score: 10, color: "#22F253", length: 1, timeout: 1 },
      { score: 15, color: "#F0D524", length: 1, timeout: 3 },
      { score: 0, color: "#474747", length: -1, timeout: -1 },
      { score: -15, color: "#F0AC24" , length: -1, timeout: 1 },
    ]

    function newApple() {
      var pos = board.random()
      while (board.indexOfApple( pos ) > -1 ) {
        pos = board.random()
      }

      var apple = apples[Math.floor(Math.random() * apples.length)]
      apple.x = pos.x
      apple.y = pos.y
      board.addApple( apple )

    }

    function collide(head) {
      if (board.indexOfApple(head) > -1) {
        var tail = head
        var apple = board.getApple(head)

        board.handleScore(apple.score)

        snake.length += apple.length
        if (snake.length == 0) board.gameOver()

        if (apple.length == -1)
          board.popPoint()
        else
          board.unshiftPoint(tail)

        board.timeout += apple.timeout

        board.handleScore()
        board.removeApple(head)

      } else if (board.indexOfPoint(head) > -1 ) {
        board.gameOver()
      }
    }

    return {
      new: newApple,
      collide: collide
    }
  }

  var Game = (function() {

    function start() {
        var board = new Board(600, 600)
        board.handleScore()

        apple = new Apple(board)
        snake = new Snake(board)
        apple.new()

        gameLoop = setInterval(game, 1000 / board.timeout)

        function game() {
          board.clear()
          snake.move()
          board.render()

          if (board.moreApples()) {
            clearInterval(gameLoop)
            gameLoop = setInterval(game, 1000 / board.timeout)
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
