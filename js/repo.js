(function(module) {
  var repo = {};
  repo.all = [];

  repo.requestRepo = function(next) {
    $.get('https://api.github.com/users/Ho-Luc/repos', function(data, message, xhr) {
      repo.all = data;
    }
  ).done(next);
  };

  repo.with = function(fork) {
    return repo.all.filter(function(repo){
      return repo[fork] === false;
    });
  };

  module.repo = repo;
})(window);
