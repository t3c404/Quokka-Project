//console.log('test1');

var $results = $('#results');
var $textfield = $('#textfield');
var $clear = $('#clear');
var $hash = $('#hash');

//var encode = 'Encoded'.bold();
//var decode = 'Decoded'.bold();

$(function() {
/*console.log('test2');
  $.ajax({
    type: 'GET',
    dataType: 'json',
    crossDomain:true,
    url: 'http://localhost:8080/encode/foobar',
    success: function(results) {
      console.log('success', results);
      $.each(results, function(i, result) {
        $results.append('<li>' + i + ' : ' + result + ' </li>');
      });
    },
    error: function() {
      alert('error loading result');
    }
  });
*/
  $('#button_break').on('click', function() {
    var result = {
      textfield: $textfield.val(),
      clear: $clear.val(),
      hash: $hash.val(),
    };

    $.ajax({
      type: 'GET',
      url: 'http://localhost:5000/md5/' + $textfield.val(),
      data: result,
      success: function(newResult) {
      //console.log('success', newResult);
      $results.append('<tr>' + '<td>' + newResult.hash + '<td> md5  </td>'+ '<td>' + newResult.clear + '</td>' + ' </tr>');
      },
      error: function() {
        $('#md5_not_available').fadeIn(1000);
        $('#md5_not_available').delay(4000).fadeOut(1000);
        //alert('md5: Service Not Available!');
      }
    });

  });

});
