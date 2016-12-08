(function() {

// 40 positions
// 15px each apple
// 15px snake width
// observer => apple
// subject => board

  function ApplesList() {
    this.applesList = []
  }
  ApplesList.prototype.add = function( obj ) {
    return this.applesList.push( obj )
  }
  ApplesList.prototype.count = function() {
    return this.applesList.length
  }
  ApplesList.prototype.get = function( index ) {
    if( index > -1 && index < this.applesList.length ) {
      return this.applesList[ index ]
    }
  }
  ApplesList.prototype.indexOf = function( obj, startIndex ) {
    var i = startIndex
    while( i < this.applesList.length ) {
      if( this.applesList[i] === obj ) {
        return i
      }
      i++
    }
    return -1
  }
  ApplesList.prototype.removeAt = function( index ) {
    this.applesList.splice( index, 1 )
  }

  function Board() {
    this.apples = new ApplesList()
  }

  Board.prototype.addApple = function( apple ) {
    this.apples.add( apple )
  }

  Board.prototype.removeApple = function( apple ) {
    this.apples.removeAt( this.apples.indexOf( apple, 0 ) )
  }
  Board.prototype.notify = function( context ) {
    var appleCount = this.apples.count()
    for( var i = 0; i < appleCount; i++ ) {
      this.apples.get(i).update( context )
    }
  }

  appleTypes = {
    // 0 - black/silver ; simple apple
    // 1 - green
    // 2 - red
    0: {
        color: "rgb(41, 41, 41)",
        energy: 1
      },
    1: {
        color: "rgb(62, 214, 54)",
        energy: 2
      },
    2: {
      color: "rgb(240, 9, 29)",
      energy: 3
    }
  }

  function Apple() {
    this.x = getRandomPosition()
    this.y = getRandomPosition()
    this.type = Math.floor(Math.random() * (Math.floor(2) -  Math.ceil(0))) +  Math.ceil(0)
  }

  function Snake() {
    this.length = 3
    this.x = getRandomPosition()
    this.y = getRandomPosition()
    this.color = "rgb(4,102,38)"
    this.direction = Math.floor(Math.random() * (Math.floor(3) -  Math.ceil(0))) +  Math.ceil(0)
  }

  function drawSnake(snake) {
    canvas = document.getElementById('render-target')
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d")

      ctx.fillStyle = snake.color
      ctx.fillRect (snake.x, snake.y, 15, 15)
    }
  }

  function addNewApple( board ) {
    var coordinates = {}
    //...
    var apple = new Apple()
    drawApple( apple )

  }

  function drawApple( apple ) {

    canvas = document.getElementById('render-target')
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d")
      ctx.fillStyle = appleTypes[apple.type].color
      ctx.fillRect (apple.x, apple.y, 15, 15)
    }
  }


  function getRandomPosition() {
    return Math.round(Math.floor(1 + Math.random() * (600 - 1)) / 15) * 15
  }

  function User() {
    this.level = 1
    this.score = 0
  }

  function updateStatistics(user) {

    document.getElementById('level').innerHTML = user.level
    document.getElementById('score').innerHTML = user.score
  }

  function Init() {
    this.snake = new Snake
    this.user = new User()
    drawSnake(this.snake)
    addNewApple()
  }
  function clearBoard() {
    canvas = document.getElementById('render-target')
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d")
      ctx.clearRect(0, 0, 600, 600)
    }
  }

  function Game() {
    var game = new Init()
    // while(1) {
    setInterval(function() {
      updateStatistics(game.user)
      clearBoard()
      drawSnake(game.snake)
      addNewApple()

    }, 3000)
    // }

  }

  Game()


})()
