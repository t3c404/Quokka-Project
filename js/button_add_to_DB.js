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
        $('#md5_not_available').fadeIn(1000);
        $('#md5_not_available').delay(4000).fadeOut(1000);
        //alert('Error while trying to add string to DB!\nIs the md5 Service running?');
      }
  });

});
