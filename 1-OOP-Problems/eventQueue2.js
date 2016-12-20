function Queue() {
  this.events = {}

  this.on = function(eventName, callback) {
    // console.log( eventName + " HAPPENED!")
    if ( this.events[eventName] === undefined ) this.events[eventName] = []
    this.events[eventName].push(callback)
  }
  this.remove = function(eventName) {
    // console.log( eventName + " DELETED!")
    delete this.events[eventName]
  }

  this.trigger = function(eventName) {
    this.events[eventName].forEach(function(e) {
      e()
    })
  }
}

var queue = new Queue

queue.on("PANIC_EVENT", function() {
    console.log("PANIC_EVENT HAPPENED!")
})

queue.on("PANIC_EVENT", function() {
    console.log("PANIC_EVENT HAPPENED AGAIN!")
})

queue.on("NON_PANIC_EVENT", function() {
  console.log("NON_PANIC_EVENT HAPPENED!")
})

queue.trigger("PANIC_EVENT")
