$(document).ready(function() {
  var $closeIcon = $('#close-icon'),
      $inputWrapper = $('#input-wrapper');
      $searchIcon = $('#search-icon'),
      $searchInput = $('#search-input');

  $searchIcon.on('click', function() {
    $searchIcon.hide();
    $inputWrapper.show();
  });

  $closeIcon.on('click', function() {
    $inputWrapper.hide();
    $searchIcon.show();
  });

});
