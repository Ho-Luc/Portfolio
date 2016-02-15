(function(module){
  var projectController = {};

  projectController.index = function() {
    GenerateProjects.fetchAll(projectView.initIndexPage);
    $('main > section').hide();
    $('#project-articles').show();
  };

  module.projectController = projectController;
})(window);
