(function($) {

    var $del = $( "#delete" )
    var $create = $( "#create" )
    var $list = $( "#list_students" )
    var $table = $( ".list" )
    var $see = $( "#see" )

    // create/ update a student
  $create.submit(function( event ) {
    var info = $create.serializeArray()
    var dataToSend = { "facultyNumber": info[0].value, "name": info[1].value, "courses": info[2].value }

    $.ajax({
      url: "/student",
      type: "POST",
      data: JSON.stringify(dataToSend),
      dataType: 'json',
      contentType: "application/json; charset=utf-8"
    })
    event.preventDefault()
  })

  // delete a student
  $del.submit(function( event ) {
    var info = $del.serializeArray()
    var facultyNumber = info[0].value

    $.ajax({
      url: "/student/" + facultyNumber,
      type: "DELETE"
    })
    event.preventDefault()
  })

  // view student
  $see.submit(function( event ) {
    var info = $see.serializeArray()
    var facultyNumber = info[0].value

    $.ajax({
      url: "/student/" + facultyNumber,
      type: "GET"
    }).done(function (data) {
      $see.append(["<div class='student'><strong>Name:</strong> ", data.name, "</br><strong>Courses:</strong> ", data.courses.join(","), "</div>" ].join(""))
    })
    event.preventDefault()
  })

  // list students
  $list.on('click', function( event ) {
    $table.empty()
    $.ajax({
      url: "/students",
      type: "GET",
      dataType: 'json',
      contentType: "application/json; charset=utf-8"
    }).done(function(data) {
        $table.append('<tr><th>Faculty Number</th><th>Name</th><th>Courses</th></tr>')
        data.forEach(function (student) {
          $table.append("<tr><td>" + student.facultyNumber + "</td><td>" + student.name + "</td><td>" + student.courses.join(",") + "</td></tr>")
        })
    })
    event.preventDefault()
  })

})(jQuery)
