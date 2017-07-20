$("#init_db").click(function() {

    $.ajax({
        type: "GET",
        url: "http://localhost:5000/db/init",

        success: function() {
          $('#init_info').fadeIn(1000);
          $('#init_info').delay(2500).fadeOut(1000);
        },
        error: function() {
          $('#md5_not_available').fadeIn(1000);
          $('#md5_not_available').delay(4000).fadeOut(1000);
          //alert('Error while trying to init DB\nIs the md5 Service running?');
        }
    });
});
