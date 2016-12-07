(function($) {

  $( "#create" ).submit(function( event ) {
    var info = $("#create").serializeArray()
    var dataToSend = { "name": info[1].value, "courses": info[2].value }

    if(info[0].value !== "") {
      dataToSend["facultyNumber"] = info[0].value
    }

    console.log(dataToSend)

    $.ajax({
      url: "/student",
      type: "POST",
      data: JSON.stringify(dataToSend),
      dataType: 'json',
      contentType: "application/json; charset=utf-8",
    }).done(function( msg ) {
        alert( "Data Saved: " + msg )
      }).fail(function(jqXHR, textStatus ) {
        alert( "Request failed: "  + textStatus)
      })

    event.preventDefault()
  })


  // $( "#list" ).on('click',function( event ) {
    $.ajax({
      url: "/students",
      type: "GET",
      dataType: 'json',
      contentType: "application/json; charset=utf-8",
    }).done(function(data) {
      console.log(data)
      $( "#list_students" ).append("<div>" + data + "</div>")
    })
  // })

// var students = {
//   this.init = function() {
//     var $form = $("#create")
//     this.$form.submit(create);
//   },
//   this.create = function() {
//     var info = $form.serializeArray();
//     var data = {
//       facultyNumber: info[0].value,
//       name: info[1].value,
//       courses: info[2].valie.split(",")
//     }
//     $ajax({
//       url: "/student",
//       method: "POST",
//       data: this.data
//     });
//   }
// }
//
// students.init();

})(jQuery);
