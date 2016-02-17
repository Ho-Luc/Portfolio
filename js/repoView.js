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
    // console.log('inside repoView');
    $('#about ul:nth-of-type(3)').append(
      repo.all.map(render)
    );
  };

  module.repoView = repoView;
})(window);
