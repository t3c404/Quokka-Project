$("#clear_db").click(function() {

  var ask = prompt("Are you sure to clear the Database?\nWrite \"Yes\" and click ok.");

  if (ask === 'Yes') {

    $.ajax({
        type: 'GET',
        url: "http://localhost:5000/db/flush",
        success: function() {
          $('#clear_info').fadeIn(1000);
          $('#clear_info').delay(2500).fadeOut(1000);
            },
        error: function(result) {
            alert('Error while trying clearing DB\nIs the md5 Service running?');
        }
    });

  }

});
