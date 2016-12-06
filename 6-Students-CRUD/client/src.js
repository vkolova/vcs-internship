(function($) {

  $( "#create" ).submit(function( event ) {
    var info = $("#create").serializeArray();
    $.ajax({
      url: "/student",
      type: "POST",
      data: {"facultyNumber": info[0].value, "name": info[1].value, "courses": info[2].value.split(",")}
    }).done(function() {
      console.log("user created");
    });
    event.preventDefault();
  });


  $( "#list" ).bind(function( event ) {
    $.ajax({
      url: "/students",
      type: "GET",
    }).done(function(data) {
      console.log(data);
    });
    event.preventDefault();
  });


})(jQuery);
