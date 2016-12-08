(function($) {

  var students = {
    $del: $( "#delete" ),
    $create: $( "#create" ),
    $list: $( "#list_students" ),
    $table: $( ".list" ),
    $see: $( "#see" ),
    $student: $( ".student" ),

    init: function() {
      this.bindings()
    },
    bindings: function() {
      this.$create.submit(this.createStudent)
      this.$del.submit(this.deleteStudent)
      this.$see.submit(this.viewStudent)
      this.$list.on('click', this.getStudents)
    },
    createStudent: function(event) {
      var info = students.$create.serializeArray()
      var dataToSend = { "facultyNumber": info[0].value, "name": info[1].value, "courses": info[2].value }

      $.ajax({
        url: "/student",
        type: "POST",
        data: JSON.stringify(dataToSend),
        dataType: 'json',
        contentType: "application/json; charset=utf-8"
      })
      event.preventDefault()
    },
    deleteStudent: function( event ) {
      var info = students.$del.serializeArray()
      var facultyNumber = info[0].value

      $.ajax({
        url: "/student/" + facultyNumber,
        type: "DELETE"
      })
      event.preventDefault()
    },
    viewStudent: function( event ) {
      var info = students.$see.serializeArray()
      var facultyNumber = info[0].value

      $.ajax({
        url: "/student/" + facultyNumber,
        type: "GET"
      }).done(students.appendStudent)
      event.preventDefault()
    },
    appendStudent: function (data) {
      students.$student.empty()
      students.$student.append(["<strong>Name:</strong> ", data.name, "</br><strong>Courses:</strong> ", data.courses.join(",") ].join(""))
    },
    getStudents: function( event ) {
      students.$table.empty()
        $.ajax({
          url: "/students",
          type: "GET",
          dataType: 'json',
          contentType: "application/json; charset=utf-8"
        }).done(students.appendStudents)
      event.preventDefault()
    },
    appendStudents: function( data ) {
      students.$table.append( '<tr><th>Faculty Number</th><th>Name</th><th>Courses</th></tr>' )
      data.forEach( function ( student ) {
        students.$table.append( "<tr><td>" + student.facultyNumber + "</td><td>" + student.name + "</td><td>" + student.courses.join(",") + "</td></tr>")
      })
    }
  }

  students.init()

})(jQuery)
