$(document).ready(function() {
  var $searchIcon = $('#search-icon');
  var $searchInput = $('#search-input');

  $searchIcon.on('click', function() {
    $searchIcon.hide();
    $searchInput.show();
  });

});
