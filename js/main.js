$(document).ready(function() {
  var $closeIcon = $('#close-icon'),
      $inputWrapper = $('#input-wrapper');
      $searchIcon = $('#search-icon'),
      $searchInput = $('#search-input');

  $searchIcon.on('click', function() {
    $searchIcon.hide();
    $inputWrapper.toggleClass('hidden').animate({
        width: '240px',
      },
      1000,
      function() {
        $searchInput.focus();
      }
    );
  });

  $closeIcon.on('click', function() {
    $inputWrapper.animate({
        width: '30px'
      },
      1000,
      function() {
        $inputWrapper.toggleClass('hidden');
        $searchIcon.show();
      }
    );
  });

});
