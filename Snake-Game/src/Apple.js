var Apple = (board) => {
  let apples = []
  var fruits = [
    { score: 5, color: "#F71850" , length: 1, timeout: 1 },
    { score: 10, color: "#22F253", length: 1, timeout: 1 },
    { score: 15, color: "#F0D524", length: 1, timeout: 3 },
    { score: 0, color: "#8CBFD1", length: -1, timeout: -1 },
    { score: -15, color: "#F0AC24" , length: -1, timeout: 1 },
  ]
  let events = {}

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
      console.log("Apple initialized")
      var pos = board.getCoordinates()

      var apple = fruits[Math.floor(Math.random() * fruits.length)]
      apple.x = pos.x
      apple.y = pos.y

      apples.push(apple)
      board.fire("ADD", apple)
    })

    on("COLLISION", () => {
      // let eaten = apple.pop()
      // board.fire("DELETE", eaten)
      console.log("COLLIOSIOn")
    })

    fire("INIT")
  }
  return {
    init, fire
  }
}

export default Apple
