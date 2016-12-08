require.config({
  paths: {
    "Q": "bower_components/q/q"
  }
})

require(["Q"], function(Q) {

  // var Q = require('q')

  function first(callback) {
    var defer = Q.defer()
    setTimeout(function() {
      defer.resolve(callback)
    }, 1000)
    return defer.promise
  }

  function second(callback) {
    var defer = Q.defer()
    setTimeout(function() {
      defer.resolve(callback)
    }, 1000)
    return defer.promise
  }

  function third() {
    var defer = Q.defer()
    defer.resolve(function() {
      console.log("I should do the job after first and second")
    })
    return defer.promise
  }

  var promises = []

  promise = first(function() {
    console.log("called first!")
  })
  promises.push(promise)

  promise = second(function() {
    console.log("called second!")
  })
  promises.push(promise)

  promise = third()
  promises.push(promise)

  Q.all(promises).then(function(results) {
    results.forEach(function(res) {
      res()
    })

  })
