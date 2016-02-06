var projectView = {};

projectView.handleMainNav = function () {
  $('#about').hide();
  $('.main-nav').on('click', '.tab', function (){
    var $contentContainer = $('main > section');
    var $navVal = $(this).data('content');
    $contentContainer.hide();
    $contentContainer.each( function () {
      if ($(this).attr('id') === $navVal) {
        $(this).fadeIn('fast');
      }
    });
  });
};

projectView.handleMainNav();
