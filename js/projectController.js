(function(module){
  var projectController = {};

  projectController.index = function(ctx, next) {
    console.log(ctx.projects);
    projectView.index(ctx.projects);
  };

  projectController.loadAll = function(ctx, next) {
    var projectData = function() {
      ctx.projects = GenerateProjects.all;
      next();
    };

    if (GenerateProjects.all.length) {
      ctx.projects = GenerateProjects.all;
      next();
    } else {
      GenerateProjects.fetchAll(projectData);
    }
  };

  module.projectController = projectController;
})(window);
