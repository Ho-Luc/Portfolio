(function(module) {
  var repo = {};
  repo.all = [];

  repo.requestRepo = function(next) {
    $.ajax({
      url: 'https://api.github.com/users/Ho-Luc/repos',
      type: 'GET',
      headers: {'Authorization':'token ' + githubToken},
      success: function(data, message, xhr) {
        console.log(data);
        repo.all = data;
      }
    }).done(next);
  };

  repo.with = function(fork) {
    return repo.all.filter(function(repo){
      return repo[fork] === false;
    });
  };

  module.repo = repo;
})(window);
