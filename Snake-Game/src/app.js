import Apple from './Apple'
import Board from './Board'
import Snake from './Snake'
import Game from './Game'

let $gameStatus = document.querySelector('#game-status')

$gameStatus.querySelector('span').innerHTML = "New Game"
$gameStatus.querySelector('p').innerHTML = "press any key..."

document.addEventListener("keypress", () => {
  $gameStatus.style.display = "none"

  var board = new Board()
  var apple = new Apple(board)
  var snake = new Snake(board)

  var game = new Game(board, apple, snake)
  game.init()


})
