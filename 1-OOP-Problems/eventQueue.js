function Queue() {
  this.events = []

  this.on = function(eventName, callback) {
    // console.log( eventName + " HAPPENED!")
    this.events.push({name: eventName, callback: callback})
  }
  this.remove = function(eventName) {
    // console.log( eventName + " DELETED!")
    this.events = this.events.filter(function(e) {
      return e.name !== eventName
    })
  }
  this.trigger = function(eventName) {
    this.events.filter(function(e) {
      return e.name === eventName
    }).map(function(e) {
      e.callback()
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
