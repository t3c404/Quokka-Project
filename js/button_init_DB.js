$("#init_db").click(function() {

    $.ajax({
        type: "GET",
        url: "http://localhost:5000/db/init",

        success: function() {
          $('#init_info').fadeIn(1000);
          $('#init_info').delay(2500).fadeOut(1000);
        },
        error: function(result) {
            alert('Error while trying to init DB');
        }
    });
});
