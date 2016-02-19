(function(module) {
  var projectView = {};

  projectView.index = function(projects) {
    $('#project-articles').empty();
    $('main > section').hide();
    $('#project-articles').show();

    projects.forEach(function(a) {
      $('#project-articles').append(a.toHtml());
    });
  };

  module.projectView = projectView;
}(window));
