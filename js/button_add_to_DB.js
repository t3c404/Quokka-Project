var $textfield = $('#textfield');

$("#add_db").click(function() {

  $.ajax({
      type: "GET",
      url: "http://localhost:5000/db/add/" + $textfield.val(),
      success: function() {
        $('#add_info').fadeIn(1000);
        $('#add_info').delay(2500).fadeOut(1000);
      },
      error: function() {
          alert('Error while trying to add string to DB');
      }
  });

});
