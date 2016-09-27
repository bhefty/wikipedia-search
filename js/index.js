$(document).ready(function() {
  'use strict';
  $('#searchTerm').on('keyup', search);
  $('#search').submit(search);

  function search() {
    var query = $('#searchTerm').val();
    var url = 'http://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=?&search=' + query;
    $('ul').empty();
    $.getJSON(url, function(data) {
      for (var i = 0; i < data[3].length; i++) {
        if (data[2][i] !== "") {

          $('ul').append('<a href="' + data[3][i] + '" target="_blank"><li><b>' + data[1][i] + '</b><br>' + data[2][i] + '</li></a>');

          setTimeout(function () {
            $('li').addClass('show');
          }, 10);
        }
      }

    });
    return false;
  }
})
