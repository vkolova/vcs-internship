var Board = () => {

  const boardW = 1200
  const boardH = 600
  const pW = 80
  const pH = 40
  const squareW = boardW / pW
  const squareH = boardH / pH

  let points = []
  let events = {}

  let $canvas = document.querySelector('#render-target')
  let ctx = $canvas.getContext("2d")

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

  var getCoordinates = () => {
    let pos = {
      x: Math.round(Math.floor(1 + Math.random() * (pW - 1)) / squareW) * squareW,
      y: Math.round(Math.floor(1 + Math.random() * (pH - 1)) / squareH) * squareH
    }

    while (points.some((e) => {
      return e.x === pos.x && e.y === pos.y
    })) {
      pos = {
        x: Math.round(Math.floor(1 + Math.random() * (pW - 1)) / squareW) * squareW,
        y: Math.round(Math.floor(1 + Math.random() * (pH - 1)) / squareH) * squareH
      }
    }

    return pos
  }

  var indexOff = (obj) => {
    let i = 0
    while(i < points.length) {
      if( points[i].x === obj.x && points[i].y === obj.y ) {
        return i
      }
      i++
    }
    return -1
  }

  var add = (point) => {
    return points.push(point)
  }

  var remove = (point) => {
   return points.splice(indexOff({x: point.x, y: point.y}), 1)
  }

  var getApples = () => {
    return points.filter((p) => {
      return p.hasOwnProperty("score")
    })
  }


  var init = () => {

    on("INIT", () => {
      console.log("Board initialized")
    })

    on("RENDER", () => {
      points.forEach((p) => {
        // console.log(p)
        ctx.fillStyle = p.color
        ctx.fillRect(p.x*squareW, p.y*squareH, squareW, squareH)

        ctx.fillStyle = "rgba(48,48,48, 0.6)"
        ctx.fillRect(p.x*squareW+5, p.y*squareH+5, squareW-10, squareH-10)
      })
    })

    on("CLEAR_BOARD", () => {
      ctx.clearRect(0, 0, boardW, boardH)
    })

    on("ADD", (point) => {
      return points.push(point)
    })

    on("DELETE", (point) => {
      return points.splice(indexOff(point), 1)
    })

    fire("INIT")

  }

  return {
    init, fire,
    getCoordinates,
    squareW, squareH,
    boardW, boardH, add, remove,
    getApples: getApples
  }
}


export default Board
