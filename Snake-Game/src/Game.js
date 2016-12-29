var Game = (board, apple, snake) => {

  let events = {}

  var score = 0
  var fps = 10
  var $score = document.querySelector('#score')
  var $gameStatus = document.querySelector('#game-status')

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


  var init = () => {
    on("INIT", () => {
      console.log("Game initialized")
      board.init()
      apple.init()
      snake.init()

      window.gameLoop = setInterval(() => {
        board.fire("CLEAR_BOARD")
        board.fire("RENDER")
        snake.fire("MOVE")
      }, 1000 / fps)

    })


    /*START*/
    fire("INIT")

  }
  return {
    on, init, fire,
    score, fps
  }

}

export default Game
