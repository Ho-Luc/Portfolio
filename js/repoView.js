(function(module){
  var repoView = {};

  var ui = function() {
    var $about = $('#about');

    $about.find('ul:nth-of-type(3)').empty();
    $about.show().siblings().hide();
  };

  var render = function(repo) {
    return '<li>' + repo.name + '</li>';
  };

  repoView.index = function() {
    ui();

    $('#about ul:nth-of-type(3)').append(
      repo.with('fork').map(render)
    );
  };

  module.repoView = repoView;
})(window);
