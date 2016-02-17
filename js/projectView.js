(function(module) {
  var projectView = {};

  projectView.initIndexPage = function() {
    GenerateProjects.all.forEach(function(a) {
      $('#project-articles').append(a.toHtml());
    });
  };

  module.projectView = projectView;
}(window));
