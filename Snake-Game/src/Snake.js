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

  var fire = (eventName) => {
    events[eventName].forEach((e) => e())
  }

  var handleDirection = (e) => {
    var key = e.keyCode

    if(key == 37 && dir != "right") setTimeout(() => {dir = "left" }, 30)
    else if(key == 38 && dir != "down") setTimeout(() => {dir = "up" }, 30)
    else if(key == 39 && dir != "left") setTimeout(() => {dir = "right" }, 30)
    else if(key == 40 && dir != "up") setTimeout(() => {dir = "down"}, 30)

    if(key) e.preventDefault()
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

      var head = {x: snake[0].x, y: snake[0].y}
      var color = "rgb(0,180,224)"

      document.onkeydown = handleDirection

      if (dir == "right") head.x++
      else if (dir == "left") head.x--
      else if (dir == "up") head.y--
      else if (dir == "down") head.y++

      var tail = snake.pop()
      board.remove(tail)

      tail.x = head.x
      tail.y = head.y
      snake.unshift({x: head.x, y: head.y})

      board.add({x: head.x, y: head.y})

      var head = {x: tail.x, y: tail.y}

      if ( head.x < 0 || head.x*board.squareW > board.boardW || head.y*board.squareH > board.boardH || head.y < 0 ) {
        fire("GAME_OVER")
      }

      
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
    init, fire, dir
  }
}

export default Snake
