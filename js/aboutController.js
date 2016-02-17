(function(module){
  var aboutController = {};

  aboutController.index = function() {
    $('main > section').hide();
    $('#about').show();

    repo.requestRepo(repoView.index);
  };

  module.aboutController = aboutController;
})(window);
