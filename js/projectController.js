(function(module){
  var projectController = {};

  projectController.index = function() {
    $('#project-articles').empty();
    GenerateProjects.fetchAll(projectView.initIndexPage);
    $('main > section').hide();
    $('#project-articles').show();
  };

  module.projectController = projectController;
})(window);
