var Snake = (board, length = 5, dir = "right") => {
  let events = {}
  let snake = []
  var color = "rgba(0,180,224, 1)"

  var on = (eventName, callback) => {
    if ( events[eventName] === undefined ) events[eventName] = []
    events[eventName].push(callback)
  }

  var remove = (eventName) => {
    delete events[eventName]
  }

  var fire = (eventName, data) => {
    events[eventName].forEach((e) => e(data))
  }

  var handleDirection = (e) => {
    var key = e.keyCode

    if(key == 37 && dir != "right") setTimeout(() => {dir = "left" }, 30)
    else if(key == 38 && dir != "down") setTimeout(() => {dir = "up" }, 30)
    else if(key == 39 && dir != "left") setTimeout(() => {dir = "right" }, 30)
    else if(key == 40 && dir != "up") setTimeout(() => {dir = "down"}, 30)

    if(key) e.preventDefault()
  }

  var move = (dir, head) => {
    if (dir == "right") head.x++
    else if (dir == "left") head.x--
    else if (dir == "up") head.y--
    else if (dir == "down") head.y++

    return head
  }

  var init = () => {
    on("INIT", () => {
      for (var i = length - 1; i >= 0; i--) {
        board.fire("ADD", {x: i, y: 0, color})
        snake.push( {x: i, y: 0, color} )
      }
      console.log("Snake initialized")
    })

    on("MOVE", () => {
      var head = {x: snake[0].x, y: snake[0].y, color}

      document.onkeydown = handleDirection
      move(dir, head)

      var tail = snake.pop()
      board.remove(tail)

      tail.x = head.x
      tail.y = head.y
      tail.color = color

      snake.unshift(tail)
      board.add(tail)

      var head = tail
      if ( head.x < 0 || head.x*board.squareW > board.boardW || head.y*board.squareH > board.boardH || head.y < 0 ) {
        fire("GAME_OVER")
      }

      let apples = board.getApples()
      console.log(`apples: ${apples.length}`)

      if (apples.length > 0) {
        apples.forEach((a) => {
          if (a.x === head.x && a.y === head.y) {
            fire("COLLISION", { head, apple: a })
          }
        })
      }

      if (snake.indexOf(head) !== 0) fire("GAME_OVER")

    })

    on("SHORTEN", () => {
      var tail = snake.pop()
      board.remove(tail)
    })

    on("GROW", (point) => {
      snake.unshift(point)
    })

    on("COLLISION", (data) => {
      console.log("!!")
      fire("NEW_APPLE")

      let tail = data.head
      let apple = data.apple
      board.remove(apple)

      snake.length += apple.length
      if (snake.length === 0) fire("GAME_OVER")

      if (apple.length === -1) fire("SHORTEN")
      else fire("GROW", tail)
      board.fps += apple.fps

      board.handleScore()

    })

    on("GAME_OVER", () => {
      console.log("game over")
      document.querySelector('#game-status').style.display = "block"
      document.querySelector('#game-status').querySelector('span').innerHTML = "GAME OVER"
      document.querySelector('#game-status').querySelector('p').innerHTML = ""

      clearInterval(window.gameLoop)
    })

    fire("INIT")

  }
  return {
    init, fire, dir, length
  }
}

export default Snake
