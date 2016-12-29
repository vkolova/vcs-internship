const sass = require('node-sass')
const fs = require('fs')

sass.render({
    file: './css/sass.scss',
    outFile: './css/styles.css',
  }, function(error, result) { // node-style callback from v3.0.0 onwards
    if(!error){
      // No errors during the compilation, write this result on the disk
      fs.writeFile('./css/styles.css', result.css, function(err) {
        console.log(err)
        if(!err){
          console.log("file written on disk")
        }
        else console.log(error)
      })
    } else console.log(error)
  })
